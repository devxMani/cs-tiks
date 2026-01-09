import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Question } from "@/data/questions";

interface QuizGameProps {
  questions: Question[];
  timePerQuestion?: number;
  onComplete: (results: QuizResults) => void;
  onExit: () => void;
  mode: "practice" | "duel";
}

export interface QuizResults {
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  accuracy: number;
  timeTaken: number;
  answers: { questionId: string; selectedAnswer: number; isCorrect: boolean; timeTaken: number }[];
}

const QuizGame = ({ questions, timePerQuestion = 20, onComplete, onExit, mode }: QuizGameProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timePerQuestion);
  const [answers, setAnswers] = useState<QuizResults["answers"]>([]);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [totalStartTime] = useState(Date.now());
  const [showFeedback, setShowFeedback] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleAnswer = useCallback((answerIndex: number) => {
    if (isAnswered) return;
    
    const timeTaken = (Date.now() - questionStartTime) / 1000;
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    setShowFeedback(true);
    
    setAnswers(prev => [...prev, {
      questionId: currentQuestion.id,
      selectedAnswer: answerIndex,
      isCorrect,
      timeTaken,
    }]);
  }, [isAnswered, questionStartTime, currentQuestion]);

  const handleTimeUp = useCallback(() => {
    if (!isAnswered) {
      handleAnswer(-1); // -1 indicates timeout
    }
  }, [isAnswered, handleAnswer]);

  const nextQuestion = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setShowFeedback(false);
      setTimeLeft(timePerQuestion);
      setQuestionStartTime(Date.now());
    } else {
      // Quiz complete
      const correctAnswers = answers.filter(a => a.isCorrect).length + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0);
      const totalQuestions = questions.length;
      const accuracy = Math.round((correctAnswers / totalQuestions) * 100);
      const timeTaken = Math.round((Date.now() - totalStartTime) / 1000);
      
      onComplete({
        totalQuestions,
        correctAnswers,
        wrongAnswers: totalQuestions - correctAnswers,
        accuracy,
        timeTaken,
        answers: [...answers, {
          questionId: currentQuestion.id,
          selectedAnswer: selectedAnswer ?? -1,
          isCorrect: selectedAnswer === currentQuestion.correctAnswer,
          timeTaken: (Date.now() - questionStartTime) / 1000,
        }],
      });
    }
  }, [currentIndex, questions.length, answers, selectedAnswer, currentQuestion, onComplete, timePerQuestion, totalStartTime, questionStartTime]);

  // Timer effect
  useEffect(() => {
    if (mode === "practice" || isAnswered) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [mode, isAnswered, handleTimeUp]);

  // Auto-advance in duel mode
  useEffect(() => {
    if (mode === "duel" && showFeedback) {
      const timer = setTimeout(nextQuestion, 1500);
      return () => clearTimeout(timer);
    }
  }, [mode, showFeedback, nextQuestion]);

  const getOptionStyle = (index: number) => {
    if (!isAnswered) {
      return selectedAnswer === index 
        ? "border-foreground bg-foreground/10" 
        : "border-border hover:border-foreground/50 hover:bg-foreground/5";
    }
    
    if (index === currentQuestion.correctAnswer) {
      return "border-emerald-500 bg-emerald-500/10 text-emerald-400";
    }
    
    if (index === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer) {
      return "border-red-500 bg-red-500/10 text-red-400";
    }
    
    return "border-border/50 opacity-50";
  };

  return (
    <div className="min-h-[600px] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={onExit}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Exit
          </button>
          <span className="status-badge">
            <span className={`w-1.5 h-1.5 rounded-full ${mode === "duel" ? "bg-red-500" : "bg-emerald-500"} animate-pulse`} />
            {mode === "duel" ? "DUEL MODE" : "PRACTICE MODE"}
          </span>
        </div>
        
        {mode === "duel" && (
          <div className="flex items-center gap-2">
            <div className={`text-2xl font-mono font-light ${timeLeft <= 5 ? "text-red-500 animate-pulse" : ""}`}>
              {timeLeft}s
            </div>
          </div>
        )}
      </div>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-muted-foreground">
            Question {currentIndex + 1} of {questions.length}
          </span>
          <span className="text-xs text-muted-foreground">
            {answers.filter(a => a.isCorrect).length} correct
          </span>
        </div>
        <div className="h-1 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-foreground/50 to-foreground rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        {mode === "duel" && (
          <div className="h-0.5 bg-muted rounded-full overflow-hidden mt-2">
            <motion.div
              className={`h-full rounded-full ${timeLeft <= 5 ? "bg-red-500" : "bg-emerald-500"}`}
              initial={{ width: "100%" }}
              animate={{ width: `${(timeLeft / timePerQuestion) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-1"
        >
          {/* Difficulty badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className={`px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-full border ${
              currentQuestion.difficulty === "easy" 
                ? "border-emerald-500/30 text-emerald-500" 
                : currentQuestion.difficulty === "medium"
                ? "border-yellow-500/30 text-yellow-500"
                : "border-red-500/30 text-red-500"
            }`}>
              {currentQuestion.difficulty}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
              {currentQuestion.topic.toUpperCase()}
            </span>
          </div>

          {/* Question text */}
          <h2 className="text-xl md:text-2xl font-light leading-relaxed mb-8">
            {currentQuestion.question}
          </h2>

          {/* Options */}
          <div className="grid gap-3">
            {currentQuestion.options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={isAnswered}
                className={`w-full p-4 text-left rounded-xl border transition-all ${getOptionStyle(index)}`}
                whileHover={!isAnswered ? { scale: 1.01 } : {}}
                whileTap={!isAnswered ? { scale: 0.99 } : {}}
              >
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center text-sm font-medium">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1">{option}</span>
                  {isAnswered && index === currentQuestion.correctAnswer && (
                    <span className="text-emerald-500">✓</span>
                  )}
                  {isAnswered && index === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer && (
                    <span className="text-red-500">✗</span>
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Feedback & Next button (practice mode) */}
          {mode === "practice" && isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 flex items-center justify-between"
            >
              <div className={`text-sm ${selectedAnswer === currentQuestion.correctAnswer ? "text-emerald-500" : "text-red-500"}`}>
                {selectedAnswer === currentQuestion.correctAnswer 
                  ? "🎉 Correct!" 
                  : `❌ Wrong! The answer was: ${currentQuestion.options[currentQuestion.correctAnswer]}`
                }
              </div>
              <button
                onClick={nextQuestion}
                className="px-6 py-3 text-sm font-medium bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all"
              >
                {currentIndex < questions.length - 1 ? "Next Question" : "See Results"}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QuizGame;

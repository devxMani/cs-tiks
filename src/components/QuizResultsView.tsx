import { motion } from "framer-motion";
import { QuizResults } from "./QuizGame";

interface QuizResultsViewProps {
  results: QuizResults;
  onPlayAgain: () => void;
  onExit: () => void;
  mode: "practice" | "duel";
}

const QuizResultsView = ({ results, onPlayAgain, onExit, mode }: QuizResultsViewProps) => {
  const isPassing = results.accuracy >= 60;
  
  return (
    <div className="min-h-[600px] flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {/* Result icon */}
        <div className={`w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center ${
          isPassing ? "bg-emerald-500/10" : "bg-red-500/10"
        }`}>
          <span className="text-5xl">{isPassing ? "🎉" : "💪"}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-light mb-2">
          {isPassing ? "Great Job!" : "Keep Practicing!"}
        </h1>
        <p className="text-muted-foreground mb-8">
          {mode === "practice" ? "Practice session complete" : "Duel complete"}
        </p>

        {/* Score card */}
        <div className="glass-card p-8 mb-8 max-w-md mx-auto">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <span className={`text-5xl font-light ${isPassing ? "text-emerald-500" : "text-red-500"}`}>
                {results.accuracy}%
              </span>
              <p className="text-sm text-muted-foreground mt-1">Accuracy</p>
            </div>
            <div>
              <span className="text-5xl font-light">
                {results.correctAnswers}/{results.totalQuestions}
              </span>
              <p className="text-sm text-muted-foreground mt-1">Correct</p>
            </div>
          </div>
          
          <div className="h-px bg-border my-6" />
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <span className="text-2xl font-light text-emerald-500">{results.correctAnswers}</span>
              <p className="text-xs text-muted-foreground mt-1">Correct</p>
            </div>
            <div>
              <span className="text-2xl font-light text-red-500">{results.wrongAnswers}</span>
              <p className="text-xs text-muted-foreground mt-1">Wrong</p>
            </div>
            <div>
              <span className="text-2xl font-light">{results.timeTaken}s</span>
              <p className="text-xs text-muted-foreground mt-1">Time</p>
            </div>
          </div>
        </div>

        {/* Progress bar visualization */}
        <div className="max-w-md mx-auto mb-8">
          <div className="h-3 bg-muted rounded-full overflow-hidden flex">
            <motion.div
              className="h-full bg-emerald-500"
              initial={{ width: 0 }}
              animate={{ width: `${results.accuracy}%` }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.div
              className="h-full bg-red-500"
              initial={{ width: 0 }}
              animate={{ width: `${100 - results.accuracy}%` }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={onExit}
            className="px-6 py-3 text-sm font-medium border border-border rounded-lg hover:bg-foreground/5 transition-all"
          >
            Back to Menu
          </button>
          <button
            onClick={onPlayAgain}
            className="px-6 py-3 text-sm font-medium bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all"
          >
            Play Again
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default QuizResultsView;

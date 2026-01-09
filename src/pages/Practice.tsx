import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import QuizGame from "@/components/QuizGame";
import QuizResultsView, { } from "@/components/QuizResultsView";
import { getQuestionsByTopic, Question } from "@/data/questions";
import { QuizResults } from "@/components/QuizGame";

const topics = [
  { 
    id: "dsa", 
    name: "Data Structures & Algorithms", 
    shortName: "DSA",
    questions: 10, 
    description: "Arrays, Trees, Graphs, Dynamic Programming, Sorting & Searching", 
    icon: "⚡",
    gradient: "from-violet-500/20 to-purple-500/20",
    borderColor: "border-violet-500/30"
  },
  { 
    id: "dbms", 
    name: "Database Management", 
    shortName: "DBMS",
    questions: 8, 
    description: "SQL, Normalization, Transactions, ACID Properties, Joins", 
    icon: "🗄️",
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30"
  },
  { 
    id: "os", 
    name: "Operating Systems", 
    shortName: "OS",
    questions: 8, 
    description: "Processes, Memory Management, Scheduling, Deadlocks", 
    icon: "💻",
    gradient: "from-emerald-500/20 to-green-500/20",
    borderColor: "border-emerald-500/30"
  },
  { 
    id: "networks", 
    name: "Computer Networks", 
    shortName: "Networks",
    questions: 8, 
    description: "TCP/IP, OSI Model, Protocols, Routing, DNS", 
    icon: "🌐",
    gradient: "from-orange-500/20 to-amber-500/20",
    borderColor: "border-orange-500/30"
  },
];

type GameState = "menu" | "playing" | "results";

const Practice = () => {
  const [gameState, setGameState] = useState<GameState>("menu");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [results, setResults] = useState<QuizResults | null>(null);

  const startPractice = (topicId: string) => {
    const questions = getQuestionsByTopic(topicId, 10);
    setCurrentQuestions(questions);
    setSelectedTopic(topicId);
    setGameState("playing");
  };

  const handleComplete = (quizResults: QuizResults) => {
    setResults(quizResults);
    setGameState("results");
  };

  const handlePlayAgain = () => {
    if (selectedTopic) {
      startPractice(selectedTopic);
    }
  };

  const handleExit = () => {
    setGameState("menu");
    setSelectedTopic(null);
    setResults(null);
  };

  return (
    <Layout>
      <section className="min-h-screen pt-32 pb-20">
        <div className="container px-6">
          {gameState === "menu" && (
            <>
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mb-16"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="status-badge">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    PRACTICE MODE
                  </span>
                  <span className="text-xs text-muted-foreground">No time limit • Instant feedback</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
                  Solo <span className="text-muted-foreground">Practice</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Choose a topic and master the fundamentals. Each session gives you 10 random questions
                  with detailed feedback after every answer.
                </p>
              </motion.div>

              {/* Stats bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass-card p-6 mb-12 flex flex-wrap items-center justify-between gap-6"
              >
                <div className="flex items-center gap-8">
                  <div>
                    <span className="text-3xl font-light">120+</span>
                    <p className="text-xs text-muted-foreground">Total Questions</p>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div>
                    <span className="text-3xl font-light">4</span>
                    <p className="text-xs text-muted-foreground">Topics</p>
                  </div>
                  <div className="w-px h-12 bg-border hidden md:block" />
                  <div className="hidden md:block">
                    <span className="text-3xl font-light">∞</span>
                    <p className="text-xs text-muted-foreground">Attempts</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm text-muted-foreground">Ready to practice</span>
                </div>
              </motion.div>

              {/* Topic cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {topics.map((topic, index) => (
                  <motion.div
                    key={topic.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    onClick={() => startPractice(topic.id)}
                    className={`glass-card p-8 cursor-pointer group transition-all hover:scale-[1.02] ${topic.borderColor} hover:border-opacity-100`}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${topic.gradient} flex items-center justify-center text-3xl`}>
                        {topic.icon}
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground block">
                          {topic.questions} Questions
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground/50">
                          Available
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-light mb-2 group-hover:text-foreground transition-colors">
                      {topic.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-8 leading-relaxed">{topic.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-1 bg-foreground/20 rounded-full overflow-hidden">
                          <div className="w-0 h-full bg-foreground group-hover:w-full transition-all duration-500" />
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        Start Practice →
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-16 text-center"
              >
                <p className="text-sm text-muted-foreground">
                  💡 Tip: Practice regularly to improve your accuracy and speed
                </p>
              </motion.div>
            </>
          )}

          {gameState === "playing" && currentQuestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card p-8"
            >
              <QuizGame
                questions={currentQuestions}
                mode="practice"
                onComplete={handleComplete}
                onExit={handleExit}
              />
            </motion.div>
          )}

          {gameState === "results" && results && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card p-8"
            >
              <QuizResultsView
                results={results}
                mode="practice"
                onPlayAgain={handlePlayAgain}
                onExit={handleExit}
              />
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Practice;

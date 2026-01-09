import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import QuizGame from "@/components/QuizGame";
import QuizResultsView from "@/components/QuizResultsView";
import { getRandomQuestions, Question } from "@/data/questions";
import { QuizResults } from "@/components/QuizGame";

type GameState = "menu" | "searching" | "playing" | "results";

const Duel = () => {
  const [gameState, setGameState] = useState<GameState>("menu");
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [results, setResults] = useState<QuizResults | null>(null);
  const [searchProgress, setSearchProgress] = useState(0);
  const [opponentName, setOpponentName] = useState("");

  const startSearch = () => {
    setGameState("searching");
    setSearchProgress(0);
  };

  useEffect(() => {
    if (gameState !== "searching") return;

    const interval = setInterval(() => {
      setSearchProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Generate opponent name
          const names = ["CodeMaster", "AlgoNinja", "ByteWarrior", "DataDragon", "LogicLord", "QueryQueen", "StackSensei"];
          setOpponentName(names[Math.floor(Math.random() * names.length)] + "_" + Math.floor(Math.random() * 1000));
          
          // Start game after finding opponent
          setTimeout(() => {
            const questions = getRandomQuestions(5);
            setCurrentQuestions(questions);
            setGameState("playing");
          }, 1000);
          
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [gameState]);

  const handleComplete = (quizResults: QuizResults) => {
    setResults(quizResults);
    setGameState("results");
  };

  const handlePlayAgain = () => {
    startSearch();
  };

  const handleExit = () => {
    setGameState("menu");
    setResults(null);
    setOpponentName("");
  };

  return (
    <Layout>
      <section className="min-h-screen pt-32 pb-20">
        <div className="container px-6">
          <AnimatePresence mode="wait">
            {gameState === "menu" && (
              <motion.div
                key="menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center max-w-3xl mx-auto mb-16"
                >
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <span className="status-badge">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      1v1 DUEL
                    </span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
                    Quick <span className="text-muted-foreground">Duel</span>
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
                    Face a random opponent in a battle of knowledge. Same questions, same time limit.
                    May the best mind win.
                  </p>
                </motion.div>

                {/* Main duel card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="glass-card p-12 max-w-2xl mx-auto mb-12"
                >
                  {/* VS visualization */}
                  <div className="flex items-center justify-center gap-12 mb-10">
                    {/* You */}
                    <div className="text-center">
                      <motion.div 
                        className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border-2 border-emerald-500/30 flex items-center justify-center mb-4"
                        animate={{ 
                          boxShadow: ["0 0 0 0 rgba(16, 185, 129, 0)", "0 0 0 20px rgba(16, 185, 129, 0)"],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="text-4xl">👤</span>
                      </motion.div>
                      <span className="text-sm font-medium">You</span>
                      <p className="text-xs text-muted-foreground">Ready</p>
                    </div>

                    {/* VS */}
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <span className="text-4xl font-light text-muted-foreground">VS</span>
                        <motion.div
                          className="absolute inset-0 blur-xl bg-foreground/10"
                          animate={{ opacity: [0.3, 0.6, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                      <div className="mt-4 flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 rounded-full bg-muted-foreground/30"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Opponent */}
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full border-2 border-dashed border-border flex items-center justify-center mb-4">
                        <span className="text-4xl text-muted-foreground">?</span>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">Opponent</span>
                      <p className="text-xs text-muted-foreground">Waiting...</p>
                    </div>
                  </div>

                  <button
                    onClick={startSearch}
                    className="w-full py-4 text-sm font-medium bg-foreground text-background rounded-xl hover:bg-foreground/90 transition-all flex items-center justify-center gap-2"
                  >
                    <span>⚔️</span>
                    Find Opponent
                  </button>
                </motion.div>

                {/* Rules */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
                >
                  {[
                    { value: "5", label: "Questions", icon: "📝" },
                    { value: "20s", label: "Per Question", icon: "⏱️" },
                    { value: "=", label: "Same Questions", icon: "🎯" },
                    { value: "🏆", label: "Winner Takes All", icon: "" },
                  ].map((item, index) => (
                    <div key={index} className="glass-card p-6 text-center">
                      <span className="text-3xl mb-2 block">{item.icon || item.value}</span>
                      {item.icon && <span className="text-2xl font-light block mb-1">{item.value}</span>}
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                    </div>
                  ))}
                </motion.div>

                {/* Recent duels */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="max-w-2xl mx-auto"
                >
                  <h2 className="text-lg font-light mb-4 flex items-center gap-2">
                    <span>📊</span> Recent Duels
                  </h2>
                  <div className="space-y-2">
                    {[
                      { opponent: "AlgoNinja_847", result: "won", score: "4-2", time: "2h ago" },
                      { opponent: "ByteWarrior_231", result: "lost", score: "2-4", time: "5h ago" },
                      { opponent: "DataDragon_556", result: "won", score: "5-3", time: "1d ago" },
                    ].map((duel, i) => (
                      <div key={i} className="glass-card p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-sm">👤</span>
                          </div>
                          <div>
                            <span className="text-sm">vs {duel.opponent}</span>
                            <p className="text-xs text-muted-foreground">{duel.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-muted-foreground">{duel.score}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            duel.result === "won" 
                              ? "bg-emerald-500/10 text-emerald-500" 
                              : "bg-red-500/10 text-red-500"
                          }`}>
                            {duel.result.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}

            {gameState === "searching" && (
              <motion.div
                key="searching"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-h-[60vh] flex items-center justify-center"
              >
                <div className="text-center max-w-md">
                  <motion.div
                    className="w-32 h-32 rounded-full border-2 border-dashed border-foreground/30 mx-auto mb-8 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.div
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-foreground/10 to-foreground/5 flex items-center justify-center"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <span className="text-4xl">🔍</span>
                    </motion.div>
                  </motion.div>
                  
                  <h2 className="text-2xl font-light mb-2">
                    {searchProgress < 100 ? "Finding opponent..." : `Found: ${opponentName}`}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {searchProgress < 100 ? "Matching you with a worthy challenger" : "Get ready!"}
                  </p>
                  
                  <div className="h-2 bg-muted rounded-full overflow-hidden max-w-xs mx-auto">
                    <motion.div
                      className="h-full bg-foreground rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(searchProgress, 100)}%` }}
                    />
                  </div>
                  
                  <button
                    onClick={handleExit}
                    className="mt-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>
            )}

            {gameState === "playing" && currentQuestions.length > 0 && (
              <motion.div
                key="playing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="glass-card p-4 mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <span>👤</span>
                    </div>
                    <span className="text-sm">You</span>
                  </div>
                  <span className="text-lg font-light text-muted-foreground">VS</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm">{opponentName}</span>
                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                      <span>👤</span>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-8">
                  <QuizGame
                    questions={currentQuestions}
                    mode="duel"
                    timePerQuestion={20}
                    onComplete={handleComplete}
                    onExit={handleExit}
                  />
                </div>
              </motion.div>
            )}

            {gameState === "results" && results && (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="glass-card p-8"
              >
                <div className="text-center mb-8">
                  <span className={`text-lg ${results.accuracy >= 60 ? "text-emerald-500" : "text-red-500"}`}>
                    {results.accuracy >= 60 ? "🎉 Victory!" : "Better luck next time!"}
                  </span>
                  <p className="text-sm text-muted-foreground">vs {opponentName}</p>
                </div>
                <QuizResultsView
                  results={results}
                  mode="duel"
                  onPlayAgain={handlePlayAgain}
                  onExit={handleExit}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
};

export default Duel;

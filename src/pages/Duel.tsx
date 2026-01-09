import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import QuizGame from "@/components/QuizGame";
import QuizResultsView from "@/components/QuizResultsView";
import { getRandomQuestions, Question } from "@/data/questions";
import { QuizResults } from "@/components/QuizGame";
import { Swords, Clock, Trophy, Users, Zap, Target, Shield, Crown } from "lucide-react";

type GameState = "menu" | "searching" | "countdown" | "playing" | "results";

const Duel = () => {
  const [gameState, setGameState] = useState<GameState>("menu");
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [results, setResults] = useState<QuizResults | null>(null);
  const [searchProgress, setSearchProgress] = useState(0);
  const [opponentName, setOpponentName] = useState("");
  const [opponentRank, setOpponentRank] = useState(0);
  const [countdown, setCountdown] = useState(3);

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
          const names = ["CodeMaster", "AlgoNinja", "ByteWarrior", "DataDragon", "LogicLord", "QueryQueen", "StackSensei", "BinaryBoss", "CacheCrusher", "SyntaxSamurai"];
          setOpponentName(names[Math.floor(Math.random() * names.length)] + "_" + Math.floor(Math.random() * 1000));
          setOpponentRank(Math.floor(Math.random() * 500) + 1);
          
          setTimeout(() => {
            setGameState("countdown");
            setCountdown(3);
          }, 800);
          
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [gameState]);

  useEffect(() => {
    if (gameState !== "countdown") return;

    if (countdown <= 0) {
      const questions = getRandomQuestions(5);
      setCurrentQuestions(questions);
      setGameState("playing");
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [gameState, countdown]);

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

  const recentDuels = [
    { opponent: "AlgoNinja_847", result: "won", score: "4-2", time: "2h ago", rank: 234 },
    { opponent: "ByteWarrior_231", result: "lost", score: "2-4", time: "5h ago", rank: 156 },
    { opponent: "DataDragon_556", result: "won", score: "5-3", time: "1d ago", rank: 312 },
    { opponent: "LogicLord_889", result: "won", score: "5-1", time: "2d ago", rank: 445 },
  ];

  return (
    <Layout>
      <section className="min-h-screen pt-28 pb-20">
        <div className="container px-4 md:px-6">
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
                  className="text-center max-w-3xl mx-auto mb-10"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                    <Swords className="w-4 h-4 text-red-400" />
                    <span className="text-sm text-red-400">1v1 DUEL</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
                    Quick <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Duel</span>
                  </h1>
                  <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                    Face a random opponent. Same questions, same time. May the best mind win.
                  </p>
                </motion.div>

                {/* Main duel card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="glass-card p-8 md:p-12 max-w-2xl mx-auto mb-10"
                >
                  {/* VS visualization */}
                  <div className="flex items-center justify-center gap-6 md:gap-12 mb-10">
                    {/* You */}
                    <div className="text-center">
                      <motion.div 
                        className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border-2 border-emerald-500/30 flex items-center justify-center mb-3 mx-auto"
                        animate={{ 
                          boxShadow: ["0 0 0 0 rgba(16, 185, 129, 0)", "0 0 0 15px rgba(16, 185, 129, 0)"],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="text-3xl md:text-4xl">⚔️</span>
                      </motion.div>
                      <span className="text-sm font-medium">You</span>
                      <p className="text-xs text-emerald-400">Ready</p>
                    </div>

                    {/* VS */}
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">VS</span>
                        <motion.div
                          className="absolute inset-0 blur-xl bg-red-500/20"
                          animate={{ opacity: [0.3, 0.6, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                      <div className="mt-4 flex gap-1.5">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 rounded-full bg-muted-foreground/50"
                            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
                            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Opponent */}
                    <div className="text-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-dashed border-border flex items-center justify-center mb-3 mx-auto">
                        <span className="text-3xl md:text-4xl text-muted-foreground">?</span>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">Opponent</span>
                      <p className="text-xs text-muted-foreground">Waiting...</p>
                    </div>
                  </div>

                  <button
                    onClick={startSearch}
                    className="w-full py-4 text-sm font-medium bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-500/20"
                  >
                    <Swords className="w-5 h-5" />
                    Find Opponent
                  </button>
                </motion.div>

                {/* Rules */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10"
                >
                  {[
                    { icon: Target, value: "5", label: "Questions" },
                    { icon: Clock, value: "20s", label: "Per Question" },
                    { icon: Zap, value: "=", label: "Same Questions" },
                    { icon: Trophy, value: "🏆", label: "Winner Takes All" },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="glass-card p-5 text-center">
                        <Icon className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                        <span className="text-xl font-light block mb-1">{item.value}</span>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                      </div>
                    );
                  })}
                </motion.div>

                {/* Recent duels */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="max-w-2xl mx-auto"
                >
                  <h2 className="text-lg font-light mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    Recent Duels
                  </h2>
                  <div className="space-y-2">
                    {recentDuels.map((duel, i) => (
                      <motion.div 
                        key={i} 
                        className="glass-card p-4 flex items-center justify-between"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            duel.result === "won" ? "bg-emerald-500/10" : "bg-red-500/10"
                          }`}>
                            {duel.result === "won" ? <Crown className="w-5 h-5 text-emerald-400" /> : <Shield className="w-5 h-5 text-red-400" />}
                          </div>
                          <div>
                            <span className="text-sm">vs {duel.opponent}</span>
                            <p className="text-xs text-muted-foreground">Rank #{duel.rank} • {duel.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-mono text-muted-foreground">{duel.score}</span>
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                            duel.result === "won" 
                              ? "bg-emerald-500/10 text-emerald-400" 
                              : "bg-red-500/10 text-red-400"
                          }`}>
                            {duel.result.toUpperCase()}
                          </span>
                        </div>
                      </motion.div>
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
                    className="w-32 h-32 rounded-full border-2 border-dashed border-red-500/30 mx-auto mb-8 flex items-center justify-center relative"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.div
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500/10 to-orange-500/10 flex items-center justify-center"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Swords className="w-10 h-10 text-red-400" />
                    </motion.div>
                  </motion.div>
                  
                  <h2 className="text-2xl font-light mb-2">
                    {searchProgress < 100 ? "Finding opponent..." : `Found: ${opponentName}`}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {searchProgress < 100 ? "Matching you with a worthy challenger" : `Rank #${opponentRank} • Get ready!`}
                  </p>
                  
                  <div className="h-2 bg-muted rounded-full overflow-hidden max-w-xs mx-auto">
                    <motion.div
                      className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
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

            {gameState === "countdown" && (
              <motion.div
                key="countdown"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-h-[60vh] flex items-center justify-center"
              >
                <div className="text-center">
                  <motion.div
                    key={countdown}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.5, opacity: 0 }}
                    className="mb-8"
                  >
                    <span className="text-9xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                      {countdown || "GO!"}
                    </span>
                  </motion.div>
                  <p className="text-lg text-muted-foreground">vs {opponentName}</p>
                </div>
              </motion.div>
            )}

            {gameState === "playing" && currentQuestions.length > 0 && (
              <motion.div
                key="playing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-4xl mx-auto"
              >
                <div className="glass-card p-4 mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <span>⚔️</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium">You</span>
                      <p className="text-xs text-emerald-400">In Battle</p>
                    </div>
                  </div>
                  <span className="text-lg font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">VS</span>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <span className="text-sm font-medium">{opponentName}</span>
                      <p className="text-xs text-muted-foreground">Rank #{opponentRank}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                      <span>🎯</span>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-6 md:p-8">
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
                className="glass-card p-6 md:p-8 max-w-4xl mx-auto"
              >
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className="mb-4"
                  >
                    {results.accuracy >= 60 ? (
                      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <Trophy className="w-6 h-6 text-emerald-400" />
                        <span className="text-xl text-emerald-400 font-medium">Victory!</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-500/10 border border-red-500/20">
                        <Shield className="w-6 h-6 text-red-400" />
                        <span className="text-xl text-red-400 font-medium">Defeat</span>
                      </div>
                    )}
                  </motion.div>
                  <p className="text-muted-foreground">vs {opponentName}</p>
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

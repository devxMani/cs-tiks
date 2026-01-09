import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import QuizGame from "@/components/QuizGame";
import QuizResultsView from "@/components/QuizResultsView";
import { getRandomQuestions, Question } from "@/data/questions";
import { QuizResults } from "@/components/QuizGame";
import { Swords, Clock, Target, Trophy, Users, Crown } from "lucide-react";

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
          const names = ["CodeMaster", "AlgoNinja", "ByteWarrior", "DataDragon", "LogicLord", "QueryQueen"];
          setOpponentName(names[Math.floor(Math.random() * names.length)] + "_" + Math.floor(Math.random() * 1000));
          setOpponentRank(Math.floor(Math.random() * 500) + 1);
          
          setTimeout(() => {
            setGameState("countdown");
            setCountdown(3);
          }, 600);
          
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 120);

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
  ];

  return (
    <Layout>
      <section className="min-h-screen pt-28 pb-20">
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
                  transition={{ duration: 0.5 }}
                  className="max-w-xl mb-10"
                >
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider rounded-full border border-border/60 bg-card/50 mb-6">
                    <Swords className="w-3 h-3 text-red-400" />
                    1v1 Duel
                  </span>
                  <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-3">
                    Quick Duel
                  </h1>
                  <p className="text-muted-foreground">
                    Face a random opponent. Same questions, same time. Best score wins.
                  </p>
                </motion.div>

                {/* Main card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="max-w-lg p-8 rounded-xl border border-border/50 bg-card/20 mb-8"
                >
                  {/* VS */}
                  <div className="flex items-center justify-center gap-8 mb-8">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full border-2 border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center mb-2 mx-auto">
                        <span className="text-2xl">⚔️</span>
                      </div>
                      <span className="text-sm">You</span>
                    </div>
                    <span className="text-2xl font-bold text-muted-foreground">VS</span>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full border-2 border-dashed border-border flex items-center justify-center mb-2 mx-auto">
                        <span className="text-2xl text-muted-foreground">?</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Opponent</span>
                    </div>
                  </div>

                  <button
                    onClick={startSearch}
                    className="w-full py-3.5 text-sm font-medium bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <Swords className="w-4 h-4" />
                    Find Opponent
                  </button>
                </motion.div>

                {/* Rules */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mb-10"
                >
                  {[
                    { icon: Target, value: "5", label: "Questions" },
                    { icon: Clock, value: "20s", label: "Per Question" },
                    { icon: Swords, value: "=", label: "Same Q's" },
                    { icon: Trophy, value: "🏆", label: "Winner Takes All" },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="p-4 rounded-xl border border-border/50 bg-card/20 text-center">
                        <Icon className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
                        <span className="text-lg font-light block">{item.value}</span>
                        <p className="text-[10px] text-muted-foreground">{item.label}</p>
                      </div>
                    );
                  })}
                </motion.div>

                {/* Recent */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="max-w-lg"
                >
                  <h2 className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Recent Duels
                  </h2>
                  <div className="space-y-2">
                    {recentDuels.map((duel, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 rounded-lg border border-border/50 bg-card/10"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            duel.result === "won" ? "bg-emerald-500/10" : "bg-red-500/10"
                          }`}>
                            {duel.result === "won" ? <Crown className="w-4 h-4 text-emerald-500" /> : <span className="text-red-400 text-sm">✗</span>}
                          </div>
                          <div>
                            <span className="text-sm">vs {duel.opponent}</span>
                            <p className="text-[10px] text-muted-foreground">#{duel.rank} • {duel.time}</p>
                          </div>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          duel.result === "won"
                            ? "bg-emerald-500/10 text-emerald-500"
                            : "bg-red-500/10 text-red-400"
                        }`}>
                          {duel.score}
                        </span>
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
                <div className="text-center">
                  <motion.div
                    className="w-24 h-24 rounded-full border-2 border-dashed border-border mx-auto mb-6 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Swords className="w-8 h-8 text-muted-foreground" />
                  </motion.div>
                  <h2 className="text-xl font-light mb-2">
                    {searchProgress < 100 ? "Finding opponent..." : `Found: ${opponentName}`}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    {searchProgress < 100 ? "Matching you with a challenger" : `Rank #${opponentRank}`}
                  </p>
                  <div className="w-48 h-1.5 bg-muted rounded-full overflow-hidden mx-auto">
                    <motion.div
                      className="h-full bg-foreground/60 rounded-full"
                      animate={{ width: `${Math.min(searchProgress, 100)}%` }}
                    />
                  </div>
                  <button
                    onClick={handleExit}
                    className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
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
                  <motion.span
                    key={countdown}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.5, opacity: 0 }}
                    className="text-8xl font-light block mb-4"
                  >
                    {countdown || "GO!"}
                  </motion.span>
                  <p className="text-muted-foreground">vs {opponentName}</p>
                </div>
              </motion.div>
            )}

            {gameState === "playing" && currentQuestions.length > 0 && (
              <motion.div
                key="playing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-3xl mx-auto"
              >
                <div className="p-3 mb-4 rounded-lg border border-border/50 bg-card/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-sm">⚔️</div>
                    <span className="text-sm">You</span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">VS</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{opponentName}</span>
                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-sm">🎯</div>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 rounded-xl border border-border/50 bg-card/20">
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
                className="max-w-3xl mx-auto p-6 md:p-8 rounded-xl border border-border/50 bg-card/20"
              >
                <div className="text-center mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                  >
                    {results.accuracy >= 60 ? (
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <Trophy className="w-5 h-5 text-emerald-500" />
                        <span className="text-emerald-500 font-medium">Victory!</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20">
                        <span className="text-red-400 font-medium">Defeat</span>
                      </div>
                    )}
                  </motion.div>
                  <p className="text-sm text-muted-foreground mt-2">vs {opponentName}</p>
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

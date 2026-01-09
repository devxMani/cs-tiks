import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import QuizGame from "@/components/QuizGame";
import QuizResultsView from "@/components/QuizResultsView";
import { getQuestionsByTopic, Question, getTopicStats } from "@/data/questions";
import { QuizResults } from "@/components/QuizGame";
import { Brain, Database, Cpu, Globe, Bot, Code, Cloud, Shield, Layers, Zap, ArrowRight } from "lucide-react";

const topics = [
  { id: "dsa", name: "DSA", icon: Zap, description: "Arrays, Trees, Graphs" },
  { id: "dbms", name: "DBMS", icon: Database, description: "SQL, Normalization" },
  { id: "os", name: "OS", icon: Cpu, description: "Processes, Memory" },
  { id: "networks", name: "Networks", icon: Globe, description: "TCP/IP, Protocols" },
  { id: "aiml", name: "AI/ML", icon: Brain, description: "Neural Networks, ML" },
  { id: "fullstack", name: "Full Stack", icon: Layers, description: "APIs, DevOps" },
  { id: "webdev", name: "Web Dev", icon: Code, description: "React, JavaScript" },
  { id: "sysdesign", name: "Sys Design", icon: Cloud, description: "Scalability, Caching" },
  { id: "security", name: "Security", icon: Shield, description: "Encryption, Auth" },
  { id: "cloud", name: "Cloud", icon: Bot, description: "AWS, Kubernetes" },
];

type GameState = "menu" | "playing" | "results";

const Practice = () => {
  const [gameState, setGameState] = useState<GameState>("menu");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [results, setResults] = useState<QuizResults | null>(null);

  const topicStats = getTopicStats();

  const getTopicQuestionCount = (topicId: string) => {
    const stat = topicStats.find(s => s.topic === topicId);
    return stat?.count || 0;
  };

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

  const totalQuestions = topicStats.reduce((acc, s) => acc + s.count, 0);

  return (
    <Layout>
      <section className="min-h-screen pt-28 pb-20">
        <div className="container px-6">
          {gameState === "menu" && (
            <>
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-xl mb-12"
              >
                <span className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider rounded-full border border-border/60 bg-card/50 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Practice Mode
                </span>
                <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-3">
                  Solo Practice
                </h1>
                <p className="text-muted-foreground">
                  {totalQuestions}+ questions across {topics.length} topics. No timer, instant feedback.
                </p>
              </motion.div>

              {/* Topic grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-5xl">
                {topics.map((topic, index) => {
                  const Icon = topic.icon;
                  const count = getTopicQuestionCount(topic.id);
                  
                  return (
                    <motion.button
                      key={topic.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.04 }}
                      onClick={() => startPractice(topic.id)}
                      className="group p-4 rounded-xl border border-border/50 bg-card/20 hover:bg-card/50 hover:border-border text-left transition-all"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center group-hover:bg-muted transition-colors">
                          <Icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                        </div>
                        <span className="text-[10px] text-muted-foreground">{count}Q</span>
                      </div>
                      <span className="block text-sm font-medium mb-0.5">{topic.name}</span>
                      <span className="flex items-center text-[10px] text-muted-foreground group-hover:text-foreground/70 transition-colors">
                        Start
                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Tip */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-10 text-sm text-muted-foreground"
              >
                💡 Pick a topic to start practicing. 10 random questions each session.
              </motion.p>
            </>
          )}

          {gameState === "playing" && currentQuestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-3xl mx-auto p-6 md:p-8 rounded-xl border border-border/50 bg-card/20"
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
              className="max-w-3xl mx-auto p-6 md:p-8 rounded-xl border border-border/50 bg-card/20"
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

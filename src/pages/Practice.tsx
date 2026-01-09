import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import QuizGame from "@/components/QuizGame";
import QuizResultsView from "@/components/QuizResultsView";
import { getQuestionsByTopic, Question, getTopicStats } from "@/data/questions";
import { QuizResults } from "@/components/QuizGame";
import { Brain, Database, Cpu, Globe, Bot, Code, Cloud, Shield, Layers, Zap } from "lucide-react";

const topics = [
  { 
    id: "dsa", 
    name: "Data Structures & Algorithms", 
    shortName: "DSA",
    description: "Arrays, Trees, Graphs, DP, Sorting", 
    icon: Zap,
    gradient: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-500/10 to-purple-600/10",
  },
  { 
    id: "dbms", 
    name: "Database Management", 
    shortName: "DBMS",
    description: "SQL, Normalization, Transactions", 
    icon: Database,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
  },
  { 
    id: "os", 
    name: "Operating Systems", 
    shortName: "OS",
    description: "Processes, Memory, Scheduling", 
    icon: Cpu,
    gradient: "from-emerald-500 to-green-500",
    bgGradient: "from-emerald-500/10 to-green-500/10",
  },
  { 
    id: "networks", 
    name: "Computer Networks", 
    shortName: "Networks",
    description: "TCP/IP, OSI Model, Protocols", 
    icon: Globe,
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-500/10 to-amber-500/10",
  },
  { 
    id: "aiml", 
    name: "AI & Machine Learning", 
    shortName: "AI/ML",
    description: "Neural Networks, Deep Learning", 
    icon: Brain,
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-500/10 to-rose-500/10",
  },
  { 
    id: "fullstack", 
    name: "Full Stack Development", 
    shortName: "Full Stack",
    description: "REST APIs, Microservices, DevOps", 
    icon: Layers,
    gradient: "from-indigo-500 to-blue-600",
    bgGradient: "from-indigo-500/10 to-blue-600/10",
  },
  { 
    id: "webdev", 
    name: "Web Development", 
    shortName: "Web Dev",
    description: "React, JavaScript, CSS, HTML", 
    icon: Code,
    gradient: "from-cyan-500 to-teal-500",
    bgGradient: "from-cyan-500/10 to-teal-500/10",
  },
  { 
    id: "sysdesign", 
    name: "System Design", 
    shortName: "Sys Design",
    description: "Scalability, Load Balancing, Caching", 
    icon: Cloud,
    gradient: "from-slate-500 to-gray-600",
    bgGradient: "from-slate-500/10 to-gray-600/10",
  },
  { 
    id: "security", 
    name: "Cybersecurity", 
    shortName: "Security",
    description: "Encryption, Authentication, Attacks", 
    icon: Shield,
    gradient: "from-red-500 to-orange-500",
    bgGradient: "from-red-500/10 to-orange-500/10",
  },
  { 
    id: "cloud", 
    name: "Cloud Computing", 
    shortName: "Cloud",
    description: "AWS, Docker, Kubernetes", 
    icon: Bot,
    gradient: "from-sky-500 to-blue-500",
    bgGradient: "from-sky-500/10 to-blue-500/10",
  },
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
        <div className="container px-4 md:px-6">
          {gameState === "menu" && (
            <>
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto mb-12"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm text-emerald-400">PRACTICE MODE</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
                  Solo <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Practice</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                  Master your skills with {totalQuestions}+ questions across 10 CS topics
                </p>
              </motion.div>

              {/* Stats bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass-card p-6 mb-10 max-w-4xl mx-auto"
              >
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                  <div className="text-center">
                    <span className="text-3xl md:text-4xl font-light bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">{totalQuestions}+</span>
                    <p className="text-xs text-muted-foreground mt-1">Questions</p>
                  </div>
                  <div className="hidden md:block w-px h-12 bg-border" />
                  <div className="text-center">
                    <span className="text-3xl md:text-4xl font-light">{topics.length}</span>
                    <p className="text-xs text-muted-foreground mt-1">Topics</p>
                  </div>
                  <div className="hidden md:block w-px h-12 bg-border" />
                  <div className="text-center">
                    <span className="text-3xl md:text-4xl font-light">∞</span>
                    <p className="text-xs text-muted-foreground mt-1">Attempts</p>
                  </div>
                  <div className="hidden md:block w-px h-12 bg-border" />
                  <div className="text-center">
                    <span className="text-3xl md:text-4xl font-light">📝</span>
                    <p className="text-xs text-muted-foreground mt-1">No Timer</p>
                  </div>
                </div>
              </motion.div>

              {/* Topic grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
                {topics.map((topic, index) => {
                  const Icon = topic.icon;
                  const questionCount = getTopicQuestionCount(topic.id);
                  
                  return (
                    <motion.div
                      key={topic.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                      onClick={() => startPractice(topic.id)}
                      className={`glass-card p-5 cursor-pointer group transition-all duration-300 hover:scale-[1.03] hover:border-white/20 relative overflow-hidden`}
                    >
                      {/* Background gradient on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${topic.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${topic.gradient} flex items-center justify-center shadow-lg`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-xs text-muted-foreground bg-background/50 px-2 py-1 rounded-full">
                            {questionCount}Q
                          </span>
                        </div>
                        
                        <h3 className="font-medium text-sm mb-1 group-hover:text-foreground transition-colors">
                          {topic.shortName}
                        </h3>
                        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{topic.description}</p>
                        
                        <div className="flex items-center gap-1">
                          <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                            <div className={`h-full w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${topic.gradient}`} />
                          </div>
                          <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">→</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Tip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-12 text-center"
              >
                <p className="text-sm text-muted-foreground">
                  💡 Practice regularly to improve your accuracy and speed
                </p>
              </motion.div>
            </>
          )}

          {gameState === "playing" && currentQuestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card p-6 md:p-8 max-w-4xl mx-auto"
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
              className="glass-card p-6 md:p-8 max-w-4xl mx-auto"
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

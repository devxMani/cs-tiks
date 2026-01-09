export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  topic: string;
  difficulty: "easy" | "medium" | "hard";
}

export const questions: Question[] = [
  // DSA Questions
  {
    id: "dsa-1",
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correctAnswer: 1,
    topic: "dsa",
    difficulty: "easy",
  },
  {
    id: "dsa-2",
    question: "Which data structure uses LIFO (Last In First Out) principle?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correctAnswer: 1,
    topic: "dsa",
    difficulty: "easy",
  },
  {
    id: "dsa-3",
    question: "What is the worst-case time complexity of QuickSort?",
    options: ["O(n log n)", "O(n)", "O(n²)", "O(log n)"],
    correctAnswer: 2,
    topic: "dsa",
    difficulty: "medium",
  },
  {
    id: "dsa-4",
    question: "Which traversal visits the root node first?",
    options: ["Inorder", "Postorder", "Preorder", "Level order"],
    correctAnswer: 2,
    topic: "dsa",
    difficulty: "easy",
  },
  {
    id: "dsa-5",
    question: "What is the space complexity of merge sort?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 2,
    topic: "dsa",
    difficulty: "medium",
  },
  {
    id: "dsa-6",
    question: "Which algorithm is used to find the shortest path in a weighted graph?",
    options: ["DFS", "BFS", "Dijkstra's", "Prim's"],
    correctAnswer: 2,
    topic: "dsa",
    difficulty: "medium",
  },
  {
    id: "dsa-7",
    question: "What is the maximum number of nodes at level 'l' in a binary tree?",
    options: ["2^l", "2^(l-1)", "2^(l+1)", "l²"],
    correctAnswer: 0,
    topic: "dsa",
    difficulty: "medium",
  },
  {
    id: "dsa-8",
    question: "Which data structure is used for implementing recursion?",
    options: ["Queue", "Stack", "Array", "Tree"],
    correctAnswer: 1,
    topic: "dsa",
    difficulty: "easy",
  },
  {
    id: "dsa-9",
    question: "What is the time complexity of inserting at the beginning of an array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 2,
    topic: "dsa",
    difficulty: "easy",
  },
  {
    id: "dsa-10",
    question: "Which sorting algorithm has the best average-case time complexity?",
    options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
    correctAnswer: 2,
    topic: "dsa",
    difficulty: "easy",
  },
  
  // DBMS Questions
  {
    id: "dbms-1",
    question: "What does ACID stand for in database transactions?",
    options: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Identity, Data", "Atomic, Cached, Indexed, Distributed", "None of the above"],
    correctAnswer: 0,
    topic: "dbms",
    difficulty: "easy",
  },
  {
    id: "dbms-2",
    question: "Which normal form removes partial dependency?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    correctAnswer: 1,
    topic: "dbms",
    difficulty: "medium",
  },
  {
    id: "dbms-3",
    question: "What is the purpose of the PRIMARY KEY constraint?",
    options: ["Allow null values", "Uniquely identify each record", "Link two tables", "Sort data"],
    correctAnswer: 1,
    topic: "dbms",
    difficulty: "easy",
  },
  {
    id: "dbms-4",
    question: "Which SQL clause is used to filter groups?",
    options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
    correctAnswer: 1,
    topic: "dbms",
    difficulty: "medium",
  },
  {
    id: "dbms-5",
    question: "What type of join returns all records from both tables?",
    options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
    correctAnswer: 3,
    topic: "dbms",
    difficulty: "medium",
  },
  {
    id: "dbms-6",
    question: "Which command is used to remove a table from the database?",
    options: ["DELETE", "REMOVE", "DROP", "TRUNCATE"],
    correctAnswer: 2,
    topic: "dbms",
    difficulty: "easy",
  },
  {
    id: "dbms-7",
    question: "What is a foreign key?",
    options: ["A key from another country", "A primary key in another table", "A key that references primary key of another table", "An encrypted key"],
    correctAnswer: 2,
    topic: "dbms",
    difficulty: "easy",
  },
  {
    id: "dbms-8",
    question: "Which isolation level prevents dirty reads?",
    options: ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ", "All of the above"],
    correctAnswer: 1,
    topic: "dbms",
    difficulty: "hard",
  },
  
  // OS Questions
  {
    id: "os-1",
    question: "What is a deadlock?",
    options: ["A type of virus", "When processes wait indefinitely for resources", "A crashed process", "Memory overflow"],
    correctAnswer: 1,
    topic: "os",
    difficulty: "easy",
  },
  {
    id: "os-2",
    question: "Which scheduling algorithm may cause starvation?",
    options: ["Round Robin", "FCFS", "Priority Scheduling", "Shortest Job First"],
    correctAnswer: 2,
    topic: "os",
    difficulty: "medium",
  },
  {
    id: "os-3",
    question: "What is virtual memory?",
    options: ["RAM", "Hard disk space used as RAM", "Cache memory", "ROM"],
    correctAnswer: 1,
    topic: "os",
    difficulty: "easy",
  },
  {
    id: "os-4",
    question: "What is a semaphore used for?",
    options: ["Memory allocation", "Process synchronization", "File management", "Network communication"],
    correctAnswer: 1,
    topic: "os",
    difficulty: "medium",
  },
  {
    id: "os-5",
    question: "Which page replacement algorithm is optimal?",
    options: ["FIFO", "LRU", "Optimal (OPT)", "Random"],
    correctAnswer: 2,
    topic: "os",
    difficulty: "medium",
  },
  {
    id: "os-6",
    question: "What is thrashing?",
    options: ["High CPU utilization", "Excessive paging causing low CPU utilization", "Memory leak", "Disk failure"],
    correctAnswer: 1,
    topic: "os",
    difficulty: "medium",
  },
  {
    id: "os-7",
    question: "What is the purpose of a context switch?",
    options: ["Switch between processes", "Switch between users", "Switch between files", "Switch between disks"],
    correctAnswer: 0,
    topic: "os",
    difficulty: "easy",
  },
  {
    id: "os-8",
    question: "Which condition is NOT required for a deadlock?",
    options: ["Mutual Exclusion", "Hold and Wait", "Preemption", "Circular Wait"],
    correctAnswer: 2,
    topic: "os",
    difficulty: "medium",
  },
  
  // Networks Questions
  {
    id: "net-1",
    question: "How many layers are in the OSI model?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    topic: "networks",
    difficulty: "easy",
  },
  {
    id: "net-2",
    question: "Which protocol is connection-oriented?",
    options: ["UDP", "TCP", "IP", "ICMP"],
    correctAnswer: 1,
    topic: "networks",
    difficulty: "easy",
  },
  {
    id: "net-3",
    question: "What port does HTTP use by default?",
    options: ["21", "22", "80", "443"],
    correctAnswer: 2,
    topic: "networks",
    difficulty: "easy",
  },
  {
    id: "net-4",
    question: "Which layer is responsible for routing?",
    options: ["Data Link", "Network", "Transport", "Session"],
    correctAnswer: 1,
    topic: "networks",
    difficulty: "medium",
  },
  {
    id: "net-5",
    question: "What does DNS stand for?",
    options: ["Dynamic Network Service", "Domain Name System", "Data Network Security", "Digital Network Server"],
    correctAnswer: 1,
    topic: "networks",
    difficulty: "easy",
  },
  {
    id: "net-6",
    question: "Which protocol is used to send emails?",
    options: ["HTTP", "FTP", "SMTP", "POP3"],
    correctAnswer: 2,
    topic: "networks",
    difficulty: "easy",
  },
  {
    id: "net-7",
    question: "What is the purpose of ARP?",
    options: ["Map IP to MAC address", "Map MAC to IP address", "Route packets", "Encrypt data"],
    correctAnswer: 0,
    topic: "networks",
    difficulty: "medium",
  },
  {
    id: "net-8",
    question: "Which class of IP address has the most host addresses?",
    options: ["Class A", "Class B", "Class C", "Class D"],
    correctAnswer: 0,
    topic: "networks",
    difficulty: "medium",
  },
];

export const getQuestionsByTopic = (topic: string, count: number = 10): Question[] => {
  const topicQuestions = questions.filter(q => q.topic === topic);
  const shuffled = [...topicQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export const getRandomQuestions = (count: number = 5): Question[] => {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

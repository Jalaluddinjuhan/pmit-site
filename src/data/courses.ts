// All static PMIT info (Fall 2026, Friday batch, Section-A) lives here.
// Source: PMIT Class Routine (Fall Trimester-2026) + PMIT syllabus (2018 onwards).

export const program = {
  name: 'Professional Masters in Information Technology (PMIT)',
  institute: 'Institute of Information Technology (IIT), Jahangirnagar University',
  batch: 'Fall 2026 · 39th Batch · Friday Batch · Section-A',
  duration: '1 year (3 trimesters, 4 months each)',
  structure: '10 core courses + 6-credit research project = 36 credit hours',
  classDay: 'Friday',
  routineActiveFrom: '13 November, 2026',
  officialNotices: 'https://pmit.iitju.edu.bd/all-notices',
  officialSite: 'https://pmit.iitju.edu.bd/',
};

export const teachers: Record<string, string> = {
  FKP: 'Prof. Md. Fazlul Karim Patwary',
  MMS: 'Prof. Dr. M Mesbahuddin Sarker',
  MSK: 'Prof. Dr. M Shamim Kaiser',
  MAY: 'Prof. Dr. Mohammad Abu Yousuf',
  RTK: 'Prof. Dr. Risala Tasin Khan',
  JA: 'Prof. Dr. Jesmin Akhter',
  KMA: 'Prof. Khan Mohammad Akkas Ali',
  FT: 'Prof. Dr. Fahima Tabassum',
  SAM: 'Prof. Dr. Shamim Al Mamun',
  MSI: 'Prof. Dr. Mohammad Shahidul Islam',
  MSR: 'Prof. Dr. Sazzadur Rahman',
  RM: 'Prof. Dr. Rashed Mazumder',
};

export interface Subject {
  code: string;
  title: string;
  credits: number;
  group: 'A' | 'B' | 'C';
  trimester: 1 | 2 | 3;
  teacher: string; // teacher code for Section-A
  slot: string; // class slot for Section-A
  room: string;
  topics: string[];
  books: string[];
}

export const subjects: Subject[] = [
  // ---------------- Trimester I ----------------
  {
    code: 'PMIT-6108',
    title: 'Management Information System',
    credits: 3,
    group: 'A',
    trimester: 1,
    teacher: 'MMS',
    slot: '09:00 – 11:00',
    room: 'Lab-01',
    topics: [
      'Information systems in global business; global e-business',
      'Ethical and social issues; securing information systems',
      'Telecommunications, the Internet and wireless technology',
      'E-commerce: digital markets and digital goods; building systems; enhancing decision making',
      'Project work: roles (PM, analyst, programmer, version manager), work breakdown structure, peer review',
      'Assessing software/hardware/network requirements under limited funds and manpower',
      'Access, training and confidentiality issues in information systems',
    ],
    books: [
      'Laudon & Laudon, Management Information Systems – Managing the Digital Firm, 10th ed., Prentice Hall, 2007',
      'Microsoft Access 2000 Step by Step, Catapult, 1999',
      'Barron & Lyskawa, Microsoft FrontPage 98 Illustrated Standard Edition, Course Technology, 1998',
    ],
  },
  {
    code: 'PMIT-6204',
    title: 'Cryptography & Steganography',
    credits: 3,
    group: 'B',
    trimester: 1,
    teacher: 'KMA',
    slot: '11:00 – 01:00',
    room: 'Lab-01',
    topics: [
      'Security services, mechanisms, threats and attacks; network and access security models',
      'Classical encryption: substitution and transposition, block and stream ciphers',
      'Symmetric ciphers: DES, AES, contemporary ciphers, RC4, block cipher modes',
      'Public key cryptography: RSA, Diffie-Hellman, discrete logarithms, elliptic curves',
      'Authentication: MAC, hash functions (MD5, SHA), digital signatures, biometrics',
      'Key management: session keys, KDC, certificate authority, X.509, PKI',
      'Steganography: LSB substitution, transform domain, cover generation, palette-based images',
      'Digital watermarking and its applications; watermark attacks',
    ],
    books: [
      'Bruce Schneier, Applied Cryptography, Wiley',
      'William Stallings, Cryptography and Network Security, PHI',
      'Trappe & Washington, Introduction to Cryptography with Coding Theory, Pearson',
    ],
  },
  {
    code: 'PMIT-6307',
    title: 'Data Mining & Knowledge Discovery',
    credits: 3,
    group: 'C',
    trimester: 1,
    teacher: 'FKP',
    slot: '02:30 – 04:30',
    room: 'Lab-01',
    topics: [
      'Types of data, data quality, preprocessing, similarity and dissimilarity measures',
      'Exploring data: summary statistics, visualization, OLAP',
      'Classification: decision trees, overfitting, model evaluation',
      'Alternative classifiers: nearest neighbour, Bayesian, support vector machines',
      'Association analysis: frequent itemsets, rule generation, FP-Growth',
      'Clustering: K-means, hierarchical, DBSCAN; cluster evaluation',
      'Web data mining: content, usage and structure mining; search engines and page ranking',
    ],
    books: [
      'Tan, Steinbach & Kumar, Introduction to Data Mining, Pearson',
      'G. K. Gupta, Introduction to Data Mining with Case Studies, Prentice Hall',
      'Margaret H. Dunham, Data Mining: Introductory and Advanced Topics, Pearson, 2008',
    ],
  },
  {
    code: 'PMIT-6111',
    title: 'Software Testing & Quality Assurance',
    credits: 3,
    group: 'A',
    trimester: 1,
    teacher: 'FT',
    slot: '04:30 – 06:30',
    room: 'Lab-01',
    topics: [
      'Testing process, V-model, verification and validation, test coverage',
      'Test levels: unit, smoke, integration, system, UAT; test types (regression, performance, security)',
      'Test team, collaboration and communication; writing testable requirements and traceability',
      'Static vs dynamic testing; white-box vs black-box techniques',
      'Boundary value, equivalence partitioning, decision tables, cause-effect, scenario testing',
      'Test case design, test procedures, defect tracking (types, severity, priority)',
      'Test process, test management and measurement',
    ],
    books: [
      'W. Lewis, Software Testing and Continuous Quality Improvement, 2000',
      'E. Kit, Software Testing in the Real World, 1995',
      'R. Black, Managing the Testing Process, 2002',
    ],
  },

  // ---------------- Trimester II ----------------
  {
    code: 'PMIT-6201',
    title: 'Cloud & Mobile Computing',
    credits: 3,
    group: 'B',
    trimester: 2,
    teacher: 'RTK',
    slot: '09:00 – 11:00',
    room: 'Room-Law 01',
    topics: [
      'Cloud computing: types, enabling technologies (virtualization, web services, SOA), grid and utility computing',
      'Cloud architecture, scheduling, scalability, reliability, security; SaaS, PaaS, IaaS, DaaS',
      'Cloud applications and business models',
      'Mobile and wireless landscape: IEEE 802.11, HIPERLAN, Bluetooth, GSM architecture and security',
      'Mobile network layer: Mobile IP, DHCP, ad-hoc routing (DSDV, DSR)',
      'Mobile transport layer (I-TCP, snooping TCP, M-TCP); broadcast systems (DAB, DVB)',
      'Wireless language and content; mobile and wireless security',
    ],
    books: [
      'Jochen Schiller, Mobile Communications, 2nd ed., Pearson, 2008',
      'Martyn Mallick, Mobile and Wireless Design Essentials, Wiley, 2008',
      'Asoke K. Talukder et al., Mobile Computing, McGraw-Hill, 2008',
      'Handbook of Cloud Computing, Springer, 2010',
      'Rittinghouse & Ransome, Cloud Computing: Implementation, Management, and Security, CRC Press, 2010',
      'George Reese, Cloud Application Architectures, O’Reilly, 2009',
    ],
  },
  {
    code: 'PMIT-6223',
    title: 'IoT & Fog Computing',
    credits: 3,
    group: 'B',
    trimester: 2,
    teacher: 'MSR',
    slot: '11:00 – 01:00',
    room: 'Room-Law 01',
    topics: [
      'IoT and embedded systems; big data, cloud and edge computing',
      'IoT architectures, standards, protocols, databases; IoT device design space',
      'Smart sensors: fundamentals, architectures, buses and interfaces, data acquisition, virtual sensors',
      'Sensor network architectures: single/multi-node, energy-efficient topologies, wired and wireless',
      'Communication protocols: physical, MAC, link, routing, transport; localization',
      'Data gathering and processing; energy management and energy-aware routing',
      'Edge computing: infrastructure, node mobility, resource management, real-time processing',
      'Security, reliability and fault tolerance; IEEE 802.15.4, 802.11, Berkeley motes, operating systems',
    ],
    books: [
      'Kirianaki et al., Data Acquisition and Signal Processing for Smart Sensors, Wiley, 2004',
      'Karl & Willig, Protocols and Architectures for Wireless Sensor Networks, Wiley, 2005',
      'Ilyas & Mahgoub (eds.), Handbook of Sensor Networks, CRC, 2004',
    ],
  },
  {
    code: 'PMIT-6122',
    title: 'Computational Thinking & Data Science',
    credits: 3,
    group: 'A',
    trimester: 2,
    teacher: 'RM',
    slot: '02:30 – 04:30',
    room: 'Room-Law 01',
    topics: [
      'Computational thinking: decomposition, pattern recognition, abstraction, algorithm design, generalization',
      'Python programming: data types and structures, functions, loops, file I/O, modules, databases',
      'Data science fundamentals: importing, formatting, displaying and preprocessing data',
      'Statistics with Python: sampling, probability distributions, confidence intervals, hypothesis testing, A/B testing',
      'Data analysis, visualization and machine learning basics; performance evaluation metrics',
    ],
    books: [
      'John Guttag, Introduction to Computation and Programming Using Python, 2nd ed., MIT Press, 2016',
      'Adhikari & DeNero, Computational and Inferential Thinking: The Foundations of Data Science (CC BY-NC-ND 4.0)',
    ],
  },
  {
    code: 'PMIT-6107',
    title: 'Artificial Intelligence & Neural Networks',
    credits: 3,
    group: 'A',
    trimester: 2,
    teacher: 'MSI',
    slot: '04:30 – 06:30',
    room: 'Room-Law 01',
    topics: [
      'AI basics, problem reduction, constraint satisfaction, means-ends analysis',
      'Game playing: minimax, alpha-beta cutoffs; statistical reasoning, Bayesian networks, Dempster-Shafer',
      'Knowledge representation: predicate logic, resolution, rules, semantic networks, frames, scripts',
      'Planning; natural language processing; learning (neural networks, genetic algorithms, ant algorithms)',
      'Fuzzy set theory and fuzzy logic; fuzzy rule bases and modelling',
      'Fuzzy control systems: PLC, closed loop, fuzzy PID (type-1 and type-2)',
    ],
    books: [
      'Rich & Knight, Artificial Intelligence, 3rd ed., TMH',
      'Chen & Pham, Introduction to Fuzzy Systems, Chapman & Hall/CRC, 2009',
      'Russell & Norvig, Artificial Intelligence: A Modern Approach, 2nd ed., PHI/Pearson',
    ],
  },

  // ---------------- Trimester III ----------------
  {
    code: 'PMIT-6121',
    title: 'Machine Learning',
    credits: 3,
    group: 'A',
    trimester: 3,
    teacher: 'MAY',
    slot: '09:00 – 11:00 (G-01, MAY) · 11:00 – 01:00 (G-02, JA)',
    room: 'Room-208 (G-01) · Room D Lab (G-02)',
    topics: [
      'Learning types: supervised, unsupervised, connectionist, reinforcement, machine discovery',
      'Supervised: information-theoretic decision tree learner, best current hypothesis, candidate elimination',
      'Unsupervised: hierarchical clustering, category utility, incremental/non-incremental algorithms',
      'Connectionist learning: perceptron, multilayer feedforward network, backpropagation',
      'Genetic algorithms: operators, fitness function, use in supervised learning',
    ],
    books: [
      'Nils J. Nilsson, Introduction to Machine Learning',
      'Tom M. Mitchell, Machine Learning',
    ],
  },
  {
    code: 'PMIT-6311',
    title: 'Human Computer Interaction',
    credits: 3,
    group: 'C',
    trimester: 3,
    teacher: 'SAM',
    slot: '11:00 – 01:00 (G-01, SAM) · 09:00 – 11:00 (G-02, MSI)',
    room: 'Room-208 (G-01) · Room D Lab (G-02)',
    topics: [
      'Foundations of HCI: humans, machines, interaction, collaboration',
      'Models in HCI: cognitive models, socio-organizational issues, stakeholder requirements',
      'Design process: interaction design basics, HCI in the software process, design rules, universal and user-centred design',
      'Prototyping, task analysis, GOMS and other key HCI methods; lifecycle models',
      'User interfaces: interaction techniques, human factors, strategies for designing interfaces',
      'Evaluation and user support; task models and dialogs',
      'Groupware, ubiquitous computing, virtual reality; social-cultural contexts of HCI',
    ],
    books: [
      'Julie A. Jacko, Human-Computer Interaction Handbook, 3rd ed., CRC Press, 2012',
      'Yvonne Rogers, HCI Theory: Classical, Modern, and Contemporary, Morgan & Claypool, 2012',
      'Encyclopedia of Human-Computer Interaction — interaction-design.org',
    ],
  },
];

export const trimesters = [
  { id: 1, name: 'Trimester I', blurb: 'Foundations: MIS, cryptography, data mining and software testing.' },
  { id: 2, name: 'Trimester II', blurb: 'Cloud, IoT, data science and AI.' },
  { id: 3, name: 'Trimester III', blurb: 'Machine learning and HCI (plus the research project).' },
] as const;

export const slots = ['09:00 – 11:00', '11:00 – 01:00', '02:30 – 04:30', '04:30 – 06:30'];

// Section-A routine, as printed in the Fall 2026 routine. Each row = one trimester.
export const routine: { trimester: number; rows: { slot: string; code: string; teacher: string; room: string }[] }[] = [
  {
    trimester: 1,
    rows: [
      { slot: slots[0], code: 'PMIT-6108', teacher: 'MMS', room: 'Lab-01' },
      { slot: slots[1], code: 'PMIT-6204', teacher: 'KMA', room: 'Lab-01' },
      { slot: slots[2], code: 'PMIT-6307', teacher: 'FKP', room: 'Lab-01' },
      { slot: slots[3], code: 'PMIT-6111', teacher: 'FT', room: 'Lab-01' },
    ],
  },
  {
    trimester: 2,
    rows: [
      { slot: slots[0], code: 'PMIT-6201', teacher: 'RTK', room: 'Room-Law 01' },
      { slot: slots[1], code: 'PMIT-6223', teacher: 'MSR', room: 'Room-Law 01' },
      { slot: slots[2], code: 'PMIT-6122', teacher: 'RM', room: 'Room-Law 01' },
      { slot: slots[3], code: 'PMIT-6107', teacher: 'MSI', room: 'Room-Law 01' },
    ],
  },
  {
    trimester: 3,
    rows: [
      { slot: slots[0] + ' (G-01)', code: 'PMIT-6121', teacher: 'MAY', room: 'Room-208' },
      { slot: slots[1] + ' (G-01)', code: 'PMIT-6311', teacher: 'SAM', room: 'Room-208' },
      { slot: slots[0] + ' (G-02)', code: 'PMIT-6311', teacher: 'MSI', room: 'Room D Lab' },
      { slot: slots[1] + ' (G-02)', code: 'PMIT-6121', teacher: 'JA', room: 'Room D Lab' },
    ],
  },
];

// Semester final exam dates exactly as printed in the routine.
// NOTE: the routine prints "2026" for these dates even though the trimester starts Nov 2026 — verify with the official notice.
export const exams: { date: string; codes: string[] }[] = [
  { date: '5 Feb 2026', codes: ['PMIT-6108', 'PMIT-6107', 'PMIT-6121'] },
  { date: '6 Feb 2026', codes: ['PMIT-6111', 'PMIT-6122'] },
  { date: '12 Feb 2026', codes: ['PMIT-6204', 'PMIT-6201', 'PMIT-6311'] },
  { date: '13 Feb 2026', codes: ['PMIT-6307', 'PMIT-6223'] },
];

export const subjectByCode = (code: string) => subjects.find((s) => s.code === code);

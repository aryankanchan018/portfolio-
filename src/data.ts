// ── All portfolio data in one place ──────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education' },
  { label: 'Resume',     href: '#resume' },
  { label: 'Contact',    href: '#contact' },
];

export const SKILLS = [
  {
    category: 'Programming',
    icon: '⌨️',
    color: 'from-blue-50 to-indigo-50',
    border: 'border-blue-100',
    items: ['Python', 'Java', 'C', 'C++', 'JavaScript'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'from-purple-50 to-pink-50',
    border: 'border-purple-100',
    items: ['HTML', 'CSS', 'React', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'from-green-50 to-emerald-50',
    border: 'border-green-100',
    items: ['Flask', 'Node.js'],
  },
  {
    category: 'Artificial Intelligence',
    icon: '🤖',
    color: 'from-orange-50 to-amber-50',
    border: 'border-orange-100',
    items: ['Machine Learning', 'TensorFlow', 'OpenCV', 'MediaPipe', 'Scikit-Learn'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    color: 'from-cyan-50 to-sky-50',
    border: 'border-cyan-100',
    items: ['MySQL', 'Firebase'],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    color: 'from-gray-50 to-slate-50',
    border: 'border-gray-100',
    items: ['Git', 'GitHub', 'VS Code', 'Google Colab'],
  },
];

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  problem: string;
  features: string[];
  tech: string[];
  challenges: string;
  solutions: string;
  future: string;
  github: string;
  demo?: string;
  gradient: string;
  icon: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'smart-society',
    title: 'Smart Society Management App',
    shortDesc: 'A full-stack platform for managing residential societies with real-time notifications, billing, and resident portals.',
    description: 'A comprehensive society management platform that digitises the entire workflow of a residential complex — from visitor management and maintenance requests to billing, announcements, and emergency alerts.',
    problem: 'Residential societies rely on manual processes for billing, visitor logs, and maintenance — leading to delays, miscommunication, and lack of transparency for residents.',
    features: [
      'Resident registration and profile management',
      'Automated monthly billing and payment tracking',
      'Visitor entry log with QR code verification',
      'Maintenance request submission and tracking',
      'Real-time announcements and push notifications',
      'Admin dashboard with analytics',
      'Emergency alert broadcast system',
    ],
    tech: ['React', 'Node.js', 'Firebase', 'Tailwind CSS', 'Python', 'Flask'],
    challenges: 'Designing a role-based access system that works seamlessly for admins, security guards, and residents while keeping the UI simple for non-technical users.',
    solutions: 'Implemented Firebase Auth with custom claims for role management and built separate dashboard views per role, reducing cognitive load for each user type.',
    future: 'Integration with smart door locks, automated utility meter reading via IoT, and a mobile app for residents.',
    github: 'https://github.com/Aryankanchan018',
    gradient: 'from-blue-500 to-indigo-600',
    icon: '🏢',
  },
  {
    id: 'bone-age',
    title: 'Bone Age Detection using Deep Learning',
    shortDesc: 'A CNN-based medical imaging system that predicts skeletal bone age from X-ray images with high accuracy.',
    description: 'A deep learning pipeline that analyses hand X-ray images to predict bone age, assisting radiologists in paediatric growth assessment. Built using transfer learning on the RSNA Bone Age dataset.',
    problem: 'Manual bone age assessment by radiologists is time-consuming, subjective, and requires significant expertise. Automating this process can reduce diagnostic time and improve consistency.',
    features: [
      'Automated bone age prediction from X-ray images',
      'Transfer learning using VGG16 / ResNet50',
      'Gender-aware prediction model',
      'Confidence score and uncertainty estimation',
      'Web interface for image upload and result display',
      'Batch processing for clinical workflows',
    ],
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Flask', 'Scikit-Learn', 'NumPy'],
    challenges: 'Handling class imbalance in the dataset and preventing overfitting on a relatively small medical imaging dataset.',
    solutions: 'Applied data augmentation (rotation, flipping, zoom), used pre-trained ImageNet weights for transfer learning, and implemented dropout regularisation.',
    future: 'Extend to full skeletal maturity assessment, integrate DICOM support, and deploy as a clinical decision support tool.',
    github: 'https://github.com/Aryankanchan018',
    gradient: 'from-emerald-500 to-teal-600',
    icon: '🦴',
  },
  {
    id: 'smart-attendance',
    title: 'Smart Attendance System',
    shortDesc: 'A real-time face recognition attendance system that eliminates manual roll calls using computer vision.',
    description: 'An automated attendance management system that uses facial recognition to mark student or employee attendance in real time, with a web dashboard for reports and analytics.',
    problem: 'Manual attendance is time-consuming, prone to proxy attendance, and generates paper records that are hard to analyse.',
    features: [
      'Real-time face detection and recognition',
      'Automatic attendance marking with timestamp',
      'Anti-spoofing with liveness detection',
      'Web dashboard with attendance reports',
      'Export to CSV / Excel',
      'Email alerts for absentees',
      'Multi-camera support',
    ],
    tech: ['Python', 'OpenCV', 'face_recognition', 'Flask', 'MySQL', 'JavaScript', 'HTML/CSS'],
    challenges: 'Achieving reliable recognition under varying lighting conditions and different face angles in a real classroom environment.',
    solutions: 'Used histogram equalisation for lighting normalisation and trained the model with multiple face angles per person to improve recognition robustness.',
    future: 'Add mobile app for remote attendance, integrate with LMS platforms, and implement emotion detection for engagement tracking.',
    github: 'https://github.com/Aryankanchan018',
    gradient: 'from-violet-500 to-purple-600',
    icon: '📸',
  },
  {
    id: 'smart-helmet',
    title: 'Smart Helmet',
    shortDesc: 'An IoT-enabled safety helmet with accident detection, SOS alerts, and real-time location tracking for industrial workers.',
    description: 'A smart safety helmet for industrial and construction workers that detects accidents, monitors environmental hazards, and sends SOS alerts with GPS location to emergency contacts.',
    problem: 'Industrial accidents often go undetected for critical minutes because workers are alone or in noisy environments where calls for help are not heard.',
    features: [
      'Accelerometer-based fall and impact detection',
      'GPS real-time location tracking',
      'Automatic SOS SMS and call on accident detection',
      'Gas and temperature sensor integration',
      'Bluetooth connectivity to mobile app',
      'Battery level monitoring',
      'Emergency contact management',
    ],
    tech: ['Arduino', 'Python', 'IoT Sensors', 'GPS Module', 'GSM Module', 'Firebase', 'Flutter'],
    challenges: 'Minimising false positives in accident detection while ensuring the system responds within seconds to real incidents.',
    solutions: 'Implemented a threshold-based algorithm with a 2-second confirmation window and combined accelerometer + gyroscope data to distinguish falls from normal movement.',
    future: 'Add heart rate monitoring, integrate with workplace safety management systems, and develop a central monitoring dashboard for safety officers.',
    github: 'https://github.com/Aryankanchan018',
    gradient: 'from-orange-500 to-red-500',
    icon: '⛑️',
  },
  {
    id: 'gesture-home',
    title: 'Gesture Controlled Home Automation',
    shortDesc: 'Control home appliances using hand gestures detected via webcam — no physical contact required.',
    description: 'A touchless home automation system that uses MediaPipe hand tracking to detect specific hand gestures and map them to smart home commands, controlling lights, fans, and other appliances.',
    problem: 'Traditional smart home controls require physical touch or voice commands, which are inconvenient for people with mobility impairments or in hygiene-sensitive environments.',
    features: [
      'Real-time hand gesture recognition via webcam',
      '10+ predefined gesture-to-command mappings',
      'Control lights, fans, and AC via gestures',
      'Custom gesture training interface',
      'Arduino relay integration for physical appliances',
      'Low-latency processing under 100ms',
      'Multi-hand support',
    ],
    tech: ['Python', 'MediaPipe', 'OpenCV', 'Arduino', 'Flask', 'JavaScript', 'HTML/CSS'],
    challenges: 'Achieving consistent gesture recognition across different skin tones, lighting conditions, and background clutter.',
    solutions: 'Used MediaPipe\'s robust hand landmark model which is lighting-invariant, and added a gesture confidence threshold to filter out ambiguous detections.',
    future: 'Expand gesture vocabulary, add voice command fallback, integrate with Google Home / Alexa, and develop a mobile configuration app.',
    github: 'https://github.com/Aryankanchan018',
    gradient: 'from-pink-500 to-rose-600',
    icon: '🤚',
  },
];

export const EXPERIENCE = [
  {
    role: 'AI/ML Intern',
    company: 'Research Lab — MIT ADT University',
    period: 'Jun 2024 – Aug 2024',
    type: 'Internship',
    description: 'Worked on deep learning models for medical image analysis. Contributed to the Bone Age Detection project using TensorFlow and Keras. Preprocessed RSNA dataset and improved model accuracy by 8% through data augmentation techniques.',
    highlights: ['TensorFlow', 'Medical Imaging', 'Data Augmentation', 'Python'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Freelance Projects',
    period: 'Jan 2024 – Present',
    type: 'Freelance',
    description: 'Designed and developed full-stack web applications for small businesses. Built responsive UIs with React and Tailwind CSS, integrated Firebase for real-time data, and deployed on Vercel.',
    highlights: ['React', 'Firebase', 'Tailwind CSS', 'Node.js'],
  },
  {
    role: 'Open Source Contributor',
    company: 'GitHub Community',
    period: '2023 – Present',
    type: 'Open Source',
    description: 'Actively contributing to open source projects in the AI/ML and web development space. Submitted bug fixes, documentation improvements, and feature additions to multiple repositories.',
    highlights: ['Python', 'JavaScript', 'Git', 'Documentation'],
  },
];

export const EDUCATION = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science Engineering',
    institution: 'MIT ADT University',
    period: '2022 – 2028',
    status: 'Current Student',
    grade: '',
    icon: '🎓',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    degree: 'Higher Secondary Education',
    field: 'Science (PCM + Computer Science)',
    institution: 'MIT Junior College',
    period: '2020 – 2022',
    status: 'Completed',
    grade: '',
    icon: '📚',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    degree: 'Secondary Education',
    field: 'General Studies',
    institution: 'Angel High School',
    period: '2019 – 2020',
    status: 'Completed',
    grade: '',
    icon: '🏫',
    color: 'from-violet-500 to-purple-600',
  },
];

export const ACHIEVEMENTS = [
  {
    title: 'Smart India Hackathon 2024',
    org: 'Government of India',
    desc: 'Participated in SIH 2024, developing an AI-powered solution for public health monitoring. Reached the final round among 5000+ teams.',
    icon: '🏆',
    color: 'from-amber-400 to-orange-500',
    link: '',
  },
  {
    title: 'Python (Basic) Certificate',
    org: 'HackerRank',
    desc: 'Certified in Python programming fundamentals including data types, control flow, functions, and object-oriented programming.',
    icon: '🐍',
    color: 'from-green-400 to-emerald-500',
    link: 'https://www.linkedin.com/in/aryan-kanchan-47709725b/details/certifications/',
  },
  {
    title: 'SQL (Basic) Certificate',
    org: 'HackerRank',
    desc: 'Certified in SQL basics covering queries, filtering, aggregation, and joins.',
    icon: '🗄️',
    color: 'from-blue-400 to-indigo-500',
    link: 'https://www.linkedin.com/in/aryan-kanchan-47709725b/details/certifications/',
  },
  {
    title: 'Best Project Award',
    org: 'MIT ADT University',
    desc: 'Received Best Project Award for the Gesture Controlled Home Automation system at the annual tech exhibition.',
    icon: '🥇',
    color: 'from-yellow-400 to-amber-500',
    link: '',
  },
  {
    title: 'Introduction to Generative AI',
    org: 'Google Cloud / Coursera',
    desc: 'Completed Google Cloud\'s Introduction to Generative AI course covering LLMs, prompt engineering, and responsible AI.',
    icon: '🤖',
    color: 'from-violet-400 to-purple-500',
    link: 'https://www.linkedin.com/in/aryan-kanchan-47709725b/details/certifications/',
  },
  {
    title: 'Data Analytics Essentials',
    org: 'Cisco Networking Academy',
    desc: 'Completed Cisco\'s Data Analytics Essentials course covering data analysis, visualisation, and storytelling with data.',
    icon: '📊',
    color: 'from-cyan-400 to-sky-500',
    link: 'https://www.linkedin.com/in/aryan-kanchan-47709725b/details/certifications/',
  },
];

export const STATS = [
  { label: 'Projects Built', value: 15, suffix: '+' },
  { label: 'GitHub Repos', value: 30, suffix: '+' },
  { label: 'Certifications', value: 8, suffix: '' },
  { label: 'Technologies', value: 20, suffix: '+' },
];

export const SOCIAL = {
  github: 'https://github.com/Aryankanchan018',
  linkedin: 'https://www.linkedin.com/in/aryan-kanchan-47709725b/',
  email: 'aryankanchan018@gmail.com',
  instagram: 'https://instagram.com/aryan_kanchan_18',
  location: 'Pune, Maharashtra, India',
};

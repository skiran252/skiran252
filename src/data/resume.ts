export const resumeData = {
    personalInfo: {
        name: "SaiKiran Gonugunta",
        role: "Software Engineer",
        location: "Hyderabad, India",
        email: "skiran252@gmail.com",
        phone: "+91 86399 30114",
        links: {
            linkedin: "https://linkedin.com/in/skiran252", // Placeholder inferred
            leetcode: "https://leetcode.com/skiran252", // Placeholder inferred
            github: "https://github.com/skiran252" // Placeholder inferred
        }
    },
    summary: "Software Engineer specializing in AI Agents, Distributed Systems, and Full Stack Development. Experienced in building scalable microservices, computer vision pipelines, and autonomous browser agents.",
    experience: [
        {
            company: "PerceptEye.ai",
            role: "Software Engineer",
            location: "Remote",
            period: "Aug 2025 – Present",
            description: "Engineered RUM data collection and training pipelines for computer use AI agents.",
            achievements: [
                "Engineered RUM data collection using Chrome extension with Manifest V3 service workers and rrweb, capturing 10,000+ sessions daily.",
                "Built training data pipeline converting session replays to annotated datasets via computer vision preprocessing, accelerating model development by 40%.",
                "Developed web automation agents with autonomous browser navigation achieving 85% task completion on complex workflows."
            ]
        },
        {
            company: "FactSet",
            role: "Software Engineer 3",
            location: "Hyderabad, India",
            period: "Oct 2024 – Aug 2025",
            description: "Architected microservices migration and implemented vector search platforms.",
            achievements: [
                "Architected migration from monolithic Perl application to AWS microservices, improving scalability by 40% and reducing costs by 25%.",
                "Implemented vector search platform for 1M+ financial documents using OpenAI embeddings with 95% search accuracy.",
                "Rebuilt API layer from .NET Framework to .NET Core, delivering 25% performance improvement for 5+ microservices."
            ]
        },
        {
            company: "FactSet",
            role: "Software Engineer 2",
            location: "Hyderabad, India",
            period: "Sept 2022 – Sept 2024",
            description: "Optimized rendering performance and implemented observability solutions.",
            achievements: [
                "Optimized rendering performance for data-intensive dashboards with Vue 3, decreasing load times by 50%.",
                "Implemented observability solution using Grafana, reducing MTTR by 60% through proactive issue detection.",
                "Created AI-powered support system automating 40% of tier-1 requests, reducing response times significantly."
            ]
        },
        {
            company: "Ivy Comptech & Voxlogic Inc",
            role: "Software Engineer",
            location: "Hyderabad, India",
            period: "Mar 2021 – Aug 2022",
            description: "Built event-driven components for gamification and health monitoring apps.",
            achievements: [
                "Built event-driven components for gamification platform handling 100K+ concurrent users; reduced latency by 60% with WebSockets.",
                "Developed health monitoring applications with Fitbit API integration and anomaly detection (85% accuracy) for vital signs."
            ]
        }
    ],
    projects: [
        {
            title: "AI-Powered Sensitive Content Detection System",
            tech: ["Chrome Extension", "Tesseract OCR", "YOLOv8", "CLIP"],
            description: "Engineered Chrome extension with Tesseract OCR and YOLOv8 object detection using event-driven service workers, identifying sensitive content (PII, credentials) with 91% precision."
        },
        {
            title: "Distributed Document Search Engine",
            tech: ["Elasticsearch", "BERT", "Kafka", "Java"],
            description: "Built scalable document indexing system processing 500GB+ data using Elasticsearch and BERT models; implemented Kafka pipeline with 5x throughput improvement."
        }
    ],
    skills: {
        programming: ["TypeScript", "JavaScript", "Python", "Java", "Go", "C++", "React", "Vue.js", "Node.js", "Express", "REST API"],
        ai_ml: ["Computer Vision", "YOLOv8", "CLIP", "Tesseract OCR", "OpenAI APIs", "Vector databases", "Training pipelines"],
        cloud: ["AWS (Lambda, EC2, S3, DynamoDB)", "Kubernetes", "Docker", "Terraform", "CI/CD", "Microservices"],
        data_tools: ["Elasticsearch", "MongoDB", "PostgreSQL", "Redis", "Chrome Extensions", "WebSockets", "System design"]
    },
    education: {
        institution: "KL University",
        degree: "B.Tech in Computer Science",
        grade: "CGPA: 9.57/10.0",
        period: "Sept 2017 – Mar 2021"
    }
};

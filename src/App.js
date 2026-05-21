/* eslint-disable no-unused-vars */
import { useState, useEffect, useMemo } from "react";

// ─── PROJECT DATABASE ────────────────────────────────────────────────────────

const PROJECT_DB = {
  CSE: [
    { id: "cse1", title: "AI-Powered Chatbot", domain: "AI", difficulty: "Medium", type: "Software", year: ["2nd","3rd"], budget: "₹0 (Free)", time: "3-4 weeks", skills: ["Python","NLP","Flask"], tech: ["Python","NLTK","TensorFlow","Flask","React"], hardware: "PC/Laptop", description: "Build a smart chatbot using NLP and machine learning that can answer FAQs, handle customer queries, and learn from conversations. Integrate with a web frontend for real-time chat.", importance: "Chatbots reduce human workload by 40% in customer service. Understanding NLP is core to modern AI development.", impact: "Can be deployed in college websites, businesses, and health portals.", outcomes: ["NLP fundamentals","REST API development","Deep learning basics"], future: "Extend with voice recognition, multilingual support, and GPT integration.", innovationScore: 82, resumeValue: "High", trending: true, steps: ["Design conversation flow","Collect training data","Train ML model","Build Flask API","Create React chat UI","Deploy to Heroku"], youtube: "https://youtube.com", github: "https://github.com", tags: ["AI","NLP","Web"] },
    { id: "cse2", title: "Face Recognition Attendance System", domain: "AI", difficulty: "Hard", type: "Software", year: ["3rd","4th"], budget: "₹500-1000", time: "4-6 weeks", skills: ["Python","OpenCV","ML"], tech: ["Python","OpenCV","face_recognition","SQLite","Flask"], hardware: "Webcam, PC", description: "Automate classroom attendance using facial recognition. Students register their faces, and the system marks them present automatically via webcam.", importance: "Eliminates proxy attendance fraud and saves faculty time. Recognized by IEEE as a top student project.", impact: "Applicable in schools, colleges, offices, and events.", outcomes: ["Computer vision","Database management","Web API design"], future: "Add emotion detection, integrate with college ERP systems.", innovationScore: 91, resumeValue: "Very High", trending: true, steps: ["Collect face datasets","Train Haar Cascade classifier","Build recognition engine","Create attendance DB","Build dashboard","Test in real classroom"], youtube: "https://youtube.com", github: "https://github.com", tags: ["CV","AI","IoT"] },
    { id: "cse3", title: "Library Management System", domain: "Web", difficulty: "Easy", type: "Software", year: ["1st","2nd"], budget: "₹0 (Free)", time: "2-3 weeks", skills: ["Java","SQL","Swing/Web"], tech: ["Java","MySQL","HTML","CSS","JavaScript"], hardware: "PC", description: "Build a complete library management system with book issuing, returning, fine calculation, and admin panel for managing inventory.", importance: "Classic project demonstrating CRUD operations, DB design, and UI development — core full-stack skills.", impact: "Deployable in any institution's library.", outcomes: ["Database design","Full-stack development","CRUD operations"], future: "Add barcode scanning, mobile app, online reservation.", innovationScore: 55, resumeValue: "Medium", trending: false, steps: ["Design DB schema","Create backend","Build admin panel","Add search functionality","Implement fine logic","Test all flows"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Web","Database","Java"] },
    { id: "cse4", title: "Online Voting System with Blockchain", domain: "Blockchain", difficulty: "Hard", type: "Software", year: ["3rd","4th"], budget: "₹0 (Free)", time: "5-7 weeks", skills: ["Solidity","Web3.js","React"], tech: ["Ethereum","Solidity","Web3.js","React","MetaMask"], hardware: "PC", description: "Decentralized voting application on Ethereum blockchain ensuring tamper-proof, transparent elections with voter authentication.", importance: "Blockchain voting is the future of democratic processes. India's ECI is exploring blockchain solutions.", impact: "Applicable in student union elections, society voting, corporate decisions.", outcomes: ["Blockchain fundamentals","Smart contracts","DApp development"], future: "Extend with biometric voter verification, zk-SNARK privacy.", innovationScore: 95, resumeValue: "Very High", trending: true, steps: ["Learn Solidity basics","Write voting smart contract","Deploy to testnet","Build React frontend","Connect with MetaMask","Test election flow"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Blockchain","Web3","Security"] },
    { id: "cse5", title: "Resume Analyzer using AI", domain: "AI", difficulty: "Medium", type: "Software", year: ["2nd","3rd","4th"], budget: "₹0 (Free)", time: "3-4 weeks", skills: ["Python","NLP","Flask"], tech: ["Python","spaCy","scikit-learn","Flask","React"], hardware: "PC", description: "AI tool that analyzes uploaded resumes, extracts skills, scores them against job descriptions, and provides improvement suggestions.", importance: "Automates HR pre-screening. ATS (Applicant Tracking Systems) process 75% of resumes before humans see them.", impact: "Can be used by college placement cells, job portals, and HR departments.", outcomes: ["NLP","PDF parsing","API design","ML scoring"], future: "Add job matching, cover letter generation with GPT.", innovationScore: 87, resumeValue: "Very High", trending: true, steps: ["Build PDF parser","Extract text with NLP","Define scoring algorithm","Create match engine","Build React upload UI","Add recommendation engine"], youtube: "https://youtube.com", github: "https://github.com", tags: ["AI","NLP","HR"] },
    { id: "cse6", title: "E-Commerce Website", domain: "Web", difficulty: "Medium", type: "Software", year: ["2nd","3rd"], budget: "₹0-500", time: "4-5 weeks", skills: ["React","Node.js","MongoDB"], tech: ["React","Node.js","Express","MongoDB","Stripe API"], hardware: "PC", description: "Full-featured e-commerce platform with product listings, cart, payments, user authentication, and admin dashboard.", importance: "Demonstrates complete full-stack development skills — the most in-demand skill set for web developers.", impact: "Can be launched as a real business or used as college project showcase.", outcomes: ["Full-stack development","Payment gateway integration","State management"], future: "Add AI product recommendations, AR try-on feature.", innovationScore: 70, resumeValue: "High", trending: true, steps: ["Design DB schema","Build REST API","Create product pages","Add cart & checkout","Integrate Stripe","Build admin panel"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Web","MERN","E-Commerce"] },
    { id: "cse7", title: "Smart Campus Navigation App", domain: "Mobile", difficulty: "Hard", type: "Software", year: ["3rd","4th"], budget: "₹0 (Free)", time: "5-6 weeks", skills: ["React Native","Maps API","Firebase"], tech: ["React Native","Google Maps API","Firebase","Node.js"], hardware: "Smartphone", description: "Mobile app for campus navigation with indoor maps, classroom locator, event notifications, and real-time crowd tracking.", importance: "Solves real student problems on large campuses. Combines mobile dev, maps, and real-time data.", impact: "Deploy in any university campus for student use.", outcomes: ["Mobile app development","Maps API integration","Real-time DB"], future: "Add AR navigation, faculty location tracking.", innovationScore: 88, resumeValue: "High", trending: false, steps: ["Design app screens","Map the campus","Integrate Google Maps","Add building markers","Implement search","Add notifications"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Mobile","Maps","IoT"] },
    { id: "cse8", title: "Fake News Detection System", domain: "AI", difficulty: "Medium", type: "Software", year: ["3rd","4th"], budget: "₹0 (Free)", time: "3-4 weeks", skills: ["Python","NLP","ML"], tech: ["Python","BERT","scikit-learn","Flask"], hardware: "PC (GPU optional)", description: "ML model that classifies news articles as real or fake using NLP techniques and transformer models fine-tuned on news datasets.", importance: "Misinformation crisis costs $78B annually. This is a socially impactful AI project.", impact: "Browser extensions, news portals, social media fact-checking.", outcomes: ["BERT/transformers","Text classification","Model deployment"], future: "Extend to social media posts, images with DeepFake detection.", innovationScore: 90, resumeValue: "Very High", trending: true, steps: ["Collect LIAR/FakeNewsNet dataset","Preprocess text","Fine-tune BERT","Evaluate accuracy","Build API","Create Chrome extension"], youtube: "https://youtube.com", github: "https://github.com", tags: ["AI","NLP","Social Impact"] },
    { id: "cse9", title: "Code Review Automation Tool", domain: "DevOps", difficulty: "Hard", type: "Software", year: ["4th"], budget: "₹0 (Free)", time: "5-7 weeks", skills: ["Python","AST","LLM API"], tech: ["Python","OpenAI API","GitHub API","FastAPI"], hardware: "PC", description: "Automated code review tool that analyzes GitHub PRs, checks for bugs, style issues, and security vulnerabilities using LLM.", importance: "Code review takes 10-15% of developer time. Automation is a major DevOps trend.", impact: "Can be integrated into any GitHub/GitLab repository as a bot.", outcomes: ["API integration","AST parsing","LLM prompting","GitHub Actions"], future: "Add security scanning, auto-fix suggestions.", innovationScore: 93, resumeValue: "Very High", trending: true, steps: ["Study GitHub API","Build PR webhook","Implement AST analysis","Integrate GPT-4","Write review formatter","Deploy as GitHub Action"], youtube: "https://youtube.com", github: "https://github.com", tags: ["DevOps","AI","GitHub"] },
    { id: "cse10", title: "Student Performance Predictor", domain: "Data Science", difficulty: "Medium", type: "Software", year: ["2nd","3rd"], budget: "₹0 (Free)", time: "3 weeks", skills: ["Python","ML","Pandas"], tech: ["Python","scikit-learn","Pandas","Matplotlib","Streamlit"], hardware: "PC", description: "Predict student academic performance using historical data, attendance, and behavioral features with visualization dashboard.", importance: "Early intervention can improve student success rates by 25%. Educational data mining is a growing field.", impact: "College academic departments can use this for student support programs.", outcomes: ["ML pipeline","Feature engineering","Data visualization","Streamlit deployment"], future: "Personalized study plans, integration with LMS.", innovationScore: 75, resumeValue: "High", trending: false, steps: ["Collect sample data","EDA with Pandas","Feature selection","Train Random Forest","Build Streamlit dashboard","Add prediction form"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Data Science","ML","Education"] },
    { id: "cse11", title: "URL Shortener with Analytics", domain: "Web", difficulty: "Easy", type: "Software", year: ["1st","2nd"], budget: "₹0 (Free)", time: "1-2 weeks", skills: ["Node.js","MongoDB","React"], tech: ["Node.js","Express","MongoDB","React","Chart.js"], hardware: "PC", description: "Build a Bitly-like URL shortener with click tracking, geographic analytics, and QR code generation.", importance: "Classic project demonstrating backend APIs, databases, and data visualization.", impact: "Can be deployed and used by real users immediately.", outcomes: ["REST API","Database design","Analytics visualization"], future: "Add A/B testing, custom domains, team collaboration.", innovationScore: 60, resumeValue: "Medium", trending: false, steps: ["Design URL model","Generate short codes","Build redirect logic","Track clicks with middleware","Add analytics dashboard","Generate QR codes"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Web","Backend","Analytics"] },
    { id: "cse12", title: "AI-Based Health Symptom Checker", domain: "AI", difficulty: "Hard", type: "Software", year: ["3rd","4th"], budget: "₹0 (Free)", time: "5-6 weeks", skills: ["Python","ML","React"], tech: ["Python","scikit-learn","React","FastAPI","PostgreSQL"], hardware: "PC", description: "Symptom-based disease prediction system using decision trees and medical datasets. Users input symptoms and receive probable conditions with next steps.", importance: "Healthcare AI is a $45B industry. This project bridges technology and medicine.", impact: "Useful for rural health awareness, teleconsultation pre-screening.", outcomes: ["Medical data processing","Classification algorithms","Healthcare UI/UX"], future: "Integrate with telemedicine, add drug interaction checker.", innovationScore: 92, resumeValue: "Very High", trending: true, steps: ["Source medical datasets","Clean and encode symptoms","Train decision tree","Build FastAPI service","Create symptom input UI","Add disclaimer & doctor links"], youtube: "https://youtube.com", github: "https://github.com", tags: ["AI","Healthcare","Full-Stack"] },
  ],
  IT: [
    { id: "it1", title: "Network Intrusion Detection System", domain: "Cybersecurity", difficulty: "Hard", type: "Software", year: ["3rd","4th"], budget: "₹0 (Free)", time: "5-6 weeks", skills: ["Python","ML","Networking"], tech: ["Python","Scapy","scikit-learn","Wireshark","Flask"], hardware: "PC with network access", description: "ML-based system that monitors network traffic in real-time and detects intrusions, DDoS attacks, and anomalies using the NSL-KDD dataset.", importance: "Cyberattacks cost $6 trillion globally. NIDS is core infrastructure security.", impact: "Deployable in college networks, SME infrastructure.", outcomes: ["Network protocols","Anomaly detection","Real-time processing"], future: "Add deep learning, integrate with SIEM systems.", innovationScore: 94, resumeValue: "Very High", trending: true, steps: ["Study TCP/IP packets","Capture traffic with Scapy","Feature extraction","Train Random Forest","Build real-time monitor","Create alert dashboard"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Security","Network","ML"] },
    { id: "it2", title: "Cloud File Storage System", domain: "Cloud", difficulty: "Medium", type: "Software", year: ["2nd","3rd"], budget: "₹0-500/month", time: "4-5 weeks", skills: ["Node.js","AWS/GCP","React"], tech: ["Node.js","AWS S3","React","MongoDB","JWT"], hardware: "PC", description: "Google Drive-like file storage with upload, download, folder management, sharing, and preview features using AWS S3 backend.", importance: "Cloud storage is a $137B market. This project demonstrates real cloud architecture.", impact: "Can be productized for college or local business use.", outcomes: ["Cloud APIs","File management","Authentication","SaaS architecture"], future: "Add end-to-end encryption, version control, team workspaces.", innovationScore: 78, resumeValue: "High", trending: false, steps: ["Set up AWS S3 bucket","Build file upload API","Create folder structure","Add sharing with presigned URLs","Build React frontend","Add user auth with JWT"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Cloud","AWS","Full-Stack"] },
    { id: "it3", title: "IT Help Desk Ticketing System", domain: "Web", difficulty: "Easy", type: "Software", year: ["1st","2nd"], budget: "₹0 (Free)", time: "2-3 weeks", skills: ["PHP/Node.js","MySQL","Bootstrap"], tech: ["Node.js","MySQL","React","Bootstrap"], hardware: "PC", description: "Complete IT helpdesk system with ticket creation, assignment, status tracking, SLA monitoring, and reporting dashboard.", importance: "Every IT department needs ticketing. This demonstrates enterprise software design.", impact: "Directly deployable in college IT departments.", outcomes: ["Workflow automation","CRUD with MySQL","Role-based access"], future: "Add AI auto-routing, chatbot integration.", innovationScore: 62, resumeValue: "Medium", trending: false, steps: ["Design ticket workflow","Create DB schema","Build ticket creation","Implement assignment logic","Add status tracking","Build reports"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Web","Enterprise","Database"] },
    { id: "it4", title: "Password Manager with Zero-Knowledge Encryption", domain: "Cybersecurity", difficulty: "Hard", type: "Software", year: ["3rd","4th"], budget: "₹0 (Free)", time: "4-5 weeks", skills: ["React","Node.js","Cryptography"], tech: ["React","Node.js","AES-256","PBKDF2","PostgreSQL"], hardware: "PC", description: "Secure password manager like Bitwarden using zero-knowledge architecture where the server never sees plaintext passwords.", importance: "Password reuse causes 81% of breaches. Demonstrates advanced cryptography implementation.", impact: "Personal use and can be open-sourced for community use.", outcomes: ["Client-side encryption","Key derivation","Secure API design"], future: "Add browser extension, TOTP 2FA, team vaults.", innovationScore: 90, resumeValue: "Very High", trending: true, steps: ["Implement AES-256 encryption","Build key derivation with PBKDF2","Create vault structure","Build React UI","Add secure API","Test with pen-testing tools"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Security","Cryptography","Full-Stack"] },
    { id: "it5", title: "Real-Time Chat Application", domain: "Web", difficulty: "Medium", type: "Software", year: ["2nd","3rd"], budget: "₹0 (Free)", time: "3-4 weeks", skills: ["Node.js","Socket.io","React"], tech: ["React","Node.js","Socket.io","MongoDB","JWT"], hardware: "PC", description: "WhatsApp-like real-time chat with rooms, DMs, file sharing, emoji reactions, and online status indicators.", importance: "WebSocket and real-time communication skills are in top 5 most-requested backend skills.", impact: "Useful for college project groups, small teams.", outcomes: ["WebSocket protocol","Real-time events","State management"], future: "Add end-to-end encryption, video calls, bots.", innovationScore: 73, resumeValue: "High", trending: true, steps: ["Set up Socket.io server","Define event schema","Build chat rooms","Add DM functionality","Create React chat UI","Add file upload"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Web","Real-time","Full-Stack"] },
  ],
  "AI & ML": [
    { id: "aiml1", title: "Sign Language Recognition System", domain: "Computer Vision", difficulty: "Hard", type: "Software", year: ["3rd","4th"], budget: "₹500-1000", time: "5-7 weeks", skills: ["Python","OpenCV","Deep Learning"], tech: ["Python","TensorFlow","OpenCV","MediaPipe","Flask"], hardware: "Webcam, GPU recommended", description: "Real-time hand gesture recognition system that translates Indian Sign Language (ISL) to text using CNN and MediaPipe hand tracking.", importance: "40 million deaf individuals in India. This bridges the communication gap using AI.", impact: "Assistive technology for the deaf community, educational tools.", outcomes: ["CNN architecture","Gesture recognition","Real-time video processing"], future: "Add speech output, 2-way translation, mobile app.", innovationScore: 97, resumeValue: "Very High", trending: true, steps: ["Collect ISL gesture dataset","Preprocess with MediaPipe","Design CNN model","Train with augmentation","Build real-time pipeline","Create web demo"], youtube: "https://youtube.com", github: "https://github.com", tags: ["CV","Accessibility","Deep Learning"] },
    { id: "aiml2", title: "Emotion Detection from Facial Expressions", domain: "Computer Vision", difficulty: "Medium", type: "Software", year: ["2nd","3rd"], budget: "₹0 (Free)", time: "4-5 weeks", skills: ["Python","OpenCV","CNN"], tech: ["Python","Keras","OpenCV","FER2013 dataset","Flask"], hardware: "Webcam", description: "Detect 7 basic human emotions (happy, sad, angry, etc.) from live webcam feed using CNN trained on the FER2013 dataset.", importance: "Emotion AI market will reach $56B by 2027. Used in mental health, HR, automotive safety.", impact: "Mental health apps, student engagement monitoring, driver alertness systems.", outcomes: ["CNN design","Image classification","Realtime inference"], future: "Add voice emotion, integrate with mental health app.", innovationScore: 85, resumeValue: "Very High", trending: true, steps: ["Download FER2013","Build CNN architecture","Train with Keras","Real-time detection with OpenCV","Deploy Flask API","Create dashboard UI"], youtube: "https://youtube.com", github: "https://github.com", tags: ["CV","Healthcare","Deep Learning"] },
    { id: "aiml3", title: "Stock Price Prediction with LSTM", domain: "Finance AI", difficulty: "Medium", type: "Software", year: ["2nd","3rd","4th"], budget: "₹0 (Free)", time: "3-4 weeks", skills: ["Python","LSTM","Pandas"], tech: ["Python","TensorFlow","Pandas","yfinance","Streamlit"], hardware: "PC (GPU optional)", description: "Predict stock prices using LSTM (Long Short-Term Memory) neural networks trained on historical price data fetched via Yahoo Finance API.", importance: "Quantitative finance + ML is one of the highest-paying career tracks ($200K+).", impact: "Personal investment decision support, algorithmic trading foundation.", outcomes: ["Time series analysis","LSTM architecture","Financial data processing"], future: "Add sentiment analysis from news, portfolio optimization.", innovationScore: 84, resumeValue: "High", trending: true, steps: ["Fetch data with yfinance","Create sliding window sequences","Build LSTM model","Train and validate","Visualize predictions","Build Streamlit app"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Finance","LSTM","Data Science"] },
    { id: "aiml4", title: "AI Health Assistant Chatbot", domain: "Healthcare AI", difficulty: "Hard", type: "Software", year: ["3rd","4th"], budget: "₹0-500", time: "5-6 weeks", skills: ["Python","Rasa/GPT","React"], tech: ["Python","Rasa NLU","React","FastAPI","MongoDB"], hardware: "PC", description: "Intelligent health assistant that understands symptoms, provides first-aid guidance, answers medical FAQs, and recommends specialist consultation.", importance: "Healthcare chatbots will save $3.7B in costs by 2028. Combines NLP and medical knowledge.", impact: "Rural healthcare access, hospital pre-screening, mental health support.", outcomes: ["Intent classification","Medical NLP","Dialogue management"], future: "Integrate with patient records, prescription reminder, telemedicine.", innovationScore: 93, resumeValue: "Very High", trending: true, steps: ["Define medical intents","Build Rasa training data","Train NLU model","Create dialogue flows","Build React chat UI","Add medicine lookup API"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Healthcare","NLP","AI"] },
    { id: "aiml5", title: "Spam Email & SMS Detector", domain: "NLP", difficulty: "Easy", type: "Software", year: ["1st","2nd"], budget: "₹0 (Free)", time: "2-3 weeks", skills: ["Python","Sklearn","NLTK"], tech: ["Python","scikit-learn","NLTK","Streamlit"], hardware: "PC", description: "Classify emails and SMS messages as spam or ham using Naive Bayes and TF-IDF vectorization with a web interface for testing.", importance: "Excellent entry-level NLP project demonstrating full ML pipeline from data to deployment.", impact: "Can be integrated as a plugin for email clients.", outcomes: ["Text preprocessing","TF-IDF","Naive Bayes","Model evaluation"], future: "Add deep learning model, multi-language support.", innovationScore: 58, resumeValue: "Medium", trending: false, steps: ["Download SMS Spam Collection","Preprocess with NLTK","TF-IDF vectorization","Train Naive Bayes","Evaluate with F1 score","Deploy with Streamlit"], youtube: "https://youtube.com", github: "https://github.com", tags: ["NLP","ML","Beginner"] },
    { id: "aiml6", title: "Object Detection for Traffic Management", domain: "Computer Vision", difficulty: "Hard", type: "Software", year: ["3rd","4th"], budget: "₹2000-5000", time: "6-8 weeks", skills: ["Python","YOLOv8","OpenCV"], tech: ["Python","YOLOv8","OpenCV","DeepSORT","Flask"], hardware: "GPU strongly recommended, Camera", description: "Real-time vehicle detection and counting system using YOLOv8 to manage traffic signals dynamically based on vehicle density.", importance: "Smart traffic systems can reduce urban congestion by 30%. AI traffic management is a Smart City priority.", impact: "Government smart city projects, toll management, parking systems.", outcomes: ["Object detection","Multi-object tracking","Edge deployment"], future: "Raspberry Pi deployment, license plate recognition, incident detection.", innovationScore: 95, resumeValue: "Very High", trending: true, steps: ["Set up YOLOv8 environment","Collect traffic video data","Fine-tune on custom dataset","Implement DeepSORT tracking","Build traffic density logic","Create visualization dashboard"], youtube: "https://youtube.com", github: "https://github.com", tags: ["CV","Smart City","Deep Learning"] },
  ],
  "Data Science": [
    { id: "ds1", title: "COVID-19 Data Analysis Dashboard", domain: "Data Analysis", difficulty: "Easy", type: "Software", year: ["1st","2nd"], budget: "₹0 (Free)", time: "1-2 weeks", skills: ["Python","Pandas","Plotly"], tech: ["Python","Pandas","Plotly","Dash","Jupyter"], hardware: "PC", description: "Interactive dashboard analyzing COVID-19 data with trends, forecasts, and geographic visualization using WHO/Johns Hopkins datasets.", importance: "Perfect intro to data analysis, visualization, and storytelling with data.", impact: "Health policy understanding, journalism, public awareness.", outcomes: ["EDA","Data visualization","Dashboard building"], future: "Add prediction models, vaccine effectiveness analysis.", innovationScore: 60, resumeValue: "Medium", trending: false, steps: ["Download dataset","Clean with Pandas","Create Plotly charts","Build Dash dashboard","Add date filters","Deploy to Heroku"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Data Analysis","Visualization","Health"] },
    { id: "ds2", title: "Customer Churn Prediction", domain: "Business Analytics", difficulty: "Medium", type: "Software", year: ["2nd","3rd"], budget: "₹0 (Free)", time: "3-4 weeks", skills: ["Python","ML","Feature Engineering"], tech: ["Python","XGBoost","SHAP","Streamlit","Pandas"], hardware: "PC", description: "Predict which telecom customers will cancel their subscription using classification models with SHAP explainability for business insights.", importance: "Customer retention is 5x cheaper than acquisition. Churn prediction is a top business analytics use case.", impact: "Telecom, SaaS, banking, e-commerce companies.", outcomes: ["XGBoost","SHAP explanations","Business metrics","Model evaluation"], future: "Add A/B testing recommendations, real-time scoring API.", innovationScore: 80, resumeValue: "High", trending: true, steps: ["Download IBM Telco dataset","EDA and feature engineering","Train XGBoost classifier","Add SHAP explanations","Build Streamlit app","Present business insights"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Business","ML","Analytics"] },
    { id: "ds3", title: "Recommendation System (Netflix-style)", domain: "ML Systems", difficulty: "Hard", type: "Software", year: ["3rd","4th"], budget: "₹0 (Free)", time: "4-5 weeks", skills: ["Python","Collaborative Filtering","Matrix Factorization"], tech: ["Python","Surprise library","Pandas","Flask","React"], hardware: "PC", description: "Movie/product recommendation engine using collaborative filtering and matrix factorization on the MovieLens dataset with a web frontend.", importance: "Recommendation systems drive 35% of Amazon sales and 80% of Netflix viewing. Core data science skill.", impact: "E-commerce, streaming, news portals, social media.", outcomes: ["Collaborative filtering","SVD/ALS","Cold start problem","API serving"], future: "Add deep learning (NCF), session-based recommendations.", innovationScore: 88, resumeValue: "Very High", trending: true, steps: ["Load MovieLens dataset","Implement user-item matrix","Apply SVD factorization","Build similarity search","Create Flask API","Build React movie UI"], youtube: "https://youtube.com", github: "https://github.com", tags: ["ML","Recommendation","System Design"] },
  ],
  ECE: [
    { id: "ece1", title: "Smart Irrigation System using IoT", domain: "IoT", difficulty: "Medium", type: "Hardware", year: ["2nd","3rd"], budget: "₹1500-2500", time: "3-4 weeks", skills: ["Arduino/ESP32","Sensors","Web Dashboard"], tech: ["ESP32","Arduino IDE","MQTT","Node.js","React"], hardware: "ESP32, Soil moisture sensor, Relay, Water pump, Power supply", description: "Automated irrigation system that monitors soil moisture, temperature, and weather forecast to water plants optimally, reducing water usage by 40%.", importance: "India loses 60% of irrigation water to inefficiency. IoT agriculture is a ₹5000 Cr market.", impact: "Farmers, home gardens, greenhouse automation.", outcomes: ["ESP32 programming","Sensor interfacing","IoT cloud protocol","Remote control"], future: "Add solar power, AI weather prediction, mobile app.", innovationScore: 88, resumeValue: "High", trending: true, steps: ["Interface moisture sensor with ESP32","Program threshold logic","Set up MQTT broker","Build Node.js API","Create dashboard","Add manual override"], youtube: "https://youtube.com", github: "https://github.com", tags: ["IoT","Agriculture","ESP32"] },
    { id: "ece2", title: "RFID-Based Attendance System", domain: "Embedded", difficulty: "Easy", type: "Hardware", year: ["1st","2nd"], budget: "₹800-1500", time: "2-3 weeks", skills: ["Arduino","RFID","Database"], tech: ["Arduino Uno","RFID RC522","I2C LCD","Node.js","MySQL"], hardware: "Arduino Uno, RFID RC522 reader, RFID cards, I2C LCD 16x2", description: "Automated attendance system where students tap their RFID cards. Data logged to database with real-time display on LCD and web dashboard.", importance: "Classic embedded systems project combining hardware interfacing, communication protocols, and database integration.", impact: "Ready to deploy in any classroom or institution.", outcomes: ["SPI communication","RFID interfacing","I2C LCD","Node.js serial communication"], future: "Add NFC smartphone support, biometric backup.", innovationScore: 65, resumeValue: "Medium", trending: false, steps: ["Wire RFID RC522 to Arduino","Program card reading","Interface LCD display","Send data via serial","Build Node.js receiver","Create web dashboard"], youtube: "https://youtube.com", github: "https://github.com", tags: ["RFID","Arduino","Embedded"] },
    { id: "ece3", title: "Home Automation using ESP32 & Alexa", domain: "IoT", difficulty: "Medium", type: "Hardware", year: ["2nd","3rd"], budget: "₹2000-4000", time: "3-5 weeks", skills: ["ESP32","Alexa Skills Kit","Relays"], tech: ["ESP32","AWS Lambda","Alexa Skills Kit","MQTT","Firebase"], hardware: "ESP32, 4-Channel Relay module, Jumper wires, Power supply", description: "Control home appliances (lights, fans, AC) using voice commands via Amazon Alexa and a smartphone app, with energy monitoring.", importance: "Smart home market will reach $620B by 2030. Voice + IoT integration is the future.", impact: "Home energy saving, accessibility for elderly/disabled.", outcomes: ["Alexa skill development","AWS Lambda","Relay control","Cloud IoT"], future: "Add energy monitoring, AI schedule learning, Google Home support.", innovationScore: 91, resumeValue: "High", trending: true, steps: ["Wire relay to ESP32","Program ESP32 firmware","Create Alexa skill","Set up Lambda function","Connect with MQTT","Test voice commands"], youtube: "https://youtube.com", github: "https://github.com", tags: ["IoT","Alexa","Smart Home"] },
    { id: "ece4", title: "Automatic Street Light with Vehicle Detection", domain: "Embedded", difficulty: "Medium", type: "Hardware", year: ["2nd","3rd"], budget: "₹1000-2000", time: "2-3 weeks", skills: ["Arduino","IR Sensors","PWM"], tech: ["Arduino Uno","PIR sensors","LDR","LEDs","PWM controller"], hardware: "Arduino, PIR motion sensor, LDR, LED array, Transistors", description: "Energy-saving street lights that automatically turn on at night (LDR) and brighten when vehicles/pedestrians are detected (PIR), dimming otherwise.", importance: "Energy efficiency + automation. Perfect demonstration of sensor fusion and PWM control.", impact: "30-50% energy saving vs traditional fixed street lights.", outcomes: ["ADC with LDR","PIR interrupts","PWM dimming","Sensor fusion"], future: "Add solar panel, accident detection, smart city integration.", innovationScore: 70, resumeValue: "Medium", trending: false, steps: ["Interface LDR with Arduino","Add PIR sensor","Program dimming logic","Build circuit on breadboard","Test in dark conditions","Document energy savings"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Arduino","Sensors","Energy"] },
    { id: "ece5", title: "Wireless Health Monitoring System", domain: "Biomedical", difficulty: "Hard", type: "Hardware", year: ["3rd","4th"], budget: "₹3000-6000", time: "5-7 weeks", skills: ["ESP32","Medical Sensors","BLE","Cloud"], tech: ["ESP32","MAX30102","DS18B20","BLE","Firebase","React Native"], hardware: "ESP32, MAX30102 (SpO2+HR), DS18B20 temperature, OLED display", description: "Wearable health monitor measuring heart rate, SpO2, and body temperature with BLE transmission to smartphone app and cloud storage.", importance: "Wearables market is $160B. Post-COVID health monitoring demand has tripled.", impact: "Elderly care, sports performance, ICU monitoring.", outcomes: ["I2C sensor interfacing","BLE communication","Signal processing","Mobile app"], future: "Add ECG, fall detection, AI anomaly alerts.", innovationScore: 95, resumeValue: "Very High", trending: true, steps: ["Interface MAX30102 with ESP32","Read SpO2 and HR values","Add temperature sensor","Implement BLE stack","Build React Native app","Add Firebase cloud sync"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Biomedical","BLE","IoT"] },
    { id: "ece6", title: "Line Following Robot with Obstacle Avoidance", domain: "Robotics", difficulty: "Easy", type: "Hardware", year: ["1st","2nd"], budget: "₹1000-2000", time: "2-3 weeks", skills: ["Arduino","Motor Control","PID"], tech: ["Arduino Uno","IR sensors","HC-SR04 ultrasonic","L298N motor driver"], hardware: "Arduino, IR sensor array, Ultrasonic sensor, L298N, DC motors, Chassis", description: "Autonomous robot that follows a black line on white surface and avoids obstacles using ultrasonic sensor with PID controller for smooth movement.", importance: "Foundation of autonomous robotics. Teaches motor control, PID, and sensor integration.", impact: "Warehouse automation concept, maze solving, robotics competitions.", outcomes: ["PID control","IR sensor array","Ultrasonic ranging","Motor PWM"], future: "Add camera for vision-based navigation, Raspberry Pi upgrade.", innovationScore: 72, resumeValue: "High", trending: false, steps: ["Assemble robot chassis","Interface IR sensor array","Add ultrasonic sensor","Implement PID line following","Add obstacle avoidance logic","Tune PID constants"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Robotics","Arduino","PID"] },
  ],
  EEE: [
    { id: "eee1", title: "Solar Tracking System with Dual Axis", domain: "Renewable Energy", difficulty: "Hard", type: "Hardware", year: ["3rd","4th"], budget: "₹4000-7000", time: "5-7 weeks", skills: ["Arduino","Servo Motors","LDR Sensors","PID"], tech: ["Arduino Mega","Servo motors","LDR sensors","Solar panel","ADC"], hardware: "Arduino, 2x Servo motors, 4x LDR sensors, Small solar panel, Mounting structure", description: "Dual-axis solar tracker that follows the sun's position using LDR sensors to maximize solar energy output by 30-40% vs fixed panel.", importance: "Solar energy optimization is critical for India's 500GW solar target by 2030.", impact: "Increased energy yield for solar farms, rooftop installations.", outcomes: ["Servo motor control","Differential LDR sensing","Energy measurement","PID control"], future: "Add GPS-based astronomical tracking, battery storage management.", innovationScore: 89, resumeValue: "High", trending: true, steps: ["Build mechanical structure","Mount servo motors","Wire 4 LDR sensors","Program tracking algorithm","Add solar panel","Measure and compare energy output"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Solar","Renewable","Arduino"] },
    { id: "eee2", title: "Smart Energy Meter with IoT Monitoring", domain: "IoT", difficulty: "Medium", type: "Hardware", year: ["2nd","3rd"], budget: "₹2000-4000", time: "4-5 weeks", skills: ["ESP32","Current Sensors","MQTT","Dashboard"], tech: ["ESP32","ACS712 current sensor","ZMPT101B voltage sensor","MQTT","Grafana"], hardware: "ESP32, ACS712 (20A), ZMPT101B transformer, CT clamps, Display", description: "Non-invasive smart energy meter measuring voltage, current, power factor, and kWh consumption with real-time IoT dashboard and billing calculation.", importance: "India's electricity theft costs ₹20,000 Cr annually. Smart metering is mandatory for all consumers by 2025.", impact: "Home energy management, industrial monitoring, prepaid billing systems.", outcomes: ["AC sensing","Power calculations","MQTT protocol","Grafana dashboards"], future: "Add TOU billing, anomaly detection, grid-tie inverter monitoring.", innovationScore: 86, resumeValue: "High", trending: true, steps: ["Wire voltage and current sensors","Calibrate measurements","Program ESP32 firmware","Set up MQTT broker","Create Grafana dashboard","Add billing calculation"], youtube: "https://youtube.com", github: "https://github.com", tags: ["IoT","Energy","ESP32"] },
    { id: "eee3", title: "Power Factor Correction System", domain: "Power Systems", difficulty: "Hard", type: "Hardware", year: ["3rd","4th"], budget: "₹5000-10000", time: "6-8 weeks", skills: ["Circuit Design","DSP","Control Systems"], tech: ["DSP controller","Current transformers","Capacitor bank","Relay control"], hardware: "DSP board, CTs, Capacitor bank, Solid-state relays, Oscilloscope", description: "Automatic power factor correction system that monitors industrial load PF and switches capacitor banks to maintain PF > 0.95, reducing electricity bills.", importance: "Low PF causes 15-20% energy wastage. Industries pay PF surcharge. This is direct cost saving.", impact: "Industrial plants, commercial buildings, reducing utility penalties.", outcomes: ["PF measurement","Zero crossing detection","Capacitor switching","Control system design"], future: "Implement active PFC with IGBT, harmonic filtering.", innovationScore: 85, resumeValue: "High", trending: false, steps: ["Design CT measurement circuit","Calculate PF with DSP","Design capacitor bank","Implement switching logic","Test with inductive load","Measure PF improvement"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Power Systems","DSP","Industry"] },
    { id: "eee4", title: "Wireless Power Transfer System", domain: "Power Electronics", difficulty: "Hard", type: "Hardware", year: ["3rd","4th"], budget: "₹3000-6000", time: "5-6 weeks", skills: ["Resonant Circuits","Coil Design","Power Electronics"], tech: ["555 timer IC","MOSFET driver","Resonant coils","Rectifier circuit"], hardware: "Copper coils, MOSFETs, 555 timer, Capacitors, LED load", description: "Inductive wireless power transfer system using resonant coupling to transfer power across air gap, demonstrating the principles used in wireless chargers.", importance: "Wireless charging market will reach $40B by 2030. Understanding resonant inductive coupling is essential.", impact: "EV charging, medical implants, consumer electronics.", outcomes: ["LC resonant circuits","Inductive coupling","Efficiency optimization","MOSFET driving"], future: "Long-range transfer, multiple receiver support, feedback control.", innovationScore: 88, resumeValue: "High", trending: true, steps: ["Wind transmitter and receiver coils","Calculate resonant frequency","Build MOSFET driver circuit","Tune for maximum efficiency","Test at various distances","Measure transfer efficiency"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Power Electronics","Wireless","Research"] },
  ],
  Mechanical: [
    { id: "mech1", title: "Automatic Pneumatic Bumper for Vehicles", domain: "Safety", difficulty: "Hard", type: "Hardware", year: ["3rd","4th"], budget: "₹5000-10000", time: "6-8 weeks", skills: ["Pneumatics","Control Systems","Mechanical Design"], tech: ["Ultrasonic sensor","Arduino","Pneumatic cylinder","Solenoid valve","Air compressor"], hardware: "Pneumatic cylinder, Solenoid valve, Air compressor, Arduino, Ultrasonic sensor", description: "Automatic emergency bumper that deploys instantly when the vehicle senses imminent collision, protecting passengers and reducing impact force by 60%.", importance: "Road accidents kill 1.5 lakh people in India annually. Active safety systems are the future of automotive safety.", impact: "Automotive safety, retrofittable on existing vehicles.", outcomes: ["Pneumatic system design","Sensor-actuator integration","Control logic","Mechanical fabrication"], future: "Add accelerometer for crash severity, AI prediction.", innovationScore: 90, resumeValue: "High", trending: true, steps: ["Design bumper mechanism","Select pneumatic cylinder size","Build control circuit","Program Arduino","Test deployment speed","Measure impact force"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Automotive","Safety","Pneumatics"] },
    { id: "mech2", title: "Solar-Powered Water Pumping System", domain: "Renewable Energy", difficulty: "Medium", type: "Hardware", year: ["2nd","3rd"], budget: "₹8000-15000", time: "4-6 weeks", skills: ["Electrical","Fluid Mechanics","Solar Systems"], tech: ["Solar panel","MPPT charge controller","DC motor pump","Battery storage"], hardware: "Solar panel (50W), MPPT controller, DC pump, Battery (12V), Float switches", description: "Solar-powered water pumping system for irrigation and drinking water with MPPT optimization, battery storage, and automatic level control.", importance: "1 in 6 Indians lack clean water access. Solar pumping provides off-grid water supply to rural areas.", impact: "Agriculture, rural water supply, disaster relief camps.", outcomes: ["Solar system sizing","MPPT operation","DC motor selection","Fluid system design"], future: "Add IoT monitoring, water quality sensing, AI flow optimization.", innovationScore: 82, resumeValue: "High", trending: true, steps: ["Size solar panel for pump load","Select MPPT controller","Install battery bank","Set up DC pump","Add level float switches","Test and measure performance"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Solar","Renewable","Water"] },
    { id: "mech3", title: "Conveyor Belt with Object Sorting", domain: "Automation", difficulty: "Medium", type: "Hardware", year: ["2nd","3rd"], budget: "₹6000-12000", time: "4-5 weeks", skills: ["Arduino","Color Sensors","Motor Control"], tech: ["Arduino","TCS3200 color sensor","Servo motors","Stepper motor","Conveyor belt"], hardware: "Conveyor belt kit, Color sensor, Servo arms, Stepper motor, Arduino Mega", description: "Automated conveyor belt that sorts objects by color using TCS3200 color sensor, with PLC-style logic and production counter display.", importance: "Industrial automation concept directly applicable to manufacturing, quality control, and packaging industries.", impact: "Manufacturing quality control, pharmaceutical sorting, food processing.", outcomes: ["Color sensing","Conveyor control","Industrial logic","PLC concepts"], future: "Add vision-based sorting with camera, weight sensing.", innovationScore: 78, resumeValue: "High", trending: false, steps: ["Build conveyor belt mechanism","Interface color sensor","Program detection logic","Add servo sorter arms","Build display panel","Test with different colored objects"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Automation","Arduino","Manufacturing"] },
    { id: "mech4", title: "Wind Turbine Power Generator (Small Scale)", domain: "Renewable Energy", difficulty: "Hard", type: "Hardware", year: ["3rd","4th"], budget: "₹4000-8000", time: "5-7 weeks", skills: ["Aerodynamics","Generator Design","Power Electronics"], tech: ["DC generator","Wind blades","Charge controller","Battery","Anemometer"], hardware: "Brushless DC motor (as generator), 3D printed blades, Rectifier circuit, Battery", description: "Small-scale vertical axis wind turbine generating electricity from wind with battery charging capability and power output monitoring.", importance: "Wind + Solar hybrid systems are the future of decentralized energy. Understanding wind power fundamentals.", impact: "Remote area electrification, disaster relief power, campus demonstration.", outcomes: ["Aerodynamic blade design","AC-DC conversion","Battery charging","Power measurement"], future: "Hybrid solar-wind system, grid-tie inverter, auto yaw control.", innovationScore: 87, resumeValue: "High", trending: false, steps: ["Design VAWT blade profile","Fabricate blades (3D print/wood)","Mount DC generator","Build rectifier/charge circuit","Add battery bank","Measure power output vs wind speed"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Wind","Renewable","Mechanical"] },
  ],
  Civil: [
    { id: "civil1", title: "Smart Traffic Management System", domain: "Smart City", difficulty: "Hard", type: "Hardware+Software", year: ["3rd","4th"], budget: "₹5000-10000", time: "6-8 weeks", skills: ["Python","Computer Vision","Arduino","Simulation"], tech: ["Python","YOLOv5","Arduino","Traffic simulation","SUMO software"], hardware: "Camera/webcam, Arduino, LEDs (traffic lights), Raspberry Pi optional", description: "AI-based adaptive traffic signal control that adjusts green signal duration based on real-time vehicle density detected by computer vision.", importance: "Urban congestion costs India $22B annually. Adaptive signals reduce wait time by 25-30%.", impact: "Smart city projects, municipal corporations, highway intersections.", outcomes: ["Computer vision","Adaptive algorithms","Traffic simulation","Hardware integration"], future: "Emergency vehicle priority, accident detection, 5G V2I communication.", innovationScore: 94, resumeValue: "Very High", trending: true, steps: ["Set up vehicle detection with YOLO","Count vehicles per lane","Design adaptive signal logic","Simulate with SUMO","Build physical model","Test and compare with fixed timing"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Smart City","CV","IoT"] },
    { id: "civil2", title: "Rainwater Harvesting Design & Analysis", domain: "Water Resources", difficulty: "Medium", type: "Software+Analysis", year: ["2nd","3rd"], budget: "₹500-1000", time: "3-4 weeks", skills: ["AutoCAD","Hydrology","Analysis"], tech: ["AutoCAD","QGIS","Excel","HydroCAD"], hardware: "PC, GPS for site survey (optional)", description: "Design a complete rainwater harvesting system for a building or campus using hydrology calculations, AutoCAD drawings, and cost-benefit analysis.", importance: "Water scarcity affects 600M Indians. RWH can meet 50-80% of household water needs.", impact: "Applicable to any residential or commercial building project.", outcomes: ["Hydrology calculations","CAD drafting","Cost analysis","Water balance"], future: "IoT sensors for monitoring, greywater recycling integration.", innovationScore: 72, resumeValue: "Medium", trending: false, steps: ["Survey site and roof area","Calculate rainfall runoff","Size storage tank","Design filtration","Draft AutoCAD layout","Calculate ROI and payback period"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Water","Design","AutoCAD"] },
    { id: "civil3", title: "Earthquake-Resistant Building Model", domain: "Structural", difficulty: "Hard", type: "Hardware+Analysis", year: ["3rd","4th"], budget: "₹3000-6000", time: "5-7 weeks", skills: ["Structural Analysis","Materials","SAP2000"], tech: ["SAP2000","AutoCAD","Physical model materials"], hardware: "Balsa wood/acrylic, Base isolator components, Shake table (build or borrow)", description: "Design and build a scaled structural model with base isolation or shear walls, test on shake table, and compare with regular structure using SAP2000 simulation.", importance: "Earthquakes kill 10,000 people annually. Earthquake-resistant design is mandatory by IS codes.", impact: "Building construction practices, seismic zone planning, disaster preparedness.", outcomes: ["Structural dynamics","SAP2000 simulation","Physical model building","IS code compliance"], future: "Smart structure with SMA dampers, seismic health monitoring with sensors.", innovationScore: 91, resumeValue: "Very High", trending: false, steps: ["Study IS 1893 seismic code","Design with SAP2000","Build physical model","Test on shake table","Compare results with simulation","Document failure modes"], youtube: "https://youtube.com", github: "https://github.com", tags: ["Structural","Seismic","Design"] },
    { id: "civil4", title: "Water Quality Monitoring System", domain: "Environmental", difficulty: "Medium", type: "Hardware", year: ["2nd","3rd"], budget: "₹3000-6000", time: "4-5 weeks", skills: ["Arduino","Water Sensors","IoT Dashboard"], tech: ["Arduino/ESP32","pH sensor","TDS sensor","Turbidity sensor","Blynk IoT"], hardware: "ESP32, pH sensor, TDS meter sensor, Turbidity sensor, OLED display", description: "IoT-based water quality monitoring system measuring pH, TDS, turbidity, and temperature with real-time dashboard and alerts when parameters exceed WHO limits.", importance: "80% of India's diseases are water-borne. Real-time monitoring can prevent outbreaks.", impact: "Municipal water supply, rural water sources, industrial effluent monitoring.", outcomes: ["Multi-sensor interfacing","IoT data pipeline","Water quality standards","Alert systems"], future: "Predictive contamination modeling, drone-based river monitoring.", innovationScore: 88, resumeValue: "High", trending: true, steps: ["Wire all sensors to ESP32","Calibrate pH sensor","Program data collection","Set up Blynk dashboard","Define alert thresholds","Test with different water samples"], youtube: "https://youtube.com", github: "https://github.com", tags: ["IoT","Environment","Water"] },
  ],
};

const ALL_PROJECTS = Object.values(PROJECT_DB).flat();

const BRANCHES = [
  { id: "CSE", name: "Computer Science", short: "CSE", color: "#3B82F6", icon: "💻", count: PROJECT_DB.CSE.length },
  { id: "IT", name: "Information Technology", short: "IT", color: "#8B5CF6", icon: "🌐", count: PROJECT_DB.IT.length },
  { id: "AI & ML", name: "AI & Machine Learning", short: "AI/ML", color: "#EC4899", icon: "🤖", count: PROJECT_DB["AI & ML"].length },
  { id: "Data Science", name: "Data Science", short: "DS", color: "#14B8A6", icon: "📊", count: PROJECT_DB["Data Science"].length },
  { id: "ECE", name: "Electronics & Comm.", short: "ECE", color: "#F59E0B", icon: "📡", count: PROJECT_DB.ECE.length },
  { id: "EEE", name: "Electrical & Electronics", short: "EEE", color: "#EF4444", icon: "⚡", count: PROJECT_DB.EEE.length },
  { id: "Mechanical", name: "Mechanical Engineering", short: "MECH", color: "#6366F1", icon: "⚙️", count: PROJECT_DB.Mechanical.length },
  { id: "Civil", name: "Civil Engineering", short: "CIVIL", color: "#10B981", icon: "🏗️", count: PROJECT_DB.Civil.length },
];

const DOMAIN_COLORS = {
  "AI": "#3B82F6", "Web": "#8B5CF6", "IoT": "#10B981", "Blockchain": "#F59E0B",
  "Computer Vision": "#EC4899", "NLP": "#6366F1", "Cybersecurity": "#EF4444",
  "Cloud": "#14B8A6", "Robotics": "#F97316", "Renewable Energy": "#84CC16",
  "Embedded": "#06B6D4", "Power Systems": "#A855F7", "Smart City": "#0EA5E9",
  "Data Analysis": "#F59E0B", "Business Analytics": "#EC4899", "ML Systems": "#3B82F6",
  "Biomedical": "#10B981", "Structural": "#6366F1", "Environmental": "#84CC16",
  "Finance AI": "#F97316", "Healthcare AI": "#14B8A6", "Safety": "#EF4444",
  "Automation": "#8B5CF6", "Mobile": "#3B82F6",
};

const DIFF_COLORS = { Easy: "#10B981", Medium: "#F59E0B", Hard: "#EF4444" };

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

function Header({ page, setPage, darkMode, setDarkMode, searchQuery, setSearchQuery }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const navItems = ["home","generate","browse","trending","resources","about"];

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: darkMode
        ? scrolled ? "rgba(5,5,20,0.95)" : "transparent"
        : scrolled ? "rgba(255,255,255,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? `1px solid ${darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}` : "none",
      transition: "all 0.3s ease",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", gap: "1.5rem", height: 70 }}>
        {/* Logo */}
        <div onClick={() => setPage("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "0.6rem", flexShrink: 0 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #FF6B35, #FF9A3C)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, boxShadow: "0 4px 12px rgba(255,107,53,0.4)" }}>🐝</div>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.3rem", background: "linear-gradient(135deg, #FF6B35, #FF9A3C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>ProjectHive</span>
        </div>

        {/* Search */}
        <div style={{ flex: 1, maxWidth: 400, position: "relative" }}>
          <input
            value={searchQuery}
            onChange={e => { setSearchQuery(e.target.value); if(e.target.value) setPage("search"); }}
            placeholder="Search 80+ projects..."
            style={{
              width: "100%", padding: "0.5rem 1rem 0.5rem 2.5rem",
              borderRadius: 999, border: `1px solid ${darkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)"}`,
              background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
              color: darkMode ? "#fff" : "#1a1a2e", fontSize: "0.9rem", outline: "none",
              transition: "all 0.2s",
            }}
          />
          <span style={{ position: "absolute", left: "0.8rem", top: "50%", transform: "translateY(-50%)", fontSize: "0.9rem", opacity: 0.5 }}>🔍</span>
        </div>

        {/* Nav */}
        <nav style={{ display: "flex", gap: "0.2rem", alignItems: "center" }}>
          {navItems.map(n => (
            <button key={n} onClick={() => setPage(n)} style={{
              background: page === n ? "linear-gradient(135deg, #FF6B35, #FF9A3C)" : "transparent",
              color: page === n ? "#fff" : darkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)",
              border: "none", borderRadius: 8, padding: "0.4rem 0.8rem",
              cursor: "pointer", fontSize: "0.85rem", fontWeight: page === n ? 700 : 500,
              textTransform: "capitalize", transition: "all 0.2s",
            }}>
              {n === "home" ? "Home" : n === "generate" ? "Generator" : n === "browse" ? "Browse" : n === "trending" ? "Trending" : n === "resources" ? "Resources" : "About"}
            </button>
          ))}
        </nav>

        {/* Dark mode */}
        <button onClick={() => setDarkMode(!darkMode)} style={{
          background: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)",
          border: "none", borderRadius: 8, padding: "0.4rem 0.7rem",
          cursor: "pointer", fontSize: "1rem", flexShrink: 0,
        }}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}

function HeroSection({ setPage, darkMode }) {
  const [count, setCount] = useState(0);
  useEffect(() => { let i = 0; const t = setInterval(() => { i += 2; setCount(i); if(i >= 80) clearInterval(t); }, 20); return () => clearInterval(t); }, []);

  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: darkMode
        ? "linear-gradient(135deg, #050514 0%, #0a0a2e 40%, #0d0d1e 100%)"
        : "linear-gradient(135deg, #fff7f3 0%, #fff3ec 40%, #fefefe 100%)",
      position: "relative", overflow: "hidden", paddingTop: 80,
    }}>
      {/* Animated orbs */}
      {[{x:"15%",y:"20%",s:400,c:"rgba(255,107,53,0.08)"},{x:"70%",y:"60%",s:500,c:"rgba(59,130,246,0.08)"},{x:"80%",y:"10%",s:300,c:"rgba(139,92,246,0.06)"}].map((o,i)=>(
        <div key={i} style={{ position:"absolute",left:o.x,top:o.y,width:o.s,height:o.s,borderRadius:"50%",background:o.c,filter:"blur(80px)",animation:`float ${3+i}s ease-in-out infinite alternate`,pointerEvents:"none" }} />
      ))}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Space+Grotesk:wght@300;400;500;600&display=swap');
        @keyframes float { from{transform:translateY(0)} to{transform:translateY(-20px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(255,107,53,0.4)} 50%{box-shadow:0 0 0 20px rgba(255,107,53,0)} }
        @keyframes shimmer { from{background-position:-200% center} to{background-position:200% center} }
        .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease !important; }
        .card-hover:hover { transform: translateY(-6px) !important; box-shadow: 0 20px 40px rgba(0,0,0,0.2) !important; }
        .btn-glow:hover { box-shadow: 0 0 30px rgba(255,107,53,0.5) !important; transform: translateY(-2px) !important; }
        * { box-sizing: border-box; }
        input::placeholder { color: inherit; opacity: 0.5; }
      `}</style>

      <div style={{ textAlign: "center", maxWidth: 860, padding: "0 1.5rem", position: "relative", zIndex: 2 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: darkMode ? "rgba(255,107,53,0.1)" : "rgba(255,107,53,0.08)", border: "1px solid rgba(255,107,53,0.25)", borderRadius: 999, padding: "0.4rem 1rem", marginBottom: "1.5rem", animation: "fadeUp 0.6s ease both" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF6B35", display: "inline-block", animation: "pulse 2s infinite" }} />
          <span style={{ color: "#FF6B35", fontSize: "0.85rem", fontWeight: 600 }}>{count}+ Projects across 8 Engineering Branches</span>
        </div>

        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1.1, margin: "0 0 1.2rem", animation: "fadeUp 0.6s 0.1s ease both", opacity: 0, animationFillMode: "forwards", color: darkMode ? "#fff" : "#1a1a2e" }}>
          Discover Your Perfect<br />
          <span style={{ background: "linear-gradient(135deg, #FF6B35 0%, #FF9A3C 50%, #FFB347 100%)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "shimmer 3s linear infinite" }}>
            Engineering Project
          </span>
        </h1>

        <p style={{ fontSize: "1.15rem", color: darkMode ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.55)", maxWidth: 560, margin: "0 auto 2.5rem", lineHeight: 1.7, animation: "fadeUp 0.6s 0.2s ease both", opacity: 0, animationFillMode: "forwards", fontFamily: "'Space Grotesk', sans-serif" }}>
          AI-powered project recommendations tailored to your branch, year, and interests. Build projects that matter.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", animation: "fadeUp 0.6s 0.3s ease both", opacity: 0, animationFillMode: "forwards" }}>
          <button onClick={() => setPage("generate")} className="btn-glow" style={{
            background: "linear-gradient(135deg, #FF6B35, #FF9A3C)", color: "#fff",
            border: "none", borderRadius: 14, padding: "0.9rem 2.2rem",
            fontSize: "1rem", fontWeight: 700, cursor: "pointer", transition: "all 0.2s",
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            🚀 Generate Project Ideas
          </button>
          <button onClick={() => setPage("browse")} style={{
            background: "transparent", color: darkMode ? "#fff" : "#1a1a2e",
            border: `2px solid ${darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"}`,
            borderRadius: 14, padding: "0.9rem 2.2rem",
            fontSize: "1rem", fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            Browse by Branch →
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "3rem", justifyContent: "center", marginTop: "3.5rem", animation: "fadeUp 0.6s 0.4s ease both", opacity: 0, animationFillMode: "forwards" }}>
          {[["80+","Projects"],["8","Branches"],["4","Difficulty Levels"],["Free","Forever"]].map(([n,l])=>(
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.8rem", fontWeight: 800, color: "#FF6B35" }}>{n}</div>
              <div style={{ fontSize: "0.8rem", color: darkMode ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.45)", fontFamily: "'Space Grotesk', sans-serif" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BranchGrid({ setPage, setActiveBranch, darkMode }) {
  return (
    <section style={{ padding: "5rem 1.5rem", background: darkMode ? "#0a0a1e" : "#fafafa" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "2.2rem", fontWeight: 800, color: darkMode ? "#fff" : "#1a1a2e", margin: "0 0 0.5rem" }}>Browse by Branch</h2>
          <p style={{ color: darkMode ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)", fontFamily: "'Space Grotesk', sans-serif" }}>Select your engineering branch to explore tailored projects</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1.2rem" }}>
          {BRANCHES.map((b) => (
            <div key={b.id} className="card-hover" onClick={() => { setActiveBranch(b.id); setPage("browse"); }} style={{
              background: darkMode ? "rgba(255,255,255,0.04)" : "#fff",
              border: `1px solid ${darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
              borderRadius: 16, padding: "1.8rem", cursor: "pointer",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: b.color, borderRadius: "16px 16px 0 0" }} />
              <div style={{ fontSize: "2.5rem", marginBottom: "0.8rem" }}>{b.icon}</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: darkMode ? "#fff" : "#1a1a2e", marginBottom: "0.3rem" }}>{b.name}</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
                <span style={{ background: `${b.color}20`, color: b.color, borderRadius: 999, padding: "0.25rem 0.7rem", fontSize: "0.8rem", fontWeight: 600 }}>{b.short}</span>
                <span style={{ fontSize: "0.85rem", color: darkMode ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)" }}>{b.count} projects</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, onClick, darkMode, saved, onSave }) {
  const diffColor = DIFF_COLORS[project.difficulty] || "#6B7280";
  const domainColor = DOMAIN_COLORS[project.domain] || "#6B7280";
  return (
    <div className="card-hover" onClick={onClick} style={{
      background: darkMode ? "rgba(255,255,255,0.04)" : "#fff",
      border: `1px solid ${darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
      borderRadius: 16, padding: "1.5rem", cursor: "pointer", position: "relative",
    }}>
      {project.trending && (
        <div style={{ position: "absolute", top: "1rem", right: "1rem", background: "linear-gradient(135deg,#FF6B35,#FF9A3C)", color: "#fff", borderRadius: 999, padding: "0.2rem 0.6rem", fontSize: "0.7rem", fontWeight: 700 }}>🔥 Trending</div>
      )}
      <button onClick={e => { e.stopPropagation(); onSave(project.id); }} style={{
        position: "absolute", bottom: "1rem", right: "1rem",
        background: saved ? "rgba(255,107,53,0.15)" : "transparent",
        border: `1px solid ${saved ? "#FF6B35" : darkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)"}`,
        borderRadius: 8, padding: "0.3rem 0.5rem", cursor: "pointer", fontSize: "0.85rem",
      }}>
        {saved ? "❤️" : "🤍"}
      </button>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
        <span style={{ background: `${diffColor}20`, color: diffColor, borderRadius: 999, padding: "0.2rem 0.7rem", fontSize: "0.75rem", fontWeight: 700 }}>{project.difficulty}</span>
        <span style={{ background: `${domainColor}20`, color: domainColor, borderRadius: 999, padding: "0.2rem 0.7rem", fontSize: "0.75rem", fontWeight: 600 }}>{project.domain}</span>
        <span style={{ background: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)", color: darkMode ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.4)", borderRadius: 999, padding: "0.2rem 0.7rem", fontSize: "0.75rem" }}>{project.type}</span>
      </div>

      <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: darkMode ? "#fff" : "#1a1a2e", margin: "0 0 0.5rem", lineHeight: 1.3, paddingRight: "2rem" }}>{project.title}</h3>
      <p style={{ fontSize: "0.85rem", color: darkMode ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)", lineHeight: 1.6, margin: "0 0 1rem", fontFamily: "'Space Grotesk', sans-serif" }}>
        {project.description.substring(0, 90)}...
      </p>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {project.skills.slice(0,3).map(s => (
          <span key={s} style={{ background: darkMode ? "rgba(59,130,246,0.1)" : "rgba(59,130,246,0.08)", color: "#3B82F6", borderRadius: 6, padding: "0.15rem 0.5rem", fontSize: "0.72rem", fontWeight: 500 }}>{s}</span>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem", paddingTop: "0.75rem", borderTop: `1px solid ${darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}` }}>
        <span style={{ fontSize: "0.8rem", color: darkMode ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)" }}>⏱ {project.time}</span>
        <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
          <div style={{ width: 36, height: 6, borderRadius: 999, background: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)" }}>
            <div style={{ width: `${project.innovationScore}%`, height: "100%", borderRadius: 999, background: "linear-gradient(90deg,#FF6B35,#FF9A3C)" }} />
          </div>
          <span style={{ fontSize: "0.75rem", color: "#FF6B35", fontWeight: 600 }}>{project.innovationScore}</span>
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose, darkMode, saved, onSave }) {
  if (!project) return null;
  
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", padding: "1rem" }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{
        background: darkMode ? "#0d0d2e" : "#fff",
        borderRadius: 24, maxWidth: 780, width: "100%", maxHeight: "90vh",
        overflow: "auto", border: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
        boxShadow: "0 40px 80px rgba(0,0,0,0.4)",
      }}>
        {/* Header */}
        <div style={{ background: "linear-gradient(135deg, #FF6B35, #FF9A3C)", padding: "1.8rem 2rem", borderRadius: "24px 24px 0 0", position: "relative" }}>
          <button onClick={onClose} style={{ position: "absolute", top: "1.2rem", right: "1.2rem", background: "rgba(255,255,255,0.2)", border: "none", borderRadius: 8, padding: "0.4rem 0.7rem", color: "#fff", cursor: "pointer", fontSize: "1rem" }}>✕</button>
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginBottom: "1rem" }}>
            <span style={{ background: "rgba(255,255,255,0.2)", color: "#fff", borderRadius: 999, padding: "0.2rem 0.8rem", fontSize: "0.8rem", fontWeight: 700 }}>{project.difficulty}</span>
            <span style={{ background: "rgba(255,255,255,0.2)", color: "#fff", borderRadius: 999, padding: "0.2rem 0.8rem", fontSize: "0.8rem" }}>{project.domain}</span>
            {project.trending && <span style={{ background: "rgba(255,255,255,0.25)", color: "#fff", borderRadius: 999, padding: "0.2rem 0.8rem", fontSize: "0.8rem" }}>🔥 Trending</span>}
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.6rem", color: "#fff", margin: 0, paddingRight: "3rem" }}>{project.title}</h2>
        </div>

        <div style={{ padding: "1.8rem 2rem" }}>
          {/* Quick stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "0.8rem", marginBottom: "1.8rem" }}>
            {[
              ["⏱", "Time", project.time],
              ["💰", "Budget", project.budget],
              ["📈", "Resume Value", project.resumeValue],
              ["💡", "Innovation", `${project.innovationScore}/100`],
            ].map(([icon, label, val]) => (
              <div key={label} style={{ background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)", borderRadius: 12, padding: "0.9rem", textAlign: "center", border: `1px solid ${darkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"}` }}>
                <div style={{ fontSize: "1.2rem", marginBottom: "0.3rem" }}>{icon}</div>
                <div style={{ fontSize: "0.7rem", color: darkMode ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)", marginBottom: "0.2rem" }}>{label}</div>
                <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#FF6B35" }}>{val}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <Section title="📋 Project Description" darkMode={darkMode}>
            <p style={{ margin: 0, lineHeight: 1.7, color: darkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.65)", fontFamily: "'Space Grotesk', sans-serif" }}>{project.description}</p>
          </Section>

          {/* Skills & Tech */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.2rem" }}>
            <Section title="🛠 Skills Required" darkMode={darkMode}>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {project.skills.map(s => <Tag key={s} text={s} color="#3B82F6" darkMode={darkMode} />)}
              </div>
            </Section>
            <Section title="⚙️ Technologies" darkMode={darkMode}>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {project.tech.map(t => <Tag key={t} text={t} color="#8B5CF6" darkMode={darkMode} />)}
              </div>
            </Section>
          </div>

          <Section title="🔌 Hardware/Software Required" darkMode={darkMode}>
            <p style={{ margin: 0, color: darkMode ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.6)", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.9rem" }}>{project.hardware}</p>
          </Section>

          <Section title="🌍 Real-World Impact" darkMode={darkMode}>
            <p style={{ margin: 0, lineHeight: 1.6, color: darkMode ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.6)", fontFamily: "'Space Grotesk', sans-serif" }}>{project.impact}</p>
          </Section>

          <Section title="🎯 Learning Outcomes" darkMode={darkMode}>
            <ul style={{ margin: 0, padding: "0 0 0 1.2rem", color: darkMode ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.6)", fontFamily: "'Space Grotesk', sans-serif" }}>
              {project.outcomes.map(o => <li key={o} style={{ marginBottom: "0.3rem" }}>{o}</li>)}
            </ul>
          </Section>

          <Section title="🚀 Steps to Start" darkMode={darkMode}>
            <ol style={{ margin: 0, padding: "0 0 0 1.3rem", color: darkMode ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.6)", fontFamily: "'Space Grotesk', sans-serif" }}>
              {project.steps.map((s, i) => <li key={i} style={{ marginBottom: "0.4rem" }}>{s}</li>)}
            </ol>
          </Section>

          <Section title="🔮 Future Scope" darkMode={darkMode}>
            <p style={{ margin: 0, color: darkMode ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.6)", fontFamily: "'Space Grotesk', sans-serif" }}>{project.future}</p>
          </Section>

          {/* Actions */}
          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <button onClick={() => onSave(project.id)} style={{
              background: saved ? "linear-gradient(135deg,#FF6B35,#FF9A3C)" : "transparent",
              color: saved ? "#fff" : "#FF6B35",
              border: `2px solid #FF6B35`, borderRadius: 10, padding: "0.6rem 1.2rem",
              cursor: "pointer", fontWeight: 700, fontSize: "0.9rem",
            }}>
              {saved ? "❤️ Saved" : "🤍 Save Project"}
            </button>
            <a href={project.youtube} target="_blank" rel="noreferrer" style={{ background: "#FF0000", color: "#fff", borderRadius: 10, padding: "0.6rem 1.2rem", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem" }}>▶ YouTube Tutorial</a>
            <a href={project.github} target="_blank" rel="noreferrer" style={{ background: darkMode ? "rgba(255,255,255,0.1)" : "#1a1a2e", color: "#fff", borderRadius: 10, padding: "0.6rem 1.2rem", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem" }}>🐙 GitHub Reference</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children, darkMode }) {
  return (
    <div style={{ marginBottom: "1.2rem" }}>
      <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: darkMode ? "#fff" : "#1a1a2e", margin: "0 0 0.6rem" }}>{title}</h4>
      {children}
    </div>
  );
}

function Tag({ text, color, darkMode }) {
  return <span style={{ background: `${color}18`, color, borderRadius: 6, padding: "0.2rem 0.5rem", fontSize: "0.78rem", fontWeight: 500 }}>{text}</span>;
}

function GeneratorPage({ darkMode, savedProjects, setSavedProjects, setSelectedProject }) {
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");

  const [results, setResults] = useState([]);
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    setGenerated(false);
    setTimeout(() => {
      let pool = branch ? (PROJECT_DB[branch] || []) : ALL_PROJECTS;
      if (year) pool = pool.filter(p => p.year.includes(year));
      if (difficulty) pool = pool.filter(p => p.difficulty === difficulty);
      if (type) pool = pool.filter(p => p.type.includes(type));
      if (domain) pool = pool.filter(p => p.domain.toLowerCase().includes(domain.toLowerCase()));
      setResults(pool);
      setGenerated(true);
      setLoading(false);
    }, 1200);
  };

  const toggleSave = (id) => setSavedProjects(s => s.includes(id) ? s.filter(x=>x!==id) : [...s, id]);

 
  return (
    <div style={{ minHeight: "100vh", background: darkMode ? "#050514" : "#f5f5ff", paddingTop: 90 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "2.5rem", fontWeight: 800, color: darkMode ? "#fff" : "#1a1a2e", margin: "0 0 0.5rem" }}>🚀 Project Generator</h1>
          <p style={{ color: darkMode ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)", fontFamily: "'Space Grotesk', sans-serif" }}>Select your filters and discover perfect projects for you</p>
        </div>

        {/* Filter Panel */}
        <div style={{ background: darkMode ? "rgba(255,255,255,0.04)" : "#fff", borderRadius: 20, padding: "2rem", border: `1px solid ${darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`, marginBottom: "2.5rem", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
            {[
              ["🎓 Branch", branch, setBranch, ["","CSE","IT","AI & ML","Data Science","ECE","EEE","Mechanical","Civil"], ["All Branches","CSE","IT","AI & ML","Data Science","ECE","EEE","Mechanical","Civil"]],
              ["📅 Year", year, setYear, ["","1st Year","2nd Year","3rd Year","4th Year"], ["All Years","1st Year","2nd Year","3rd Year","4th Year"]],
              ["📊 Difficulty", difficulty, setDifficulty, ["","Easy","Medium","Hard"], ["All Levels","Easy","Medium","Hard"]],
              ["🔧 Type", type, setType, ["","Software","Hardware","Software+Analysis","Hardware+Software"], ["All Types","Software","Hardware","Hardware+Software","Software+Analysis"]],
            ].map(([label, val, setter, vals, labels]) => (
              <div key={label}>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: darkMode ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.5)", marginBottom: "0.4rem", fontFamily: "'Space Grotesk', sans-serif" }}>{label}</label>
                <select value={val} onChange={e => setter(e.target.value)} style={{
                  width: "100%", padding: "0.6rem 0.9rem", borderRadius: 10,
                  border: `1px solid ${darkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)"}`,
                  background: darkMode ? "rgba(255,255,255,0.06)" : "#fafafa",
                  color: darkMode ? "#fff" : "#1a1a2e", fontSize: "0.9rem", outline: "none",
                }}>
                  {vals.map((v, i) => <option key={v} value={v} style={{ background: darkMode ? "#1a1a3e" : "#fff" }}>{labels[i]}</option>)}
                </select>
              </div>
            ))}
          </div>

          <button onClick={handleGenerate} disabled={loading} style={{
            background: loading ? "rgba(255,107,53,0.5)" : "linear-gradient(135deg, #FF6B35, #FF9A3C)",
            color: "#fff", border: "none", borderRadius: 12, padding: "0.9rem 2.5rem",
            fontSize: "1rem", fontWeight: 700, cursor: loading ? "not-allowed" : "pointer",
            display: "flex", alignItems: "center", gap: "0.6rem", margin: "0 auto",
            transition: "all 0.2s", fontFamily: "'Space Grotesk', sans-serif",
          }}>
            {loading ? (
              <>
                <span style={{ display: "inline-block", animation: "spin 1s linear infinite", fontSize: "1.1rem" }}>⟳</span>
                Finding projects...
              </>
            ) : "✨ Generate Project Ideas"}
          </button>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>

        {/* Results */}
        {generated && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: darkMode ? "#fff" : "#1a1a2e", margin: 0 }}>
                {results.length > 0 ? `Found ${results.length} projects` : "No projects found"}
              </h3>
              {results.length > 0 && <span style={{ color: "rgba(255,107,53,0.8)", fontSize: "0.9rem" }}>Click any project for details →</span>}
            </div>
            {results.length === 0 ? (
              <div style={{ textAlign: "center", padding: "4rem", color: darkMode ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Try adjusting your filters</p>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.2rem" }}>
                {results.map(p => (
                  <ProjectCard key={p.id} project={p} onClick={() => setSelectedProject(p)} darkMode={darkMode} saved={savedProjects.includes(p.id)} onSave={toggleSave} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function BrowsePage({ darkMode, activeBranch, setActiveBranch, savedProjects, setSavedProjects, setSelectedProject }) {
  const [filter, setFilter] = useState({ difficulty: "", type: "", trending: false });
  const toggleSave = (id) => setSavedProjects(s => s.includes(id) ? s.filter(x=>x!==id) : [...s, id]);

  const projects = useMemo(() => {
    let pool = activeBranch ? (PROJECT_DB[activeBranch] || []) : ALL_PROJECTS;
    if (filter.difficulty) pool = pool.filter(p => p.difficulty === filter.difficulty);
    if (filter.type) pool = pool.filter(p => p.type.includes(filter.type));
    if (filter.trending) pool = pool.filter(p => p.trending);
    return pool;
  }, [activeBranch, filter]);

  return (
    <div style={{ minHeight: "100vh", background: darkMode ? "#050514" : "#f5f5ff", paddingTop: 90 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1.5rem" }}>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "2.2rem", fontWeight: 800, color: darkMode ? "#fff" : "#1a1a2e", marginBottom: "2rem" }}>Browse Projects</h1>

        {/* Branch tabs */}
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          <button onClick={() => setActiveBranch("")} style={{ background: !activeBranch ? "linear-gradient(135deg,#FF6B35,#FF9A3C)" : "transparent", color: !activeBranch ? "#fff" : darkMode ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.5)", border: `1px solid ${!activeBranch ? "transparent" : darkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)"}`, borderRadius: 999, padding: "0.45rem 1rem", cursor: "pointer", fontWeight: 600, fontSize: "0.85rem" }}>All</button>
          {BRANCHES.map(b => (
            <button key={b.id} onClick={() => setActiveBranch(b.id)} style={{ background: activeBranch === b.id ? b.color : "transparent", color: activeBranch === b.id ? "#fff" : darkMode ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.5)", border: `1px solid ${activeBranch === b.id ? "transparent" : darkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)"}`, borderRadius: 999, padding: "0.45rem 1rem", cursor: "pointer", fontWeight: 600, fontSize: "0.85rem", transition: "all 0.2s" }}>
              {b.icon} {b.short}
            </button>
          ))}
        </div>

        {/* Sub-filters */}
        <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginBottom: "2rem", alignItems: "center" }}>
          {[["Easy","Easy","#10B981"],["Medium","Medium","#F59E0B"],["Hard","Hard","#EF4444"]].map(([v,l,c]) => (
            <button key={v} onClick={() => setFilter(f => ({...f, difficulty: f.difficulty === v ? "" : v}))} style={{
              background: filter.difficulty === v ? `${c}20` : "transparent",
              color: filter.difficulty === v ? c : darkMode ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.45)",
              border: `1px solid ${filter.difficulty === v ? c : darkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)"}`,
              borderRadius: 8, padding: "0.35rem 0.8rem", cursor: "pointer", fontSize: "0.82rem", fontWeight: 600,
            }}>{l}</button>
          ))}
          <button onClick={() => setFilter(f => ({...f, trending: !f.trending}))} style={{ background: filter.trending ? "rgba(255,107,53,0.15)" : "transparent", color: filter.trending ? "#FF6B35" : darkMode ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.45)", border: `1px solid ${filter.trending ? "#FF6B35" : darkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)"}`, borderRadius: 8, padding: "0.35rem 0.8rem", cursor: "pointer", fontSize: "0.82rem", fontWeight: 600 }}>🔥 Trending</button>
          <span style={{ color: darkMode ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)", fontSize: "0.85rem", marginLeft: "auto" }}>{projects.length} projects</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.2rem" }}>
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} onClick={() => setSelectedProject(p)} darkMode={darkMode} saved={savedProjects.includes(p.id)} onSave={toggleSave} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TrendingPage({ darkMode, savedProjects, setSavedProjects, setSelectedProject }) {
  const toggleSave = (id) => setSavedProjects(s => s.includes(id) ? s.filter(x=>x!==id) : [...s, id]);
  const trending = ALL_PROJECTS.filter(p => p.trending).sort((a,b) => b.innovationScore - a.innovationScore);
  const innovative = ALL_PROJECTS.sort((a,b) => b.innovationScore - a.innovationScore).slice(0,8);

  return (
    <div style={{ minHeight: "100vh", background: darkMode ? "#050514" : "#f5f5ff", paddingTop: 90 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1.5rem" }}>
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.8rem", fontWeight: 800, color: darkMode ? "#fff" : "#1a1a2e", marginBottom: "1.5rem" }}>🔥 Trending Projects</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.2rem" }}>
            {trending.map(p => <ProjectCard key={p.id} project={p} onClick={() => setSelectedProject(p)} darkMode={darkMode} saved={savedProjects.includes(p.id)} onSave={toggleSave} />)}
          </div>
        </div>
        <div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.8rem", fontWeight: 800, color: darkMode ? "#fff" : "#1a1a2e", marginBottom: "1.5rem" }}>💡 Most Innovative Projects</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.2rem" }}>
            {innovative.map(p => <ProjectCard key={p.id} project={p} onClick={() => setSelectedProject(p)} darkMode={darkMode} saved={savedProjects.includes(p.id)} onSave={toggleSave} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

function ResourcesPage({ darkMode }) {
  const resources = [
    { cat: "YouTube Channels 📺", items: [["Neso Academy","Best for ECE fundamentals","https://youtube.com/@nesoacademy"],["Apna College","Full-stack and DSA in Hindi","https://youtube.com/@ApnaCollegeOfficial"],["Code with Harry","Python, Web Dev (Hindi)","https://youtube.com/@CodeWithHarry"],["The Coding Train","Creative coding projects","https://youtube.com/@TheCodingTrain"],["Andreas Spiess","IoT/ESP32 deep dives","https://youtube.com/@AndreasSpiess"],["Sentdex","Python AI/ML tutorials","https://youtube.com/@sentdex"]] },
    { cat: "GitHub Resources 🐙", items: [["Awesome Arduino","1000+ Arduino project links","https://github.com"],["Awesome ML","Curated ML resources","https://github.com"],["The Algorithms","Algorithm implementations","https://github.com/TheAlgorithms"],["Free Programming Books","Free e-books collection","https://github.com"],["Public APIs","Free APIs for projects","https://github.com"]] },
    { cat: "Online Learning 🎓", items: [["NPTEL","Free IIT courses + certificates","https://nptel.ac.in"],["Coursera","ML/AI specializations","https://coursera.org"],["freeCodeCamp","Full-stack development","https://freecodecamp.org"],["Kaggle","Data science competitions","https://kaggle.com"],["Arduino Project Hub","Official Arduino projects","https://create.arduino.cc"],["Hackster.io","Hardware project community","https://hackster.io"]] },
    { cat: "Components & Tools 🛠", items: [["Robu.in","Robotics/IoT components India","https://robu.in"],["Evelta.com","Arduino/Raspberry Pi","https://evelta.com"],["Protofab","3D printing services","https://protofab.in"],["Fusion 360","Free 3D CAD for students","https://autodesk.com"],["Tinkercad","Online circuit simulator","https://tinkercad.com"],["Wokwi","Arduino/ESP32 simulator","https://wokwi.com"]] },
    { cat: "Internships & Jobs 💼", items: [["Internshala","Best for engineering internships","https://internshala.com"],["LinkedIn","Professional network","https://linkedin.com"],["Unstop","Competitions + internships","https://unstop.com"],["HackerEarth","Coding competitions","https://hackerearth.com"],["LeetCode","DSA practice","https://leetcode.com"],["AngelList","Startup jobs","https://angel.co"]] },
    { cat: "Free Certifications 🏆", items: [["Google Cloud Skills","Free GCP certificates","https://cloud.google.com"],["AWS Skill Builder","Free AWS training","https://skillbuilder.aws"],["Cisco NetAcad","Networking certifications","https://netacad.com"],["HackerRank","Skills certifications","https://hackerrank.com"],["Microsoft Learn","Azure + Office certs","https://learn.microsoft.com"]] },
  ];

  return (
    <div style={{ minHeight: "100vh", background: darkMode ? "#050514" : "#f5f5ff", paddingTop: 90 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "2.5rem", fontWeight: 800, color: darkMode ? "#fff" : "#1a1a2e", margin: "0 0 0.5rem" }}>📚 Resources</h1>
          <p style={{ color: darkMode ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)", fontFamily: "'Space Grotesk', sans-serif" }}>Everything you need to build amazing projects</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {resources.map(({ cat, items }) => (
            <div key={cat} style={{ background: darkMode ? "rgba(255,255,255,0.04)" : "#fff", border: `1px solid ${darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`, borderRadius: 16, padding: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: darkMode ? "#fff" : "#1a1a2e", margin: "0 0 1rem", fontSize: "1rem" }}>{cat}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {items.map(([name, desc, url]) => (
                  <a key={name} href={url} target="_blank" rel="noreferrer" style={{
                    display: "flex", flexDirection: "column", textDecoration: "none",
                    background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.02)",
                    borderRadius: 10, padding: "0.7rem 0.9rem",
                    border: `1px solid ${darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
                    transition: "all 0.2s",
                  }}>
                    <span style={{ fontWeight: 600, color: "#FF6B35", fontSize: "0.9rem" }}>{name}</span>
                    <span style={{ color: darkMode ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.45)", fontSize: "0.8rem", marginTop: "0.1rem", fontFamily: "'Space Grotesk', sans-serif" }}>{desc}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutPage({ darkMode }) {
  return (
    <div style={{ minHeight: "100vh", background: darkMode ? "#050514" : "#f5f5ff", paddingTop: 90 }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "4rem 1.5rem", textAlign: "center" }}>
        <div style={{ width: 80, height: 80, borderRadius: 20, background: "linear-gradient(135deg, #FF6B35, #FF9A3C)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.5rem", margin: "0 auto 1.5rem", boxShadow: "0 8px 24px rgba(255,107,53,0.4)" }}>🐝</div>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "2.8rem", fontWeight: 800, color: darkMode ? "#fff" : "#1a1a2e", margin: "0 0 1rem" }}>ProjectHive</h1>
        <p style={{ fontSize: "1.15rem", color: darkMode ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.55)", lineHeight: 1.7, fontFamily: "'Space Grotesk', sans-serif", marginBottom: "3rem" }}>
          ProjectHive is an AI-powered platform helping engineering students across India discover, plan, and build meaningful mini projects. We believe every student deserves access to quality project ideas that are relevant to their branch, skill level, and career goals.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem", marginBottom: "3rem" }}>
          {[["🎯","Mission","Help every engineering student build projects that matter and stand out in placements"],["💡","Vision","Be India's #1 platform for student project discovery and learning"],["❤️","Values","Open access, quality content, student-first design"]].map(([i,t,d])=>(
            <div key={t} style={{ background: darkMode ? "rgba(255,255,255,0.04)" : "#fff", borderRadius: 16, padding: "1.5rem", border: `1px solid ${darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}` }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.7rem" }}>{i}</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: darkMode ? "#fff" : "#1a1a2e", marginBottom: "0.4rem" }}>{t}</div>
              <div style={{ fontSize: "0.85rem", color: darkMode ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)", fontFamily: "'Space Grotesk', sans-serif" }}>{d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SavedPage({ darkMode, savedProjects, setSavedProjects, setSelectedProject }) {
  const toggleSave = (id) => setSavedProjects(s => s.includes(id) ? s.filter(x=>x!==id) : [...s, id]);
  const projects = ALL_PROJECTS.filter(p => savedProjects.includes(p.id));

  return (
    <div style={{ minHeight: "100vh", background: darkMode ? "#050514" : "#f5f5ff", paddingTop: 90 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1.5rem" }}>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "2.2rem", fontWeight: 800, color: darkMode ? "#fff" : "#1a1a2e", marginBottom: "2rem" }}>❤️ Saved Projects ({projects.length})</h1>
        {projects.length === 0 ? (
          <div style={{ textAlign: "center", padding: "5rem", color: darkMode ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)" }}>
            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🤍</div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif" }}>No saved projects yet. Click the heart icon on any project card!</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.2rem" }}>
            {projects.map(p => <ProjectCard key={p.id} project={p} onClick={() => setSelectedProject(p)} darkMode={darkMode} saved={true} onSave={toggleSave} />)}
          </div>
        )}
      </div>
    </div>
  );
}

function SearchPage({ darkMode, query, savedProjects, setSavedProjects, setSelectedProject }) {
  const toggleSave = (id) => setSavedProjects(s => s.includes(id) ? s.filter(x=>x!==id) : [...s, id]);
  const results = ALL_PROJECTS.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.domain.toLowerCase().includes(query.toLowerCase()) ||
    p.skills.some(s => s.toLowerCase().includes(query.toLowerCase())) ||
    p.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div style={{ minHeight: "100vh", background: darkMode ? "#050514" : "#f5f5ff", paddingTop: 90 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1.5rem" }}>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "2rem", fontWeight: 800, color: darkMode ? "#fff" : "#1a1a2e", marginBottom: "0.5rem" }}>
          Search: "{query}"
        </h1>
        <p style={{ color: darkMode ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)", marginBottom: "2rem", fontFamily: "'Space Grotesk', sans-serif" }}>{results.length} results found</p>
        {results.length === 0 ? (
          <div style={{ textAlign: "center", padding: "5rem", color: darkMode ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif" }}>No projects found for "{query}". Try different keywords.</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.2rem" }}>
            {results.map(p => <ProjectCard key={p.id} project={p} onClick={() => setSelectedProject(p)} darkMode={darkMode} saved={savedProjects.includes(p.id)} onSave={toggleSave} />)}
          </div>
        )}
      </div>
    </div>
  );
}

function Footer({ darkMode, setPage }) {
  return (
    <footer style={{ background: darkMode ? "#030310" : "#1a1a2e", color: "rgba(255,255,255,0.6)", padding: "3rem 1.5rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "2rem", marginBottom: "2.5rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <span style={{ fontSize: "1.5rem" }}>🐝</span>
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.2rem", background: "linear-gradient(135deg,#FF6B35,#FF9A3C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>ProjectHive</span>
            </div>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, maxWidth: 280, fontFamily: "'Space Grotesk', sans-serif", margin: 0 }}>India's best platform for engineering mini project ideas. Discover, build, and launch projects that matter.</p>
          </div>
          {[
            ["Platform", [["Home","home"],["Generator","generate"],["Browse","browse"],["Trending","trending"]]],
            ["Resources", [["YouTube","resources"],["GitHub","resources"],["Internships","resources"],["Certifications","resources"]]],
            ["Company", [["About","about"],["Contact","about"],["Submit Idea","about"]]],
          ].map(([title, links]) => (
            <div key={title}>
              <h4 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontWeight: 700, margin: "0 0 1rem", fontSize: "0.9rem" }}>{title}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {links.map(([l, p]) => (
                  <li key={l}><button onClick={() => setPage(p)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.55)", cursor: "pointer", fontSize: "0.875rem", padding: 0, fontFamily: "'Space Grotesk', sans-serif", textAlign: "left" }}>{l}</button></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ margin: 0, fontSize: "0.8rem", fontFamily: "'Space Grotesk', sans-serif" }}>© 2025 ProjectHive. Built with ❤️ for engineering students.</p>
          <p style={{ margin: 0, fontSize: "0.8rem", color: "#FF6B35", fontFamily: "'Space Grotesk', sans-serif" }}>Made in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState("home");
  const [darkMode, setDarkMode] = useState(true);
  const [activeBranch, setActiveBranch] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [savedProjects, setSavedProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const globalStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    color: darkMode ? "#fff" : "#1a1a2e",
    background: darkMode ? "#050514" : "#fafafa",
    minHeight: "100vh",
  };

  const renderPage = () => {
    if (searchQuery && page === "search") return <SearchPage darkMode={darkMode} query={searchQuery} savedProjects={savedProjects} setSavedProjects={setSavedProjects} setSelectedProject={setSelectedProject} />;
    switch (page) {
      case "home": return (
        <>
          <HeroSection setPage={setPage} darkMode={darkMode} />
          <BranchGrid setPage={setPage} setActiveBranch={setActiveBranch} darkMode={darkMode} />
          <TrendingStrip darkMode={darkMode} setSelectedProject={setSelectedProject} savedProjects={savedProjects} setSavedProjects={setSavedProjects} />
        </>
      );
      case "generate": return <GeneratorPage darkMode={darkMode} savedProjects={savedProjects} setSavedProjects={setSavedProjects} setSelectedProject={setSelectedProject} />;
      case "browse": return <BrowsePage darkMode={darkMode} activeBranch={activeBranch} setActiveBranch={setActiveBranch} savedProjects={savedProjects} setSavedProjects={setSavedProjects} setSelectedProject={setSelectedProject} />;
      case "trending": return <TrendingPage darkMode={darkMode} savedProjects={savedProjects} setSavedProjects={setSavedProjects} setSelectedProject={setSelectedProject} />;
      case "resources": return <ResourcesPage darkMode={darkMode} />;
      case "about": return <AboutPage darkMode={darkMode} />;
      case "saved": return <SavedPage darkMode={darkMode} savedProjects={savedProjects} setSavedProjects={setSavedProjects} setSelectedProject={setSelectedProject} />;
      default: return <HeroSection setPage={setPage} darkMode={darkMode} />;
    }
  };

  return (
    <div style={globalStyle}>
      <Header page={page} setPage={p => { setPage(p); if(p !== "search") setSearchQuery(""); }} darkMode={darkMode} setDarkMode={setDarkMode} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {renderPage()}
      {page === "home" && <Footer darkMode={darkMode} setPage={setPage} />}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} darkMode={darkMode} saved={savedProjects.includes(selectedProject.id)} onSave={(id) => setSavedProjects(s => s.includes(id) ? s.filter(x=>x!==id) : [...s, id])} />
      )}
      {/* Saved FAB */}
      {savedProjects.length > 0 && (
        <button onClick={() => setPage("saved")} style={{
          position: "fixed", bottom: "2rem", right: "2rem", zIndex: 999,
          background: "linear-gradient(135deg,#FF6B35,#FF9A3C)", color: "#fff",
          border: "none", borderRadius: 999, padding: "0.8rem 1.3rem",
          cursor: "pointer", fontWeight: 700, fontSize: "0.9rem",
          boxShadow: "0 8px 24px rgba(255,107,53,0.4)",
          display: "flex", alignItems: "center", gap: "0.4rem",
        }}>
          ❤️ {savedProjects.length} Saved
        </button>
      )}
    </div>
  );
}

function TrendingStrip({ darkMode, setSelectedProject, savedProjects, setSavedProjects }) {
  const toggleSave = (id) => setSavedProjects(s => s.includes(id) ? s.filter(x=>x!==id) : [...s, id]);
  const items = ALL_PROJECTS.filter(p => p.trending).slice(0,4);
  return (
    <section style={{ padding: "4rem 1.5rem", background: darkMode ? "#050514" : "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.8rem", fontWeight: 800, color: darkMode ? "#fff" : "#1a1a2e", margin: 0 }}>🔥 Trending Projects</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1.2rem" }}>
          {items.map(p => <ProjectCard key={p.id} project={p} onClick={() => setSelectedProject(p)} darkMode={darkMode} saved={savedProjects.includes(p.id)} onSave={toggleSave} />)}
        </div>
      </div>
    </section>
  );
}
 

document.addEventListener('sectionsLoaded', () => {
    console.log("portfolio.js: sectionsLoaded event received, starting rendering");

    // Updated projects with LiveLink and GithubLink
    const projects = [
        {
            id: '1',
            Img: '../assets/hercycleplus2.png',
            Title: 'HerCyclePlus',
            Description: 'HerCycle+ is a revolutionary women’s health companion app designed for women aged 15–45.  It seamlessly integrates cycle tracking, fertility insights, mental wellness, sexual health support, and expert teleconsultations into a single, AI-powered platform. The app includes a responsive design with a 3-minute wellness timer and sections for sharing health concerns, ensuring an engaging user experience.',
            LiveLink: 'https://github.com/RohithMacharla11/hercycleplus/blob/main/release/hercycleplus.apk',
            GithubLink: 'https://github.com/RohithMacharla11/hercycleplus',
            TechStack: ['Flutter', 'Dart', 'SharedPreferences', 'Firebase','Git'],
            Features: ['Cycle Tracking', 'Community Engagement', 'Wellness Timer', 'Health Insights','AI Assistant', 'Daily Symptoms Tracker', 'Health Insights']
        },
        {
            id: '2',
            Img: '../assets/Baby Cry Detection.png',
            Title: 'Baby Cry Detection',
            Description: 'A machine learning project that detects and classifies baby cries using audio processing techniques. The system analyzes audio signals to identify patterns in cries, helping caregivers respond to a baby’s needs more effectively. It leverages sklearn for classification and audio libraries for signal processing.',
            LiveLink: '#',
            GithubLink: 'https://github.com/RohithMacharla11/Baby-Cry-Detection',
            TechStack: ['Python', 'Sklearn', 'Librosa', 'NumPy'],
            Features: ['Cry Detection', 'Audio Signal Processing', 'Classification', 'Real-Time Analysis']
        },
        {
            id: '3',
            Img: '../assets/Predicting Gender.png',
            Title: 'Gender Prediction',
            Description: 'A CNN-based model for gender prediction using the UTKFace dataset. The model processes facial images to classify gender as male or female, achieving high accuracy through convolutional layers, dropout for regularization, and dense layers for binary classification. It includes statistical analysis like Z-tests for performance evaluation.',
            LiveLink: '#',
            GithubLink: 'https://github.com/RohithMacharla11/Gender-Prediction',
            TechStack: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Matplotlib'],
            Features: ['Gender Classification', 'CNN Architecture', 'Image Preprocessing', 'Performance Analysis']
        },
        {
            id: '4',
            Img: '../assets/Smart Wearable Health Monitoring System.png',
            Title: 'Smart Wearable Health Monitoring System',
            Description: 'A health dashboard that monitors vital signs in real-time using data from wearable devices. Built with JavaScript and HTML, it features input validation for mandatory fields, dynamic tile updates, and personalized health recommendations, making it a valuable tool for proactive health management.',
            LiveLink: 'https://smart-wearable-health-monitoring-system.onrender.com/',
            GithubLink: 'https://github.com/RohithMacharla11/Smart-Wearable-Health-Monitoring-System',
            TechStack: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
            Features: ['Real-Time Monitoring', 'Input Validation', 'Dynamic Tiles', 'Health Recommendations']
        },
        {
            id: '5',
            Img: '../assets/Review Insights.png',
            Title: 'Customer Review Analysis for Ecommerce',
            Description: 'A sentiment analysis project for e-commerce customer reviews. It processes textual data to classify reviews as positive, negative, or neutral, helping businesses understand customer feedback. The system uses NLP techniques and machine learning to provide actionable insights.',
            LiveLink: 'https://ecommerce-r52a.onrender.com/',
            GithubLink: 'https://github.com/RohithMacharla11/Customer-Review-Analysis-Ecommerce',
            TechStack: ['Python', 'NLTK', 'Sklearn', 'Pandas', 'Matplotlib'],
            Features: ['Sentiment Classification', 'Text Preprocessing', 'Data Visualization', 'Feedback Insights']
        },
        {
            id: '6',
            Img: '../assets/SHL Assessment Recommendation System Project.png',
            Title: 'SHL Assessment Recommendation System',
            Description: 'A web application that recommends SHL assessments based on job descriptions. It uses SentenceTransformers and FAISS for embeddings and similarity search, with a Streamlit frontend and FastAPI backend. The system delivers up to 10 relevant assessments with metrics like Recall@3 and MAP@3 for evaluation.',
            LiveLink: '#',
            GithubLink: 'https://github.com/RohithMacharla11/SHL-Assessment-Recommendation-System',
            TechStack: ['Python', 'Streamlit', 'FastAPI', 'SentenceTransformers', 'FAISS'],
            Features: ['Assessment Recommendations', 'Job Description Analysis', 'Similarity Search', 'Evaluation Metrics']
        },
        {
            id: '7',
            Img: '../assets/Detecting Spam SMS with Precision.png',
            Title: 'Spam SMS Detection',
            Description: 'A machine learning project to classify SMS messages as spam or not. It processes text data using NLP techniques and applies classification algorithms to filter out unwanted messages, improving user communication safety and efficiency.',
            LiveLink: '#',
            GithubLink: 'https://github.com/RohithMacharla11/SpamSMS-Detection',
            TechStack: ['Python', 'Sklearn', 'NLTK', 'Pandas', 'Seaborn'],
            Features: ['Spam Classification', 'Text Preprocessing', 'Model Training', 'Accuracy Evaluation']
        },
        {
            id: '8',
            Img: '../assets/AI Driven Recruitment Pipeline.png',
            Title: 'AI-Driven Recruitment Pipeline',
            Description: 'An AI-driven system to streamline recruitment by analyzing candidate profiles and job requirements. It leverages NLP and machine learning to match candidates with roles, improving efficiency in hiring processes. This project complements the SHL Assessment Recommendation System.',
            LiveLink: '#',
            GithubLink: 'https://github.com/RohithMacharla11/-AI-Driven-Recruitment-Pipeline',
            TechStack: ['Python', 'TensorFlow', 'NLTK', 'Pandas', 'Sklearn'],
            Features: ['Candidate Matching', 'Profile Analysis', 'NLP Processing', 'Hiring Efficiency']
        },
        {
            id: '9',
            Img: '../assets/Customer Churn Prediction.png',
            Title: 'Customer Churn Prediction',
            Description: 'A predictive model to identify customers at risk of churning. It analyzes customer data to forecast churn probability, enabling businesses to implement retention strategies. The model uses machine learning techniques to provide accurate predictions.',
            LiveLink: '#',
            GithubLink: 'https://github.com/RohithMacharla11/Costumer-Churn-Predction',
            TechStack: ['Python', 'Sklearn', 'Pandas', 'Matplotlib', 'Seaborn'],
            Features: ['Churn Prediction', 'Data Analysis', 'Model Training', 'Retention Insights']
        },
        {
            id: '10',
            Img: '../assets/Affordable Car Rentals .png',
            Title: 'Car Rental Website',
            Description: 'A dynamic platform for renting cars, designed to provide a seamless user experience. The website features vehicle listings, search and filter options, and an online booking system, with an admin panel for managing bookings and vehicles. Built during my internship at Monosage.',
            LiveLink: '#',
            GithubLink: 'https://github.com/RohithMacharla11/car-rental-website',
            TechStack: ['PHP', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'MySQL', 'Apache'],
            Features: ['Vehicle Listings', 'Search and Filter', 'Online Booking', 'Secure Payments', 'Admin Panel']
        },
        {
            id: '11',
            Img: '../assets/Your University Chatbot for Student Support.png',
            Title: 'University Chatbot',
            Description: 'A conversational chatbot for university-related queries, designed to assist students with information on courses, schedules, and campus services. It uses NLP to understand user queries and provide accurate responses, improving accessibility to university resources.',
            LiveLink: '#',
            GithubLink: 'https://github.com/RohithMacharla11/University-Chatbot',
            TechStack: ['Python', 'NLTK', 'TensorFlow', 'Flask', 'HTML5'],
            Features: ['Query Handling', 'NLP Processing', 'Information Retrieval', 'User-Friendly Interface']
        },
        {
            id: '12',
            Img: '../assets/Human Facial Expressions.png',
            Title: 'Facial Expressions Recognition',
            Description: 'A machine learning project that recognizes facial expressions using deep learning models. It processes images to classify emotions such as happy, sad, or angry, with applications in human-computer interaction and mental health monitoring.',
            LiveLink: '#',
            GithubLink: 'https://github.com/RohithMacharla11/Facial-Expressions-Recognition',
            TechStack: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy'],
            Features: ['Emotion Classification', 'Image Processing', 'Deep Learning', 'Real-Time Analysis']
        },
        {
            id: '13',
            Img: '../assets/PantryPulse.png',
            Title: 'Grocery Store Website',
            Description: 'A web application for a grocery store, allowing users to browse products, add items to a cart, and place orders online. The site is designed to be user-friendly, with a focus on responsive design and efficient order management.',
            LiveLink: 'https://pantrypulse.great-site.net/',
            GithubLink: 'https://github.com/RohithMacharla11/grocery-store-website',
            TechStack: ['PHP', 'JavaScript', 'HTML5', 'CSS3', 'MySQL'],
            Features: ['Product Browsing', 'Cart Management', 'Order Placement', 'Responsive Design']
        },
        {
            id: '14',
            Img: '../assets/Trendbazar.png',
            Title: 'Ecommerce Website (TrendBazar)',
            Description: 'A WordPress-based e-commerce platform featuring product listings, user reviews, and a secure checkout process. The site is designed to be responsive across devices and optimized for search engines to drive traffic, developed during my internship at Monosage.',
            LiveLink: 'https://trendbazar.great-site.net/',
            GithubLink: 'https://github.com/RohithMacharla11/Ecommerce-Website',
            TechStack: ['WordPress', 'PHP', 'JavaScript', 'HTML5', 'CSS3', 'SEO'],
            Features: ['Product Listings', 'User Reviews', 'Secure Checkout', 'Responsive Design']
        },
        {
            id: '15',
            Img: '../assets/Predicting House Prices .png',
            Title: 'House Price Prediction',
            Description: 'A machine learning model to predict house prices based on features like location, size, and amenities. It uses regression techniques to provide accurate predictions, helping users make informed decisions in the real estate market.',
            LiveLink: '#',
            GithubLink: 'https://github.com/RohithMacharla11/House-Price-Predction',
            TechStack: ['Python', 'Sklearn', 'Pandas', 'Matplotlib', 'NumPy'],
            Features: ['Price Prediction', 'Feature Analysis', 'Regression Modeling', 'Data Visualization']
        },
        {
            id: '16',
            Img: '../assets/Predicting Wine Quality .png',
            Title: 'Wine Quality Prediction',
            Description: 'A machine learning project to predict wine quality based on chemical properties. It uses classification algorithms to categorize wine as good or bad, providing insights for winemakers to improve quality control.',
            LiveLink: '#',
            GithubLink: 'https://github.com/RohithMacharla11/Wine-Quality-Prediction',
            TechStack: ['Python', 'Sklearn', 'Pandas', 'Seaborn', 'Matplotlib'],
            Features: ['Quality Classification', 'Data Analysis', 'Model Training', 'Visualization']
        },
        {
            id: '17',
            Img: '../assets/Iris Flower Classification Project.png',
            Title: 'Iris Flower Classification',
            Description: 'A classic machine learning project to classify Iris flowers into species based on petal and sepal measurements. It uses a simple dataset to demonstrate classification techniques, serving as an introductory project to machine learning concepts.',
            LiveLink: '#',
            GithubLink: 'https://github.com/RohithMacharla11/Iris-Flower-Classification',
            TechStack: ['Python', 'Sklearn', 'Pandas', 'Matplotlib', 'NumPy'],
            Features: ['Species Classification', 'Data Preprocessing', 'Model Training', 'Accuracy Evaluation']
        }
    ];

    // Updated tech stack based on your projects
    const techStacks = [
        { icon: '../assets/tech/icons8-html5.svg', language: 'HTML5' },
        { icon: '../assets/tech/css.svg', language: 'CSS3' },
        { icon: '../assets/tech/javascript.svg', language: 'JavaScript' },
        { icon: '../assets/tech/php-svgrepo-com.svg', language: 'PHP' },
        { icon: '../assets/tech/wordpress-color-svgrepo-com.svg', language: 'WordPress' },
        { icon: '../assets/tech/bootstrap.svg', language: 'Bootstrap' },
        { icon: '../assets/tech/mysql-svgrepo-com.svg', language: 'MySQL' },
        { icon: '../assets/tech/python-svgrepo-com.svg', language: 'Python' },
        { icon: '../assets/tech/tensorflow-svgrepo-com.svg', language: 'TensorFlow' },
        { icon: '../assets/tech/keras-svgrepo-com.svg', language: 'Keras' },
        { icon: '../assets/tech/nltk.png', language: 'NLTK' },
        { icon: '../assets/tech//sklearn.png', language: 'Sklearn' },
        { icon: '../assets/tech/flutter-svgrepo-com.svg', language: 'Flutter' },
        { icon: '../assets/tech/dart.png', language: 'Dart' },
        { icon: '../assets/tech/firebase.svg', language: 'Firebase' },
        { icon: '../assets/tech/streamlit.png', language: 'Streamlit' },
        { icon: '../assets/tech/fastapi.png', language: 'FastAPI' },
        { icon: '../assets/tech/nlp.png', language: 'NLP' },
        { icon: '../assets/tech/opencv-svgrepo-com.svg', language: 'OpenCV' },
        { icon: '../assets/tech/matplotlib.png', language: 'Matplotlib' },
        { icon: '../assets/tech/pandas.png', language: 'Pandas' },
        { icon: '../assets/tech/numpy-svgrepo-com.svg', language: 'Numpy' },
        { icon: '../assets/tech/ml.png', language: 'Machine Learning' },
        { icon: '../assets/tech/neuralnetwork.png', language: 'Neural Networks' },
        { icon: '../assets/tech/genAI.png', language: 'Generative AI' },
        { icon: '../assets/tech/java-svgrepo-com.svg', language: 'Java' },
        { icon: '../assets/tech/C.png', language: 'C' },
        { icon: '../assets/tech/flask-svgrepo-com.svg', language: 'Flask' },
        
    ];

    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: false,
            duration: 1000
        });
        console.log("AOS initialized successfully");
    } else {
        console.error("AOS library not loaded");
    }

    // Verify Lucide
    if (typeof lucide !== 'undefined') {
        console.log("Lucide library loaded successfully");
    } else {
        console.error("Lucide library not loaded");
    }

    // Portfolio Tab Switching
    const tabs = document.querySelectorAll('.portfolio-tab');
    const contents = document.querySelectorAll('.portfolio-content');
    if (tabs.length === 0 || contents.length === 0) {
        console.error("Portfolio tabs or contents not found in DOM");
        return;
    }
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            console.log(`Tab clicked: ${tab.dataset.tab}`);
            tabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            contents.forEach(content => {
                content.classList.remove('active');
            });
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            const targetContent = document.getElementById(tab.dataset.tab);
            if (targetContent) {
                targetContent.classList.add('active');
                console.log(`Activated tab content: ${tab.dataset.tab}`);
            } else {
                console.error(`Tab content not found for: ${tab.dataset.tab}`);
            }
        });
    });

    // Responsive initial items
    const isMobile = window.innerWidth < 768;
    const initialItems = isMobile ? 4 : 6;
    let showAllProjects = false;

    // Render Projects
    function renderProjects() {
        const projectGrid = document.querySelector('#projects .project-grid');
        if (!projectGrid) {
            console.error("Project grid element not found");
            return;
        }
        console.log(`Rendering ${showAllProjects ? projects.length : initialItems} projects`);
        const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
        projectGrid.innerHTML = displayedProjects.map((project, index) => {
            console.log(`Rendering project: ${project.Title}`);
            // Conditionally include the Live Demo button if LiveLink is not '#'
            const liveDemoButton = project.LiveLink !== '#' 
                ? `<a href="${project.LiveLink}" class="live-demo" target="_blank" rel="noopener noreferrer">Live Demo</a>`
                : '';
            return `
                <div class="project-card" data-aos="${index % 3 === 0 ? 'fade-up-right' : index % 3 === 1 ? 'fade-up' : 'fade-up-left'}" data-aos-duration="${index % 3 === 0 ? '1000' : index % 3 === 1 ? '1200' : '1000'}">
                    <img src="${project.Img}" alt="${project.Title}">
                    <div class="project-card-content">
                        <h3>${project.Title}</h3>
                        <p>${project.Description}</p>
                        <div class="project-card-links">
                            ${liveDemoButton}
                            <a href="${project.GithubLink}" class="github-link" target="_blank" rel="noopener noreferrer">Github</a>
                            <a href="#" class="details-btn project-details-link" data-project-id="${project.id}">Details</a>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        renderToggleButton();
        lucide.createIcons();
        console.log("Projects rendered successfully");
    }

    // Render Tech Stack
    function renderTechStack() {
        const techStackGrid = document.querySelector('#tech-stack .tech-stack-grid');
        if (!techStackGrid) {
            console.error("Tech stack grid element not found");
            return;
        }
        console.log("Rendering tech stack");
        techStackGrid.innerHTML = techStacks.map((stack, index) => `
            <div class="tech-stack-card" data-aos="${index % 3 === 0 ? 'fade-up-right' : index % 3 === 1 ? 'fade-up' : 'fade-up-left'}" data-aos-duration="${index % 3 === 0 ? '1000' : index % 3 === 1 ? '1200' : '1000'}">
                <img src="${stack.icon}" alt="${stack.language}">
                <span>${stack.language}</span>
            </div>
        `).join('');
        console.log("Tech stack rendered successfully");
    }

    // Render Toggle Button
    function renderToggleButton() {
        const seeMoreBtn = document.querySelector('#projects .see-more-btn');
        if (!seeMoreBtn) {
            console.error("See more button for projects not found");
            return;
        }
        const shouldShowButton = projects.length > initialItems;
        if (shouldShowButton) {
            seeMoreBtn.innerHTML = `
                <button class="${showAllProjects ? 'show-less' : ''}" data-type="projects">
                    ${showAllProjects ? 'See Less' : 'See More'}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="${showAllProjects ? '18 15 12 9 6 15' : '6 9 12 15 18 9'}"></polyline>
                    </svg>
                </button>
            `;
            console.log("Toggle button for projects rendered");
        } else {
            seeMoreBtn.innerHTML = '';
        }
    }

    // Toggle Show More/Less
    document.addEventListener('click', (e) => {
        const toggleBtn = e.target.closest('#projects .see-more-btn button');
        if (toggleBtn) {
            console.log("Projects toggle button clicked");
            showAllProjects = !showAllProjects;
            renderProjects();
        }
    });

    // Project Details Display
    const projectDetailsSection = document.getElementById('project-details');
    const portfolioSection = document.getElementById('portfolio');
    const backBtn = document.querySelector('.project-back-btn');

    document.addEventListener('click', (e) => {
        const link = e.target.closest('.project-details-link');
        if (link) {
            e.preventDefault();
            const projectId = link.dataset.projectId;
            console.log(`Project details link clicked for project ID: ${projectId}`);
            const project = projects.find(p => p.id === projectId);
            if (project) {
                document.getElementById('project-title').textContent = project.Title;
                document.getElementById('project-title-breadcrumb').textContent = project.Title;
                document.getElementById('project-description').textContent = project.Description;
                document.getElementById('project-image').src = project.Img;
                document.getElementById('tech-stack-count').textContent = project.TechStack.length;
                document.getElementById('features-count').textContent = project.Features.length;
                const techStackList = document.getElementById('tech-stack-list');
                techStackList.innerHTML = project.TechStack.map(tech => `
                    <div class="tech-badge">
                        <i data-lucide="${tech.includes('React') || tech.includes('Vue') ? 'globe' : 'layout'}"></i>
                        <span>${tech}</span>
                    </div>
                `).join('');
                const featuresList = document.getElementById('features-list');
                featuresList.innerHTML = project.Features.map(feature => `
                    <li class="feature-item">
                        <div></div>
                        <span>${feature}</span>
                    </li>
                `).join('');
                const liveDemoBtn = document.querySelector('.live-demo-btn');
                liveDemoBtn.href = project.LiveLink; // Set the href to LiveLink
                liveDemoBtn.style.display = project.LiveLink !== '#' ? 'flex' : 'none'; // Show or hide based on LiveLink
                const githubBtn = document.querySelector('.github-btn');
                githubBtn.href = project.GithubLink; // Set the href to GithubLink
                projectDetailsSection.style.display = 'block';
                portfolioSection.style.display = 'none';
                projectDetailsSection.scrollIntoView({ behavior: 'smooth' });
                lucide.createIcons();
                console.log("Project details displayed successfully");
            } else {
                console.error(`Project not found for ID: ${projectId}`);
            }
        }
    });

    if (backBtn) {
        backBtn.addEventListener('click', () => {
            console.log("Back button clicked");
            projectDetailsSection.style.display = 'none';
            portfolioSection.style.display = 'block';
            portfolioSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Initial Render
    renderProjects();
    renderTechStack();

    // Education Tab Switching
    const educationTabs = document.querySelectorAll('.education-tab');
    const educationContents = document.querySelectorAll('.education-details');
    if (educationTabs.length === 0 || educationContents.length === 0) {
        console.error("Education tabs or contents not found in DOM");
    } else {
        educationTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                console.log(`Education tab clicked: ${tab.dataset.tab}`);
                educationTabs.forEach(t => {
                    t.classList.remove('active');
                    t.setAttribute('aria-selected', 'false');
                });
                educationContents.forEach(content => {
                    content.classList.remove('active');
                });
                tab.classList.add('active');
                tab.setAttribute('aria-selected', 'true');
                const targetContent = document.getElementById(tab.dataset.tab);
                if (targetContent) {
                    targetContent.classList.add('active');
                    console.log(`Activated education content: ${tab.dataset.tab}`);
                } else {
                    console.error(`Education content not found for: ${tab.dataset.tab}`);
                }
            });
        });
    }
});
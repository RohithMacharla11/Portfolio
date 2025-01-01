// Stats Animation
function animateStats() {
  const stats = document.querySelectorAll(".stat-number");
  stats.forEach((stat) => {
    const target = parseInt(stat.innerText);
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      if (current < target) {
        current += increment;
        if (current > target) current = target;
        if (stat.innerText.includes("+")) {
          stat.innerText = Math.ceil(current) + "+";
        } else if (stat.innerText.includes("%")) {
          stat.innerText = Math.ceil(current) + "%";
        } else {
          stat.innerText = Math.ceil(current);
        }
      } else {
        clearInterval(timer);
      }
    }, 20);
  });
}

// Timeline Animation
const timelineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateX(0)";
      }
    });
  },
  {
    threshold: 0.5,
  }
);

document.querySelectorAll(".timeline-item").forEach((item) => {
  item.style.opacity = 0;
  item.style.transform = item.classList.contains("left")
    ? "translateX(-50px)"
    : "translateX(50px)";
  item.style.transition = "all 0.5s ease-out";
  timelineObserver.observe(item);
});

// Initialize stats animation
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateStats();
        statsObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

const statsSection = document.getElementById("stats");
if (statsSection) {
  statsObserver.observe(statsSection);
}

const designations = [
  "Full Stack Developer",
  "AI Engineer",
  "Software Developer",
  "Data Scientist",
  "Machine Learning Enthusiast",
];

let index = 0;

// Function to rotate the designations
function rotateDesignation() {
  const designationElement = document.getElementById("designation");
  designationElement.textContent = designations[index];
  index = (index + 1) % designations.length; // Loop back to the first designation
}

// Set the initial designation immediately
document.addEventListener("DOMContentLoaded", () => {
  rotateDesignation(); // Display the first designation
  setInterval(rotateDesignation, 2000); // Change designation every 2 seconds
});

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  });
});

// Animate research papers on scroll
const observerOptions = {
  threshold: 0.2,
};

const observers = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "slideIn 0.5s forwards";
    }
  });
}, observerOptions);

document.querySelectorAll(".research-paper").forEach((paper) => {
  observers.observe(paper);
});

// Contact form animation
document.querySelectorAll(".contact-item").forEach((item, index) => {
  item.style.animationDelay = `${index * 0.2}s`;
});

// Form submission handling
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    // Add your form submission logic here
    alert("Message sent successfully!");
    this.reset();
  });

// Sample internship data
const internshipData = {
  1: {
    title: "PHP Full Stack Developer",
    company: "Monosage",
    period: "May 2024 - July 2024",
    description: `
            <h3>Key Responsibilities:</h3>
            <ul>
                <li>Delivered a fully functional car rental website within three weeks.</li>
                <li>Created two websites (PantryPulse and TrendBazar) with Wordpress and Deployed it to Web.</li>
                <li>Gained hands-on experience in PHP, JavaScript, and backend development.</li>
                <li>Collaborated effectively with a teammate to meet client requirements.</li>
                <li>Learned to work under tight deadlines while ensuring quality delivery.</li>
                <li>Improved website traffic by optimizing SEO strategies.</li>
            </ul>
            <h3>Technologies Used:</h3>
            <ul>
                <li>JavaScript, HTML5, CSS3</li>
                <li>Php, Bootstrap, SEO, Wordpress</li>
                <li>Git, Apache, LiveServer, MySQL</li>
                <li>Digital Marketing - Email and Social Media, </li>
            </ul>
        `,
  },
  2: {
    title: "AIML Intern",
    company: "Google Developer Experts",
    period: "July 2024 - Sept 2024",
    description: `
            <h3>Key Responsibilities:</h3>
            <ul>
                <li>Gained proficiency in TensorFlow, Keras, and other machine learning libraries.</li>
                <li>Applied deep learning algorithms to solve real-world AI problems.</li>
                <li>Developed and implemented machine learning models using Google Cloud AI tools.</li>
                <li>Contributed to 4 knowledge-sharing sessions with peers.</li>
                <li>Explored NLP and image recognition projects.</li>
            </ul>
            <h3>Technologies Used:</h3>
            <ul>
                <li>TensorFlow, Keras, OpenCV, NLTK, spaCy, Hugging Face Transformers</li>
                <li>NumPy, Pandas, Scikit-learn, Matplotlib, Seaborn</li>
                <li>Jupyter Notebook, Apache Beam, Google Colab, Google Workspace Tools</li>
            </ul>
        `,
  },
  3: {
    title: "AI Development Intern",
    company: "Infosys Springboard",
    period: "Dec 2024 - Present",
    description: `
            <h3>Key Responsibilities:</h3>
            <ul>
                <li>Engaged in hands-on exercises to solidify theoretical knowledge.</li>
                <li>Strengthened expertise in AI concepts and their applications in real-world scenarios.<li>
                <li>Explored various model selection techniques to identify optimal algorithms.</li>
                <li>Worked alongside 15-20 peers under the mentorship of an AI expert.</>
                <li>Gained insights into effective feature engineering techniques</li>
            </ul>
            <h3>Technologies Used:</h3>
            <ul>
                <li>Python, TensorFlow, PyTorch, scikit-learn, Keras, XGBoost</li>
                <li>Git, AI Ethics, CNNs, RNNs, GANs, Jupyter Notebooks, Colab</li>
                <li>Apache Spark, spaCy, NLTK, Transformers, AWS, Azure</li>
                <li>Google Cloud AI, Together.Ai APi</li>
            </ul>
        `,
  },
};

// Intersection Observer for timeline items
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

// Observe all timeline items
document.querySelectorAll(".timeline-item").forEach((item) => {
  observer.observe(item);
});

// Modal functionality
const modal = document.getElementById("modal");
const modalBody = modal.querySelector(".modal-body");
const closeBtn = modal.querySelector(".close");

// Open modal with internship details
document.querySelectorAll(".read-more").forEach((button) => {
  button.addEventListener("click", (e) => {
    const timelineItem = e.target.closest(".timeline-item");
    const internshipId = timelineItem.dataset.id;
    const data = internshipData[internshipId];

    modalBody.innerHTML = `
            <h2>${data.title}</h2>
            <h3>${data.company}</h3>
            <p class="period">${data.period}</p>
            <div class="description">
                ${data.description}
            </div>
        `;

    modal.classList.add("active");
  });
});

// Close modal when clicking outside or on close button
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

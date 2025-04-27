document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.navbar-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.navbar-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Sticky Navigation
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Scrollspy
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.navbar-links a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // Typed.js Animation
    if (document.querySelector('.typed-text')) {
        const typed = new Typed('.typed-text', {
            strings: ['Aspiring Web Developer.', 'Student.', 'Tech Enthusiast.'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        });
    }

    // Dark/Light Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeStyle = document.getElementById('theme-style');
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && prefersLight)) {
        themeStyle.href = 'css/style.css';
    }
    
    themeToggle.addEventListener('click', function() {
        if (themeStyle.href.includes('dark-mode.css')) {
            themeStyle.href = 'css/style.css';
            localStorage.setItem('theme', 'light');
        } else {
            themeStyle.href = 'css/dark-mode.css';
            localStorage.setItem('theme', 'dark');
        }
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // AOS Initialization
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Project Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects
            projectItems.forEach(item => {
                if (filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Project Modal
    const projectDetailsButtons = document.querySelectorAll('.project-details');
    const modal = document.getElementById('project-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalBody = document.querySelector('.modal-body');
    
    // Project data
    const projectsData = {
        "1": {
            title: "Personal Portfolio",
            description: "A responsive portfolio website showcasing my skills, projects, and education. Built with HTML, CSS, and JavaScript, this project demonstrates my ability to create modern, interactive web interfaces.",
            technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
            features: ["Responsive Design", "Animated Elements", "Dark/Light Mode", "Project Filtering"],
            image: "images/portfolio.png",
            link: "https://www.ankitak.com.np"
        },
        "2": {
            title: "To-Do List App",
            description: "A simple to-do list application to manage daily tasks. This application allows users to add, edit, and delete tasks with data persistence using PHP and MySQL.",
            technologies: ["PHP", "CSS", "MySQL", "JavaScript"],
            features: ["Task Management", "Data Persistence", "User-friendly Interface", "Responsive Design"],
            image: "images/todolist.png",
            link: "https://todo.akhatry.com.np/"
        },
        "3": {
            title: "Link Shortener",
            description: "A simple link shortener with a time limit of 1 hour. This tool generates short URLs that expire after 60 minutes, built with PHP and MySQL for the backend.",
            technologies: ["PHP", "CSS", "MySQL", "JavaScript"],
            features: ["URL Shortening", "Time-limited Links", "Simple Interface", "Copy to Clipboard"],
            image: "images/link.png",
            link: "https://www.akhatry.com.np/"
        },
        "4": {
            title: "Weather App",
            description: "A simple web application to know the weather of any place. This app fetches weather data from a public API and displays it in a clean, user-friendly interface.",
            technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
            features: ["Weather Data", "Location Search", "Responsive Design", "Clean UI"],
            image: "images/weather.png",
            link: "https://weather.akhatry.com.np/"
        }
    };
    
    projectDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const project = projectsData[projectId];
            
            if (project) {
                modalBody.innerHTML = `
                    <div class="modal-project">
                        <div class="modal-project-img">
                            <img src="${project.image}" alt="${project.title}">
                        </div>
                        <div class="modal-project-info">
                            <h2>${project.title}</h2>
                            <p class="modal-project-description">${project.description}</p>
                            
                            <div class="modal-project-details">
                                <div class="modal-project-technologies">
                                    <h4>Technologies:</h4>
                                    <div class="tech-tags">
                                        ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                                    </div>
                                </div>
                                
                                <div class="modal-project-features">
                                    <h4>Features:</h4>
                                    <ul>
                                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                            
                            <a href="${project.link}" class="btn primary" target="_blank">View Project</a>
                        </div>
                    </div>
                `;
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Notification System
    function showNotification(message, type = 'info', duration = 5000) {
        const container = document.querySelector('.notification-container');
        const notification = document.querySelector('.notification');
        const notificationIcon = notification.querySelector('.notification-icon i');
        const notificationMessage = notification.querySelector('.notification-message');
        const notificationClose = notification.querySelector('.notification-close');
        
        // Clone the notification to allow multiple notifications
        const newNotification = notification.cloneNode(true);
        
        // Set notification content and type
        newNotification.querySelector('.notification-message').textContent = message;
        newNotification.classList.add(type);
        
        // Set icon based on type
        const icon = {
            'success': 'fa-check-circle',
            'error': 'fa-exclamation-circle',
            'warning': 'fa-exclamation-triangle',
            'info': 'fa-info-circle'
        }[type];
        
        newNotification.querySelector('.notification-icon i').className = `fas ${icon}`;
        
        // Add to container
        container.appendChild(newNotification);
        
        // Show notification
        setTimeout(() => {
            newNotification.classList.add('show');
        }, 10);
        
        // Auto-remove after duration
        let timeoutId = setTimeout(() => {
            hideNotification(newNotification);
        }, duration);
        
        // Close button click
        newNotification.querySelector('.notification-close').addEventListener('click', () => {
            clearTimeout(timeoutId);
            hideNotification(newNotification);
        });
        
        // Click anywhere to close
        newNotification.addEventListener('click', (e) => {
            if (e.target === newNotification) {
                clearTimeout(timeoutId);
                hideNotification(newNotification);
            }
        });
    }

    function hideNotification(notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validate form
            if (!name || !email || !message) {
                showNotification('Please fill in all required fields.', 'error', 4000);
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                showNotification('Please enter a valid email address.', 'error', 4000);
                return;
            }
            
            // Prepare email data
            const recipientEmail = "info@ankitak.com.np";
            const emailSubject = subject || "Message from Portfolio Website";
            const emailBody = `Hello,%0D%0A%0D%0AMy name is ${encodeURIComponent(name)}.%0D%0A%0D%0A${encodeURIComponent(message)}%0D%0A%0D%0AThank you.`;
            
            // Create Gmail URL
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(emailSubject)}&body=${emailBody}`;
            
            // Show success notification
            showNotification('Redirecting to Gmail to send your message...', 'success', 3000);
            
            // Open Gmail after short delay
            setTimeout(() => {
                window.open(gmailUrl, '_blank');
                
                // Reset form after redirection
                contactForm.reset();
            }, 500);
        });
    }

    // Resume Button
    const resumeBtn = document.getElementById('resume-btn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showNotification('Resume download would be implemented here.', 'info', 3000);
        });
    }
});

// Initialize particles.js
document.addEventListener('DOMContentLoaded', function() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#3498db"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#3498db",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
});
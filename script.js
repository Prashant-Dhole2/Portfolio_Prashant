document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    // Smooth scroll function (was missing)
    function smoothScrollTo(targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
    
    closeMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    });
    
    // Close mobile menu when clicking on a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only prevent default if it's a hash link
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                smoothScrollTo(targetId);
            }
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
    
    // Update active nav link
    function updateActiveNavLink(targetId) {
        navLinks.forEach(link => link.classList.remove('active'));
        mobileNavLinks.forEach(link => link.classList.remove('active'));
        
        const matchingNavLink = document.querySelector(`.nav-link[href="${targetId}"]`);
        const matchingMobileNavLink = document.querySelector(`.mobile-nav-link[href="${targetId}"]`);
        
        if (matchingNavLink) matchingNavLink.classList.add('active');
        if (matchingMobileNavLink) matchingMobileNavLink.classList.add('active');
    }
    
    // Handle all anchor clicks
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScrollTo(targetId);
            
            // Update active link immediately
            updateActiveNavLink(targetId);
        });
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + navbar.offsetHeight + 20; // Added small buffer
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = '#' + section.id;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                updateActiveNavLink(sectionId);
            }
        });
    });
    
    // Rest of your code (GSAP animations, typewriter effect, etc.)
    // Initialize GSAP animations for navbar
    if (typeof gsap !== 'undefined') {
        gsap.from(".navbar", {
            opacity: 0,
            y: -50,
            duration: 0.8,
            ease: "power2.out"
        });
    }

    // Typewriter Effect
    const typewriterText = "Hi, I'm Prashant Dhole,\nA Developer Java Full Stack";
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        let i = 0;
        
        function typeWriter() {
            if (i < typewriterText.length) {
                if (typewriterText.charAt(i) === '\n') {
                    typewriterElement.innerHTML += '<br>';
                } else {
                    typewriterElement.innerHTML += typewriterText.charAt(i);
                }
                i++;
                setTimeout(typeWriter, Math.random() * 100 + 50);
            } else {
                const floatingAvatar = document.getElementById('floating-avatar');
                if (floatingAvatar) {
                    floatingAvatar.style.animation = 'float 3s ease-in-out infinite';
                }
            }
        }
        
        setTimeout(typeWriter, 500);
    }

    // Projects Section// Projects Data
const projectTypes = [
    "Web Application", 
    "Business Website", 
    "Business Website", 
    "E-commerce"
];

const techStacks = [
    ["Python", "Flask", "BeautifulSoup", "MySQL"],
    ["HTML", "Bootstrap", "JavaScript", "CSS"],
    ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
    ["D3.js", "React", "Express", "MongoDB"]
];

const projectImages = [
    "images/webscrapx.png",
    "images/BackPackGo.png",
    "images/Finance.png",
    "images/bento.png"
];

const projects = [
    {
        id: 1,
        title: "WebscrapX Pro",
        category: projectTypes[0],
        description: "An innovative web scraping tool that extracts data from complex websites with 99% accuracy using advanced AI algorithms.",
        tech: techStacks[0],
        image: projectImages[0],
        likes: 324,
        views: 4537,
        projectUrl: "#  ",
        demoUrl: "#",
        codeUrl: "https://github.com/Prashant-Dhole2/WEbscrapeX"
    },
    {
        id: 2,
        title: "BackPackGo X",
        category: projectTypes[1],
        description: "A cutting-edge travel platform that helps backpackers find the best routes and accommodations worldwide.",
        tech: techStacks[1],
        image: projectImages[1],
        likes: 278,
        views: 3892,
        projectUrl: "https://prashant-dhole2.github.io/BackPackPDGo/",
        demoUrl: "#",
        codeUrl: "https://github.com/Prashant-Dhole2/BackPackPDGo"
    },
    {
        id: 3,
        title: "Alpha Finance 360",
        category: projectTypes[2],
        description: "Revolutionary financial analysis tool that provides real-time market insights and predictive analytics.",
        tech: techStacks[2],
        image: projectImages[2],
        likes: 412,
        views: 5210,
        projectUrl: "https://prashant-dhole2.github.io/Alpha_Fainace_Support/",
        demoUrl: "#",
        codeUrl: "https://github.com/Prashant-Dhole2/Alpha_Fainace_Support"
    },
    {
        id: 4,
        title: "Bento",
        category: projectTypes[3],
        description: "An intuitive e-commerce platform for handmade jewelry with AR try-on features and secure payments.",
        tech: techStacks[3],
        image: projectImages[3],
        likes: 189,
        views: 2875,
        projectUrl: "https://bento.me/prashantdhole",
        demoUrl: "#",
        codeUrl: "#"
    }
];

// Generate project cards
const projectContainer = document.getElementById('projectContainer');

projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <div class="card-inner" onclick="window.location.href='${project.projectUrl}'">
            <div class="card-front">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-overlay">
                    <span class="project-category">${project.category}</span>
                    <h3 class="project-title">${project.title}</h3>
                    <div class="project-stats">
                        <div class="stat-item">
                            <i class="fas fa-heart"></i> ${project.likes}
                        </div>
                        <div class="stat-item">
                            <i class="fas fa-eye"></i> ${project.views}
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-back">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="tech-stack">
                    ${project.tech.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.demoUrl}" class="project-link demo-link" onclick="event.stopPropagation()">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="${project.codeUrl}" class="project-link code-link" onclick="event.stopPropagation()" target="_blank">
                        <i class="fab fa-github"></i> View Code
                    </a>
                </div>
            </div>
        </div>
    `;
    projectContainer.appendChild(card);
});

// GSAP Animations
if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    
    // Section title animation
    gsap.to(".section-title", {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#projects",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    // Project cards animation
    gsap.from(".project-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
            trigger: "#projectContainer",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
}

// Make entire card clickable (fallback for older browsers)
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const link = this.querySelector('.card-inner').getAttribute('onclick');
        if (link) {
            const url = link.match(/'(.*?)'/)[1];
            window.location.href = url;
        }
    });
});
    // Project cards animation
    gsap.utils.toArray(".project-card").forEach((card, i) => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            delay: i * 0.15,
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none none"
            }
        });
    });
    
    // Add hover effect with GSAP for smoother performance
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.02,
                y: -10,
                duration: 0.5,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    });

    // Education Section
    const achievements = [
        ["Graduated with Honors", "Published research paper on JETIR","Internship at Y-Saas Infotech.pvt.ltd"],
        ["Specialized in Java Programming", "Capstone project awarded best in class", "Intership at Logic Technology pvt.ltd."],
        ["Research fellowship recipient", "Developed open-source library", "achive Solar technology certificate "],
        [ "Kabbadi 2nd Weener of Distict Sport Solapur ", "Best leader of School awarde"]
    ];
    
    const educationData = [
        {
            year: "2022-2025",
            degree: "Bachelor of Degree in Computer Science and Eng.",
            institution: "JD College of Engineering and Management Nagpur",
            description: "Specialized STEM program with focus on Computer science And Eng.",
            achievements: achievements[0]
        },
        {
            year: "2020-2022",
            degree: "Class XII High School Diploma",
            institution: "Indira institude of tech Vishnupuri,Nanded",
            description: "Specialized STEM program with focus on Computer  science fundamentals.",
            achievements: achievements[1]
        },
        {
            year: "2019-2020",
            degree: "Class XII HSC",
            institution: "Rayat Shikashn Sanstha Madha",
            description: "Specialized STEM program with focus on science fundamentals.",
            achievements: achievements[2]
        }, {
            year: "2017-2018",
            degree: " High School SSC",
            institution: "Maddyamik Ashram Shala Madha",
            description: "Specilized in Kabbadi",
            achievements: achievements[3]
        }
    ];
    
    // Generate timeline items
    const timelineContainer = document.getElementById('timelineItems');
    
    educationData.forEach((edu, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-year">${edu.year}</div>
                <div class="timeline-dot"></div>
                <h3 class="degree">${edu.degree}</h3>
                <div class="institution">
                    <i class="fas fa-university"></i> ${edu.institution}
                </div>
                <p class="description">${edu.description}</p>
                <div class="achievements">
                    ${edu.achievements.map(ach => `
                        <div class="achievement">
                            <i class="fas fa-trophy"></i>
                            <span>${ach}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        timelineContainer.appendChild(timelineItem);
    });
    
    // Timeline items animation
    gsap.utils.toArray(".timeline-item").forEach((item, i) => {
        gsap.to(item, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: i * 0.2,
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none none"
            }
        });
    });
    
    // Hover effect for timeline content
    document.querySelectorAll('.timeline-content').forEach(content => {
        content.addEventListener('mouseenter', () => {
            gsap.to(content, {
                y: -5,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        content.addEventListener('mouseleave', () => {
            gsap.to(content, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
    // Animate timeline line
    gsap.from(".timeline-line", {
        scaleY: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 70%",
            toggleActions: "play none none none"
        }
    });
    
    // Animate timeline dots
    gsap.utils.toArray(".timeline-dot").forEach((dot, i) => {
        gsap.from(dot, {
            scale: 0,
            duration: 0.6,
            delay: i * 0.3,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
                trigger: dot,
                start: "top 90%",
                toggleActions: "play none none none"
            }
        });
    });

    // Skills Section
    const developmentSkills = [
        { name: "JavaScript", level: Math.floor(Math.random() * 20) + 50, icon: "fab fa-js" },
        { name: "JAVA", level: Math.floor(Math.random() * 25) + 75, icon: "fab fa-java" },
        { name: "PHP", level: Math.floor(Math.random() * 25) + 70, icon: "fab fa-php" },
        { name: "Python", level: Math.floor(Math.random() * 30) + 65, icon: "fab fa-python" }
    ];
    
    const designSkills = [
        { name: "UI/UX Design", level: Math.floor(Math.random() * 25) + 75, icon: "fas fa-paint-brush" },
        { name: "Figma", level: Math.floor(Math.random() * 30) + 70, icon: "fas fa-palette" },
        { name: "CANVA", level: Math.floor(Math.random() * 35) + 60, icon: "fas fa-pencil-ruler" },
        { name: "Prototyping", level: Math.floor(Math.random() * 30) + 65, icon: "fas fa-magic" }
    ];
    
    const toolsSkills = [
        { name: "Git", level: Math.floor(Math.random() * 20) + 60, icon: "fab fa-git-alt" },
        { name: "Postman", level: Math.floor(Math.random() * 30) + 65, icon: "fab fa-postman" },
        { name: "AWS", level: Math.floor(Math.random() * 35) + 60, icon: "fab fa-aws" },
        { name: "VS Code", level: Math.floor(Math.random() * 15) + 85, icon: "fas fa-code" }
    ];
    
    const softSkills = [
        { name: "Problem Solving", level: Math.floor(Math.random() * 15) + 85, icon: "fas fa-lightbulb" },
        { name: "Teamwork", level: Math.floor(Math.random() * 20) + 80, icon: "fas fa-users" },
        { name: "Leadership", level: Math.floor(Math.random() * 25) + 75, icon: "fas fa-comments" },
        { name: "Project Management", level: Math.floor(Math.random() * 30) + 70, icon: "fas fa-tasks" }
    ];
    
    // Generate skill categories
    const skillsContainer = document.getElementById('skillsContainer');
    
    const categories = [
        {
            title: "Development",
            icon: "fas fa-code",
            skills: developmentSkills,
            className: "development"
        },
        {
            title: "Design",
            icon: "fas fa-paint-brush",
            skills: designSkills,
            className: "design"
        },
        {
            title: "Dev Tools",
            icon: "fas fa-tools",
            skills: toolsSkills,
            className: "tools"
        },
        {
            title: "Soft Skills",
            icon: "fas fa-brain",
            skills: softSkills,
            className: "soft-skills"
        }
    ];
    
    categories.forEach((category, catIndex) => {
        const categoryElement = document.createElement('div');
        categoryElement.className = `skill-category ${category.className}`;
        
        let skillsHTML = '';
        category.skills.forEach(skill => {
            const levelText = skill.level > 85 ? "Expert" : 
                            skill.level > 70 ? "Advanced" : 
                            skill.level > 55 ? "Intermediate" : "Beginner";
            
            skillsHTML += `
                <div class="skill-item">
                    <div class="skill-header">
                        <div class="skill-name">
                            <i class="${skill.icon}"></i>
                            <span>${skill.name}</span>
                        </div>
                        <div class="skill-percent">${skill.level}%</div>
                    </div>
                    <div class="skill-bar-container">
                        <div class="skill-bar" data-level="${skill.level}"></div>
                    </div>
                    <div class="skill-level">
                        <span>Beginner</span>
                        <span>${levelText}</span>
                        <span>Expert</span>
                    </div>
                </div>
            `;
        });
        
        categoryElement.innerHTML = `
            <h3 class="category-title">
                <i class="${category.icon}"></i>
                ${category.title}
            </h3>
            ${skillsHTML}
        `;
        
        skillsContainer.appendChild(categoryElement);
    });
    
    // Skill categories animation
    gsap.utils.toArray(".skill-category").forEach((category, i) => {
        gsap.to(category, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: i * 0.15,
            scrollTrigger: {
                trigger: category,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            onComplete: function() {
                // Animate skill bars after category appears
                const skillBars = category.querySelectorAll('.skill-bar');
                skillBars.forEach(bar => {
                    const level = bar.getAttribute('data-level');
                    gsap.to(bar, {
                        width: `${level}%`,
                        duration: 1.5,
                        delay: 0.3,
                        ease: "power2.out"
                    });
                });
            }
        });
    });
    
    // Hover effect for categories
    document.querySelectorAll('.skill-category').forEach(category => {
        category.addEventListener('mouseenter', () => {
            gsap.to(category, {
                y: -5,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        category.addEventListener('mouseleave', () => {
            gsap.to(category, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
    // Pulse animation for icons
    setInterval(() => {
        const randomIcon = document.querySelectorAll('.skill-name i')[Math.floor(Math.random() * 16)];
        gsap.to(randomIcon, {
            scale: 1.3,
            duration: 0.3,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut"
        });
    }, 2000);

    // Contact Section
    // Contact info animation
    gsap.to(".contact-info", {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: ".contact-info",
            start: "top 90%",
            toggleActions: "play none none none"
        }
    });
    
    // Contact form animation
    gsap.to(".contact-form", {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
            trigger: ".contact-form",
            start: "top 90%",
            toggleActions: "play none none none"
        }
    });
    
    // Form input animations
    gsap.utils.toArray(".form-group").forEach((input, i) => {
        input.addEventListener('focusin', () => {
            gsap.to(input, {
                y: -5,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        input.addEventListener('focusout', () => {
            gsap.to(input, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
    // Button hover effect
    const submitBtn = document.querySelector('.submit-btn');
    
    submitBtn.addEventListener('mouseenter', () => {
        gsap.to(submitBtn, {
            y: -3,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    submitBtn.addEventListener('mouseleave', () => {
        gsap.to(submitBtn, {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    // Social links animation
    gsap.utils.toArray(".social-link").forEach((link, i) => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                y: -5,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
    // Contact method animations
    gsap.utils.toArray(".contact-method").forEach((method, i) => {
        method.addEventListener('mouseenter', () => {
            gsap.to(method, {
                x: 10,
                duration: 0.3,
                ease: "power2.out"
            });
            
            gsap.to(method.querySelector('.method-icon'), {
                scale: 1.1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        method.addEventListener('mouseleave', () => {
            gsap.to(method, {
                x: 0,
                duration: 0.3,
                ease: "power2.out"
            });
            
            gsap.to(method.querySelector('.method-icon'), {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
    // Form submission
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitIcon = submitBtn.querySelector('i');
        const originalHtml = submitBtn.innerHTML;
        
        // Loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate sending
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            
            // Reset form
            setTimeout(() => {
                form.reset();
                submitBtn.innerHTML = originalHtml;
                submitBtn.disabled = false;
                
                // Reset labels
                document.querySelectorAll('.form-label').forEach(label => {
                    label.style.top = '15px';
                    label.style.left = '15px';
                    label.style.fontSize = '1rem';
                    label.style.color = 'rgba(255, 255, 255, 0.7)';
                });
            }, 2000);
        }, 1500);
    });

    // Initialize particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS.load('particles', 'particles.json', function() {
            console.log('Particles.js loaded successfully');
        });
    }
    
});

// ============================================
// Mental Health Support Website - JavaScript (Fixed Chatbot)
// ============================================

// Wellness Tips Array
const wellnessTips = [
    "Take deep breaths: Practice 5-minute breathing exercises. Breathe in for 4 counts, hold for 4, exhale for 4.",
    "Move your body: A 20-minute walk or light exercise can significantly improve your mood and reduce stress.",
    "Practice gratitude: Write down 3 things you're grateful for every day. This shifts focus to positivity.",
    "Connect with someone: Call a friend or family member. Social connection is essential for mental health.",
    "Take a break from screens: Reduce screen time by at least 1 hour daily for better mental clarity.",
    "Practice mindfulness: Focus on the present moment. Notice 5 things you see, 4 you hear, 3 you feel.",
    "Get quality sleep: Aim for 7-9 hours of sleep nightly. Sleep is crucial for mental health recovery.",
    "Do something you love: Engage in hobbies or activities that bring you joy and relaxation.",
    "Practice self-compassion: Treat yourself with the same kindness you'd offer a good friend.",
    "Limit negative news: Reduce exposure to negative news and social media for better mental health.",
    "Eat well: Maintain a balanced diet with fruits, vegetables, and proteins to support brain health.",
    "Spend time in nature: Even 15 minutes outdoors can reduce stress and anxiety levels.",
    "Practice progressive relaxation: Tense and release each muscle group for 2 seconds each.",
    "Journal your thoughts: Writing helps process emotions and clear your mind.",
    "Set boundaries: Learn to say 'no' to protect your mental energy and time."
];

// ============================================
// 1. DOM Content Loaded Handler
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupThemeToggle();
    setupSmoothScroll();
    setupFormValidation();
    observeStatistics();
    setupAccessibility();
}

// ============================================
// 2. Navigation Setup
// ============================================
function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar')) {
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    hamburger.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            hamburger.click();
        }
    });
}

// ============================================
// 3. Theme Toggle (Dark Mode)
// ============================================
function setupThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.textContent = '☀️';
    }

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeIcon.textContent = '☀️';
            themeToggle.setAttribute('aria-pressed', 'true');
        } else {
            localStorage.setItem('theme', 'light');
            themeIcon.textContent = '🌙';
            themeToggle.setAttribute('aria-pressed', 'false');
        }
    });

    themeToggle.setAttribute('aria-pressed', savedTheme === 'dark' ? 'true' : 'false');
}

// ============================================
// 4. Smooth Scrolling
// ============================================
function setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// 5. Animated Statistics Counter
// ============================================
function observeStatistics() {
    const stats = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    stats.forEach(stat => {
        observer.observe(stat);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = elapsed / duration;
        
        if (progress < 1) {
            const current = Math.floor(start + (target - start) * easeOutQuad(progress));
            element.textContent = current + (target > 50 ? '+' : '%');
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (target > 50 ? '+' : '%');
        }
    }

    requestAnimationFrame(updateCounter);
}

function easeOutQuad(t) {
    return 1 - (1 - t) * (1 - t);
}

// ============================================
// 6. Form Validation
// ============================================
function setupFormValidation() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            clearFormErrors();
            
            if (validateForm()) {
                submitForm();
            }
        });

        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
        });
    }
}

function validateForm() {
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    
    let isValid = true;

    if (!fullname.value.trim()) {
        showError('fullname', 'Name is required');
        isValid = false;
    } else if (fullname.value.trim().length < 2) {
        showError('fullname', 'Name must be at least 2 characters');
        isValid = false;
    }

    if (!email.value.trim()) {
        showError('email', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }

    if (phone.value.trim() && !isValidPhone(phone.value)) {
        showError('phone', 'Please enter a valid phone number');
        isValid = false;
    }

    if (!subject.value) {
        showError('subject', 'Please select a subject');
        isValid = false;
    }

    if (!message.value.trim()) {
        showError('message', 'Message is required');
        isValid = false;
    } else if (message.value.trim().length < 10) {
        showError('message', 'Message must be at least 10 characters');
        isValid = false;
    }

    return isValid;
}

function validateField(field) {
    const fieldName = field.id;
    const value = field.value.trim();

    switch (fieldName) {
        case 'fullname':
            if (!value) {
                showError(fieldName, 'Name is required');
            } else if (value.length < 2) {
                showError(fieldName, 'Name must be at least 2 characters');
            } else {
                clearFieldError(fieldName);
            }
            break;

        case 'email':
            if (!value) {
                showError(fieldName, 'Email is required');
            } else if (!isValidEmail(value)) {
                showError(fieldName, 'Invalid email address');
            } else {
                clearFieldError(fieldName);
            }
            break;

        case 'phone':
            if (value && !isValidPhone(value)) {
                showError(fieldName, 'Invalid phone number');
            } else {
                clearFieldError(fieldName);
            }
            break;

        case 'subject':
            if (!value) {
                showError(fieldName, 'Please select a subject');
            } else {
                clearFieldError(fieldName);
            }
            break;

        case 'message':
            if (!value) {
                showError(fieldName, 'Message is required');
            } else if (value.length < 10) {
                showError(fieldName, 'Message must be at least 10 characters');
            } else {
                clearFieldError(fieldName);
            }
            break;
    }
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + '-error');
    
    field.parentElement.classList.add('error');
    errorElement.textContent = message;
}

function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + '-error');
    
    field.parentElement.classList.remove('error');
    errorElement.textContent = '';
}

function clearFormErrors() {
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        group.classList.remove('error');
        const errorMsg = group.querySelector('.error-message');
        if (errorMsg) {
            errorMsg.textContent = '';
        }
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

function submitForm() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('form-success');

    console.log('Form submitted with data:');
    console.log({
        fullname: document.getElementById('fullname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    });

    successMessage.style.display = 'block';
    form.reset();
    clearFormErrors();

    setTimeout(function() {
        successMessage.style.display = 'none';
    }, 5000);
}

// ============================================
// 7. Wellness Tips Generator
// ============================================
function generateWellnessTip() {
    const tipElement = document.getElementById('wellness-tip');
    const randomIndex = Math.floor(Math.random() * wellnessTips.length);
    const selectedTip = wellnessTips[randomIndex];

    tipElement.style.opacity = '0';
    
    setTimeout(() => {
        tipElement.textContent = selectedTip;
        tipElement.style.opacity = '1';
    }, 200);
}

// ============================================
// 8. Accessibility Features
// ============================================
function setupAccessibility() {
    const skipLink = document.createElement('a');
    skipLink.href = '#home';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);

    const style = document.createElement('style');
    style.textContent = `
        .skip-link {
            position: absolute;
            top: -40px;
            left: 0;
            background: var(--primary-color);
            color: white;
            padding: 8px 16px;
            text-decoration: none;
            z-index: 100;
            border-radius: 0 0 4px 0;
        }
        .skip-link:focus {
            top: 0;
        }
    `;
    document.head.appendChild(style);

    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label')) {
            button.setAttribute('role', 'button');
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            if (e.target.tagName === 'BUTTON') {
                e.target.click();
            }
        }
    });
}

// ============================================
// 9. Scroll Animation Observer
// ============================================
const scrollAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            scrollAnimationObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.addEventListener('DOMContentLoaded', function() {
    const animatableElements = document.querySelectorAll(
        '.challenge-card, .resource-card, .emergency-card, .solution-item, .stat-card'
    );
    
    animatableElements.forEach(element => {
        scrollAnimationObserver.observe(element);
    });
});

// ============================================
// 10. Additional CSS Animation Keyframe
// ============================================
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    button:focus,
    input:focus,
    select:focus,
    textarea:focus,
    a:focus {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
    }

    [data-aos] {
        opacity: 0;
    }
`;
document.head.appendChild(animationStyle);

// ============================================
// 11. Utility Functions
// ============================================
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);

    setTimeout(() => {
        announcement.remove();
    }, 1000);
}

console.log('Mental Health Support Website Loaded Successfully');
console.log('Theme:', localStorage.getItem('theme') || 'light');
console.log('Wellness Tips Available:', wellnessTips.length);

// ============================================
// 12. Performance Monitoring
// ============================================
if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page Load Time:', pageLoadTime + 'ms');
    });
}

// ============================================
// 13. FIXED Chatbot Widget Logic
// ============================================
(function setupChatbot() {
    // Local response system - no API needed
    const responses = {
        greetings: [
            "Hi there! I'm here to support you. How are you feeling today?",
            "Hello! I'm your mental health support companion. What's on your mind?",
            "Hey! I'm glad you're here. How can I help you today?"
        ],
        tips: wellnessTips,
        resources: [
            "We have several resources: Meditation & Mindfulness, Self-Help Books, Physical Exercise, and Support Groups. Check our Resources section!",
            "Our Resources section has meditation guides, exercise tips, and support group information."
        ],
        crisis: [
            "I'm concerned about you. Please call AASRA: 9820466726 or iCall: 9152987821 immediately. Your life matters.",
            "Please reach out for help now. Call 112 or AASRA: 9820466726. You don't have to face this alone."
        ],
        help: [
            "For crisis support, call AASRA: 9820466726 or iCall: 9152987821. Your wellbeing matters!",
            "If you need immediate help, please contact emergency services (112) or our crisis helplines."
        ],
        anxiety: [
            "I hear that you're feeling anxious. Try deep breathing: inhale for 4 counts, hold for 4, exhale for 4. Would you like more techniques?",
            "Anxiety can be tough. Try the 5-4-3-2-1 grounding technique: name 5 things you see, 4 you hear, 3 you feel, 2 you smell, 1 you taste."
        ],
        depression: [
            "I hear you. Depression is difficult, but help is available. Please consider talking to a professional. iCall: 9152987821",
            "You're not alone. Please reach out to mental health professionals. For immediate support, call iCall: 9152987821"
        ],
        sleep: [
            "Good sleep is vital for mental health. Try a consistent bedtime routine and avoid screens before bed.",
            "Sleep tips: Keep your room dark and cool, avoid caffeine after 2pm, and try relaxing before sleep."
        ],
        lonely: [
            "Feeling lonely is hard. Consider reaching out to friends, family, or support groups. You are not alone.",
            "Connection matters. Try joining our Resources section for support groups, or call a trusted person."
        ],
        default: [
            "Thank you for sharing. I'm here to support you. Would you like a wellness tip or information about resources?",
            "I hear you. Taking about mental health is a brave step. How can I help you today?",
            "It's okay to not be okay. Let's work through this together. What would help you right now?"
        ]
    };

    const chatWidget = document.querySelector('.chat-widget');
    if (!chatWidget) return;

    const chatToggle = chatWidget.querySelector('.chat-toggle');
    const chatWindow = chatWidget.querySelector('.chat-window');
    const chatClose = chatWidget.querySelector('.chat-close');
    const chatForm = chatWidget.querySelector('.chat-form');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = chatWidget.querySelector('.chat-messages');

    function getRandomItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function getResponse(key) {
        const response = responses[key];
        if (Array.isArray(response)) {
            return getRandomItem(response);
        }
        return response;
    }

    function openChat() {
        chatWidget.classList.add('open');
        chatToggle.setAttribute('aria-expanded', 'true');
        chatWindow.setAttribute('aria-hidden', 'false');
        setTimeout(() => chatInput.focus(), 120);
        if (!chatMessages.querySelector('.bot-welcome')) {
            addMessage('Hello! I am your mental health support companion. Ask me for wellness tips, resources, or crisis support.', 'bot', 'bot-welcome');
        }
    }
    
    function closeChat() {
        chatWidget.classList.remove('open');
        chatToggle.setAttribute('aria-expanded', 'false');
        chatWindow.setAttribute('aria-hidden', 'true');
        chatToggle.focus();
    }

    chatToggle.addEventListener('click', function() {
        if (chatWidget.classList.contains('open')) closeChat(); else openChat();
    });

    chatClose.addEventListener('click', closeChat);

    chatForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (!text) return;
        addMessage(text, 'user');
        chatInput.value = '';
        chatInput.style.height = 'auto';
        setTimeout(() => botReply(text), 600);
    });

    chatInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            chatForm.requestSubmit();
        }
    });

    chatInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });

    function addMessage(text, sender = 'bot', extraClass = '') {
        const el = document.createElement('div');
        el.className = 'chat-message ' + (sender === 'user' ? 'user' : 'bot');
        if (extraClass) el.classList.add(extraClass);
        el.textContent = text;
        chatMessages.appendChild(el);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function botReply(userText) {
        const lower = userText.toLowerCase();

        const typing = document.createElement('div');
        typing.className = 'chat-message bot typing';
        typing.textContent = '...';
        chatMessages.appendChild(typing);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        setTimeout(() => {
            typing.remove();

            // Crisis keywords - highest priority
            if (/suicide|kill myself|want to die|end my life|harm myself|hurt myself/.test(lower)) {
                addMessage(getResponse('crisis'), 'bot');
                return;
            }

            // Greetings
            if (/\b(hi|hello|hey|namaste|good morning|good evening)\b/.test(lower)) {
                addMessage(getResponse('greetings'), 'bot');
                return;
            }

            // Tips
            if (lower.includes('tip') || lower.includes('wellness') || lower.includes('advice')) {
                addMessage(getResponse('tips'), 'bot');
                return;
            }

            // Resources
            if (lower.includes('resource') || lower.includes('meditation') || lower.includes('exercise') || lower.includes('book') || lower.includes('support group')) {
                addMessage(getResponse('resources'), 'bot');
                return;
            }

            // Help
            if (lower.includes('help') || lower.includes('support') || lower.includes('need someone')) {
                addMessage(getResponse('help'), 'bot');
                return;
            }

            // Anxiety/Stress
            if (lower.includes('anxiety') || lower.includes('anxious') || lower.includes('stress') || lower.includes('worried') || lower.includes('panic')) {
                addMessage(getResponse('anxiety'), 'bot');
                return;
            }

            // Depression
            if (lower.includes('depression') || lower.includes('depressed') || lower.includes('sad') || lower.includes('hopeless')) {
                addMessage(getResponse('depression'), 'bot');
                return;
            }

            // Sleep
            if (lower.includes('sleep') || lower.includes('insomnia') || lower.includes('tired') || lower.includes('exhausted')) {
                addMessage(getResponse('sleep'), 'bot');
                return;
            }

            // Loneliness
            if (lower.includes('lonely') || lower.includes('alone') || lower.includes('isolated')) {
                addMessage(getResponse('lonely'), 'bot');
                return;
            }

            // Thank you
            if (lower.includes('thank')) {
                addMessage("You're welcome! I'm here whenever you need to talk. Take care!", 'bot');
                return;
            }

            // Goodbye
            if (lower.includes('bye') || lower.includes('goodbye')) {
                addMessage('Goodbye! Remember, you can always come back when you need support. Take care!', 'bot');
                return;
            }

            // Default
            addMessage(getResponse('default'), 'bot');
        }, 700);
    }

    console.log('Chatbot initialized successfully');
})();

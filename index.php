<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="MindCare India - Your Personal Mental Health Companion. Free resources, 24/7 support, and expert guidance for better mental wellness.">
    <meta name="theme-color" content="#e8f4f8">
    <title>MindCare India - Mental Health Support Dashboard</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="hero-new.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar" role="navigation" aria-label="Main navigation">
        <div class="nav-container">
            <div class="logo">
                <span class="logo-icon">🧠</span>
                <span class="logo-text">MindCare India</span>
            </div>
            <button class="hamburger" aria-label="Toggle navigation menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-menu" role="menubar">
                <li><a href="#home" class="nav-link" role="menuitem">Home</a></li>
                <li><a href="#dashboard" class="nav-link" role="menuitem">Dashboard</a></li>
                <li><a href="#resources" class="nav-link" role="menuitem">Resources</a></li>
                <li><a href="#community" class="nav-link" role="menuitem">Community</a></li>
                <li><a href="#emergency" class="nav-link" role="menuitem">Emergency</a></li>
                <li><a href="#contact" class="nav-link" role="menuitem">Contact</a></li>
            </ul>
            <button class="theme-toggle" aria-label="Toggle dark mode" title="Toggle dark mode">
                <span class="theme-icon">🌙</span>
            </button>
        </div>
    </nav>

    <!-- Hero Section - Clean with Animated Circles and Data Cards -->
    <section id="home" class="hero hero-new" role="region" aria-label="Hero section">
        <div class="hero-container">
            <!-- Left Content -->
            <div class="hero-content">
                <h1 class="hero-title">Your Personal Mental Health Companion</h1>
                <p class="hero-subtitle">Free resources, 24/7 support, and expert guidance - all in one place</p>
                
                <div class="hero-buttons">
                    <button class="btn btn-primary" onclick="document.getElementById('resources').scrollIntoView({behavior: 'smooth'})">Explore All Features</button>
                    <button class="btn btn-secondary" onclick="document.getElementById('emergency').scrollIntoView({behavior: 'smooth'})">Need Immediate Help?</button>
                </div>
                
                <div class="trust-indicators">
                    <span class="trust-item">✓ Free Forever</span>
                    <span class="trust-item">✓ No Sign-up Required</span>
                    <span class="trust-item">✓ Privacy Guaranteed</span>
                </div>
            </div>
            
            <!-- Right Side - Animated Circles with Floating Data Cards -->
            <div class="hero-visual">
                <div class="hero-floating-data">
                    <div class="hero-anim-circle hero-anim-1"></div>
                    <div class="hero-anim-circle hero-anim-2"></div>
                    <div class="hero-anim-circle hero-anim-3"></div>
                    
                    <!-- Floating Data Cards - New Data -->
                    <div class="float-data-card float-card-1">
                        <span class="fdc-icon">🧠</span>
                        <span class="fdc-value">150M</span>
                        <span class="fdc-label">Depression Cases</span>
                    </div>
                    <div class="float-data-card float-card-2">
                        <span class="fdc-icon">😰</span>
                        <span class="fdc-value">70M</span>
                        <span class="fdc-label">Anxiety Disorders</span>
                    </div>
                    <div class="float-data-card float-card-3">
                        <span class="fdc-icon">💰</span>
                        <span class="fdc-value">₹500</span>
                        <span class="fdc-label">Avg. Session Cost</span>
                    </div>
                    <div class="float-data-card float-card-4">
                        <span class="fdc-icon">👨‍⚕️</span>
                        <span class="fdc-value">0.3</span>
                        <span class="fdc-label">Per 100K Doctors</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Quick Demo Section -->
    <section id="dashboard" class="dashboard-preview" role="region" aria-label="Dashboard preview">
        <div class="container">
            <h2 class="section-title">Your Personal Dashboard</h2>
            <p class="section-subtitle">Everything you need to track and improve your mental health</p>
            
            <div class="dashboard-grid">
                <div class="dashboard-card">
                    <div class="dash-icon">📈</div>
                    <h3>Mood Graph</h3>
                    <p>Visualize your mood patterns over weeks and months</p>
                </div>
                <div class="dashboard-card">
                    <div class="dash-icon">🎯</div>
                    <h3>Daily Goals</h3>
                    <p>Set and track wellness goals like meditation, sleep, and exercise</p>
                </div>
                <div class="dashboard-card">
                    <div class="dash-icon">📝</div>
                    <h3>Thought Journal</h3>
                    <p>Capture thoughts and feelings with AI-guided prompts</p>
                </div>
                <div class="dashboard-card">
                    <div class="dash-icon">🧘</div>
                    <h3>Meditation Timer</h3>
                    <p>Customizable timers for mindfulness practice</p>
                </div>
                <div class="dashboard-card">
                    <div class="dash-icon">💤</div>
                    <h3>Sleep Tracker</h3>
                    <p>Monitor sleep quality and get improvement tips</p>
                </div>
                <div class="dashboard-card">
                    <div class="dash-icon">🏆</div>
                    <h3>Achievements</h3>
                    <p>Earn badges for consistent wellness practices</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about" role="region" aria-label="About section">
        <div class="container">
            <h2 class="section-title">About MindCare</h2>
            <p class="section-subtitle">Bridging the mental health gap in India</p>
            
            <div class="about-content">
                <div class="about-text">
                    <h3>Our Mission</h3>
                    <p>MindCare India is dedicated to making mental health support accessible to everyone. We believe that everyone deserves a space to heal, grow, and thrive - regardless of their background or financial situation.</p>
                    <ul class="about-list">
                        <li><span class="checkmark">✓</span> Free and confidential mental health resources</li>
                        <li><span class="checkmark">✓</span> AI-powered tools for daily wellness tracking</li>
                        <li><span class="checkmark">✓</span> Community support from people who understand</li>
                        <li><span class="checkmark">✓</span> Verified crisis helplines for immediate help</li>
                    </ul>
                </div>
                <div class="about-visual">
                    <div class="visual-card">
                        <div class="visual-icon">💙</div>
                        <h4>You're Not Alone</h4>
                        <p>Join 50,000+ Indians taking charge of their mental health</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Statistics Section -->
    <section id="statistics" class="statistics" role="region" aria-label="Statistics section">
        <div class="container">
            <h2 class="section-title">The Need</h2>
            <p class="section-subtitle">Why mental health support matters in India</p>
            
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-number" data-target="300">0</div>
                    <span class="stat-label">Million+ Affected</span>
                </div>
                <div class="stat-card">
                    <div class="stat-number" data-target="90">0</div>
                    <span class="stat-label">% Untreated</span>
                </div>
                <div class="stat-card">
                    <div class="stat-number" data-target="1">0</div>
                    <span class="stat-label">Per 100K Doctors</span>
                </div>
                <div class="stat-card">
                    <div class="stat-number" data-target="80">0</div>
                    <span class="stat-label">% Lack Access</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Resources Section -->
    <section id="resources" class="resources" role="region" aria-label="Self-help resources section">
        <div class="container">
            <h2 class="section-title">Free Resources</h2>
            <p class="section-subtitle">Tools to support your mental wellness journey</p>
            
            <div class="resources-grid">
                <div class="resource-card">
                    <div class="resource-icon">🧘</div>
                    <h3>Meditation Library</h3>
                    <p>50+ guided meditations for stress, anxiety, focus, and sleep</p>
                </div>
                <div class="resource-card">
                    <div class="resource-icon">📚</div>
                    <h3>Article Library</h3>
                    <p>200+ articles on mental health, coping strategies, and wellness</p>
                </div>
                <div class="resource-card">
                    <div class="resource-icon">🎬</div>
                    <h3>Video Content</h3>
                    <p>Expert videos on therapy techniques and mental health education</p>
                </div>
                <div class="resource-card">
                    <div class="resource-icon">📋</div>
                    <h3>Worksheets</h3>
                    <p>Interactive CBT worksheets and journaling prompts</p>
                </div>
            </div>

            <div class="tips-section">
                <h3>Daily Wellness Tip</h3>
                <p id="wellness-tip" class="wellness-tip">Click the button below to get a random mental health tip</p>
                <button class="btn btn-primary" onclick="generateWellnessTip()">Get a Tip</button>
            </div>
        </div>
    </section>

    <!-- Community Section -->
    <section id="community" class="community" role="region" aria-label="Community section">
        <div class="container">
            <h2 class="section-title">Join Our Community</h2>
            <p class="section-subtitle">You're not alone on this journey</p>
            
            <div class="community-grid">
                <div class="community-card">
                    <div class="community-icon">💬</div>
                    <h3>Forums</h3>
                    <p>Discuss topics with others who share similar experiences</p>
                </div>
                <div class="community-card">
                    <div class="community-icon">👥</div>
                    <h3>Peer Support</h3>
                    <p>Connect with trained peer supporters</p>
                </div>
                <div class="community-card">
                    <div class="community-icon">📅</div>
                    <h3>Events</h3>
                    <p>Join weekly group meditations and workshops</p>
                </div>
                <div class="community-card">
                    <div class="community-icon">🎓</div>
                    <h3>Webinars</h3>
                    <p>Learn from mental health experts</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Emergency Help Section -->
    <section id="emergency" class="emergency" role="region" aria-label="Emergency help section">
        <div class="container">
            <h2 class="section-title">Crisis Support</h2>
            <p class="section-subtitle">If you're in crisis, help is available 24/7</p>
            
            <div class="emergency-grid">
                <div class="emergency-card">
                    <h3>AASRA</h3>
                    <p class="emergency-number">📞 9820466726</p>
                    <p>Suicide Prevention</p>
                    <small>8 PM - 11 PM</small>
                </div>
                <div class="emergency-card">
                    <h3>iCall</h3>
                    <p class="emergency-number">📞 9152987821</p>
                    <p>Mental Health Support</p>
                    <small>24/7 Available</small>
                </div>
                <div class="emergency-card">
                    <h3>Vandrevala</h3>
                    <p class="emergency-number">📞 9999 666 555</p>
                    <p>Crisis Helpline</p>
                    <small>24/7 Available</small>
                </div>
                <div class="emergency-card">
                    <h3>Emergency</h3>
                    <p class="emergency-number">📞 112</p>
                    <p>Immediate Help</p>
                    <small>24/7 Available</small>
                </div>
            </div>

            <div class="crisis-message">
                <h3>⚠️ In Immediate Danger?</h3>
                <p>Call <strong>112</strong> or go to your nearest emergency room. Your life matters.</p>
            </div>
        </div>
    </section>

    <!-- Contact & Feedback Form -->
    <section id="contact" class="contact" role="region" aria-label="Contact and feedback form section">
        <div class="container">
            <h2 class="section-title">Get In Touch</h2>
            <p class="section-subtitle">We'd love to hear from you</p>
            
            <form class="contact-form" id="contactForm" novalidate>
                <div class="form-group">
                    <label for="fullname">Full Name *</label>
                    <input type="text" id="fullname" name="fullname" required aria-required="true" placeholder="Your name">
                    <span class="error-message" id="fullname-error"></span>
                </div>

                <div class="form-group">
                    <label for="email">Email Address *</label>
                    <input type="email" id="email" name="email" required aria-required="true" placeholder="your.email@example.com">
                    <span class="error-message" id="email-error"></span>
                </div>

                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="+91 9876543210">
                    <span class="error-message" id="phone-error"></span>
                </div>

                <div class="form-group">
                    <label for="subject">Subject *</label>
                    <select id="subject" name="subject" required aria-required="true">
                        <option value="">Select a subject...</option>
                        <option value="feedback">General Feedback</option>
                        <option value="suggestion">Feature Suggestion</option>
                        <option value="resource">Resource Request</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                    </select>
                    <span class="error-message" id="subject-error"></span>
                </div>

                <div class="form-group">
                    <label for="message">Message *</label>
                    <textarea id="message" name="message" rows="5" required aria-required="true" placeholder="Your message..."></textarea>
                    <span class="error-message" id="message-error"></span>
                </div>

                <button type="submit" class="btn btn-primary btn-submit">Send Message</button>
                <p class="form-note">We'll get back to you within 24 hours.</p>
                <div id="form-success" class="success-message" style="display: none;">
                    ✓ Thank you! We'll be in touch soon.
                </div>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer" role="contentinfo">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>MindCare India</h3>
                    <p>Your personal mental health companion. Free, private, and always here for you.</p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#dashboard">Dashboard</a></li>
                        <li><a href="#resources">Resources</a></li>
                        <li><a href="#emergency">Crisis Help</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Follow Us</h3>
                    <div class="social-links">
                        <a href="#" aria-label="Facebook">f</a>
                        <a href="#" aria-label="Twitter">𝕏</a>
                        <a href="#" aria-label="Instagram">📷</a>
                        <a href="#" aria-label="LinkedIn">in</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 MindCare India. All rights reserved. | Made with ❤️ for mental wellness</p>
            </div>
        </div>
    </footer>

    <!-- Chatbot widget -->
    <div class="chat-widget" aria-hidden="false">
        <button class="chat-toggle" aria-label="Open chat" aria-expanded="false">💬</button>

        <div class="chat-window" role="dialog" aria-label="Support chat" aria-modal="false">
            <div class="chat-header">
                <div>
                    <strong>Support Bot</strong>
                    <div class="chat-subtitle">Your wellness companion</div>
                </div>
                <button class="chat-close" aria-label="Close chat">✕</button>
            </div>

            <div class="chat-messages" role="log" aria-live="polite"></div>

            <form class="chat-form" aria-label="Chat input">
                <textarea id="chatInput" class="chat-input" rows="1" placeholder="Type a message..." aria-label="Type your message"></textarea>
                <button type="submit" class="chat-send" aria-label="Send message">Send</button>
            </form>
            <div class="chat-footer-note">Not a substitute for professional help.</div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>

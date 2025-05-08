document.addEventListener('DOMContentLoaded', function() {
    // Language switching functionality
    const langButtons = document.querySelectorAll('.lang-btn');
    const htmlElement = document.documentElement;
    
    // Set initial language based on user preference or default to English
    const savedLang = localStorage.getItem('preferredLanguage') || 'ar';
    setLanguage(savedLang);
    updateLangButtons(savedLang);
    
    langButtons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedLang = this.dataset.lang;
            setLanguage(selectedLang);
            localStorage.setItem('preferredLanguage', selectedLang);
            updateLangButtons(selectedLang);
        });
    });
    
    function updateLangButtons(activeLang) {
        langButtons.forEach(button => {
            button.classList.toggle('hidden', button.dataset.lang === activeLang);
        });
    }
    
    
    
    function setLanguage(lang) {
        // Update HTML lang attribute and direction
        htmlElement.lang = lang;
        htmlElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // Update all elements with data-en and data-ar attributes
        document.querySelectorAll('[data-en], [data-ar]').forEach(element => {
            if (lang === 'en') {
                element.textContent = element.dataset.en;
            } else {
                element.textContent = element.dataset.ar;
            }
        });
        
        // // Update active button state
        // langButtons.forEach(button => {
        //     button.classList.toggle('active', button.dataset.lang === lang);
        // });
    }
    
    // Mobile menu functionality
    const menuBtn = document.getElementById('menu-btn');
    const closeMenu = document.getElementById('close-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    
    menuBtn.addEventListener('click', function() {
        mobileNav.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeMenu.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    overlay.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = answer.classList.contains('active');
            
            // Close all other answers
            document.querySelectorAll('.faq-answer').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle current answer
            if (!isActive) {
                answer.classList.add('active');
            }
        });
    });
    
    // Back to top button functionality
    const backToTop = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Fade-in animation on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', checkFade);
    window.addEventListener('load', checkFade);
});

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

    menuBtn.addEventListener('click', () => {
        mobileNav.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    function closeMenu() {
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Fade-in animations
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        dots:true,
        nav:false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })

    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.offsetTop;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Countdown Timer Function
function createCountdown(targetDate) {
    // Get DOM elements to update
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    // Update the countdown every second
    const countdownInterval = setInterval(function() {
      // Get current date and time
      const currentDate = new Date().getTime();
      
      // Calculate the time difference between now and the target date
      const timeRemaining = targetDate - currentDate;
      
      // Check if countdown is finished
      if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = "Countdown Expired!";
        return;
      }
      
      // Calculate days, hours, minutes, seconds
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      
      // Update the DOM elements
      daysElement.innerHTML = days.toString().padStart(2, '0');
      hoursElement.innerHTML = hours.toString().padStart(2, '0');
      minutesElement.innerHTML = minutes.toString().padStart(2, '0');
      secondsElement.innerHTML = seconds.toString().padStart(2, '0');
      
    }, 1000); // update every second
  }
// Usage example
document.addEventListener('DOMContentLoaded', function() {
    // Set your target date here (year, month (0-11), day, hour, minute, second)
    const targetDate = new Date(2025, 5, 1, 12, 0, 0).getTime();
    createCountdown(targetDate);
  });
  
  // Alternative usage with dynamic target date setting

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
        // autoplay:true,
        // autoplayTimeout:3000,
        linear:true,
        autoplayHoverPause:true,
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
// Build a date with NORMAL months (1–12). Example: 8 = August.
function localDateMs(year, month1to12, day, hour = 0, minute = 0, second = 0) {
  return new Date(year, month1to12 - 1, day, hour, minute, second).getTime();
}

function startPricingCountdown(targetDateMs) {
  // Scope everything to the featured pricing card
  const card = document.querySelector('.pricing-card.featured');
  if (!card) return;

  // Elements to update/hide
  const countdown = card.querySelector('.countdown');
  const daysEl = countdown?.querySelector('#days');
  const hoursEl = countdown?.querySelector('#hours');
  const minutesEl = countdown?.querySelector('#minutes');
  const secondsEl = countdown?.querySelector('#seconds');

  const promoMsg = card.querySelector('p'); // "Book in round 3..."
  const pricingBlocks = card.querySelectorAll('.pricing-price');
  const promoPriceBlock = pricingBlocks[0]; // the 1350 EGP block above the countdown
  const finalPriceBlock = pricingBlocks[1]; // the 1500 EGP block below the countdown

  // Safety: make sure final price shows 1500 EGP (in case you want to enforce it)
  const finalNewPrice = finalPriceBlock?.querySelector('.new-price');
  if (finalNewPrice) finalNewPrice.textContent = '1500 EGP';

  const pad2 = n => String(n).padStart(2, '0');

  function expireOffer() {
    // Hide promo message, promo price, and countdown
    if (promoMsg) promoMsg.style.display = 'none';
    if (promoPriceBlock) promoPriceBlock.style.display = 'none';
    if (countdown) countdown.style.display = 'none';

    // Keep the final price (1500 EGP) visible
    if (finalPriceBlock) finalPriceBlock.style.display = '';
  }

  function tick() {
    const diff = targetDateMs - Date.now();

    if (diff <= 0) {
      clearInterval(timer);
      expireOffer();
      return;
    }

    if (countdown && daysEl && hoursEl && minutesEl && secondsEl) {
      const totalSec = Math.floor(diff / 1000);
      const d = Math.floor(totalSec / 86400);
      const h = Math.floor((totalSec % 86400) / 3600);
      const m = Math.floor((totalSec % 3600) / 60);
      const s = totalSec % 60;

      daysEl.textContent = pad2(d);
      hoursEl.textContent = pad2(h);
      minutesEl.textContent = pad2(m);
      secondsEl.textContent = pad2(s);
    }
  }

  const timer = setInterval(tick, 1000);
  tick(); // initial paint
}

// ===== Set your target date here (local time) =====
// Example: 20 Aug 2025, 12:00 local time (month uses 1–12)
document.addEventListener('DOMContentLoaded', function () {
  const targetDate = localDateMs(2025, 8, 20, 12, 0, 0);
  startPricingCountdown(targetDate);
});

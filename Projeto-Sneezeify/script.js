document.addEventListener('DOMContentLoaded', function() {
   
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    mobileMenuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-bars');
        this.querySelector('i').classList.toggle('fa-times');
    });
    

    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
            mobileMenuToggle.querySelector('i').classList.add('fa-bars');
            mobileMenuToggle.querySelector('i').classList.remove('fa-times');
        });
    });
    
  
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
    
       const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    

    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .highlight-card, .about-image, .hero-image');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('fade-in');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    document.getElementById('registerPassword').addEventListener('input', function() {
    checkPasswordStrength(this.value);
});

    // Sistema de Autenticação
    const authModal = document.getElementById('authModal');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const closeModalBtn = document.querySelector('.close-modal');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const authForms = document.querySelectorAll('.auth-form');
    const notification = document.getElementById('notification');
    
    
    const authButtons = document.querySelectorAll('#openAuthModal, [href="#comecar"]');
    
    function openAuthModal() {
        authModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeAuthModal() {
        authModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    authButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            openAuthModal();
        });
    });
    
    
    closeModalBtn.addEventListener('click', closeAuthModal);
    
 
    authModal.addEventListener('click', function(e) {
        if (e.target === authModal) {
            closeAuthModal();
        }
    });
    
   
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && authModal.classList.contains('active')) {
            closeAuthModal();
        }
    });

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tab = this.dataset.tab;
            
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            authForms.forEach(form => form.classList.remove('active'));
            document.getElementById(`${tab}Form`).classList.add('active');
        });
    });
function checkPasswordStrength(password) {
    const strengthContainer = document.querySelector('.password-strength');
    const strengthBars = document.querySelectorAll('.strength-bar');
    const strengthText = document.querySelector('.strength-text');
    
    let strength = 0;
    
 
    strengthBars.forEach(bar => bar.style.backgroundColor = '#e0e0e0');
    strengthText.textContent = '';
    
    if (!password) return;
    
 
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    

    const strengthLevels = [
        { text: "Muito fraca", color: "#e74c3c" },
        { text: "Fraca", color: "#f39c12" },
        { text: "Moderada", color: "#f1c40f" },
        { text: "Forte", color: "#2ecc71" },
        { text: "Muito forte", color: "#27ae60" }
    ];
    
    const level = Math.min(Math.floor(strength), 4);
    
  
    strengthBars.forEach((bar, index) => {
        if (index <= level) {
            bar.style.backgroundColor = strengthLevels[level].color;
        }
    });
    
    strengthText.textContent = strengthLevels[level].text;
    strengthText.style.color = strengthLevels[level].color;
}
 const brandVideo = document.getElementById('brandVideo');
  const fullscreenIntro = document.getElementById('fullscreenIntro');
  

  brandVideo.controls = false;
  brandVideo.muted = true; 
  

  function playIntroVideo() {
    if (!sessionStorage.getItem('introShown')) {
      fullscreenIntro.style.display = 'flex';
      brandVideo.play();
      
      // Bloqueia scroll
      document.body.style.overflow = 'hidden';
    }
  }
  
 
  brandVideo.addEventListener('ended', function() {
    fullscreenIntro.style.opacity = '0';
    setTimeout(() => {
      fullscreenIntro.style.display = 'none';
      document.body.style.overflow = '';
    }, 1000);
    
    sessionStorage.setItem('introShown', 'true');
  });

  setTimeout(playIntroVideo, 500);
 
  function adjustVideoSize() {
    const container = document.querySelector('.video-container');
    const windowRatio = window.innerWidth / window.innerHeight;
    container.style.width = `${Math.min(80, 80 * windowRatio)}vw`;
  }
  
  window.addEventListener('resize', adjustVideoSize);
  adjustVideoSize();
});   

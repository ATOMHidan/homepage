// Personal configuration data
const personalData = {
  "name": "Liuts",
  "title": "热爱白嫖",
  "avatar": "https://r2.lts.dpdns.org/img/avatar.webp",
  "websites": [
    {"name": "个人博客", "url": "https://blog.333375.xyz/"},
    {"name": "随机图片", "url": "https://liuts-img.sylu.cc/"},
    {"name": "免费图床", "url": "https://img.liuts.paba.se/"},
    {"name": "随机密码生成", "url": "https://pass.sylu.cc/"}
  ],
  "bio": "",
  "social": {
    "github": "https://github.com/couldflyer",
    "email": "lts2233@hotmail.com"
  }
};

// DOM elements
const elements = {
  name: document.getElementById('name'),
  title: document.getElementById('title'),
  avatar: document.getElementById('avatar'),
  bio: document.getElementById('bio'),
  websitesContainer: document.getElementById('websites-container'),
  socialLinks: document.getElementById('social-links'),
  hitokotoText: document.getElementById('hitokoto-text'),
  refreshHitokoto: document.getElementById('refresh-hitokoto')
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  renderProfile();
  renderWebsites();
  renderSocialLinks();
  loadHitokoto();
  
  // Add event listener for refresh button
  elements.refreshHitokoto.addEventListener('click', loadHitokoto);
});

// Render profile information
function renderProfile() {
  elements.name.textContent = personalData.name;
  elements.title.textContent = personalData.title;
  elements.avatar.src = personalData.avatar;
  elements.avatar.alt = `${personalData.name}的头像`;
  elements.bio.textContent = personalData.bio;
}

// Render website buttons
function renderWebsites() {
  const websitesHTML = personalData.websites.map(website => {
    return `
      <a href="${website.url}" target="_blank" class="website-link" rel="noopener noreferrer">
        <svg class="website-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
        ${website.name}
      </a>
    `;
  }).join('');
  
  elements.websitesContainer.innerHTML = websitesHTML;
}

// Render social links
function renderSocialLinks() {
  const socialLinksHTML = [];
  
  if (personalData.social.github) {
    socialLinksHTML.push(`
      <a href="${personalData.social.github}" target="_blank" class="social-link" rel="noopener noreferrer">
        <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        GitHub
      </a>
    `);
  }
  
  if (personalData.social.email) {
    socialLinksHTML.push(`
      <a href="mailto:${personalData.social.email}" class="social-link">
        <svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        邮箱
      </a>
    `);
  }
  
  elements.socialLinks.innerHTML = socialLinksHTML.join('');
}

// Load Hitokoto quote
async function loadHitokoto() {
  try {
    // Disable button and show loading state
    elements.refreshHitokoto.disabled = true;
    elements.hitokotoText.classList.add('loading');
    elements.hitokotoText.textContent = '加载中...';
    
    const response = await fetch('https://v1.hitokoto.cn/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Format the quote with author if available
    let quoteText = `"${data.hitokoto}"`;
    if (data.from) {
      quoteText += ` — ${data.from}`;
    }
    
    elements.hitokotoText.textContent = quoteText;
    
  } catch (error) {
    console.error('Failed to load Hitokoto:', error);
    elements.hitokotoText.textContent = '"每一次的失败，都是成功的垫脚石。" — 佚名';
  } finally {
    // Re-enable button and remove loading state
    elements.refreshHitokoto.disabled = false;
    elements.hitokotoText.classList.remove('loading');
  }
}

// Error handling for avatar loading
elements.avatar.addEventListener('error', function() {
  this.src = 'https://via.placeholder.com/100/4a90e2/ffffff?text=' + encodeURIComponent(personalData.name.charAt(0));
});

// Add smooth scrolling for better UX
document.documentElement.style.scrollBehavior = 'smooth';

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
  // Press 'R' to refresh Hitokoto
  if (e.key === 'r' || e.key === 'R') {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      loadHitokoto();
    }
  }
});

// Add visual feedback for interactive elements
document.addEventListener('DOMContentLoaded', function() {
  // Add hover effects and animations
  const interactiveElements = document.querySelectorAll('.website-link, .social-link, .refresh-btn');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      this.style.transform = this.classList.contains('refresh-btn') ? 'scale(1.05)' : 'translateY(-2px)';
    });
    
    element.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
});

// Handle window resize for responsive behavior
window.addEventListener('resize', function() {
  // Debounce resize events
  clearTimeout(window.resizeTimeout);
  window.resizeTimeout = setTimeout(function() {
    // Any resize-specific logic can go here
    console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
  }, 250);
});

// Performance optimization: Lazy load background image
function optimizeBackgroundLoading() {
  const img = new Image();
  img.onload = function() {
    document.body.style.backgroundImage = `url('${this.src}')`;
  };
  img.src = 'https://source.unsplash.com/1920x1080/?nature,landscape';
}

// Initialize background loading
optimizeBackgroundLoading();
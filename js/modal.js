// Jujupedia - Complete Login Modal System
// Handles login, logout, session management, and UI updates

function setupLoginModal() {
    const loginBtn = document.getElementById('login-btn');
    const modal = document.getElementById('login-modal');
    const closeBtn = document.querySelector('.close-btn');
    const loginForm = document.getElementById('login-form');
    
    // Open modal when login button is clicked
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            if (modal) {
                modal.style.display = 'flex';
                // Focus on email input
                setTimeout(() => {
                    const emailInput = document.getElementById('login-email');
                    if (emailInput) emailInput.focus();
                }, 100);
            }
        });
    }
    
    // Close modal when X button is clicked
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (modal) modal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside the modal content
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
            modal.style.display = 'none';
        }
    });
    
    // Handle login form submission with Firebase
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const emailInput = document.getElementById('login-email');
            const passwordInput = document.getElementById('login-password');
            const email = emailInput?.value || '';
            const password = passwordInput?.value || '';
            
            // Clear previous error
            clearLoginError();
            
            // Firebase Authentication
            try {
                const userCredential = await auth.signInWithEmailAndPassword(email, password);
                
                // Login successful
                localStorage.setItem('loggedIn', 'true');
                localStorage.setItem('userEmail', email);
                localStorage.setItem('userUid', userCredential.user.uid);
                localStorage.setItem('loginTime', new Date().toISOString());
                
                // Show success message
                showLoginSuccess();
                
                // Close modal
                if (modal) modal.style.display = 'none';
                
                // Clear form
                if (emailInput) emailInput.value = '';
                if (passwordInput) passwordInput.value = '';
                
                // Update UI
                updateAuthUI();
                
                // Refresh the page to update favorite buttons
                setTimeout(() => {
                    location.reload();
                }, 500);
                
            } catch (error) {
                console.error('Login error:', error);
                let errorMessage = 'Invalid credentials. Use bob@mail.com / bobpass';
                
                if (error.code === 'auth/user-not-found') {
                    errorMessage = 'User not found. Make sure bob@mail.com is created in Firebase.';
                } else if (error.code === 'auth/wrong-password') {
                    errorMessage = 'Wrong password. Use bobpass';
                } else if (error.code === 'auth/invalid-email') {
                    errorMessage = 'Invalid email format.';
                }
                
                showLoginError(errorMessage);
            }
        });
    }
}

function showLoginError(message) {
    // Remove existing error
    clearLoginError();
    
    // Create error element
    const errorDiv = document.createElement('div');
    errorDiv.className = 'login-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        color: #ff6b6b;
        font-size: 0.85rem;
        margin-top: 10px;
        text-align: center;
        padding: 8px;
        background: rgba(255, 107, 107, 0.1);
        border-radius: 5px;
        border-left: 3px solid #ff6b6b;
    `;
    
    const modalBody = document.querySelector('.modal-body');
    if (modalBody) {
        modalBody.appendChild(errorDiv);
    }
}

function clearLoginError() {
    const existingError = document.querySelector('.login-error');
    if (existingError) {
        existingError.remove();
    }
}

function showLoginSuccess() {
    // Create success message
    const successDiv = document.createElement('div');
    successDiv.className = 'login-success';
    successDiv.textContent = 'Login successful! Redirecting...';
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #9b30ff;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 10002;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => successDiv.remove(), 300);
    }, 2000);
}

function updateAuthUI() {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const userGreeting = document.getElementById('user-greeting');
    
    if (isLoggedIn) {
        const email = localStorage.getItem('userEmail') || 'bob@mail.com';
        const username = email.split('@')[0];
        const displayName = username.charAt(0).toUpperCase() + username.slice(1);
        
        if (userGreeting) {
            userGreeting.textContent = `👤 ${displayName}`;
            userGreeting.style.display = 'inline';
            userGreeting.style.marginRight = '10px';
        }
        
        if (loginBtn) loginBtn.style.display = 'none';
        if (logoutBtn) {
            logoutBtn.style.display = 'inline-block';
        }
    } else {
        if (userGreeting) userGreeting.style.display = 'none';
        if (loginBtn) loginBtn.style.display = 'inline-block';
        if (logoutBtn) logoutBtn.style.display = 'none';
    }
}

function setupLogout() {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            const wasLoggedIn = localStorage.getItem('loggedIn') === 'true';
            
            if (wasLoggedIn) {
                try {
                    // Firebase sign out
                    await auth.signOut();
                    
                    // Clear local storage
                    localStorage.removeItem('loggedIn');
                    localStorage.removeItem('userEmail');
                    localStorage.removeItem('userUid');
                    localStorage.removeItem('loginTime');
                    
                    // Show logout message
                    const logoutMsg = document.createElement('div');
                    logoutMsg.textContent = 'Logged out successfully';
                    logoutMsg.style.cssText = `
                        position: fixed;
                        top: 20px;
                        right: 20px;
                        background: #333;
                        color: white;
                        padding: 12px 20px;
                        border-radius: 8px;
                        z-index: 10002;
                        animation: slideIn 0.3s ease;
                    `;
                    document.body.appendChild(logoutMsg);
                    
                    setTimeout(() => {
                        logoutMsg.style.animation = 'slideOut 0.3s ease';
                        setTimeout(() => logoutMsg.remove(), 300);
                    }, 2000);
                    
                    // Update UI and refresh
                    updateAuthUI();
                    setTimeout(() => location.reload(), 500);
                    
                } catch (error) {
                    console.error('Logout error:', error);
                }
            }
        });
    }
}

function checkSessionExpiry() {
    const loginTime = localStorage.getItem('loginTime');
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    
    if (isLoggedIn && loginTime) {
        const loginDate = new Date(loginTime);
        const now = new Date();
        const hoursSinceLogin = (now - loginDate) / (1000 * 60 * 60);
        
        // Session expires after 24 hours
        if (hoursSinceLogin > 24) {
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('loginTime');
            updateAuthUI();
            location.reload();
        }
    }
}

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    setupLoginModal();
    setupLogout();
    updateAuthUI();
    checkSessionExpiry();
});

// Back to top button
const backBtn = document.getElementById('backToTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backBtn.style.display = 'block';
    } else {
        backBtn.style.display = 'none';
    }
};

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

console.log('modal.js loaded successfully');

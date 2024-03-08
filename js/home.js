document.addEventListener('DOMContentLoaded', (event) => {
    
    const loginPopupOpen = document.getElementById('open-login');
    loginPopupOpen.addEventListener('click', function () {
        const loginPopupImage = document.getElementById('login-box');
        loginPopupImage.style.display = 'flex';
    });
    const loginPopupClose = document.getElementById('login-close-icon');
    loginPopupClose.addEventListener('click', function () {
        const loginPopupImage = document.getElementById('login-box');
        loginPopupImage.style.display = 'none';
    });
    
    const registerPopupOpen = document.getElementById('open-register');
    registerPopupOpen.addEventListener('click', function () {
        const registerPopupImage = document.getElementById('register-box');
        registerPopupImage.style.display = 'flex';
    });
    const registerPopupClose = document.getElementById('register-close-icon');
    registerPopupClose.addEventListener('click', function () {
        const registerPopupImage = document.getElementById('register-box');
        registerPopupImage.style.display = 'none';
    });

    const loginMobilePopupOpen = document.getElementById('open-login-mobile');
    loginMobilePopupOpen.addEventListener('click', function () {
        const loginPopupImage = document.getElementById('login-box');
        loginPopupImage.style.display = 'flex';
    });
    const loginMobilePopupClose = document.getElementById('login-close-icon');
    loginMobilePopupClose.addEventListener('click', function () {
        const loginPopupImage = document.getElementById('login-box');
        loginPopupImage.style.display = 'none';
    });
    
    const registerMobilePopupOpen = document.getElementById('open-register-mobile');
    registerMobilePopupOpen.addEventListener('click', function () {
        const registerPopupImage = document.getElementById('register-box');
        registerPopupImage.style.display = 'flex';
    });
    const registerMobilePopupClose = document.getElementById('register-close-icon');
    registerMobilePopupClose.addEventListener('click', function () {
        const registerPopupImage = document.getElementById('register-box');
        registerPopupImage.style.display = 'none';
    });
});
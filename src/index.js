import './index.css';

const mobileMenu = document.querySelector('.header__menu');
const header = document.querySelector('.header');
const mobileMenuButton = document.querySelector('.header__mobile-menu-pic');
const signupPopup = document.querySelector('.popup__signup');
const signinPopup = document.querySelector('.popup__signin');
const authButton = document.querySelector('.header__auth-button');
const popupLink = document.querySelector('.popup__link');
const popupMessageLink = document.querySelector('.popup__message .popup__link');
const popupSignupClose = document.querySelector('.popup__signup .popup__close');
const popupSigninClose = document.querySelector('.popup__signin .popup__close');
const logoutPic = document.querySelector('.header__logout-pic');
const headerAuthText = document.querySelector('.header__auth-text');
const articlesLink = document.querySelector('.articles');
const popupMessage = document.querySelector('.popup__message');
const popupMessageClose = document.querySelector('.popup__message .popup__close');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('header__menu_open');
  mobileMenuButton.classList.toggle('header__mobile-menu-pic_open');
  header.classList.toggle('header_dark');
});
authButton.addEventListener('click', () => {
  if (headerAuthText.textContent === 'Авторизоваться') {
    signupPopup.classList.remove('popup_hide');
    signupPopup.classList.add('popup_show');
  } else {
    headerAuthText.textContent = 'Авторизоваться';
    logoutPic.classList.remove('header__logout-pic_show');
    articlesLink.classList.add('header__link_hide');
    mobileMenu.classList.remove('header__menu_auth');
  }
});
signupPopup.addEventListener('submit', (event) => {
  popupMessage.classList.remove('popup_hide');
  popupMessage.classList.add('popup_show');
  signupPopup.classList.remove('popup_show');
  signupPopup.classList.add('popup_hide');
  event.preventDefault();
  event.target.reset();
});
signinPopup.addEventListener('submit', (event) => {
  logoutPic.classList.add('header__logout-pic_show');
  headerAuthText.textContent = 'Грета';
  signinPopup.classList.remove('popup_show');
  signinPopup.classList.add('popup_hide');
  articlesLink.classList.remove('header__link_hide');
  mobileMenu.classList.add('header__menu_auth');
  event.preventDefault();
  event.target.reset();
});
popupLink.addEventListener('click', (event) => {
  signupPopup.classList.remove('popup_show');
  signupPopup.classList.add('popup_hide');
  signinPopup.classList.add('popup_show');
  signinPopup.classList.remove('popup_hide');
  event.preventDefault();
});
popupMessageLink.addEventListener('click', (event) => {
  popupMessage.classList.remove('popup_show');
  popupMessage.classList.add('popup_hide');
  signinPopup.classList.add('popup_show');
  signinPopup.classList.remove('popup_hide');
  event.preventDefault();
});
popupSigninClose.addEventListener('click', () => {
  signinPopup.classList.remove('popup_show');
  signinPopup.classList.add('popup_hide');
});
popupSignupClose.addEventListener('click', () => {
  signupPopup.classList.remove('popup_show');
  signupPopup.classList.add('popup_hide');
});
popupMessageClose.addEventListener('click', () => {
  popupMessage.classList.remove('popup_show');
  popupMessage.classList.add('popup_hide');
});

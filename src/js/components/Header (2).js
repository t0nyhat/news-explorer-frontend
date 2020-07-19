export default class Header {
  constructor(options) {
    const {
      header, color, authButton,
      mobileMenuButton,
      signupPopup, mobileMenu, headerAuthText, logoutPic,
      articlesLink,
    } = options;
    this.header = header;
    this.authButton = authButton;
    this.color = color;
    this.mobileMenuButton = mobileMenuButton;
    this.signupPopup = signupPopup;
    this.mobileMenu = mobileMenu;
    this.headerAuthText = headerAuthText;
    this.logoutPic = logoutPic;
    this.headerAuthText = headerAuthText;
    this.articlesLink = articlesLink;
  }

  setEventListeners() {
    this.mobileMenuButton.addEventListener('click', () => {
      this.mobileMenu.classList.toggle('header__menu_open');
      this.mobileMenuButton.classList.toggle('header__mobile-menu-pic_open');
      this.header.classList.toggle('header_dark');
    });
    this.authButton.addEventListener('click', () => {
      if (this.headerAuthText.textContent === 'Авторизоваться') {
        this.login();
      } else {
        this.logout();
      }
    });
  }

  logout() {
    this.headerAuthText.textContent = 'Авторизоваться';
    this.logoutPic.classList.remove('header__logout-pic_show');
    this.articlesLink.classList.add('header__link_hide');
    this.mobileMenu.classList.remove('header__menu_auth');
  }

  login() {
    this.signupPopup.classList.remove('popup_hide');
    this.signupPopup.classList.add('popup_show');
  }

  render(props) {
    const { isLoggedIn, userName } = props;
    if (isLoggedIn) {
      this.logoutPic.classList.add('header__logout-pic_show');
      this.headerAuthText.innerText = userName;
      this.articlesLink.classList.remove('header__link_hide');
      this.mobileMenu.classList.add('header__menu_auth');
    } else {
      this.logout();
    }
  }
}

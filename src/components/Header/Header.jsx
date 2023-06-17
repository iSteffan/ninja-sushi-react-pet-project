import { Logo, LogoMobile } from './Header.styled';
import { NavigationList } from './NavigationList/NavigationList';
import { SetLocal } from './SetLocal/SetLocal';
import { ContactPhone } from './ContactPhone/ContactPhone';

export const Header = () => {
  return (
    <header>
      <div
      //   class="container header-container"
      >
        <div
        //   class="header-wrapper"
        >
          <Logo />
          <LogoMobile />

          <SetLocal />

          <NavigationList />

          <ContactPhone />

          {/* <ul class="header-list">
            <li class="header-list__item">
              <a href="./" class="header-list__link">
                <svg class="header-list__icon">
                  <use href="./images/symbol-defs.svg#bell-mobile"></use>
                </svg>
              </a>
            </li>
            <li class="header-list__item">
              <a href="./" class="header-list__link">
                <svg class="header-list__icon">
                  <use href="./images/symbol-defs.svg#favourite-mobile"></use>
                </svg>
              </a>
            </li>
            <li class="header-list__item">
              <a href="./" class="header-list__link">
                <svg class="header-list__icon">
                  <use href="./images/symbol-defs.svg#user-mobile"></use>
                </svg>
              </a>
            </li>
            <li class="header-list__item hide-menu-btn">
              <button
                class="menu-btn js-open-menu"
                aria-expanded="false"
                aria-controls="mobile-menu"
              >
                <svg class="header-list__icon">
                  <use href="./images/symbol-defs.svg#menu-btn-mobile"></use>
                </svg>
              </button>
            </li>
            <li class="header-list__item hide-cart-btn">
              <button type="button" class="cart-btn">
                Кошик
                <svg class="cart-icon">
                  <use href="./images/symbol-defs.svg#cart-icon"></use>
                </svg>
              </button>
            </li>
          </ul> */}
        </div>
      </div>
    </header>
  );
};

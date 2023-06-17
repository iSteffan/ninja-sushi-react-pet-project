import { Logo, LogoMobile, FlagIcon } from './Header.styled';
import { NavigationList } from './NavigationList/NavigationList';

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
          <div
          //   class="location"
          >
            <FlagIcon />
            <button
              type="button"
              //   class="location-btn"
            >
              <span
              //   class="location-btn__city"
              >
                Київ
              </span>
              <span
              //   class="location-btn__language"
              >
                UA
              </span>
            </button>
          </div>

          <NavigationList />

          {/* <li class="nav-list__item">
            <a href="tel:+380976993438" class="nav-list__link phone-correction">
              <svg width="24" height="24" class="">
                <use href="./images/symbol-defs.svg#phone"></use>
              </svg>
              +38 097 699 34 38
            </a>
          </li> */}
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

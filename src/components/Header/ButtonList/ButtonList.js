import Badge from '@mui/material/Badge';
import {
  BellIcon,
  List,
  FavoriteIcon,
  UserIcon,
  Button,
} from './ButtonList.styled';

export const ButtonList = () => {
  return (
    <List>
      <li>
        <Badge
        //   badgeContent={count}
        >
          <BellIcon />
        </Badge>
      </li>
      <li>
        <Button>
          <FavoriteIcon />
        </Button>
      </li>
      <li>
        <Button>
          <UserIcon />
        </Button>
      </li>
      <li>
        <Button
        // class="menu-btn js-open-menu"
        //   aria-expanded="false"
        //   aria-controls="mobile-menu"
        >
          {/* <svg class="header-list__icon">
            // <use href="./images/symbol-defs.svg#menu-btn-mobile"></use>

          </svg> */}
        </Button>
      </li>
      <li>
        <Button type="button">
          Кошик
          {/* <svg class="cart-icon">
            // <use href="./images/symbol-defs.svg#cart-icon"></use>
            //{' '}
          </svg> */}
        </Button>
      </li>
    </List>
  );
};

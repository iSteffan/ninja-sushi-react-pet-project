import { List, Link } from './NavigationList.styled';

export const NavigationList = () => {
  return (
    <nav>
      <List>
        <li>
          <Link to="/">Головна</Link>
        </li>
        <li>
          <Link to="delivery">Доставка</Link>
        </li>
        <li>
          <Link to="about">Про нас</Link>
        </li>
        <li>
          <Link to="news">Новини</Link>
        </li>
      </List>
    </nav>
  );
};

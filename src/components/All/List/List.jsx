import { Link, useLocation } from "react-router-dom";
import Item from "./../Item/Item";
import css from "./List.module.css";

export default function List({ films }) {
  const location = useLocation();
  return (
    <ul className={css.movie_list}>
      {films.map((item, index) => (
        <li key={index} className={css.movie_item}>
          <Link to={`/movies/${item.id}`} state={{ from: location }}>
            <Item item={item} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

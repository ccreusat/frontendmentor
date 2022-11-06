import { Link } from "react-router-dom";
import { ItemProps } from "../../types/types";
import { BrandLogo } from "../BrandLogo";
import "./Card.css";

export const Card = (item: ItemProps) => {
  return (
    <article className="card">
      <BrandLogo logoBackground={item.logoBackground} company={item.company} />
      <div>
        <p>
          <span className="text-grey-700">{item.postedAt}</span>
          <strong className="text-grey-700">&#9679;</strong>
          <span className="text-grey-700">{item.contract}</span>
        </p>
        <h2 className="card-title">
          <Link to={String(item.id)}>{item.position}</Link>
        </h2>
        <span className="text-grey-700">{item.company}</span>
      </div>
      <h3 className="card-location text-violet-400">{item.location}</h3>
    </article>
  );
};

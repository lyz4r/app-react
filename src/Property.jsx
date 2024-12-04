import React, { useState } from "react";
import ShowProperty from "./ShowProperty";

function Property({ name, description, bedroom, bathroom, price, imgName }) {
  const [hidden, setHidden] = useState(false);

  return (
    <ShowProperty hidden={hidden}>
      <div className="card__container">
        <img
          src={`./src/img/properties/${imgName}.jpg`}
          alt="Villa"
          className="card__img"
        />
        <div className="card__description">
          <h3>{name}</h3>
          <p>
            {description}
            <a className="card__description-read-more" href="">
              Read More
            </a>
          </p>
        </div>

        <ul className="card__facilities">
          <li className="card__facility card__bedroom">{bedroom}-Bedroom</li>
          <li className="card__facility card__bathroom">{bathroom}-Bathroom</li>
          <li className="card__facility card__villa">Villa</li>
        </ul>

        <div className="card__footer">
          <div className="card__price">
            <p>Price</p>
            <p className="card__cost">${price}</p>
          </div>
          <a href="#" className="btn btn--accent card__footer-btn">
            View Property Details
          </a>
        </div>
      </div>
    </ShowProperty>
  );
}

export default Property;

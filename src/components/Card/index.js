import React from "react";

function Card(props) {
  return (
    <div className="card bg-dark text-white">
      <img
        className="card-img"
        data-id={props.id}
        src={
          props.imageUrl
            ? process.env.PUBLIC_URL + props.imageUrl
            : "https://placeholder.com/"
        }
        alt="Something here"
      />
      <div className="card-img-overlay" onClick={() => props.click(props.id)} />
    </div>
  );
}

export default Card;

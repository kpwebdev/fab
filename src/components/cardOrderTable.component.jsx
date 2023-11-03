import React, { useState } from "react";
import { PiCurrencyInrLight } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";

const CardOrderTable = ({ card }) => {
  const [showCardFrontSide, setShowCardFrontSide] = useState(true);
  const { price, status, cardImageFront, cardImageBack, name, id } = card;
  const [day, month, year] = new Date(card.createdAt.seconds * 1000)
    .toLocaleDateString("en-IN", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    })
    .split(" ");
  return (
    <article className="t-border-2 t-rounded-f-8">
      <header className="t-border-b-2 t-px-f-24">
        <table className="table table-borderless t-my-f-8">
          <thead>
            <tr className="t-uppercase">
              <th className="t-text-f-primary-50">Order Placed</th>
              <th className="t-text-f-primary-50">Total</th>
              <th className="t-text-f-primary-50">Order ID</th>
              <th className="t-text-f-primary-50">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{`${month}, ${day}, ${year}`}</td>
              <td>
                <div className="t-flex t-items-center">
                  <PiCurrencyInrLight />
                  {price}
                </div>
              </td>
              <td>#{id}</td>
              <td
                className={`t-flex t- t-items-center ${
                  status === "received"
                    ? "t-text-green-500"
                    : "t-text-orange-500"
                }`}
              >
                <GoDotFill /> {status}
              </td>
            </tr>
          </tbody>
        </table>
      </header>
      {/* card item */}
      <div
        className="t-flex t-gap-f-48 t-p-f-24"
        onMouseEnter={() => setShowCardFrontSide(false)}
        onMouseLeave={() => setShowCardFrontSide(true)}
      >
        {/* image container */}
        <div className="border-2 t-p-f-8 t-rounded-f-8">
          {/* <CardImg /> */}
          {showCardFrontSide ? (
            <img
              src={cardImageFront}
              alt="front side image of the card"
              className="t-object-contain"
            />
          ) : (
            <img src={cardImageBack} alt="back side image of the card" />
          )}
        </div>

        {/* right container */}
        <div className="t-flex t-flex-col t-grow">
          {/* top */}
          <header>
            {/* <h6 className="t-text-f-sm">{creatorName}</h6> */}
            <h5 className="t-text-f-l">{name}</h5>
            {/* <span className="t-text-f-sm">
                          {isPersonalized
                            ? "Personalized"
                            : "Not Personalized"}
                        </span> */}
          </header>
          {/* bottom */}
          <div className="t-flex t-justify-between">
            {/* left */}
            <div className="t-flex t-items-center t-gap-f-8">
              <span>Qty:</span>{" "}
              <span className="t-block t-py-f-8 t-px-f-48 t-border t-rounded-f-8">
                {1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardOrderTable;

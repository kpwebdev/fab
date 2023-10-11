import { orders } from "../../data";
import { PiCurrencyInrLight } from "react-icons/pi";

const Self = () => {
  const { self } = orders;

  return (
    <div className="t-flex t-flex-col t-gap-f-48">
      {self.map(
        ({ orderPlacedAt, totalPrice, shipToAddress, orderId, cards }, idx) => {
          const [day, month, year] = orderPlacedAt
            .toLocaleDateString("en-IN", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            })
            .split(" ");
          return (
            <article className="t-border-2 t-rounded-f-8" key={idx}>
              <header className="t-border-b-2 t-px-f-24">
                <table className="table table-borderless t-my-f-8">
                  <thead>
                    <tr className="t-uppercase">
                      <th className="t-text-f-primary-50">Order Placed</th>
                      <th className="t-text-f-primary-50">Total</th>
                      <th className="t-text-f-primary-50">Shop To</th>
                      <th className="t-text-f-primary-50">Order ID</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>{`${month}, ${day}, ${year}`}</td>
                      <td>
                        <div className="t-flex t-items-center">
                          <PiCurrencyInrLight />
                          {totalPrice}
                        </div>
                      </td>
                      <td>{shipToAddress}</td>
                      <td>#{orderId}</td>
                    </tr>
                  </tbody>
                </table>
              </header>

              {/* order items list */}
              <ul className="t-p-f-24">
                {cards.map(
                  (
                    { cardImg, creatorName, cardName, isPersonalized, qty },
                    idx
                  ) => (
                    <li className="t-flex t-gap-f-48" key={idx}>
                      {/* image container */}
                      <div className="border-2 t-p-f-8 t-rounded-f-8">
                        <img src={cardImg} alt={`image of ${cardName} card}`} />
                      </div>

                      {/* right container */}
                      <div className="t-flex t-flex-col t-grow">
                        {/* top */}
                        <header>
                          <h6 className="t-text-f-sm">{creatorName}</h6>
                          <h5 className="t-text-f-l">{cardName}</h5>
                          <span className="t-text-f-sm">
                            {isPersonalized
                              ? "Personalized"
                              : "Not Personalized"}
                          </span>
                        </header>
                        {/* bottom */}
                        <div className="t-flex t-justify-between">
                          {/* left */}
                          <div className="t-flex t-items-center t-gap-f-8">
                            <span>Qty:</span>{" "}
                            <span className="t-block t-py-f-8 t-px-f-48 t-border t-rounded-f-8">
                              {qty}
                            </span>
                          </div>
                          {/* right - buttons container */}
                          <div className="t-flex t-flex-col t-gap-f-8">
                            <button className="f-btn-md f-btn-primary">
                              Track Order
                            </button>
                            <button className="f-btn-md f-btn-danger-outline">
                              Cancel Order
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </article>
          );
        }
      )}
    </div>
  );
};

export default Self;

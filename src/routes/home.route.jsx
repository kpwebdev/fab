import { checkoutList } from "../data";

// components
import CheckoutCard from "../components/checkout-card.component";
const Home = () => {
  return (
    <section id="home" className="d-flex justify-content-between">
      <div className="container">
        {/* header text */}
        <header className="text-center mb-5">
          <h2 className="text-white">
            Your Success Story Begins with our Business{" "}
            <span className="text-success">Services</span>.
          </h2>
          <h3 className="text-warning">
            An A to Z website to grow your brand, leave it in our hands.
          </h3>
        </header>

        {/* cards */}
        <div className="d-flex gap-4 flex-wrap">
          {checkoutList.map((checkoutCardItem, idx) => (
            <CheckoutCard {...checkoutCardItem} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;

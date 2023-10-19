import { checkoutList } from "../data";

// components
import CheckoutCard from "../components/checkoutCard.component";
const Home = () => {
  return (
    <section id="home" className="d-flex justify-content-between">
      <div className="container">
        {/* header text */}
        <header className="text-center mb-5">
          <h2 className="text-white t-text-f-4xl t-mb-f-8">
            Your Success Story Begins with our Business{" "}
            <span className="text-success">Services</span>.
          </h2>
          <h3 className="text-warning t-text-f-xl">
            An A to Z website to grow your brand, leave it in our hands.
          </h3>
        </header>

        {/* cards */}
        <div className="t-grid t-grid-cols-2 t-gap-f-24">
          {checkoutList.map((checkoutCardItem, idx) => (
            <CheckoutCard {...checkoutCardItem} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;

import { checkoutList } from "../data";

// components
import CheckoutCard from "../components/checkoutCard.component";
const Home = () => {
  return (
    <section id="home" className="d-flex justify-content-between">
      <div className="container t-min-h-screen t-flex t-flex-col t-justify-evenly t-py-f-24">
        {/* header text */}
        <header className="mb-5 text-center">
          <h2 className="text-white t-text-f-l md:t-text-f-2xl lg:t-text-f-4xl t-mb-f-8">
            Your Success Story Begins with our Business{" "}
            <span className="text-success">Services</span>.
          </h2>
          <h3 className="text-warning t-text-f-md md:t-text-f-l">
            An A to Z website to grow your brand, leave it in our hands.
          </h3>
        </header>

        {/* cards */}
        <div className="t-grid t-grid-rows-2 md:t-grid-cols-2 t-gap-f-24">
          {checkoutList.map((checkoutCardItem, idx) => (
            <CheckoutCard {...checkoutCardItem} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;

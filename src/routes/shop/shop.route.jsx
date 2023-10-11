import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { shopCollections } from "../../data";
import { BsArrowRight } from "react-icons/bs";
import { PiCurrencyInrLight } from "react-icons/pi";

const FormInitialValue = {
  search: "",
  sortBy: "",
};

const Shop = () => {
  const [formInput, setFormInput] = useState(FormInitialValue);
  const { search, sortBy } = formInput;
  const {
    luxuryCollections,
    designedCollections,
    gradientCollections,
    limitedEdition,
  } = shopCollections;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormInput({ ...formInput, [name]: value });
  };

  return (
    <section>
      <header className="t-flex t-justify-between">
        <h3 className="t-text-f-3xl">Shop</h3>
        <p>
          Total Members: <span className="t-text-f-primary-40">359</span>
        </p>
      </header>

      {/* actions container */}
      <div className="t-flex t-justify-between t-my-f-24">
        <form className="t-text-f-md t-flex t-gap-f-8">
          <div className="t-flex t-items-center t-gap-f-8 t-px-f-8 t-border t-rounded-f-8">
            <IoIosSearch />
            <input
              type="search"
              name="search"
              value={search}
              onChange={handleChange}
              placeholder="Search..."
              className="t-p-f-8 t-outline-none"
            />
          </div>

          <select
            name="sortBy"
            id="sortBy"
            value={sortBy}
            onChange={handleChange}
            className="t-p-f-8 t-rounded-f-8"
          >
            <option value="">Sort By</option>
            <option value="name">Name</option>
          </select>
        </form>

        <div className="t-flex t-gap-f-8">
          <NavLink className="f-btn-lg f-btn-primary">
            Create your own shop
          </NavLink>
        </div>
      </div>

      {/* luxury collections section */}
      <div className="t-my-f-48">
        <h5 className="t-text-f-l">{luxuryCollections.title}</h5>
        {/* cards container */}
        <div className="t-grid t-grid-cols-3 t-gap-x-f-24 t-gap-y-f-48 t-my-f-24">
          {luxuryCollections.list.map(
            ({ img, creator, cardName, description, price }, idx) => (
              <article className="t-flex t-flex-col t-gap-f-24" key={idx}>
                {/* img container */}
                <div className="t-overflow-hidden">
                  <img
                    src={img}
                    alt={`Picture of ${cardName}`}
                    className="t-rounded-f-8"
                  />
                </div>
                {/* text container */}
                <div className="t-flex t-flex-col t-gap-f-8">
                  <h6 className="t-text-f-sm t-font-light">{creator}</h6>
                  <h4 className="t-flex t-justify-between t-text-f-l">
                    {cardName} <BsArrowRight />
                  </h4>
                  <p className="t-text-f-base">{description}</p>
                  <span className="t-flex t-items-center t-font-bold t-text-f-md">
                    <PiCurrencyInrLight /> {`${price}/-`}
                  </span>
                </div>
              </article>
            )
          )}
        </div>
        {/* button container */}
        <div className="t-text-center">
          <Link className="f-btn-lg f-btn-primary" to={luxuryCollections.href}>
            View All
          </Link>
        </div>
      </div>

      {/* designed collections section */}
      <div className="t-my-f-48">
        <h5 className="t-text-f-l">{designedCollections.title}</h5>
        {/* cards container */}
        <div className="t-grid t-grid-cols-3 t-gap-x-f-24 t-gap-y-f-48 t-my-f-24">
          {designedCollections.list.map(
            ({ img, creator, cardName, description, price }, idx) => (
              <article className="t-flex t-flex-col t-gap-f-24" key={idx}>
                {/* img container */}
                <div className="t-overflow-hidden">
                  <img
                    src={img}
                    alt={`Picture of ${cardName}`}
                    className="t-rounded-f-8"
                  />
                </div>
                {/* text container */}
                <div className="t-flex t-flex-col t-gap-f-8">
                  <h6 className="t-text-f-sm t-font-light">{creator}</h6>
                  <h4 className="t-flex t-justify-between t-text-f-l">
                    {cardName} <BsArrowRight />
                  </h4>
                  <p className="t-text-f-base">{description}</p>
                  <span className="t-flex t-items-center t-font-bold t-text-f-md">
                    <PiCurrencyInrLight /> {`${price}/-`}
                  </span>
                </div>
              </article>
            )
          )}
        </div>
        {/* button container */}
        <div className="t-text-center">
          <Link
            className="f-btn-lg f-btn-primary"
            to={designedCollections.href}
          >
            View All
          </Link>
        </div>
      </div>

      {/* gradient collections section */}
      <div className="t-my-f-48">
        <h5 className="t-text-f-l">{gradientCollections.title}</h5>
        {/* cards container */}
        <div className="t-grid t-grid-cols-3 t-gap-x-f-24 t-gap-y-f-48 t-my-f-24">
          {gradientCollections.list.map(
            ({ img, creator, cardName, description, price }, idx) => (
              <article className="t-flex t-flex-col t-gap-f-24" key={idx}>
                {/* img container */}
                <div className="t-overflow-hidden">
                  <img
                    src={img}
                    alt={`Picture of ${cardName}`}
                    className="t-rounded-f-8"
                  />
                </div>
                {/* text container */}
                <div className="t-flex t-flex-col t-gap-f-8">
                  <h6 className="t-text-f-sm t-font-light">{creator}</h6>
                  <h4 className="t-flex t-justify-between t-text-f-l">
                    {cardName} <BsArrowRight />
                  </h4>
                  <p className="t-text-f-base">{description}</p>
                  <span className="t-flex t-items-center t-font-bold t-text-f-md">
                    <PiCurrencyInrLight /> {`${price}/-`}
                  </span>
                </div>
              </article>
            )
          )}
        </div>
        {/* button container */}
        <div className="t-text-center">
          <Link
            className="f-btn-lg f-btn-primary"
            to={gradientCollections.href}
          >
            View All
          </Link>
        </div>
      </div>

      {/* limited edition section */}
      <div className="t-my-f-48">
        <h5 className="t-text-f-l">{limitedEdition.title}</h5>
        {/* cards container */}
        <div className="t-grid t-grid-cols-3 t-gap-x-f-24 t-gap-y-f-48 t-my-f-24">
          {limitedEdition.list.map(
            ({ img, creator, cardName, description, price }, idx) => (
              <article className="t-flex t-flex-col t-gap-f-24" key={idx}>
                {/* img container */}
                <div className="t-overflow-hidden">
                  <img
                    src={img}
                    alt={`Picture of ${cardName}`}
                    className="t-rounded-f-8"
                  />
                </div>
                {/* text container */}
                <div className="t-flex t-flex-col t-gap-f-8">
                  <h6 className="t-text-f-sm t-font-light">{creator}</h6>
                  <h4 className="t-flex t-justify-between t-text-f-l">
                    {cardName} <BsArrowRight />
                  </h4>
                  <p className="t-text-f-base">{description}</p>
                  <span className="t-flex t-items-center t-font-bold t-text-f-md">
                    <PiCurrencyInrLight /> {`${price}/-`}
                  </span>
                </div>
              </article>
            )
          )}
        </div>
        {/* button container */}
        <div className="t-text-center">
          <Link className="f-btn-lg f-btn-primary" to={limitedEdition.href}>
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Shop;

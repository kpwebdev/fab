import { nfcClients } from "../../data";

const NfcClients = () => {
  return (
    <section className="t-py-f-96">
      <div className="container">
        <h2 className="t-text-f-3xl t-mb-f-48 t-text-center">
          Trusted Companies
        </h2>
        {/* clients container */}
        <div className="t-flex t-gap-f-56 t-items-center">
          {nfcClients.map(({ title, Icon }, idx) => (
            <div key={idx}>
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NfcClients;

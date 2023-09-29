import NfcHero from "../../components/nfc/nfcHero.component";
import NfcCompanyDetails from "../../components/nfc/nfcCompanyDetails.component";
import NfcFeatures from "../../components/nfc/nfcFeatures.component";
import NfcMarketPlace from "../../components/nfc/nfcMarketPlace.component";

const NfcHome = () => {
  return (
    <>
      <NfcHero />
      <NfcCompanyDetails />
      <NfcFeatures />
      <NfcMarketPlace />
    </>
  );
};

export default NfcHome;

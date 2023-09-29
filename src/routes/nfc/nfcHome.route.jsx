import NfcHero from "../../components/nfc/nfcHero.component";
import NfcCompanyDetails from "../../components/nfc/nfcCompanyDetails.component";
import NfcFeatures from "../../components/nfc/nfcFeatures.component";
import NfcMarketPlace from "../../components/nfc/nfcMarketPlace.component";
import NfcBringTeam from "../../components/nfc/nfcBringTeam.component";
import NfcWorksSection from "../../components/nfc/nfcWorksSection.component";
import NfcClients from "../../components/nfc/nfcClients.component";
import NfcDownload from "../../components/nfc/nfcDownload.component";

const NfcHome = () => {
  return (
    <>
      <NfcHero />
      <NfcCompanyDetails />
      <NfcFeatures />
      <NfcMarketPlace />
      <NfcBringTeam />
      <NfcWorksSection />
      <NfcClients />
      <NfcDownload />
    </>
  );
};

export default NfcHome;

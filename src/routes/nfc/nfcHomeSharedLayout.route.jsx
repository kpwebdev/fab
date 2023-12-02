import { Outlet } from "react-router-dom";

// components
import NfcNavbar from "../../components/nfc/nfcNavbar.component";
import NfcFooter from "../../components/nfc/nfcFooter.component";

const NfcHomeSharedLayout = () => {
  return (
    <div className="t-flex t-flex-col t-justify-between t-min-h-screen">
      <NfcNavbar />
      <Outlet />
      <NfcFooter />
    </div>
  );
};

export default NfcHomeSharedLayout;

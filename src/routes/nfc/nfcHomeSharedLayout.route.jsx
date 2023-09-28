import { Outlet } from "react-router-dom";
import NfcNavbar from "../../components/nfc/nfcNavbar.component";

// components

const NfcHomeSharedLayout = () => {
  return (
    <div>
      <NfcNavbar />
      <h2>NfcHomeSharedLayout</h2>
      <Outlet />
    </div>
  );
};

export default NfcHomeSharedLayout;

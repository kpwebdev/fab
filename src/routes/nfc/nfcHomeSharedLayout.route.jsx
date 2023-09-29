import { Outlet } from "react-router-dom";
import NfcNavbar from "../../components/nfc/nfcNavbar.component";

// components

const NfcHomeSharedLayout = () => {
  return (
    <div>
      <NfcNavbar />
      <Outlet />
    </div>
  );
};

export default NfcHomeSharedLayout;

import NfcHero from "../../components/nfc/nfcHero.component";
import NfcCompanyDetails from "../../components/nfc/nfcCompanyDetails.component";
import NfcFeatures from "../../components/nfc/nfcFeatures.component";
import NfcMarketPlace from "../../components/nfc/nfcMarketPlace.component";
import NfcBringTeam from "../../components/nfc/nfcBringTeam.component";
import NfcWorksSection from "../../components/nfc/nfcWorksSection.component";
import NfcClients from "../../components/nfc/nfcClients.component";
import NfcDownload from "../../components/nfc/nfcDownload.component";
import NfcTestimonials from "../../components/nfc/nfcTestimonials.component";
import FaqsSection from "../../components/nfc/faqs.componentSection";
import NfcFooter from "../../components/nfc/nfcFooter.component";
import ChatbotSection from "../../components/chatbotSection.component";
import { fabAgencyServices } from "../../data";
import { Link } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import fabLogo from "../../assets/fab-log-blue-with-bg.png";

const NfcHome = () => {
  const steps = [
    {
      id: "0",
      message: "Welcome to Fab Digital Marketing!",
      trigger: "1",
    },
    {
      id: "1",
      message: "Please select an options",
      trigger: "2",
    },
    {
      id: "2",
      options: [
        { value: 1, label: "List of services", trigger: "3" },
        { value: 2, label: "Customer care number", trigger: "4" },
      ],
    },
    {
      id: "3",
      component: (
        <ul className="t-flex t-flex-col t-gap-f-8">
          {fabAgencyServices.map(({ id, title, pageHref }) => (
            <li key={id}>
              <Link to={pageHref} className="t-text-f-primary-40 t-underline">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      ),
      trigger: "5",
    },
    {
      id: "4",
      component: (
        <Link
          className="t-text-f-primary-40 t-underline"
          to="tel:+918306823235"
        >
          +918306823235
        </Link>
      ),
      trigger: "5",
    },
    {
      id: "5",
      options: [
        { value: 3, label: "Close the chat", trigger: "6" },
        { value: 4, label: "Repeat", trigger: "7" },
      ],
    },
    {
      id: "6",
      message: () => {
        setTimeout(() => setShowChat(false), 4000);
        return "Closing in 4 sec.";
      },
      end: true,
    },
    {
      id: "7",
      message: "Ok",
      trigger: "0",
    },
  ];

  return (
    <>
      <NfcHero />
      {/* <NfcCompanyDetails /> */}
      <NfcFeatures />
      <NfcMarketPlace />
      <NfcBringTeam />
      <NfcWorksSection />
      {/* <NfcClients /> */}
      {/* will be added once an app is developed */}
      {/* <NfcDownload /> */}
      {/* <NfcTestimonials /> */}
      <FaqsSection />
      <NfcFooter />
      {/* <ChatbotSection steps={steps} /> */}
      <FloatingWhatsApp
        phoneNumber="96569918650"
        accountName="Fab Digital"
        avatar={fabLogo}
        chatMessage="How can we be a help to you?"
        allowEsc
        allowClickAway
        className="fixed bottom-0 right-0"
        statusMessage="Responds within 15 mins"
      />
    </>
  );
};

export default NfcHome;

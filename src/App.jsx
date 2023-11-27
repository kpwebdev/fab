import { useContext, lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  createRoutesFromElements,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer, toast } from "react-toastify";
// context
import { AuthContext } from "./contexts/AuthProvider.context";

// const SharedHome = lazy(() => import("./routes/sharedHome.route"));
// const Home = lazy(() => import("./routes/home.route"));
// const About = lazy(() => import("./routes/about.route"));
// const NfcHomeSharedLayout = lazy(() =>
//   import("./routes/nfc/nfcHomeSharedLayout.route")
// );
// const NfcHome = lazy(() => import("./routes/nfc/nfcHome.route"));
// const AuthenticationSharedLayout = lazy(() =>
//   import("./routes/authentication/authenticationSharedLayout.route")
// );
// const Login = lazy(() => import("./routes/authentication/login.route"));
// const SignUp = lazy(() => import("./routes/authentication/signUp.route"));
// const NfcDashboardSharedLayout = lazy(() =>
//   import("./routes/dashboard/nfcDashboardSharedLayout.route")
// );
// const MyProfileSharedLayout = lazy(() =>
//   import("./routes/my-profile/myProfileSharedLayout.route")
// );
// const General = lazy(() => import("./routes/my-profile/general.route"));
// const Organization = lazy(() =>
//   import("./routes/my-profile/organization.route")
// );
// const Progress = lazy(() => import("./routes/my-profile/progress.route"));
// const MyFabSharedLayout = lazy(() =>
//   import("./routes/my-profile/myFabSharedLayout.route")
// );
// const MyFabCards = lazy(() => import("./routes/my-profile/myFabCards.route"));
// const MyFabProfiles = lazy(() =>
//   import("./routes/my-profile/myFabProfiles.route")
// );
// const ContactsSharedLayout = lazy(() =>
//   import("./routes/contacts/contactSharedLayout.route")
// );
// const Contacts = lazy(() => import("./routes/contacts/contacts.route"));
// const ContactAdd = lazy(() => import("./routes/contacts/contactAdd.route"));
// const ContactEdit = lazy(() => import("./routes/contacts/contactEdit.route"));
// const Shop = lazy(() => import("./routes/shop/shop.route"));
// const OrdersSharedLayout = lazy(() =>
//   import("./routes/orders/ordersSharedLayout.route")
// );
// const Self = lazy(() => import("./routes/orders/self.route"));
// const Customer = lazy(() => import("./routes/orders/customer.route"));
// const Settings = lazy(() => import("./routes/settings/settings.route"));
// const SettingList = lazy(() => import("./routes/settings/settingList.route"));
// const Notification = lazy(() => import("./routes/settings/notification.route"));
// const AppLanguage = lazy(() => import("./routes/settings/appLanguage.route"));
// const HelpAndSupport = lazy(() =>
//   import("./routes/settings/helpAndSupport.router")
// );
// const DeleteAccount = lazy(() =>
//   import("./routes/settings/deleteAccount.route")
// );
// const Logout = lazy(() => import("./routes/settings/logout.route"));
// const SendFeedback = lazy(() => import("./routes/settings/sendFeedback.route"));
// const ReportBug = lazy(() => import("./routes/settings/reportBug.route"));
// const PhysicalCard = lazy(() => import("./routes/creation/physicalCard.route"));
// const CardTemplates = lazy(() =>
//   import("./routes/creation/cardTemplates.route")
// );
// const CustomizeCard = lazy(() =>
//   import("./routes/creation/customizeCard.route")
// );
// const DigitalProfile = lazy(() =>
//   import("./routes/creation/digitalProfile.route")
// );
// const ProfileTemplates = lazy(() =>
//   import("./routes/creation/profileTemplates.route")
// );
// const CustomizeProfile = lazy(() =>
//   import("./routes/creation/customizeProfile.route")
// );
// const AgencySharedLayout = lazy(() =>
//   import("./routes/agency/agencySharedLayout.route")
// );
// const AgencyHome = lazy(() => import("./routes/agency/agencyHome.route"));
// const ServicesSharedLayout = lazy(() =>
//   import("./routes/agency/servicesSharedLayout.route")
// );
// const Service = lazy(() => import("./routes/agency/service.route"));
// const PortfoliosSharedLayout = lazy(() =>
//   import("./routes/agency/portfoliosSharedLayout.route")
// );
// const Portfolio = lazy(() => import("./routes/agency/portfolio.route"));
// const ServicesIndex = lazy(() => import("./routes/agency/servicesIndex.route"));
// const Success = lazy(() => import("./routes/payments/success.route"));
// const Cancel = lazy(() => import("./routes/payments/cancel.route"));
// const Profile = lazy(() => import("./routes/profile.route"));
// const NotFound = lazy(() => import("./routes/notFound.route"));
// const AdminDashboard = lazy(() =>
//   import("./routes/adminDashboard/adminDashboard.route")
// );
// const WebAdminOrdersSharedLayout = lazy(() =>
//   import("./routes/adminDashboard/webAdminOrdersSharedLayout.route")
// );
// const AllOrders = lazy(() => import("./routes/adminDashboard/allOrders.route"));
// const PendingOrders = lazy(() =>
//   import("./routes/adminDashboard/pendingOrders.route")
// );
// const CompletedOrders = lazy(() =>
//   import("./routes/adminDashboard/completedOrders.route")
// );

// routes
import {
  SharedHome,
  Home,
  Services,
  About,
  NfcHomeSharedLayout,
  NfcHome,
  AuthenticationSharedLayout,
  Login,
  SignUp,
  NfcDashboardSharedLayout,
  MyProfileSharedLayout,
  General,
  Organization,
  Progress,
  MyFabSharedLayout,
  MyFabCards,
  MyFabProfiles,
  ContactsSharedLayout,
  Contacts,
  ContactAdd,
  ContactEdit,
  Shop,
  OrdersSharedLayout,
  Self,
  Customer,
  Settings,
  SettingList,
  Notification,
  AppLanguage,
  HelpAndSupport,
  ChangeAccount,
  DeleteAccount,
  Logout,
  SendFeedback,
  ReportBug,
  PhysicalCard,
  CardTemplates,
  CustomizeCard,
  CustomizeCardTemplate,
  DigitalProfile,
  ProfileTemplates,
  CustomizeProfile,
  AgencySharedLayout,
  AgencyHome,
  ServicesSharedLayout,
  Service,
  PortfoliosSharedLayout,
  Portfolio,
  ServicesIndex,
  Success,
  Cancel,
  Profile,
  NotFound,
  AdminDashboard,
  WebAdminOrdersSharedLayout,
  AllOrders,
  PendingOrders,
  CompletedOrders,
} from "./routes";

const queryClient = new QueryClient();

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <SharedHome />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "services",
//         element: <Services />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//     ],
//   },
//   {
//     path: "/nfc",
//     element: <NfcHomeSharedLayout />,
//     children: [
//       {
//         index: true,
//         element: <NfcHome />,
//       },
//     ],
//   },
//   {
//     path: "/nfc/authentication",
//     element: <AuthenticationSharedLayout />,
//     children: [
//       {
//         path: "login",
//         element: <Login />,
//       },
//       {
//         path: "sign-up",
//         element: <SignUp />,
//       },
//       { path: "switch-account", element: <ChangeAccount /> },
//     ],
//   },
//   {
//     path: "/nfc/dashboard",
//     element: <NfcDashboardSharedLayout />,
//     children: [
//       {
//         index: true,
//         element: <Navigate replace to="/nfc/dashboard/my-profile" />,
//       },
//       {
//         path: "my-profile",
//         element: <MyProfileSharedLayout />,
//         children: [
//           {
//             index: true,
//             element: <Navigate to="general" />,
//           },
//           {
//             path: "general",
//             element: <General />,
//           },
//           {
//             path: "organization",
//             element: <Organization />,
//           },
//           {
//             path: "progress",
//             element: <Progress />,
//           },
//           {
//             path: "my-fab",
//             element: <MyFabSharedLayout />,
//             children: [
//               {
//                 index: true,
//                 element: <Navigate to="cards" />,
//               },
//               {
//                 path: "cards",
//                 element: <MyFabCards />,
//               },
//               {
//                 path: "profiles",
//                 element: <MyFabProfiles />,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         path: "contacts",
//         element: <ContactsSharedLayout />,
//         children: [
//           {
//             index: true,
//             element: <Contacts />,
//           },
//           {
//             path: "add",
//             element: <ContactAdd />,
//           },
//           {
//             path: "edit",
//             element: <ContactEdit />,
//           },
//         ],
//       },
//       {
//         path: "shop",
//         element: <Shop />,
//       },
//       {
//         path: "orders",
//         element: <OrdersSharedLayout />,
//         children: [
//           {
//             index: true,
//             element: <Navigate to="self" />,
//           },
//           {
//             path: "self",
//             element: <Self />,
//           },
//           {
//             path: "customer",
//             element: <Customer />,
//           },
//         ],
//       },
//       {
//         path: "settings",
//         element: <Settings />,
//         children: [
//           { index: true, element: <SettingList /> },
//           { path: "notification", element: <Notification /> },
//           { path: "app-language", element: <AppLanguage /> },
//           { path: "help-and-support", element: <HelpAndSupport /> },
//           { path: "delete-account", element: <DeleteAccount /> },
//           { path: "logout", element: <Logout /> },
//           { path: "send-feedback", element: <SendFeedback /> },
//           { path: "report-bug", element: <ReportBug /> },
//         ],
//       },
//     ],
//   },
//   { path: "/nfc/creation/physical-card", element: <PhysicalCard /> },
//   { path: "/nfc/creation/physical-card/templates", element: <CardTemplates /> },
//   { path: "/nfc/creation/physical-card/customize", element: <CustomizeCard /> },
//   {
//     path: "/nfc/creation/physical-card/customize-template",
//     element: <CustomizeCardTemplate />,
//   },
//   { path: "/nfc/creation/digital-profile", element: <DigitalProfile /> },
//   {
//     path: "/nfc/creation/digital-profile/template",
//     element: <ProfileTemplates />,
//   },
//   {
//     path: "/nfc/creation/digital-profile/customize",
//     element: <CustomizeProfile />,
//   },
//   {
//     path: "/marketing",
//     element: <AgencySharedLayout />,
//     children: [
//       {
//         index: true,
//         element: <AgencyHome />,
//       },
//       {
//         path: "services",
//         element: <ServicesSharedLayout />,
//         children: [
//           { index: true, element: <ServicesIndex /> },
//           { path: ":id", element: <Service /> },
//         ],
//       },
//       {
//         path: "portfolios",
//         element: <PortfoliosSharedLayout />,
//         children: [
//           {
//             index: true,
//             element: (
//               <Navigate to="/marketing/portfolios/social-media-marketing" />
//             ),
//           },
//           { path: ":id", element: <Portfolio /> },
//         ],
//       },
//     ],
//   },
// ]);

function App() {
  // const router = createBrowserRouter(createRoutesFromElements());
  const { isAuthReady, currentUser } = useContext(AuthContext);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="t-my-f-24 t-flex t-justify-center t-items-center">
              <span className="custom-loader"></span>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<SharedHome />}>
              <Route index element={<Home />} />
              <Route path="services" element={<Home />} />
              <Route path="about" element={<About />} />
            </Route>
            <Route path="/nfc" element={<NfcHomeSharedLayout />}>
              <Route index element={<NfcHome />} />
            </Route>
            {/* routes for authentication page and sub-pages */}
            <Route
              path="/nfc/authentication"
              element={<AuthenticationSharedLayout />}
            >
              <Route path="login" element={<Login />} />
              <Route path="sign-up" element={<SignUp />} />
            </Route>
            {/* routes for dashboard page and sub-pages */}

            <Route
              path="/nfc/dashboard"
              element={
                currentUser ? (
                  <NfcDashboardSharedLayout />
                ) : (
                  <Navigate to="/nfc/authentication/login" />
                )
              }
            >
              <Route
                index
                element={<Navigate replace to="/nfc/dashboard/my-profile" />}
              />
              {/* routes for my-profile page and sub-pages */}
              <Route path="my-profile" element={<MyProfileSharedLayout />}>
                <Route
                  index
                  element={
                    <Navigate replace to="/nfc/dashboard/my-profile/general" />
                  }
                />
                <Route path="general" element={<General />} />
                <Route path="organization" element={<Organization />} />
                <Route path="progress" element={<Progress />} />
                <Route path="my-fab" element={<MyFabSharedLayout />}>
                  <Route index element={<Navigate to="cards" />} />
                  <Route path="cards" element={<MyFabCards />} />
                  <Route path="profiles" element={<MyFabProfiles />} />
                </Route>
              </Route>
              {/* routes for contact page and sub-pages */}
              <Route path="contacts" element={<ContactsSharedLayout />}>
                <Route index element={<Contacts />} />
                <Route path="add" element={<ContactAdd />} />
                <Route path="edit" element={<ContactEdit />} />
              </Route>
              <Route path="shop" element={<Shop />} />
              {/* routes for order page and sub-pages */}
              <Route path="orders" element={<OrdersSharedLayout />}>
                <Route index element={<Navigate to="self" />} />
                <Route path="self" element={<Self />} />
                <Route path="customer" element={<Customer />} />
              </Route>
              {/* routes for setting page and sub-pages */}
              <Route path="settings" element={<Settings />}>
                <Route index element={<SettingList />} />
                <Route path="notification" element={<Notification />} />
                <Route path="app-language" element={<AppLanguage />} />
                <Route path="help-and-support" element={<HelpAndSupport />} />
                <Route path="delete-account" element={<DeleteAccount />} />
                <Route path="logout" element={<Logout />} />
                <Route path="send-feedback" element={<SendFeedback />} />
                <Route path="report-bug" element={<ReportBug />} />
              </Route>
            </Route>
            <Route
              path="/nfc/creation/physical-card/"
              element={<PhysicalCard />}
            />
            <Route
              path="/nfc/creation/physical-card/templates"
              element={<CardTemplates />}
            />
            <Route
              path="/nfc/creation/physical-card/customize"
              element={<CustomizeCard />}
            >
              <Route path=":name" element={<CustomizeCard />} />
            </Route>
            {/* <Route
            path="/nfc/creation/physical-card/customize/:cardName"
            element={<CustomizeCardTemplate />}
          /> */}
            <Route
              path="/nfc/creation/digital-profile"
              element={<DigitalProfile />}
            />
            <Route
              path="/nfc/creation/digital-profile/template"
              element={<ProfileTemplates />}
            />
            <Route
              path="/nfc/creation/digital-profile/customize"
              element={<CustomizeProfile />}
            />
            {/* routes for fab digital agency page and sub-pages */}
            <Route path="/marketing" element={<AgencySharedLayout />}>
              <Route index element={<AgencyHome />} />
              <Route path="services" element={<ServicesSharedLayout />}>
                <Route index element={<ServicesIndex />} />
                <Route path=":id" element={<Service />} />
              </Route>
              <Route path="portfolios" element={<PortfoliosSharedLayout />}>
                <Route
                  index
                  element={
                    <Navigate to="/marketing/portfolios/social-media-marketing" />
                  }
                />
                <Route path=":id" element={<Portfolio />} />
              </Route>
            </Route>
            {/* payment related routes */}
            <Route path="/nfc/payment/success" element={<Success />} />
            <Route path="/nfc/payment/cancel" element={<Cancel />} />
            <Route path="/profiles/:userName" element={<Profile />} />
            <Route path="web-admin" element={<AdminDashboard />}>
              <Route index element={<Navigate to="/web-admin/orders" />} />
              <Route path="orders" element={<WebAdminOrdersSharedLayout />}>
                <Route
                  index
                  element={<Navigate to="/web-admin/orders/all" />}
                />
                <Route path="all" element={<AllOrders />} />
                <Route path="pending" element={<PendingOrders />} />
                <Route path="completed" element={<CompletedOrders />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;

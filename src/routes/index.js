export { default as SharedHome } from "./sharedHome.route";
export { default as Home } from "./home.route";
export { default as Services } from "./services.route";
export { default as About } from "./about.route";
// nfc routes
export { default as NfcHome } from "./nfc/nfcHome.route";
export { default as NfcHomeSharedLayout } from "./nfc/nfcHomeSharedLayout.route.jsx";
// nfc authentication
export { default as AuthenticationSharedLayout } from "./authentication/authenticationSharedLayout.route";
export { default as Login } from "./authentication/login.route";
export { default as SignUp } from "./authentication/signUp.route";
// dashboard
export { default as NfcDashboardSharedLayout } from "./dashboard/nfcDashboardSharedLayout.route";
// --my profile
export { default as MyProfileSharedLayout } from "./my-profile/myProfileSharedLayout.route";
export { default as General } from "./my-profile/general.route";
export { default as Organization } from "./my-profile/organization.route";
export { default as Progress } from "./my-profile/progress.route";
export { default as MyFabSharedLayout } from "./my-profile/myFabSharedLayout.route";
export { default as MyFabCards } from "./my-profile/myFabCards.route";
export { default as MyFabProfiles } from "./my-profile/myFabProfiles.route.jsx";
// --contacts
export { default as ContactsSharedLayout } from "./contacts/contactSharedLayout.route";
export { default as Contacts } from "./contacts/contacts.route";
export { default as ContactAdd } from "./contacts/contactAdd.route";
export { default as ContactEdit } from "./contacts/contactEdit.route";
// --shop
export { default as Shop } from "./shop/shop.route";
// --orders
export { default as OrdersSharedLayout } from "./orders/ordersSharedLayout.route";
export { default as Self } from "./orders/self.route";
export { default as Customer } from "./orders/customer.route";
// --settings
export { default as Settings } from "./settings/settings.route";
export { default as SettingList } from "./settings/settingList.route.jsx";
export { default as AppLanguage } from "./settings/appLanguage.route.jsx";
export { default as ChangeAccount } from "./settings/changeAccount.route.jsx";
export { default as DeleteAccount } from "./settings/deleteAccount.route.jsx";
export { default as HelpAndSupport } from "./settings/helpAndSupport.router.jsx";
export { default as Logout } from "./settings/logout.route.jsx";
export { default as Notification } from "./settings/notification.route.jsx";
export { default as ReportBug } from "./settings/reportBug.route.jsx";
export { default as SendFeedback } from "./settings/sendFeedback.route.jsx";
// --creation
export { default as PhysicalCard } from "./creation/physicalCard.route.jsx";
export { default as CardTemplates } from "./creation/cardTemplates.route.jsx";
export { default as CustomizeCard } from "./creation/customizeCard.route.jsx";
export { default as DigitalProfile } from "./creation/digitalProfile.route.jsx";
export { default as ProfileTemplates } from "./creation/profileTemplates.route.jsx";
export { default as CustomizeProfile } from "./creation/customizeProfile.route.jsx";

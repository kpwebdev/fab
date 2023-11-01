export { default as SharedHome } from "./sharedHome.route";
export { default as Home } from "./home.route";
export { default as Services } from "./services.route";
export { default as About } from "./about.route";
// nfc routes
export { default as NfcHome } from "./nfc/nfcHome.route";
export { default as NfcHomeSharedLayout } from "./nfc/nfcHomeSharedLayout.route";
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
export { default as MyFabProfiles } from "./my-profile/myFabProfiles.route";
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
export { default as SettingList } from "./settings/settingList.route";
export { default as AppLanguage } from "./settings/appLanguage.route";
export { default as ChangeAccount } from "./settings/changeAccount.route";
export { default as DeleteAccount } from "./settings/deleteAccount.route";
export { default as HelpAndSupport } from "./settings/helpAndSupport.router";
export { default as Logout } from "./settings/logout.route";
export { default as Notification } from "./settings/notification.route";
export { default as ReportBug } from "./settings/reportBug.route";
export { default as SendFeedback } from "./settings/sendFeedback.route";
// --creation
export { default as PhysicalCard } from "./creation/physicalCard.route";
export { default as CardTemplates } from "./creation/cardTemplates.route";
export { default as CustomizeCard } from "./creation/customizeCard.route";
export { default as CustomizeCardTemplate } from "./creation/customizeCardTemplate.route";
export { default as DigitalProfile } from "./creation/digitalProfile.route";
export { default as ProfileTemplates } from "./creation/profileTemplates.route";
export { default as CustomizeProfile } from "./creation/customizeProfile.route";
// agency
export { default as AgencySharedLayout } from "./agency/agencySharedLayout.route";
export { default as AgencyHome } from "./agency/agencyHome.route";
export { default as ServicesSharedLayout } from "./agency/servicesSharedLayout.route";
export { default as ServicesIndex } from "./agency/servicesIndex.route";
export { default as Service } from "./agency/service.route";
export { default as PortfoliosSharedLayout } from "./agency/portfoliosSharedLayout.route";
export { default as Portfolio } from "./agency/portfolio.route";
// payment related pages
export { default as Success } from "./payments/success.route";
export { default as Cancel } from "./payments/cancel.route";
// profile page
export { default as Profile } from "./profile.route";
// error pages
export { default as NotFound } from "./notFound.route";

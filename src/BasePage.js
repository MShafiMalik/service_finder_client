import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SplashScreen from "./modules/Partials/SplashScreen";

const AddCategory = lazy(() => import("./pages/add_category/AddCategory"));
const HomePage = lazy(() => import("./pages/home"));
const Signup = lazy(() => import("./pages/registration/Signup"));
const Login = lazy(() => import("./pages/registration/Login"));
const SearchServices = lazy(() =>
  import("./pages/search_services/SearchServices")
);
const Category = lazy(() => import("./pages/category/Category"));
const Services = lazy(() => import("./pages/services/Services"));
const ServiceDetail = lazy(() =>
  import("./pages/service_detail/ServiceDetail")
);
const SellerProfile = lazy(() =>
  import("./pages/seller_profile/SellerProfile")
);
const ContactUs = lazy(() => import("./pages/contact_us/ContactUs"));
const AboutUs = lazy(() => import("./pages/about_us/AboutUs"));
const ErrorPage = lazy(() => import("./modules/Errors/ErrorPage"));

export default function BasePage() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search-services" element={<SearchServices />} />
        <Route path="/category/:category_id" element={<Category />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:service_id" element={<ServiceDetail />} />
        <Route path="/seller/:seller_user_id" element={<SellerProfile />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/add-category" element={<AddCategory />} />
      </Routes>
    </Suspense>
  );
}

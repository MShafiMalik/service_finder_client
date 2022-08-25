import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTE_NAMES } from "./common/constants";
import SplashScreen from "./modules/Partials/SplashScreen";

const AddCategory = lazy(() => import("./pages/add_category/AddCategory"));
const AddHeroSlider = lazy(() =>
  import("./pages/add_hero_slider/AddHeroSlider")
);
const HomePage = lazy(() => import("./pages/home"));
const Signup = lazy(() => import("./modules/auth/Signup"));
const Login = lazy(() => import("./modules/auth/Login"));
const VerifyEmail = lazy(() => import("./modules/auth/VerifyEmail"));
const PersonalDetail = lazy(() =>
  import("./pages/personal_detail/PersonalDetail")
);
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
        {/* <Route index element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify/:email" element={<VerifyEmail />} />
        <Route path="/personal-detail/:email" element={<PersonalDetail />} />
        <Route
          path="/search-services/:keyword/:category_id/:latitude/:longitude"
          element={<SearchServices />}
        />
        <Route path="/category/:category_id" element={<Category />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:service_id" element={<ServiceDetail />} />
        <Route path="/seller/:seller_user_id" element={<SellerProfile />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/add-hero-slider" element={<AddHeroSlider />} /> */}

        <Route path={ROUTE_NAMES.HOME} index element={<HomePage />} />
        <Route path={ROUTE_NAMES.SIGNUP} element={<Signup />} />
        <Route path={ROUTE_NAMES.LOGIN} element={<Login />} />
        <Route
          path={ROUTE_NAMES.VERIFY_EMAIL_PARAMS}
          element={<VerifyEmail />}
        />
        <Route
          path={ROUTE_NAMES.PERSONAL_DETAIL_PARAMS}
          element={<PersonalDetail />}
        />
        <Route
          path={ROUTE_NAMES.SEARCH_SERVICES_PARAMS}
          element={<SearchServices />}
        />
        <Route path={ROUTE_NAMES.CATEGORY_PARAMS} element={<Category />} />
        <Route path={ROUTE_NAMES.SERVICES} element={<Services />} />
        <Route
          path={ROUTE_NAMES.SERVICE_DETAIL_PARAMS}
          element={<ServiceDetail />}
        />
        <Route path={ROUTE_NAMES.SELLER_PARAMS} element={<SellerProfile />} />
        <Route path={ROUTE_NAMES.CONTACT_US} element={<ContactUs />} />
        <Route path={ROUTE_NAMES.ABOUT_US} element={<AboutUs />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path={ROUTE_NAMES.ADD_CATEGORY} element={<AddCategory />} />
        <Route path={ROUTE_NAMES.ADD_HERO_SLIDER} element={<AddHeroSlider />} />
      </Routes>
    </Suspense>
  );
}

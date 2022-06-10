import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { ParallaxProvider } from "react-scroll-parallax";

import Home from "./pages/Home";
import StepByStep from "./pages/StepByStep";
import Faq from "./pages/Faq";
import Story from "./pages/Story";
import Guide from "./pages/Guide";
import Values from "./pages/Values";
import Carbon from "./pages/Carbon";
import Brands from "./pages/Brands";
import GetInTouch from "./pages/GetInTouch";
import PartnerWithUs from "./pages/PartnerWithUs";
import Policy from "./pages/Policy";
import NGOS from "./pages/NGOS";
import PromoBanner from "./components/PromoBanner/PromoBanner";
// import SignUp from "./pages/SignUp/SignUp";
// import LogIn from "./pages/LogIn/LogIn";
import Profile from "./pages/Profile/Profile";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ScrollToTop from "./ScrollToTop";
import Landing from "./pages/Landing";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile";
import Subscription from "./pages/Subscription/Subscription";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { theUser } = useAuth();

  return (
    <ParallaxProvider>
      <div className="App">
        <main className="pageWrapper">
          <ScrollToTop />
          <PromoBanner />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="how-it-works" element={<StepByStep />} />
            <Route path="faq" element={<Faq />} />
            <Route path="story" element={<Story />} />
            <Route path="guide" element={<Guide />} />
            <Route path="values" element={<Values />} />
            <Route path="lowcarbon" element={<Carbon />} />
            <Route path="brands" element={<Brands />} />
            <Route path="get-in-touch" element={<GetInTouch />} />
            <Route path="partner-with-us" element={<PartnerWithUs />} />

            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="policy" element={<Policy />} />
            <Route path="ngos" element={<NGOS />} />
            <Route path="landing" element={<Landing />} />

            <Route path="profile" element={theUser ? <Profile /> : <Navigate to="/" />} />
            <Route path="update-profile" element={theUser ? <UpdateProfile /> : <Navigate to="/" />} />
            <Route path="subscription" element={<Subscription />} />
          </Routes>
        </main>
      </div>
    </ParallaxProvider>
  );
}

export default App;

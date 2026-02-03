import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router";

import BhartiyamPage from "./pages/Bhartiyam.tsx";
import CommunityPage from "./pages/Community.tsx";
import DharoharTVPage from "./pages/DharoharTV.tsx";
import HeritageBazzarPage from "./pages/HeritageBazzar.tsx";
import HomePage from "./pages/Homepage.tsx";
import LearnPage from "./pages/Learn.tsx";
import MarketplacePage from "./pages/MarketPlace.tsx";
import SangamPage from "./pages/Sangam.tsx";
import SignInPage from "./pages/Signin.tsx";
import SignUpPage from "./pages/Signup.tsx";
import ProfilePage from "./pages/Profile.tsx";

import Footer from "./components/layout/footer.tsx";
import Navbar from "./components/layout/navbar.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { useAuthStore } from "./store/useAuthStore.ts";
import { Loader } from "lucide-react";
import { Toaster } from "sonner";
import CartPage from "./pages/CartPage.tsx";
import OrderPage from "./pages/OrderPage.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import SellerDashboard from "./pages/SellerDashboard.tsx";
import MediaUpload from "./pages/Upload.tsx";
import CreatorDashboard from "./pages/CreatorDashboard.tsx";
import VideoPage from "./pages/VideoPage.tsx";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 p-10">
    <h1 className="text-6xl font-black text-red-600">404</h1>
    <p className="text-xl text-red-800 mt-2 mb-6">Page Not Found</p>
    <Link
      to="/"
      className="text-indigo-600 hover:text-indigo-800 font-medium transition duration-150 ease-in-out"
    >
      Go back to Homepage
    </Link>
  </div>
);

const App: React.FC = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="min-h-screen flex flex-col bg-background">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/bhartiyam/:id?" element={<BhartiyamPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/heritagebazzar" element={<HeritageBazzarPage />} />
              <Route path="/learn" element={<LearnPage />} />
              <Route path="/sangam" element={<SangamPage />} />
              <Route path="/dharohar-tv" element={<DharoharTVPage />} />
              <Route path="/marketplace" element={<MarketplacePage />} />
              <Route path="/heritagebazzar/cart" element={<CartPage />} />
              <Route path="/heritagebazzar/orders" element={<OrderPage />} />
              <Route path="/heritagebazzar/dashboard" element={<SellerDashboard />} />
              <Route path="/dharohartv/dashboard" element={<CreatorDashboard />} />
              <Route path="/dharohartv/watch/:id" element={<VideoPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/orders" element={<OrderPage />} />
              <Route path="/upload" element={<MediaUpload module={"profile"} />} />
              <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/auth/signin" />}/>
              <Route path="/auth/signin" element={!authUser ? <SignInPage /> : <Navigate to="/" />}/>
              <Route path="/auth/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />}/>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster richColors position="bottom-right" duration={2000} />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

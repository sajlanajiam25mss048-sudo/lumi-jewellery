import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './views/HomePage';
import { ShopPage } from './views/ShopPage';
import { ProductDetailPage } from './views/ProductDetailPage';
import { CheckoutPage } from './views/CheckoutPage';
import { OrderSuccessPage } from './views/OrderSuccessPage';
import { AboutPage } from './views/AboutPage';

// Overlays & Modals
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { QuickViewModal } from './components/QuickViewModal';
import { ToastContainer } from './components/ToastContainer';

const MainContent = () => {
  const { currentView } = useShop();

  return (
    <main className="flex-1">
      {currentView === 'home' && <HomePage />}
      {currentView === 'shop' && <ShopPage />}
      {currentView === 'product' && <ProductDetailPage />}
      {currentView === 'checkout' && <CheckoutPage />}
      {currentView === 'order-success' && <OrderSuccessPage />}
      {currentView === 'about' && <AboutPage />}
    </main>
  );
};

export function App() {
  return (
    <ShopProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-lumi-dark antialiased">
        {/* Sticky Header */}
        <Header />

        {/* Dynamic Page Views */}
        <MainContent />

        {/* Footer */}
        <Footer />

        {/* Drawers and Overlays */}
        <CartDrawer />
        <WishlistDrawer />
        <SearchModal />
        <QuickViewModal />
        <ToastContainer />
      </div>
    </ShopProvider>
  );
}

export default App;

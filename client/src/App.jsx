import { useState } from "react";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// Lazy loading components for better performance
const HomeLayoutHOC = lazy(() => import("./HOC/Home.LayoutHOC"));
const CollectionLayoutHOC = lazy(() => import("./HOC/Collection.LayoutHOC"));
const ProductLayoutHOC = lazy(() => import("./HOC/Product.LayoutHOC"));
const Home = lazy(() => import("./Pages/Home"));
const Collection = lazy(() => import("./Pages/Collection"));
const Product = lazy(() => import("./Pages/Product"));
const ErrorPage = lazy(() => import("./error-page"));

// UI Components
import { Nav } from "./Components/Navbar/HomeNavbar";
import Footer_HomePage from "./Components/Footer/Footer_HomePage";
import { MobileTabs } from "./Components/MobileTabs/MobileTabs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Nav />

        {/* Main Content */}
        <main className="flex-1">
          <Suspense
            fallback={<div className="text-center py-10">Loading...</div>}
          >
            <Routes>
              <Route
                path="/"
                element={<HomeLayoutHOC Component={<Home />} />}
              />
              <Route
                path="/Category/:categoryName/:subcategoryName?"
                element={<CollectionLayoutHOC Component={<Collection />} />}
              />
              <Route
                path="/Product/:ProductId"
                element={<ProductLayoutHOC Component={<Product />} />}
              />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>
        </main>

        {/* Footer & Mobile Navigation */}
        <footer className="mt-auto ">
          <Footer_HomePage />
          <MobileTabs />
        </footer>
      </div>
    </>
  );
}

export default App;

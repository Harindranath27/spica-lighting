import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

// Component page views
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [selectedProductCategory, setSelectedProductCategory] = useState<string>("all");

  const handlePageChange = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFilterChange = (categoryId: string) => {
    setSelectedProductCategory(categoryId);
  };

  const renderActivePageContent = () => {
    switch (currentPage) {
      case "home":
        return <Home onPageChange={handlePageChange} onFilterChange={handleFilterChange} />;
      case "products":
        return <Products initialFilter={selectedProductCategory} />;
      case "projects":
        return <Projects />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home onPageChange={handlePageChange} onFilterChange={handleFilterChange} />;
    }
  };

  return (
    <div id="spica-lighting-app-container" className="flex flex-col min-h-screen bg-deep-black text-gray-200">
      
      {/* HEADER COMPONENT (Navigation, phone details, CTAs) */}
      <Header currentPage={currentPage} onPageChange={handlePageChange} />

      {/* DYNAMIC VIEW ROUTER GRID WORK */}
      <main className="flex-grow">
        {renderActivePageContent()}
      </main>

      {/* FOOTER COMPONENT (Products map, coordinate labels, authorised notice) */}
      <Footer onPageChange={handlePageChange} onFilterChange={handleFilterChange} />

      {/* CHAT WIDGET (Collapsible interactive floating box with Gemini socket) */}
      <ChatWidget />

    </div>
  );
}

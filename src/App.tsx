import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ScannerForm from './components/ScannerForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1f2227]">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-4 py-12">
        <ScannerForm />
      </main>

      <Features />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
import React from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { Services } from './Services';
import { PredictionModel } from './PredictionModel';
import { CropSection } from './CropSection';
import { Contact } from './Contact';
import { Footer } from './Footer';

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <PredictionModel />
      <CropSection />
      <Contact />
      <Footer />
    </div>
  );
}
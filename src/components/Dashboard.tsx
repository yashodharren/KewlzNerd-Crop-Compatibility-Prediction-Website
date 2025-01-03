import { Header } from './Header';
import { Hero } from './Hero';
import { Services } from './Services';
import { PredictionModel } from './PredictionModel';
import { CropSection } from './CropSection';
import { Footer } from './Footer';

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <PredictionModel />
      <CropSection />
      <Footer />
    </div>
  );
}
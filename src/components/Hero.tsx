export function Hero() {
  const scrollToPredictor = () => {
    const predictorSection = document.querySelector('#predictor');
    if (predictorSection) {
      predictorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[600px] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">Sustainable Crop Production for a Better Tomorrow</h1>
          <p className="text-xl mb-8">Maximize your yields with our advanced farming techniques and expert agricultural solutions.</p>
          <button 
            onClick={scrollToPredictor}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
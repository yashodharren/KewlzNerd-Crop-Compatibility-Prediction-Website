const crops = [
  {
    name: 'Wheat',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'High-yield wheat varieties perfect for various climates.',
    benefits: ['Disease resistant', 'High protein content', 'Drought tolerant']
  },
  {
    name: 'Corn',
    image: 'https://canadianfoodfocus.org/wp-content/uploads/2020/09/corn-on-the-cob.jpg',
    description: 'Premium corn seeds for maximum productivity.',
    benefits: ['High yield potential', 'Strong stalk strength', 'Excellent grain quality']
  },
  {
    name: 'Soybeans',
    image: 'https://www.healthifyme.com/blog/wp-content/uploads/2020/03/Soybean-1.jpg',
    description: 'Disease-resistant soybean varieties for better yields.',
    benefits: ['High oil content', 'Early maturity', 'Pest resistant']
  }
];

export function CropSection() {
  return (
    <section id="crops" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Premium Crops</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {crops.map((crop, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={crop.image} 
                  alt={`${crop.name} crop`} 
                  className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-semibold text-white">{crop.name}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{crop.name}</h3>
                <p className="text-gray-600 mb-4">{crop.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-green-700">Key Benefits:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {crop.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
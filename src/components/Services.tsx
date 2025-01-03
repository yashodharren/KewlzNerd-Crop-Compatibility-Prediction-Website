import { Leaf, CloudRain, LineChart, Users } from 'lucide-react';

const services = [
  {
    icon: Leaf,
    title: 'Organic Farming',
    description: 'Sustainable and eco-friendly farming practices for healthier crops.'
  },
  {
    icon: CloudRain,
    title: 'Irrigation Solutions',
    description: 'Advanced irrigation systems for optimal water management.'
  },
  {
    icon: LineChart,
    title: 'Yield Optimization',
    description: 'Data-driven approaches to maximize your crop yields.'
  },
  {
    icon: Users,
    title: 'Expert Consultation',
    description: 'Professional guidance from agricultural experts.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <service.icon className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
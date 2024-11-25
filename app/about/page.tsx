import { Button } from "@/components/ui/button";
import { Heart, Award, Users, Leaf } from "lucide-react";

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Story
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Empowering beauty through quality products and sustainable practices
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 text-pink-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <p>
              Founded in 2020, Glow & Grace began with a simple mission: to create beauty products that enhance natural beauty while being mindful of our environment. Our journey started in a small laboratory with a team of passionate cosmetic experts and environmentalists.
              </p>
              <p className="text-gray-600 mb-6">
              Today, we're proud to offer a comprehensive range of skincare and beauty products that combine the best of nature and science. Our commitment to quality, sustainability, and customer satisfaction remains at the heart of everything we do.
              </p>
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                Learn More
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Our laboratory"
                className="rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1570554886111-e80fcca6a029?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Our products"
                className="rounded-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex flex-col items-center">
                <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-md mb-4">
                  <img src={cert.logo} alt={cert.name} className="w-16 h-16" />
                </div>
                <h3 className="font-semibold">{cert.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const values = [
  {
    title: "Quality First",
    description: "We never compromise on the quality of our ingredients and products",
    icon: <Award className="w-8 h-8" />,
  },
  {
    title: "Sustainable Beauty",
    description: "Committed to eco-friendly practices and packaging",
    icon: <Leaf className="w-8 h-8" />,
  },
  {
    title: "Customer Care",
    description: "Your satisfaction and beauty journey matter to us",
    icon: <Heart className="w-8 h-8" />,
  },
  {
    title: "Community",
    description: "Building a global community of beauty enthusiasts",
    icon: <Users className="w-8 h-8" />,
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Michael Chen",
    role: "Head of Research",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Emma Williams",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
];

const certifications = [
  {
    name: "Cruelty Free",
    logo: "/cruelty-free.jpg",
  },
  {
    name: "Organic Certified",
    logo: "/organic.png",
  },
  {
    name: "Eco-Friendly",
    logo: "/Eco-friendly.jpg",
  },
  {
    name: "Vegan",
    logo: "/vegan1.png",
  },
];
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  primaryAction: string;
  secondaryAction: string;
}

const slides: Slide[] = [
  {
    title: "Advancing Healthcare Through",
    subtitle: "Innovation",
    description: "Empowering researchers and clinicians with cutting-edge solutions for neonatal care, life sciences, and molecular diagnostics.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    primaryAction: "Explore Products",
    secondaryAction: "Learn More"
  },
  {
    title: "Life Sciences",
    subtitle: "Excellence",
    description: "From DNA extraction to molecular diagnostics, we provide comprehensive solutions for breakthrough research and clinical applications.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    primaryAction: "View Life Sciences",
    secondaryAction: "Contact Us"
  },
  {
    title: "Neonatal Care",
    subtitle: "Innovation",
    description: "Scientifically designed solutions for the most vulnerable patients. Our Kouvér receiving blankets provide warmth, hygiene, and comfort.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    primaryAction: "Neonatal Solutions",
    secondaryAction: "Learn More"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 slide-content flex items-center justify-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-white space-y-6">
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    {slide.title}{" "}
                    <span className="text-secondary">{slide.subtitle}</span>
                  </h1>
                  <p className="text-xl text-gray-200 leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90">
                      {slide.primaryAction}
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                      {slide.secondaryAction}
                    </Button>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <img
                    src={slide.image}
                    alt={`${slide.title} - ${slide.subtitle}`}
                    className="rounded-xl shadow-2xl w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`slide-indicator ${index === currentSlide ? 'active' : ''}`}
            />
          ))}
        </div>
        
        {/* Slider Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}

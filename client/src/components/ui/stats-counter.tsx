import React from "react";
import { useEffect, useState } from "react";

interface StatsCounterProps {
  value: string;
  label: string;
  suffix?: string;
}

export default function StatsCounter({ value, label, suffix = "" }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`stats-${label}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [label]);

  useEffect(() => {
    if (isVisible) {
      const numericValue = parseInt(value.replace(/\D/g, ''), 10);
      if (!isNaN(numericValue)) {
        const duration = 2000;
        const steps = 60;
        const stepValue = numericValue / steps;
        
        let currentStep = 0;
        const timer = setInterval(() => {
          currentStep++;
          setCount(Math.floor(stepValue * currentStep));
          
          if (currentStep >= steps) {
            setCount(numericValue);
            clearInterval(timer);
          }
        }, duration / steps);

        return () => clearInterval(timer);
      }
    }
  }, [isVisible, value]);

  return (
    <div id={`stats-${label}`} className="text-center">
      <div className="text-4xl font-bold text-primary mb-2 counter-animation">
        {count}{suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

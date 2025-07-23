import React from "react";
import { useEffect } from 'react';
import { useLocation } from 'wouter';

export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Instantly jump to top when location changes
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
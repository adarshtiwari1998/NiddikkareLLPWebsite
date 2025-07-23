import React from "react";
import { Link } from "wouter";
import { Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import logoImage from "@/assets/niddikkare-logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-900 py-16 relative">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src={logoImage} 
                alt="NIDDIKKARE LLP" 
                className="w-[120px] h-auto"
              />
            </div>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Empowering researchers and clinicians with advanced healthcare and life sciences solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Healthcare */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Healthcare</h3>
            <ul className="space-y-2">
              <li><Link href="/healthcare/neonatal-care" className="text-sm text-gray-600 hover:text-primary transition-colors">Neonatal Care</Link></li>
              <li><Link href="/healthcare/medical-linens" className="text-sm text-gray-600 hover:text-primary transition-colors">Medical Linens</Link></li>
              <li><Link href="/healthcare/medical-linens/woven" className="text-sm text-gray-600 hover:text-primary transition-colors">Woven Medical Linens</Link></li>
              <li><Link href="/healthcare/medical-linens/non-woven" className="text-sm text-gray-600 hover:text-primary transition-colors">Non-woven Medical Linens</Link></li>
              <li><Link href="/healthcare/medical-linens/blended" className="text-sm text-gray-600 hover:text-primary transition-colors">Blended Medical Linens</Link></li>
            </ul>
          </div>
          
          {/* Life Sciences */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Life Sciences</h3>
            <ul className="space-y-2">
              <li><Link href="/life-sciences/dna-rna-extraction" className="text-sm text-gray-600 hover:text-primary transition-colors">DNA/RNA Extraction</Link></li>
              <li><Link href="/life-sciences/molecular-diagnostics" className="text-sm text-gray-600 hover:text-primary transition-colors">Molecular Diagnostics</Link></li>
              <li><Link href="/tools-testing/testing/filtration" className="text-sm text-gray-600 hover:text-primary transition-colors">Filtration</Link></li>
              <li><Link href="/tools-testing/testing/rapid-tests" className="text-sm text-gray-600 hover:text-primary transition-colors">Rapid Tests</Link></li>
              <li><Link href="/tools-testing/testing/chromatography" className="text-sm text-gray-600 hover:text-primary transition-colors">Chromatography</Link></li>
              <li><Link href="/gut-care" className="text-sm text-gray-600 hover:text-primary transition-colors">GUT Care</Link></li>
            </ul>
          </div>

          {/* Tools & Testing */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Tools & Testing</h3>
            <ul className="space-y-2">
              <li><Link href="/tools-testing/tools/e-training" className="text-sm text-gray-600 hover:text-primary transition-colors">E-Training</Link></li>
              <li><Link href="/tools-testing/tools/sample-request" className="text-sm text-gray-600 hover:text-primary transition-colors">Sample Request</Link></li>
              <li><Link href="/tools-testing/tools/filter-finder" className="text-sm text-gray-600 hover:text-primary transition-colors">FilterFinder</Link></li>
              <li><Link href="/tools-testing/testing/water-analysis" className="text-sm text-gray-600 hover:text-primary transition-colors">Water Analysis</Link></li>
              <li><Link href="/tools-testing/testing/bioanalysis" className="text-sm text-gray-600 hover:text-primary transition-colors">Bioanalysis</Link></li>
            </ul>
          </div>
          
          {/* Support & Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/company/about" className="text-sm text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/company/leadership-team" className="text-sm text-gray-600 hover:text-primary transition-colors">Leadership Team</Link></li>
              <li><Link href="/company/news" className="text-sm text-gray-600 hover:text-primary transition-colors">News</Link></li>
              <li><Link href="/services/consultancy-ivd" className="text-sm text-gray-600 hover:text-primary transition-colors">Consultancy</Link></li>
              <li><Link href="/it-solutions" className="text-sm text-gray-600 hover:text-primary transition-colors">IT Solutions</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="relative mt-12">
          {/* Bottom gradient border line spanning full width */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          
          <div className="pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 text-sm">
                © 2025 NIDDIKKARE LLP. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy-policy" className="text-gray-600 hover:text-primary transition-colors text-sm">Privacy Policy</Link>
                <Link href="/terms-of-service" className="text-gray-600 hover:text-primary transition-colors text-sm">Terms of Service</Link>
                <Link href="/cookie-policy" className="text-gray-600 hover:text-primary transition-colors text-sm">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

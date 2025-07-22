import { Link } from "wouter";
import { Linkedin, Twitter, Facebook } from "lucide-react";
import logoImage from "@/assets/niddikkare-logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src={logoImage} 
                alt="NIDDIKKARE LLP" 
                className="w-[120px] h-auto"
              />
            </div>
            <p className="text-gray-600 mb-4">
              Empowering researchers and clinicians with advanced healthcare and life sciences solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Healthcare */}
          <div>
            <h3 className="text-xl font-bold mb-4">Healthcare</h3>
            <ul className="space-y-2">
              <li><Link href="/healthcare/neonatal-care" className="text-gray-600 hover:text-gray-900 transition-colors">Neonatal Care</Link></li>
              <li><Link href="/healthcare/medical-linens" className="text-gray-600 hover:text-gray-900 transition-colors">Medical Linens</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Hospital Solutions</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Infection Control</Link></li>
            </ul>
          </div>
          
          {/* Life Sciences */}
          <div>
            <h3 className="text-xl font-bold mb-4">Life Sciences</h3>
            <ul className="space-y-2">
              <li><Link href="/life-sciences/dna-rna-extraction" className="text-gray-600 hover:text-gray-900 transition-colors">DNA/RNA Extraction</Link></li>
              <li><Link href="/life-sciences/molecular-diagnostics" className="text-gray-600 hover:text-gray-900 transition-colors">Molecular Diagnostics</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Research Tools</Link></li>
              <li><Link href="/gut-care" className="text-gray-600 hover:text-gray-900 transition-colors">GUT Care</Link></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Documentation</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Technical Support</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Training</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="section-divider bg-gray-200"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2025 NIDDIKKARE LLP. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Privacy Policy</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Terms of Service</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

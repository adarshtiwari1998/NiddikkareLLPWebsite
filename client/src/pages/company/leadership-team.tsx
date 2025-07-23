import { useState } from 'react';
import { Link } from 'wouter';
import { User, Briefcase, Calendar, Award, Linkedin, Mail, X, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  company: string;
  experience: string;
  shortBio: string;
  fullBio: string;
  expertise: string[];
  image: string;
  linkedin?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 'dr-samar-husain-naqvi',
    name: 'Dr. Samar Husain Naqvi',
    title: 'Managing Director & Co-Founder',
    company: 'NIDDIKKARE LLP',
    experience: '20+ Years',
    shortBio: 'Dr. Samar Husain Naqvi is a dynamic and results-oriented professional in the Life Sciences and Molecular Diagnostics domain, bringing deep expertise in product development, business planning, B2B collaborations, and OEM product management. He has successfully led the complete lifecycle of in vitro diagnostic medical devices (IVD-MDs), encompassing design, research and development, and production. Dr. Naqvi is recognized for his commitment to customer-focused innovation and comprehensive understanding of the scientific and commercial forces shaping the healthcare industry...',
    fullBio: `Dr. Samar Husain Naqvi is a dynamic and results-oriented professional in the Life Sciences and Molecular Diagnostics domain, bringing deep expertise in product development, business planning, B2B collaborations, OEM product management. He has successfully led the complete lifecycle of in vitro diagnostic medical devices (IVD-MDs), encompassing design, research and development, and production. Dr. Naqvi is recognized for his commitment to customer-focused innovation and his comprehensive understanding of the scientific and commercial forces shaping the healthcare industry. He has over 20 years of leadership experience in the Molecular Diagnostics and Life Science industry. Demonstrated expertise in the end-to-end development, validation, and commercialization of IVD medical devices and molecular diagnostic kits, including Real-Time PCR assays for SARS-CoV-2, HIV, HCV, HBV, HPV, Monkeypox, and various infectious and non-infectious disease panels. Proven track record in securing regulatory approvals (ICMR, CDSCO Class C Medical Device licensing) and driving OEM operations, business strategy, and market expansion. Adept at cross-functional leadership across R&D, QA/QC, regulatory affairs, and business development, with a strong focus on innovation and compliance. Extensive experience in coordinating kit validations with government labs, designing nucleic acid-based extraction and amplification systems, and implementing quality management systems aligned with international standards. He is also an empanelled NABL assessor for molecular diagnostics (ISO 15189) and biological testing (ISO 17025), as well as a Technical Expert for ICMED 9000 and ICMED 13485 under the Indian Pharmacopoeia Commission's Materiovigilance Programme of India (IPC-MvPI).`,
    expertise: ['Biotechnology', 'Life Sciences', 'Genomics', 'Molecular Biology'],
    image: '/assets/images/team-member/dr-samar-husain-naqvi.png',
    linkedin: 'https://www.linkedin.com/in/dr-samar-husain-naqvi-1b73a013/',
    email: 'samar@niddikkare.com'
  },
  {
    id: 'dr-abhishek-chanchal',
    name: 'Dr. Abhishek Chanchal',
    title: 'Director & Co-Founder',
    company: 'NIDDIKKARE LLP',
    experience: '15+ Years',
    shortBio: 'Dr. Abhishek Chanchal is a highly accomplished researcher with over 15 years of experience in Chemical Biology, Nanotechnology, Analytical Instrumentation and IVD-Medical Devices. He has actively contributed to numerous research projects and peer-reviewed international publications. His work is dedicated to harnessing the potential of nanotechnology and chemical biology to forge innovative solutions for earlier disease diagnosis and improve therapeutic effectiveness. He focuses on creating Targeted Nano-therapeutics and Point-of-Care Testing (POCT) based IVD medical devices...',
    fullBio: `Dr. Abhishek Chanchal is a highly accomplished researcher with over 15 years of experience in Chemical Biology, Nanotechnology, Analytical Instrumentation and IVD-Medical Devices. He has actively contributed to numerous research projects and peer-reviewed international publications. His work is dedicated to harnessing the potential of nanotechnology and chemical biology to forge innovative solutions for earlier disease diagnosis and improve therapeutic effectiveness by using Novel Drug Delivery System (NDDS). He focuses on creating Targeted Nano-therapeutics and Point-of-Care Testing (POCT) based IVD medical devices, which carry profound implications for global healthcare, particularly in resource-constrained environments.

Leveraging his profound expertise, Dr Chanchal made in-house nano & microparticle-based DNA/RNA extraction systems utilizing ferromagnet and silica. These cutting-edge technologies form the backbone of IVD medical devices essential for molecular diagnostics. Crucially, during the COVID-19 pandemic, these devices were instrumental in the rapid detection and differentiation of SARS-CoV-2 variants, playing a significant role in managing the pandemic health crisis.`,
    expertise: ['Chemical Biology', 'Nanotechnology', 'Analytical Instrumentation', 'IVD Medical Devices'],
    image: '/assets/images/team-member/dr-abhishek-chanchal.png',
    linkedin: 'https://www.linkedin.com/in/dr-abhishek-chanchal-42007457/',
    email: 'abhishek@niddikkare.com'
  }
];

const BiographyDialog = ({ member }: { member: TeamMember }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="bg-[hsl(188,78%,41%)] hover:bg-[hsl(188,78%,35%)] text-white border-[hsl(188,78%,41%)] hover:border-[hsl(188,78%,35%)]"
        >
          <BookOpen className="w-4 h-4 mr-2" />
          Read Full Biography
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-hidden">
        <div className="bg-gradient-to-r from-[hsl(188,78%,41%)] to-[hsl(134,37%,27%)] p-6 -m-6 mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white">
              <h2 className="text-2xl font-bold">{member.name}</h2>
              <p className="text-xl opacity-90">{member.title}</p>
              <p className="text-lg opacity-80">{member.company}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 overflow-y-auto max-h-[calc(85vh-200px)]">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-[hsl(134,37%,27%)]">Experience & Expertise</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {member.expertise.map((skill, index) => (
                <Badge key={index} className="bg-[hsl(188,78%,41%)] hover:bg-[hsl(188,78%,35%)]">
                  {skill}
                </Badge>
              ))}
            </div>
            <p className="text-[hsl(134,37%,27%)] font-semibold">
              <Calendar className="w-4 h-4 inline mr-2" />
              {member.experience} of industry experience
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="text-xl font-semibold mb-3 text-[hsl(134,37%,27%)]">Biography</h3>
            <div className="prose prose-gray max-w-none">
              {member.fullBio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <Separator />

          <div className="flex justify-center space-x-4 pt-4">
            <Button 
              className="bg-[hsl(188,78%,41%)] hover:bg-[hsl(188,78%,35%)]"
              onClick={() => window.open(`mailto:${member.email}`, '_blank')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Connect
            </Button>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[hsl(134,37%,27%)] hover:bg-[hsl(134,37%,22%)]">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-[hsl(188,78%,41%)] to-[hsl(134,37%,27%)] p-6 relative min-h-[140px] flex items-center">
        <div className="absolute top-4 right-4">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/assets/images/placeholder-avatar.png';
                }}
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[hsl(43,100%,45%)] rounded-full border-2 border-white flex items-center justify-center">
              <Award className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="text-white flex-1">
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-[hsl(188,78%,85%)] text-sm font-medium min-h-[2.5rem] flex items-center">{member.title}</p>
            <p className="text-[hsl(188,78%,75%)] text-sm">{member.company}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center text-[hsl(134,37%,27%)]">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="font-semibold">{member.experience}</span>
          </div>
        </div>

        {/* Expertise badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {member.expertise.map((skill, index) => (
            <Badge 
              key={index} 
              className="bg-[hsl(188,78%,41%)] hover:bg-[hsl(188,78%,35%)] text-white"
            >
              {skill}
            </Badge>
          ))}
        </div>

        {/* Short bio */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {member.shortBio}
        </p>

        {/* Action buttons */}
        <div className="flex flex-col space-y-3">
          <BiographyDialog member={member} />
          
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              className="flex-1 border-[hsl(188,78%,41%)] text-[hsl(188,78%,41%)] hover:bg-[hsl(188,78%,41%)] hover:text-white"
              onClick={() => window.open(`mailto:${member.email}`, '_blank')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Connect
            </Button>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button 
                variant="outline" 
                className="w-full border-[hsl(134,37%,27%)] text-[hsl(134,37%,27%)] hover:bg-[hsl(134,37%,27%)] hover:text-white"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function LeadershipTeam() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[hsl(134,37%,27%)] to-[hsl(188,78%,41%)] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Leadership Team
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Meet the visionary leaders driving innovation in biotechnology and healthcare
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                <span>Expert Leadership</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>Industry Recognition</span>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>20+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/2 -left-20 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-white/10 rounded-full"></div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(134,37%,27%)] mb-4">
              Our Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines decades of experience in biotechnology, life sciences, and healthcare innovation 
              to deliver groundbreaking solutions that advance medical diagnostics and patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-[hsl(134,37%,27%)] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Ready to be part of a team that's revolutionizing healthcare through innovative biotechnology solutions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-[hsl(188,78%,41%)] hover:bg-[hsl(188,78%,35%)] text-white px-8 py-3">
                Contact Our Team
              </Button>
            </Link>
            <Link href="/about">
              <Button 
                variant="outline" 
                className="border-white text-primary hover:bg-white hover:text-[hsl(134,37%,27%)] px-8 py-3"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
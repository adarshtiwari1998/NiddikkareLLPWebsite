import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import NeonatalCare from "@/pages/healthcare/neonatal-care";
import MedicalLinens from "@/pages/healthcare/medical-linens";
import WovenMedicalLinens from "@/pages/healthcare/medical-linens/woven";
import NonWovenMedicalLinens from "@/pages/healthcare/medical-linens/non-woven";
import BlendedMedicalLinens from "@/pages/healthcare/medical-linens/blended";
import DnaRnaExtraction from "@/pages/life-sciences/dna-rna-extraction";
import MolecularDiagnostics from "@/pages/life-sciences/molecular-diagnostics";
import GutCare from "@/pages/gut-care";
import Filtration from "@/pages/filtration";
import RapidTests from "@/pages/rapid-tests";
import Chromatography from "@/pages/chromatography";
import Bioanalysis from "@/pages/bioanalysis";
import About from "@/pages/about";
import News from "@/pages/news";
import Contact from "@/pages/contact";
import ETraining from "@/pages/tools/e-training";
import SampleRequest from "@/pages/tools/sample-request";
import ApplicationDatabaseChromatography from "@/pages/tools/application-database-chromatography";
import FilterFinder from "@/pages/tools/filter-finder";
import StripFinder from "@/pages/tools/strip-finder";
import NanocolorFinder from "@/pages/tools/nanocolor-finder";
import ChromafilFinder from "@/pages/tools/chromafil-finder";
import VialFinder from "@/pages/tools/vial-finder";
import BioanalysisKitFinder from "@/pages/tools/bioanalysis-kitfinder";

// New Services pages
import ConsultancyIVD from "@/pages/services/consultancy-ivd";
import ContractResearch from "@/pages/services/contract-research";
import OEMProducts from "@/pages/services/oem-products";

// New Products pages
import ProductsNeonatalCare from "@/pages/products/neonatal-care";
import ProductsMedicalLinens from "@/pages/products/medical-linens";
import ProductsDnaRnaExtraction from "@/pages/products/dna-rna-extraction";
import ProductsMolecularDiagnostics from "@/pages/products/molecular-diagnostics";

// New IT Solutions pages
import RPO from "@/pages/it-solutions/rpo";
import Contingent from "@/pages/it-solutions/contingent";
import WebAppSolutions from "@/pages/it-solutions/web-app-solutions";

import Header from "@/components/layout/header-new";
import Footer from "@/components/layout/footer";

function Router() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          
          {/* Services Routes */}
          <Route path="/services/consultancy-ivd" component={ConsultancyIVD} />
          <Route path="/services/contract-research" component={ContractResearch} />
          <Route path="/services/oem-products" component={OEMProducts} />
          
          {/* Products Routes */}
          <Route path="/products/neonatal-care" component={ProductsNeonatalCare} />
          <Route path="/products/medical-linens" component={ProductsMedicalLinens} />
          <Route path="/products/dna-rna-extraction" component={ProductsDnaRnaExtraction} />
          <Route path="/products/molecular-diagnostics" component={ProductsMolecularDiagnostics} />
          
          {/* IT Solutions Routes */}
          <Route path="/it-solutions/rpo" component={RPO} />
          <Route path="/it-solutions/contingent" component={Contingent} />
          <Route path="/it-solutions/web-app-solutions" component={WebAppSolutions} />
          
          {/* Existing Healthcare Routes */}
          <Route path="/healthcare/neonatal-care" component={NeonatalCare} />
          <Route path="/healthcare/medical-linens" component={MedicalLinens} />
          <Route path="/healthcare/medical-linens/woven" component={WovenMedicalLinens} />
          <Route path="/healthcare/medical-linens/non-woven" component={NonWovenMedicalLinens} />
          <Route path="/healthcare/medical-linens/blended" component={BlendedMedicalLinens} />
          
          {/* Existing Life Sciences Routes */}
          <Route path="/life-sciences/dna-rna-extraction" component={DnaRnaExtraction} />
          <Route path="/life-sciences/molecular-diagnostics" component={MolecularDiagnostics} />
          
          {/* Other Routes */}
          <Route path="/gut-care" component={GutCare} />
          <Route path="/filtration" component={Filtration} />
          <Route path="/rapid-tests" component={RapidTests} />
          <Route path="/chromatography" component={Chromatography} />
          <Route path="/bioanalysis" component={Bioanalysis} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
          
          {/* Tools Routes */}
          <Route path="/tools/e-training" component={ETraining} />
          <Route path="/tools/sample-request" component={SampleRequest} />
          <Route path="/tools/application-database-chromatography" component={ApplicationDatabaseChromatography} />
          <Route path="/tools/filter-finder" component={FilterFinder} />
          <Route path="/tools/strip-finder" component={StripFinder} />
          <Route path="/tools/nanocolor-finder" component={NanocolorFinder} />
          <Route path="/tools/chromafil-finder" component={ChromafilFinder} />
          <Route path="/tools/vial-finder" component={VialFinder} />
          <Route path="/tools/bioanalysis-kitfinder" component={BioanalysisKitFinder} />
          
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

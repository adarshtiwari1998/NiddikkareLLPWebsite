import { Switch, Route, useLocation } from "wouter";
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

// Testing pages
import Testing from "@/pages/testing/testing";
import Filtration from "@/pages/testing/filtration";
import RapidTests from "@/pages/testing/rapid-tests";
import Chromatography from "@/pages/testing/chromatography";
import Bioanalysis from "@/pages/testing/bioanalysis";
import WaterAnalysis from "@/pages/testing/water-analysis";
import About from "@/pages/about";
import News from "@/pages/news";
import Contact from "@/pages/contact";
import Tools from "@/pages/tools/tools";
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
import Services from "@/pages/services/services";
import ConsultancyIVD from "@/pages/services/consultancy-ivd";
import ContractResearch from "@/pages/services/contract-research";
import OEMProducts from "@/pages/services/oem-products";

// New Products pages
import Products from "@/pages/products/products";
import ProductsNeonatalCare from "@/pages/products/neonatal-care";
import ProductsMedicalLinens from "@/pages/products/medical-linens";
import ProductsDnaRnaExtraction from "@/pages/products/dna-rna-extraction";
import ProductsMolecularDiagnostics from "@/pages/products/molecular-diagnostics";

// Medical Linens Sub-pages
import BabyFirstTouch from "@/pages/products/medical-linens/baby-first-touch";

// Neonatal Care Sub-pages
import NeonatalBabyFirstTouch from "@/pages/products/neonatal-care/baby-first-touch";
import MaternityGown from "@/pages/products/medical-linens/maternity-gown";
import MackintoshRubberSheet from "@/pages/products/medical-linens/mackintosh-rubber-sheet";
import BedsheetPillowCovers from "@/pages/products/medical-linens/bedsheet-pillow-covers";
import SurgicalDrapesTowels from "@/pages/products/medical-linens/surgical-drapes-towels";
import ScrubSuit from "@/pages/products/medical-linens/scrub-suit";
import PatientGown from "@/pages/products/medical-linens/patient-gown";
import SurgicalOTGown from "@/pages/products/medical-linens/surgical-ot-gown";
import SurgicalCutSheets from "@/pages/products/medical-linens/surgical-cut-sheets";

// New IT Solutions pages
import ITSolutions from "@/pages/it-solutions/it-solutions";
import RPO from "@/pages/it-solutions/rpo";
import Contingent from "@/pages/it-solutions/contingent";
import WebAppSolutions from "@/pages/it-solutions/web-app-solutions";

// Healthcare parent page
import Healthcare from "@/pages/healthcare/healthcare";

// Life Sciences parent page
import LifeSciences from "@/pages/life-sciences/life-sciences";

import Header from "@/components/layout/header-new";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ScrollToTop";
import { SmartBreadcrumb } from "@/components/ui/breadcrumb";

function BreadcrumbContainer() {
  const [location] = useLocation();
  
  // Don't render breadcrumb container on home page
  if (location === "/") {
    return null;
  }
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-3">
          <SmartBreadcrumb />
        </div>
      </div>
    </div>
  );
}

function Router() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />
      
      {/* Breadcrumb Navigation */}
      <BreadcrumbContainer />
      
      <main>
        <Switch>
          <Route path="/" component={Home} />
          
          {/* Services Routes */}
          <Route path="/services" component={Services} />
          <Route path="/services/consultancy-ivd" component={ConsultancyIVD} />
          <Route path="/services/contract-research" component={ContractResearch} />
          <Route path="/services/oem-products" component={OEMProducts} />
          
          {/* Products Routes */}
          <Route path="/products" component={Products} />
          <Route path="/products/neonatal-care" component={ProductsNeonatalCare} />
          <Route path="/products/neonatal-care/baby-first-touch" component={NeonatalBabyFirstTouch} />
          <Route path="/products/medical-linens" component={ProductsMedicalLinens} />
          <Route path="/products/medical-linens/baby-first-touch" component={BabyFirstTouch} />
          <Route path="/products/medical-linens/maternity-gown" component={MaternityGown} />
          <Route path="/products/medical-linens/mackintosh-rubber-sheet" component={MackintoshRubberSheet} />
          <Route path="/products/medical-linens/bedsheet-pillow-covers" component={BedsheetPillowCovers} />
          <Route path="/products/medical-linens/surgical-drapes-towels" component={SurgicalDrapesTowels} />
          <Route path="/products/medical-linens/scrub-suit" component={ScrubSuit} />
          <Route path="/products/medical-linens/patient-gown" component={PatientGown} />
          <Route path="/products/medical-linens/surgical-ot-gown" component={SurgicalOTGown} />
          <Route path="/products/medical-linens/surgical-cut-sheets" component={SurgicalCutSheets} />
          <Route path="/products/dna-rna-extraction" component={ProductsDnaRnaExtraction} />
          <Route path="/products/molecular-diagnostics" component={ProductsMolecularDiagnostics} />
          
          {/* IT Solutions Routes */}
          <Route path="/it-solutions" component={ITSolutions} />
          <Route path="/it-solutions/rpo" component={RPO} />
          <Route path="/it-solutions/contingent" component={Contingent} />
          <Route path="/it-solutions/web-app-solutions" component={WebAppSolutions} />
          
          {/* Healthcare Routes */}
          <Route path="/healthcare" component={Healthcare} />
          <Route path="/healthcare/neonatal-care" component={NeonatalCare} />
          <Route path="/healthcare/medical-linens" component={MedicalLinens} />
          <Route path="/healthcare/medical-linens/woven" component={WovenMedicalLinens} />
          <Route path="/healthcare/medical-linens/non-woven" component={NonWovenMedicalLinens} />
          <Route path="/healthcare/medical-linens/blended" component={BlendedMedicalLinens} />
          
          {/* Life Sciences Routes */}
          <Route path="/life-sciences" component={LifeSciences} />
          <Route path="/life-sciences/dna-rna-extraction" component={DnaRnaExtraction} />
          <Route path="/life-sciences/molecular-diagnostics" component={MolecularDiagnostics} />
          
          {/* Testing Routes */}
          <Route path="/testing" component={Testing} />
          <Route path="/testing/filtration" component={Filtration} />
          <Route path="/testing/rapid-tests" component={RapidTests} />
          <Route path="/testing/water-analysis" component={WaterAnalysis} />
          <Route path="/testing/chromatography" component={Chromatography} />
          <Route path="/testing/bioanalysis" component={Bioanalysis} />
          
          {/* Other Routes */}
          <Route path="/gut-care" component={GutCare} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
          
          {/* Tools Routes */}
          <Route path="/tools" component={Tools} />
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

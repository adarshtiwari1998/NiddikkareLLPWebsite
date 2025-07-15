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
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

function Router() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/healthcare/neonatal-care" component={NeonatalCare} />
          <Route path="/healthcare/medical-linens" component={MedicalLinens} />
          <Route path="/healthcare/medical-linens/woven" component={WovenMedicalLinens} />
          <Route path="/healthcare/medical-linens/non-woven" component={NonWovenMedicalLinens} />
          <Route path="/healthcare/medical-linens/blended" component={BlendedMedicalLinens} />
          <Route path="/life-sciences/dna-rna-extraction" component={DnaRnaExtraction} />
          <Route path="/life-sciences/molecular-diagnostics" component={MolecularDiagnostics} />
          <Route path="/gut-care" component={GutCare} />
          <Route path="/filtration" component={Filtration} />
          <Route path="/rapid-tests" component={RapidTests} />
          <Route path="/chromatography" component={Chromatography} />
          <Route path="/bioanalysis" component={Bioanalysis} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
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

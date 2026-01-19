import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Science from "./pages/Science";
import Benefits from "./pages/Benefits";
import GetStarted from "./pages/GetStarted";
import Recipes from "./pages/Recipes";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import KetoCalculator from "./pages/KetoCalculator";
import FoodList from "./pages/FoodList";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import MedicalDisclaimer from "./pages/MedicalDisclaimer";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/science"} component={Science} />
      <Route path={"/benefits"} component={Benefits} />
      <Route path={"/start-guide"} component={GetStarted} />
      <Route path={"/recipes"} component={Recipes} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/keto-calculator"} component={KetoCalculator} />
      <Route path={"/food-list"} component={FoodList} />
      <Route path={"/privacy-policy"} component={PrivacyPolicy} />
      <Route path={"/terms-of-use"} component={TermsOfUse} />
      <Route path={"/medical-disclaimer"} component={MedicalDisclaimer} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Navigation />
          <Router />
          <Footer />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

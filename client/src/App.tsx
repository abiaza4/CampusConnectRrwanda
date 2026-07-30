import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Layout from "./components/Layout";
import OfflineBanner from "./components/OfflineBanner";

const Home = lazy(() => import("./pages/Home"));
const Universities = lazy(() => import("./pages/Universities"));
const UniversityProfile = lazy(() => import("./pages/UniversityProfile"));
const StudyGuide = lazy(() => import("./pages/StudyGuide"));
const VisaGuide = lazy(() => import("./pages/VisaGuide"));
const Scholarships = lazy(() => import("./pages/Scholarships"));
const CostCalculator = lazy(() => import("./pages/CostCalculator"));
const Compare = lazy(() => import("./pages/Compare"));
const Events = lazy(() => import("./pages/Events"));
const Equivalence = lazy(() => import("./pages/Equivalence"));
const ImportantInfo = lazy(() => import("./pages/ImportantInfo"));
const CurrencyConverter = lazy(() => import("./pages/CurrencyConverter"));
const Blog = lazy(() => import("./pages/Blog"));
const FAQ = lazy(() => import("./pages/FAQ"));
const About = lazy(() => import("./pages/About"));
const Team = lazy(() => import("./pages/Team"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const Search = lazy(() => import("./pages/Search"));
const NotFound = lazy(() => import("./pages/NotFound"));

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  return (
    <Layout>
      <Suspense fallback={<div className="flex items-center justify-center min-h-[60vh]"><div className="w-8 h-8 border-2 border-navy/30 border-t-navy rounded-full animate-spin" /></div>}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/universities" component={Universities} />
          <Route path="/university/:id" component={UniversityProfile} />
          <Route path="/study-guide" component={StudyGuide} />
          <Route path="/visa-guide" component={VisaGuide} />
          <Route path="/scholarships" component={Scholarships} />
          <Route path="/cost-calculator" component={CostCalculator} />
          <Route path="/currency-converter" component={CurrencyConverter} />
          <Route path="/compare" component={Compare} />
          <Route path="/events" component={Events} />
          <Route path="/equivalence" component={Equivalence} />
          <Route path="/important-info" component={ImportantInfo} />
          <Route path="/blog" component={Blog} />
          <Route path="/faq" component={FAQ} />
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-and-conditions" component={TermsAndConditions} />
          <Route path="/search" component={Search} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
            <OfflineBanner />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import Science from "@/pages/Science";
import Benefits from "@/pages/Benefits";
import Guide from "@/pages/Guide";
import Recipes from "@/pages/Recipes";
import Blog from "@/pages/Blog";
import RSSFeed from "@/pages/RSSFeed";
import { Route, Switch, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { HreflangTags } from "./components/HreflangTags";

const SUPPORTED_LANGUAGES = ['en', 'es', 'cn', 'sk'];
const DEFAULT_LANGUAGE = 'en';

function Router() {
  return (
    <Layout>
      <Switch>
        {/* Redirect root to default language */}
        <Route path="/">
          {() => <Redirect to={`/${DEFAULT_LANGUAGE}`} />}
        </Route>
        
        {/* Language-specific routes */}
        {SUPPORTED_LANGUAGES.map((lang) => (
          <Route key={lang} path={`/${lang}`} component={Home} />
        ))}
        {SUPPORTED_LANGUAGES.map((lang) => (
          <Route key={`${lang}-science`} path={`/${lang}/science`} component={Science} />
        ))}
        {SUPPORTED_LANGUAGES.map((lang) => (
          <Route key={`${lang}-benefits`} path={`/${lang}/benefits`} component={Benefits} />
        ))}
        {SUPPORTED_LANGUAGES.map((lang) => (
          <Route key={`${lang}-guide`} path={`/${lang}/guide`} component={Guide} />
        ))}
        {SUPPORTED_LANGUAGES.map((lang) => (
          <Route key={`${lang}-recipes`} path={`/${lang}/recipes`} component={Recipes} />
        ))}
        {SUPPORTED_LANGUAGES.map((lang) => (
          <Route key={`${lang}-blog`} path={`/${lang}/blog`} component={Blog} />
        ))}
        {SUPPORTED_LANGUAGES.map((lang) => (
          <Route key={`${lang}-rss`} path={`/${lang}/rss`} component={RSSFeed} />
        ))}
        
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <HreflangTags />
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;

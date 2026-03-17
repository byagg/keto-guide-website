import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";
import { useSEO } from "@/hooks/useSEO";

export default function NotFound() {
  const [, setLocation] = useLocation();

  useSEO({
    title: "Page Not Found",
    description: "The page you are looking for doesn't exist. It may have been moved or deleted.",
    url: "/404",
    noindex: true,
  });

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <Card className="w-full max-w-lg mx-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-red-100 rounded-full animate-pulse" />
              <AlertCircle className="relative h-16 w-16 text-red-500" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-slate-900 mb-2">404 - Page Not Found</h1>

          <h2 className="text-xl font-semibold text-slate-700 mb-4">
            Page Not Found
          </h2>

          <p className="text-slate-600 mb-8 leading-relaxed">
            Sorry, the page you are looking for doesn't exist.
            <br />
            It may have been moved or deleted.
          </p>
          <div className="mt-8 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-500 mb-4">Explore these popular pages instead:</p>
            <div className="flex flex-wrap justify-center gap-2">
              <button onClick={() => setLocation("/science")} className="text-sm text-blue-600 hover:text-blue-700 underline">The Science</button>
              <span className="text-slate-300">•</span>
              <button onClick={() => setLocation("/benefits")} className="text-sm text-blue-600 hover:text-blue-700 underline">Benefits</button>
              <span className="text-slate-300">•</span>
              <button onClick={() => setLocation("/food-list")} className="text-sm text-blue-600 hover:text-blue-700 underline">Food List</button>
              <span className="text-slate-300">•</span>
              <button onClick={() => setLocation("/keto-calculator")} className="text-sm text-blue-600 hover:text-blue-700 underline">Calculator</button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleGoHome}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
            <Button
              onClick={() => setLocation("/faq")}
              className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Visit FAQ
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

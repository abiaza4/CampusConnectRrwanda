import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-deep-navy dark:to-background">
      <div className="container py-12 text-center max-w-lg">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald/10 to-navy/10 flex items-center justify-center mx-auto mb-6">
          <Home className="w-10 h-10 text-emerald" />
        </div>
        <h1 className="text-6xl font-bold text-navy dark:text-emerald mb-2" style={{ fontFamily: "'Fraunces', serif" }}>
          404
        </h1>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
          Page Not Found
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
          Sorry, the page you are looking for doesn't exist.
          <br />
          It may have been moved or deleted.
        </p>
        <Button
          onClick={() => setLocation("/")}
          className="bg-emerald hover:bg-emerald-dark text-white px-8 py-3 rounded-xl font-medium shadow-lg shadow-emerald/20"
        >
          <Home className="w-4 h-4 mr-2" />
          Go Home
        </Button>
      </div>
    </div>
  );
}

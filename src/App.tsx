import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import KaraokeV2 from "./pages/KaraokeV2";
import QuizBoxing from "./pages/QuizBoxing";
import Reservation from "./pages/Reservation";
import NotFound from "./pages/NotFound";
import GuidapOverlay from "@/components/GuidapOverlay";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <GuidapOverlay />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/karaoke-v2" element={<KaraokeV2 />} />
          <Route path="/quiz-boxing" element={<QuizBoxing />} />
          <Route path="/reservation" element={<Reservation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

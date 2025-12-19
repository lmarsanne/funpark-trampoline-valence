import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Karaoke from "./pages/Karaoke";
import QuizBoxing from "./pages/QuizBoxing";
import AnniversaireEnfant from "./pages/AnniversaireEnfant";
import Romans from "./pages/Romans";
import TainTournon from "./pages/TainTournon";
import GuilherandStPeray from "./pages/GuilherandStPeray";
import LivronLoriol from "./pages/LivronLoriol";
import EvgEvjf from "./pages/EvgEvjf";
import Entreprises from "./pages/Entreprises";
import NotFound from "./pages/NotFound";
import Reservation from "./pages/Reservation";
import QueFaireQuandIlPleut from "./pages/QueFaireQuandIlPleut";
import GuidapOverlay from "@/components/GuidapOverlay";
import { ScrollToTop } from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <GuidapOverlay />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/anniversaire-enfant" element={<AnniversaireEnfant />} />
            <Route path="/karaoke" element={<Karaoke />} />
            <Route path="/quiz-boxing" element={<QuizBoxing />} />
            <Route path="/trampoline-romans-bourg-de-peage" element={<Romans />} />
            <Route path="/trampoline-tain-tournon" element={<TainTournon />} />
            <Route path="/trampoline-guilherand-st-peray" element={<GuilherandStPeray />} />
            <Route path="/trampoline-livron-loriol" element={<LivronLoriol />} />
            <Route path="/evg-evjf-valence" element={<EvgEvjf />} />
            <Route path="/entreprises" element={<Entreprises />} />
            <Route path="/que-faire-quand-il-pleut-valence" element={<QueFaireQuandIlPleut />} />
            <Route path="/reservation" element={<Reservation />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

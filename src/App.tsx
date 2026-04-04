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
import Bowling from "./pages/Bowling";
import Billard from "./pages/Billard";
import QuizGameValence from "./pages/QuizGameValence";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminPopup from "./pages/AdminPopup";
import AdminHoraires from "./pages/AdminHoraires";
import AdminLayout from "./components/AdminLayout";
import NotFound from "./pages/NotFound";

import QueFaireQuandIlPleut from "./pages/QueFaireQuandIlPleut";
import SortieGroupeEnfants from "./pages/SortieGroupeEnfants";
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
            <Route path="/bowling" element={<Bowling />} />
            <Route path="/billard" element={<Billard />} />
            <Route path="/quiz-game-valence" element={<QuizGameValence />} />

            {/* Admin routes */}
            <Route path="/x-admin/login" element={<AdminLogin />} />
            <Route path="/x-admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="horaires" element={<AdminHoraires />} />
              <Route path="popup" element={<AdminPopup />} />
            </Route>

            {/* Legacy admin redirects removed */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

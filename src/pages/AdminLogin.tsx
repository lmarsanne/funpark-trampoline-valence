import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";

const AdminLogin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      toast({
        title: "Erreur de connexion",
        description: "Email ou mot de passe incorrect.",
        variant: "destructive",
      });
    } else {
      navigate("/x-admin");
    }
    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Connexion Admin</title>
      </Helmet>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            <div className="text-center space-y-2">
              <div className="mx-auto w-12 h-12 bg-gradient-to-r from-[#FFBD0B] to-[#FF6B35] rounded-full flex items-center justify-center">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Administration</h1>
              <p className="text-sm text-gray-500">Connectez-vous pour accéder au back office</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-11 font-bold bg-gradient-to-r from-[#FFBD0B] to-[#FF6B35] hover:from-[#FFD000] hover:to-[#FF8B55] text-black rounded-xl"
              >
                {loading ? "Connexion…" : "Se connecter"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;

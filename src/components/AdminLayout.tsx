import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate, Outlet, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, Clock, MessageSquare, LayoutDashboard } from "lucide-react";
import { Helmet } from "react-helmet-async";

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/x-admin/login", { replace: true });
        return;
      }

      // Check admin role
      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin");

      if (!roles || roles.length === 0) {
        await supabase.auth.signOut();
        navigate("/x-admin/login", { replace: true });
        return;
      }

      setAuthorized(true);
      setLoading(false);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") {
        navigate("/x-admin/login", { replace: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (loading && !authorized) {
    return <div className="flex items-center justify-center min-h-screen text-lg">Chargement…</div>;
  }

  const navItems = [
    { path: "/x-admin", label: "Tableau de bord", icon: LayoutDashboard, exact: true },
    { path: "/x-admin/horaires", label: "Horaires", icon: Clock },
    { path: "/x-admin/popup", label: "Pop-up newsletter", icon: MessageSquare },
  ];

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 px-4 py-3">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold bg-gradient-to-r from-[#FFBD0B] to-[#FF6B35] bg-clip-text text-transparent">
                🎳 Admin
              </span>
            </div>
            <Button variant="ghost" size="sm" onClick={handleLogout} className="text-gray-500 hover:text-gray-700">
              <LogOut className="w-4 h-4 mr-2" />
              Déconnexion
            </Button>
          </div>
        </header>

        {/* Nav */}
        <nav className="bg-white border-b border-gray-100 px-4">
          <div className="max-w-4xl mx-auto flex gap-1 overflow-x-auto">
            {navItems.map((item) => {
              const isActive = item.exact
                ? location.pathname === item.path
                : location.pathname.startsWith(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    isActive
                      ? "border-[#FF6B35] text-[#FF6B35]"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Content */}
        <main className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminLayout;

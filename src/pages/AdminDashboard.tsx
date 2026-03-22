import { Link } from "react-router-dom";
import { Clock, MessageSquare } from "lucide-react";

const cards = [
  {
    title: "🕐 Horaires d'ouverture",
    description: "Modifier les horaires affichés dans le footer du site.",
    path: "/x-admin/horaires",
    icon: Clock,
  },
  {
    title: "💬 Pop-up newsletter",
    description: "Configurer le contenu et le comportement de la pop-up newsletter.",
    path: "/x-admin/popup",
    icon: MessageSquare,
  },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-sm text-gray-500 mt-1">Gérez le contenu de votre site depuis cet espace.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map((card) => (
          <Link
            key={card.path}
            to={card.path}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-[#FF6B35]/30 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-[#FFBD0B]/10 to-[#FF6B35]/10 group-hover:from-[#FFBD0B]/20 group-hover:to-[#FF6B35]/20 transition-colors">
                <card.icon className="w-6 h-6 text-[#FF6B35]" />
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">{card.title}</h2>
                <p className="text-sm text-gray-500 mt-1">{card.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;

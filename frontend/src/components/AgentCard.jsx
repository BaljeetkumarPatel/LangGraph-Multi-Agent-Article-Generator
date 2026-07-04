import { motion } from "framer-motion";
import {
  User,
  PenTool,
  Search,
  Globe,
  CheckCircle,
  FileText,
} from "lucide-react";

const icons = {
  User: User,
  Writer: PenTool,
  Reviewer: Search,
  Search: Globe,
  Final: CheckCircle,
  Article: FileText,
};

const AgentCard = ({ title, type, active }) => {
  const Icon = icons[type];

  return (
    <motion.div
      animate={{
        scale: active ? 1.08 : 1,
        y: active ? -6 : 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className={`w-72 rounded-2xl border p-5 shadow-lg transition-all duration-300
      ${
        active
          ? "border-blue-600 bg-blue-600 text-white shadow-blue-300"
          : "border-slate-200 bg-white text-slate-800"
      }`}
    >
      <div className="flex items-center gap-4">
        <Icon size={32} />
        <div>
          <h3 className="font-bold text-lg">{title}</h3>

          <p className="text-sm opacity-80">
            {active ? "Processing..." : "Waiting"}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AgentCard;
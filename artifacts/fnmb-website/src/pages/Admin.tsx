import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogIn, LogOut, Users, FileText, ChevronDown, ChevronUp, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Application {
  id: number;
  type: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  data: Record<string, unknown>;
  submittedAt: string;
}

function LoginScreen({ onLogin }: { onLogin: (password: string) => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/applications", {
        headers: { Authorization: `Bearer ${password}` },
      });
      if (res.ok) {
        onLogin(password);
      } else {
        setError("Incorrect password. Please try again.");
      }
    } catch {
      setError("Could not connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md"
      >
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
            <LogIn className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="font-serif text-2xl font-bold text-primary text-center mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground text-center text-sm mb-8">First Nationwide Mortgage Bank</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="password"
            placeholder="Admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 text-base"
            autoFocus
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="w-full h-12 text-base" disabled={loading}>
            {loading ? "Signing in…" : "Sign In"}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}

function ApplicationRow({ app }: { app: Application }) {
  const [expanded, setExpanded] = useState(false);
  const date = new Date(app.submittedAt).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit",
  });
  const typeLabel = app.type === "long-term" ? "Long-Term" : "Bridge Loan";
  const typeBadge = app.type === "long-term"
    ? "bg-blue-100 text-blue-700"
    : "bg-orange-100 text-orange-700";

  return (
    <>
      <tr
        className="hover:bg-muted/40 cursor-pointer transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <td className="px-4 py-3 text-sm text-muted-foreground whitespace-nowrap">{date}</td>
        <td className="px-4 py-3 font-medium text-primary whitespace-nowrap">
          {app.firstName} {app.lastName}
        </td>
        <td className="px-4 py-3 text-sm text-muted-foreground">{app.email}</td>
        <td className="px-4 py-3 text-sm text-muted-foreground whitespace-nowrap">{app.phone}</td>
        <td className="px-4 py-3">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${typeBadge}`}>
            {typeLabel}
          </span>
        </td>
        <td className="px-4 py-3 text-muted-foreground">
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </td>
      </tr>
      <AnimatePresence>
        {expanded && (
          <tr>
            <td colSpan={6} className="px-4 pb-4 bg-muted/20">
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-3">
                  {Object.entries(app.data as Record<string, string>).map(([key, val]) => (
                    <div key={key} className="bg-white rounded-lg p-3 border border-border/50">
                      <p className="text-xs text-muted-foreground mb-1">{key}</p>
                      <p className="text-sm font-semibold text-primary">{String(val)}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </td>
          </tr>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Admin() {
  const [password, setPassword] = useState<string | null>(null);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "long-term" | "short-term">("all");

  const fetchApplications = async (pass: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/applications", {
        headers: { Authorization: `Bearer ${pass}` },
      });
      if (res.ok) {
        const data = await res.json();
        setApplications(data);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (pass: string) => {
    setPassword(pass);
    fetchApplications(pass);
  };

  useEffect(() => {
    if (password) {
      const interval = setInterval(() => fetchApplications(password), 30000);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [password]);

  if (!password) return <LoginScreen onLogin={handleLogin} />;

  const filtered = applications.filter((a) => {
    const matchesFilter = filter === "all" || a.type === filter;
    const matchesSearch =
      !search ||
      `${a.firstName} ${a.lastName} ${a.email} ${a.phone}`.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const longTermCount = applications.filter((a) => a.type === "long-term").length;
  const shortTermCount = applications.filter((a) => a.type === "short-term").length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary text-white px-6 py-4 flex items-center justify-between shadow-lg">
        <div>
          <h1 className="font-serif text-xl font-bold">FNMB Admin</h1>
          <p className="text-primary-foreground/70 text-xs">Application Dashboard</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/10"
          onClick={() => setPassword(null)}
        >
          <LogOut className="h-4 w-4 mr-2" /> Sign Out
        </Button>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Total Applications", value: applications.length, icon: FileText, color: "text-primary" },
            { label: "Long-Term Mortgages", value: longTermCount, icon: Users, color: "text-blue-600" },
            { label: "Bridge / Short-Term", value: shortTermCount, icon: Users, color: "text-orange-600" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl p-5 shadow-sm border border-border/50"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Filters & Search */}
        <div className="bg-white rounded-xl shadow-sm border border-border/50 p-4 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, email, or phone…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex gap-2 items-center">
            <Filter className="h-4 w-4 text-muted-foreground" />
            {(["all", "long-term", "short-term"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  filter === f
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/70"
                }`}
              >
                {f === "all" ? "All" : f === "long-term" ? "Long-Term" : "Bridge Loan"}
              </button>
            ))}
          </div>
          <Button size="sm" variant="outline" onClick={() => fetchApplications(password)}>
            Refresh
          </Button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-border/50 overflow-hidden">
          {loading ? (
            <div className="py-20 text-center text-muted-foreground">Loading applications…</div>
          ) : filtered.length === 0 ? (
            <div className="py-20 text-center text-muted-foreground">
              {search || filter !== "all" ? "No applications match your filter." : "No applications yet."}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50 border-b border-border">
                  <tr>
                    {["Date", "Name", "Email", "Phone", "Type", ""].map((h) => (
                      <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {filtered.map((app) => (
                    <ApplicationRow key={app.id} app={app} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

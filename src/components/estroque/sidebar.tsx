import {
  LayoutDashboard,
  Package,
  Warehouse,
  FileCode2,
  Truck,
  Receipt,
  Users,
  BarChart3,
  Settings,
  Sparkle,
} from "lucide-react";
import logo from "@/assets/estroque-logo.png.asset.json";

const nav = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Produtos", icon: Package },
  { label: "Estoque", icon: Warehouse },
  { label: "Importar NF-e", icon: FileCode2 },
  { label: "Transferências", icon: Truck, badge: "3" },
  { label: "Vendas", icon: Receipt },
  { label: "Fornecedores", icon: Users },
  { label: "Relatórios", icon: BarChart3 },
  { label: "Configurações", icon: Settings },
];

export function EstroqueSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 flex-col justify-between border-r border-border bg-card px-4 py-6 lg:flex">
      <div>
        <div className="flex items-center gap-2 px-2">
          <img src={logo.url} alt="Logotipo Estroque" className="h-9 w-9 object-contain" />
          <div>
            <p className="font-display text-base font-bold tracking-tight text-foreground">
              ESTROQUE
            </p>
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Gestão inteligente
            </p>
          </div>
        </div>

        <nav className="mt-8 space-y-1">
          {nav.map((item) => (
            <button
              key={item.label}
              type="button"
              className={
                item.active
                  ? "flex w-full items-center gap-3 rounded-xl bg-mint px-3 py-2.5 text-sm font-semibold text-emerald"
                  : "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              }
            >
              <item.icon className="h-4 w-4" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge ? (
                <span className="rounded-full bg-destructive px-1.5 py-0.5 text-[10px] font-bold text-destructive-foreground">
                  {item.badge}
                </span>
              ) : null}
            </button>
          ))}
        </nav>
      </div>

      <div className="gradient-emerald rounded-card p-4">
        <Sparkle className="h-7 w-7 rounded-full bg-mint/15 p-1.5 text-mint" />
        <p className="mt-3 text-sm font-semibold text-mint">Estroque Pro</p>
        <p className="mt-1 text-xs leading-relaxed text-mint/70">
          Analytics avançado, previsão de ruptura e Curva ABC automática.
        </p>
        <button
          type="button"
          className="mt-4 w-full rounded-full bg-mint px-3 py-2 text-xs font-bold text-emerald transition-opacity hover:opacity-90"
        >
          Ativar Pro
        </button>
      </div>
    </aside>
  );
}

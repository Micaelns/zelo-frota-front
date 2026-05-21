import {
  CalendarClock,
  Car,
  Truck,
  Users,
} from "lucide-react";

import { MetricCard } from "../../components/cards/MetricCard";
import { DashboardWidget } from "../../components/dashboard/DashboardWidget";

export function DashboardPage() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <MetricCard
          title="Motoristas"
          value="230"
          icon={<Users size={28} />}
        />
        <MetricCard
          title="Viagens"
          value="3230"
          icon={<Truck size={28} />}
        />
        <MetricCard
          title="Veículos"
          value="30"
          icon={<Car size={28} />}
        />
        <MetricCard
          title="Agenda"
          value="230"
          icon={<CalendarClock size={28} />}
        />
        <DashboardWidget title="Viagens por mês" cols={3}>
          <div className="h-60 bg-slate-100 rounded-xl" />
        </DashboardWidget>

        <DashboardWidget title="Últimas viagens" cols={1}>
          <div
            className="h-60
         bg-slate-100 rounded-xl"
          />
        </DashboardWidget>
      </div>
    </>
  );
}

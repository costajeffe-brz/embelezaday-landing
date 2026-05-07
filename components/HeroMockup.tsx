import { Calendar, Clock, Users, Scissors, LayoutDashboard, Plus } from 'lucide-react'

const APPOINTMENTS = [
  { time: '09:00', client: 'Maria Silva', service: 'Manicure', color: 'bg-primary-100 text-primary-700 border-primary-200' },
  { time: '10:30', client: 'Ana Paula', service: 'Corte + Escova', color: 'bg-accent-100 text-accent-600 border-accent-200' },
  { time: '13:00', client: 'Juliana Costa', service: 'Hidratação', color: 'bg-primary-100 text-primary-700 border-primary-200' },
  { time: '14:30', client: 'Carla Mendes', service: 'Coloração', color: 'bg-accent-100 text-accent-600 border-accent-200' },
  { time: '16:00', client: 'Beatriz Souza', service: 'Pedicure', color: 'bg-primary-100 text-primary-700 border-primary-200' },
]

export function HeroMockup() {
  return (
    <div className="relative aspect-[16/10] rounded-2xl border border-primary-100 bg-white shadow-2xl shadow-primary-500/15 overflow-hidden flex">
      {/* Sidebar */}
      <aside className="hidden sm:flex w-44 shrink-0 flex-col bg-gradient-to-b from-primary-50/40 to-white border-r border-primary-100">
        <div className="px-5 py-4 border-b border-primary-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary-500 flex items-center justify-center">
              <Scissors size={14} className="text-white" />
            </div>
            <span className="text-sm font-bold text-burgundy-900">EmbelezaDay</span>
          </div>
        </div>
        <nav className="flex-1 px-2.5 py-3 space-y-0.5 text-xs">
          <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-burgundy-700/70">
            <LayoutDashboard size={13} />
            <span>Dashboard</span>
          </div>
          <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg bg-primary-100 text-primary-700 font-medium">
            <Calendar size={13} />
            <span>Agendamentos</span>
          </div>
          <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-burgundy-700/70">
            <Scissors size={13} />
            <span>Serviços</span>
          </div>
          <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-burgundy-700/70">
            <Users size={13} />
            <span>Clientes</span>
          </div>
        </nav>
      </aside>

      {/* Main panel */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Toolbar */}
        <div className="px-4 sm:px-6 py-3 border-b border-primary-100 flex items-center justify-between gap-3 shrink-0">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-primary-500 font-semibold">Hoje</p>
            <h3 className="text-base sm:text-lg font-bold text-burgundy-900">Quinta, 7 de maio</h3>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center bg-primary-50 rounded-lg p-0.5 gap-0.5 text-xs font-medium">
              <span className="px-2 py-1 rounded-md bg-white text-primary-700 shadow-sm">Dia</span>
              <span className="px-2 py-1 text-burgundy-700/50">Semana</span>
              <span className="px-2 py-1 text-burgundy-700/50">Mês</span>
            </div>
            <button className="w-7 h-7 rounded-lg bg-primary-500 text-white flex items-center justify-center shadow-sm shadow-primary-500/30">
              <Plus size={14} />
            </button>
          </div>
        </div>

        {/* Schedule */}
        <div className="flex-1 overflow-hidden">
          <div className="px-3 sm:px-5 py-3 space-y-1.5">
            {APPOINTMENTS.map((appt) => (
              <div
                key={appt.time}
                className={`flex items-center gap-2 sm:gap-3 px-2.5 sm:px-3 py-2 rounded-xl border ${appt.color}`}
              >
                <div className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold tabular-nums shrink-0 min-w-[36px] sm:min-w-[42px]">
                  <Clock size={10} className="opacity-70 shrink-0" />
                  {appt.time}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-semibold truncate">{appt.client}</p>
                  <p className="text-[10px] sm:text-xs opacity-70 truncate">{appt.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

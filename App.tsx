import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { WORKOUTS } from './constants';
import WeeklyOverview from './components/WeeklyOverview';
import WorkoutCard from './components/WorkoutCard';
import CardioGuide from './components/CardioGuide';
import DietGuide from './components/DietGuide';
import { CalendarDays, Dumbbell, Bike, ChevronRight, Activity, Utensils, X } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isWorkoutMenuOpen, setIsWorkoutMenuOpen] = useState(false);

  // Close menu when navigating
  useEffect(() => {
    setIsWorkoutMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return currentPath === path;
  };

  const isWorkoutActive = currentPath.includes('/workout/');

  const getTabClass = (path: string) => {
    return `flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-all flex-1 relative ${
      isActive(path)
        ? 'text-blue-600 font-semibold' 
        : 'text-slate-400 hover:text-slate-600'
    }`;
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24 md:pb-10">
      <ScrollToTop />
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
                <Activity className="text-white w-5 h-5" />
            </div>
            <div>
                <h1 className="text-lg font-bold text-slate-900 leading-tight">MedFit Planner</h1>
                <p className="text-xs text-slate-500">Semana #12 • Hipertrofia</p>
            </div>
          </div>
          
          {currentPath !== '/' && (
             <Link 
                to="/"
                className="text-sm font-medium text-slate-600 hover:text-blue-600 flex items-center gap-1"
             >
                Visão Geral
             </Link>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto p-4 md:p-6">
        <div className="animate-fade-in">
           <Routes>
             <Route path="/" element={<WeeklyOverview />} />
             <Route path="/workout/A" element={<WorkoutCard workout={WORKOUTS.A} />} />
             <Route path="/workout/B" element={<WorkoutCard workout={WORKOUTS.B} />} />
             <Route path="/workout/C" element={<WorkoutCard workout={WORKOUTS.C} />} />
             <Route path="/cardio" element={<CardioGuide />} />
             <Route path="/diet" element={<DietGuide />} />
           </Routes>
        </div>
      </main>

      {/* Mobile/Bottom Navigation */}
      {/* Overlay for clicking outside menu */}
      {isWorkoutMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-20 md:hidden"
          onClick={() => setIsWorkoutMenuOpen(false)}
        />
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-4 py-2 md:hidden z-30 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        {/* Workout Menu Popup */}
        <div className={`absolute bottom-full left-0 right-0 p-4 transition-all duration-300 transform origin-bottom ${isWorkoutMenuOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95 pointer-events-none'}`}>
             <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-3 max-w-sm mx-auto">
                 <div className="flex justify-between items-center mb-2 px-1">
                     <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Selecione o Treino</span>
                     <button onClick={() => setIsWorkoutMenuOpen(false)} className="text-slate-400">
                         <X size={16} />
                     </button>
                 </div>
                 <div className="grid grid-cols-3 gap-3">
                    <Link to="/workout/A" className="flex flex-col items-center justify-center p-3 bg-blue-50 rounded-xl border border-blue-100 active:bg-blue-100">
                        <span className="font-black text-2xl text-blue-700 leading-none mb-1">A</span>
                        <span className="text-[10px] font-bold text-blue-600 uppercase">Push</span>
                    </Link>
                    <Link to="/workout/B" className="flex flex-col items-center justify-center p-3 bg-indigo-50 rounded-xl border border-indigo-100 active:bg-indigo-100">
                        <span className="font-black text-2xl text-indigo-700 leading-none mb-1">B</span>
                        <span className="text-[10px] font-bold text-indigo-600 uppercase">Pull</span>
                    </Link>
                    <Link to="/workout/C" className="flex flex-col items-center justify-center p-3 bg-emerald-50 rounded-xl border border-emerald-100 active:bg-emerald-100">
                        <span className="font-black text-2xl text-emerald-700 leading-none mb-1">C</span>
                        <span className="text-[10px] font-bold text-emerald-600 uppercase">Legs</span>
                    </Link>
                 </div>
             </div>
        </div>

        <div className="flex justify-between items-center max-w-sm mx-auto">
          <Link to="/" className={getTabClass('/')}>
            <CalendarDays size={22} className={isActive('/') ? 'stroke-[2.5px]' : 'stroke-2'} />
            <span className="text-[10px] font-medium mt-1">Visão</span>
          </Link>
          
          <button 
            onClick={() => setIsWorkoutMenuOpen(!isWorkoutMenuOpen)} 
            className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-all flex-1 ${
                isWorkoutActive || isWorkoutMenuOpen ? 'text-blue-600 font-semibold' : 'text-slate-400'
            }`}
          >
            <Dumbbell size={22} className={isWorkoutActive || isWorkoutMenuOpen ? 'stroke-[2.5px]' : 'stroke-2'} />
            <span className="text-[10px] font-medium mt-1">Treinos</span>
          </button>

          <Link to="/cardio" className={getTabClass('/cardio')}>
            <Bike size={22} className={isActive('/cardio') ? 'stroke-[2.5px]' : 'stroke-2'} />
            <span className="text-[10px] font-medium mt-1">Cardio</span>
          </Link>
          
          <Link to="/diet" className={getTabClass('/diet')}>
            <Utensils size={22} className={isActive('/diet') ? 'stroke-[2.5px]' : 'stroke-2'} />
            <span className="text-[10px] font-medium mt-1">Dieta</span>
          </Link>
        </div>
      </div>

       {/* Desktop Sidebar Navigation (Hidden on mobile) */}
       <div className="hidden md:block fixed top-24 left-[max(0px,calc(50%-45rem))] w-48 p-4">
          <nav className="flex flex-col gap-2">
            <NavButton 
                active={isActive('/')} 
                to="/" 
                icon={<CalendarDays size={18} />} 
                label="Visão Geral" 
            />
            <div className="h-px bg-slate-200 my-2"></div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 mb-1">Treinos</p>
            <NavButton 
                active={isActive('/workout/A')} 
                to="/workout/A" 
                icon={<div className="w-5 h-5 bg-slate-200 rounded text-xs flex items-center justify-center font-bold text-slate-700">A</div>} 
                label="Peito/Ombro" 
            />
            <NavButton 
                active={isActive('/workout/B')} 
                to="/workout/B" 
                icon={<div className="w-5 h-5 bg-slate-200 rounded text-xs flex items-center justify-center font-bold text-slate-700">B</div>} 
                label="Costas/Bíceps" 
            />
            <NavButton 
                active={isActive('/workout/C')} 
                to="/workout/C" 
                icon={<div className="w-5 h-5 bg-slate-200 rounded text-xs flex items-center justify-center font-bold text-slate-700">C</div>} 
                label="Pernas" 
            />
             <div className="h-px bg-slate-200 my-2"></div>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 mb-1">Rotina</p>
             <NavButton 
                active={isActive('/cardio')} 
                to="/cardio" 
                icon={<Bike size={18} />} 
                label="Cardio" 
            />
            <NavButton 
                active={isActive('/diet')} 
                to="/diet" 
                icon={<Utensils size={18} />} 
                label="Dieta" 
            />
          </nav>
       </div>
    </div>
  );
};

// Helper for desktop nav
const NavButton = ({ active, to, icon, label }: { active: boolean, to: string, icon: React.ReactNode, label: string }) => (
    <Link 
        to={to}
        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium w-full transition-colors ${
            active ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'
        }`}
    >
        <span className={active ? 'text-blue-600' : 'text-slate-400'}>{icon}</span>
        {label}
        {active && <ChevronRight size={14} className="ml-auto text-blue-400" />}
    </Link>
)

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
import React from 'react';
import { DIET_PLAN } from '../constants';
import { Utensils, PieChart, ShoppingCart, Droplets, Zap, ChevronRight, Info } from 'lucide-react';

const DietGuide: React.FC = () => {
  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div className="bg-slate-900 text-white p-6 rounded-xl shadow-md">
         <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-slate-800 rounded-lg">
                <Utensils size={32} className="text-emerald-400" />
            </div>
            <div>
                <h2 className="text-2xl font-bold">Protocolo Nutricional</h2>
                <p className="text-slate-400">Sem terrorismo nutricional</p>
            </div>
         </div>
         <p className="text-slate-300 leading-relaxed border-l-4 border-emerald-500 pl-4">
            Para secar, você vai inverter a lógica do prato de pedreiro. O foco não é cortar tudo, mas ajustar a proporção.
         </p>
      </div>

      {/* 50/25/25 Rule */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center gap-2 bg-slate-50">
            <PieChart className="text-slate-500" size={20} />
            <h3 className="font-bold text-slate-800">A Técnica do Prato 50/25/25</h3>
        </div>
        <div className="p-6">
            <div className="flex h-6 rounded-full overflow-hidden mb-6 shadow-inner">
                <div className="w-1/2 bg-green-500 flex items-center justify-center text-[10px] md:text-xs font-bold text-white uppercase tracking-wider">50% Fibras</div>
                <div className="w-1/4 bg-red-500 flex items-center justify-center text-[10px] md:text-xs font-bold text-white uppercase tracking-wider">25% Prot</div>
                <div className="w-1/4 bg-amber-400 flex items-center justify-center text-[10px] md:text-xs font-bold text-white uppercase tracking-wider">25% Carb</div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
                {DIET_PLAN.plateRule.map((rule, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <div className="flex items-center gap-2 mb-2">
                            <div className={`w-3 h-3 rounded-full ${rule.color}`}></div>
                            <h4 className="font-bold text-slate-800">{rule.percentage} - {rule.title}</h4>
                        </div>
                        <p className="text-xs text-slate-500 font-medium mb-2 uppercase">{rule.items}</p>
                        <p className="text-sm text-slate-600">{rule.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Daily Menu */}
      <div className="space-y-4">
         <h3 className="font-bold text-xl text-slate-900 px-2">Cardápio Sugerido</h3>
         <div className="grid gap-4">
            {DIET_PLAN.menu.map((meal, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600"></div>
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="md:w-32 shrink-0">
                            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase tracking-wide">
                                {meal.time}
                            </span>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-lg text-slate-800 mb-1">{meal.title}</h4>
                            <p className="text-sm text-slate-500 mb-3">{meal.description}</p>
                            <div className="space-y-2">
                                {meal.options.map((opt, optIdx) => (
                                    <div key={optIdx} className="flex items-start gap-2 text-sm text-slate-700 bg-slate-50 p-2 rounded">
                                        <ChevronRight size={16} className="text-blue-400 mt-0.5 shrink-0" />
                                        <span>{opt}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
         </div>
      </div>

      {/* Accelerators */}
      <div className="grid md:grid-cols-3 gap-4">
          {DIET_PLAN.tips.map((tip, idx) => {
              const icons = [<Droplets size={24} />, <Zap size={24} />, <Info size={24} />];
              const styles = [
                  'bg-blue-50 border-blue-100 text-blue-900',
                  'bg-cyan-50 border-cyan-100 text-cyan-900',
                  'bg-purple-50 border-purple-100 text-purple-900'
              ];
              
              return (
                <div key={idx} className={`p-5 rounded-xl border ${styles[idx]}`}>
                    <div className="mb-3 opacity-80">{icons[idx]}</div>
                    <h4 className="font-bold mb-2">{tip.title}</h4>
                    <p className="text-sm opacity-90">{tip.description}</p>
                </div>
              );
          })}
      </div>

      {/* Shopping List */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center gap-2 bg-slate-50">
            <ShoppingCart className="text-slate-500" size={20} />
            <h3 className="font-bold text-slate-800">Lista de Compras (Básico)</h3>
          </div>
          <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
              {DIET_PLAN.shoppingList.map((cat, idx) => (
                  <div key={idx}>
                      <h5 className="font-bold text-slate-900 mb-3 border-b border-slate-100 pb-1">{cat.category}</h5>
                      <ul className="space-y-1">
                          {cat.items.map((item, i) => (
                              <li key={i} className="text-sm text-slate-600 flex items-start gap-1.5">
                                  <div className="w-1 h-1 rounded-full bg-slate-400 mt-2 shrink-0"></div>
                                  {item}
                              </li>
                          ))}
                      </ul>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default DietGuide;
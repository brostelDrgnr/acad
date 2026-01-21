import React from 'react';
import { Link } from 'react-router-dom';
import { SCHEDULE } from '../constants';
import { ScheduleItem } from '../types';

const WeeklyOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-900">Visão Geral da Semana</h2>
          <p className="text-slate-500 text-sm mt-1">
             Foco: Intensidade metabólica & Constância.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold">
              <tr>
                <th className="px-6 py-4">Dia</th>
                <th className="px-6 py-4">Musculação</th>
                <th className="px-6 py-4">Cardio</th>
                <th className="px-6 py-4 hidden md:table-cell">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {SCHEDULE.map((item: ScheduleItem, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">
                    {item.day}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-slate-800">{item.focus}</div>
                    {item.workoutId && (
                      <Link 
                        to={`/workout/${item.workoutId}`}
                        className="text-blue-600 hover:text-blue-800 text-xs font-semibold mt-1 uppercase tracking-wide inline-block"
                      >
                        Ver Treino &rarr;
                      </Link>
                    )}
                    <div className="text-xs text-slate-400 mt-0.5">{item.workoutTime}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-slate-700">{item.cardio}</div>
                    {item.cardio !== '0 min' && (
                        <Link 
                            to="/cardio"
                            className="text-emerald-600 hover:text-emerald-800 text-xs font-semibold mt-1 uppercase tracking-wide inline-block"
                        >
                            Ver Protocolo
                        </Link>
                    )}
                  </td>
                  <td className="px-6 py-4 text-slate-500 hidden md:table-cell">
                    {item.totalDuration}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-1">Medicina & Treino</h3>
            <p className="text-sm text-blue-800">
               Rotina otimizada para o 11º período. Treinos curtos, intensos e eficazes.
            </p>
         </div>
         <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
            <h3 className="font-semibold text-emerald-900 mb-1">Metabolismo</h3>
            <p className="text-sm text-emerald-800">
               Descansos curtos (45-60s) são cruciais para manter o gasto calórico alto.
            </p>
         </div>
         <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
            <h3 className="font-semibold text-purple-900 mb-1">Cardio</h3>
            <p className="text-sm text-purple-800">
               A bicicleta deve ter carga. Não é passeio no parque. Ajuste o RPM e Carga.
            </p>
         </div>
      </div>
    </div>
  );
};

export default WeeklyOverview;
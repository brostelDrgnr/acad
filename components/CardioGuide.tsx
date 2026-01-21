import React from 'react';
import { CARDIO_PROTOCOLS } from '../constants';
import { Bike, Gauge, Timer, Zap } from 'lucide-react';

const CardioGuide: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900 text-white p-6 rounded-xl shadow-md">
         <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-slate-800 rounded-lg">
                <Bike size={32} className="text-blue-400" />
            </div>
            <div>
                <h2 className="text-2xl font-bold">Especificações do Cardio</h2>
                <p className="text-slate-400">Bicicleta Fixa</p>
            </div>
         </div>
         <p className="text-slate-300 leading-relaxed border-l-4 border-blue-500 pl-4">
            Para perder peso, a bicicleta não pode ser um "passeio no parque". Você precisa ajustar a 
            <span className="text-white font-bold"> Carga (Resistência)</span> e a 
            <span className="text-white font-bold"> Rotação (RPM)</span>.
         </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {CARDIO_PROTOCOLS.map((protocol, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
            <div className={`p-4 font-bold text-white text-lg flex justify-between items-center ${idx === 0 ? 'bg-blue-600' : 'bg-emerald-600'}`}>
               <span>{protocol.title}</span>
               <Timer size={20} className="opacity-80" />
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
               <div className="flex items-center gap-2 mb-4">
                   {protocol.days.map(day => (
                       <span key={day} className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded">
                           {day}
                       </span>
                   ))}
               </div>

               <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                      <ClockIcon className="w-5 h-5 text-slate-400 mt-0.5" />
                      <div>
                          <p className="text-xs uppercase text-slate-500 font-bold">Duração</p>
                          <p className="text-slate-900 font-medium">{protocol.duration}</p>
                      </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                      <Gauge className="w-5 h-5 text-slate-400 mt-0.5" />
                      <div>
                          <p className="text-xs uppercase text-slate-500 font-bold">Carga & Intensidade</p>
                          <p className="text-slate-900 font-medium">{protocol.intensity}</p>
                      </div>
                  </div>

                  <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-slate-400 mt-0.5" />
                      <div>
                          <p className="text-xs uppercase text-slate-500 font-bold">Sensação</p>
                          <p className="text-slate-700 italic">{protocol.description}</p>
                      </div>
                  </div>
               </div>

               <div className="mt-auto bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase mb-2">Observações</p>
                  <ul className="space-y-2">
                      {protocol.notes.map((note, nIdx) => (
                          <li key={nIdx} className="text-sm text-slate-600 flex items-start gap-2">
                              <span className="text-blue-500 mt-1">•</span>
                              {note}
                          </li>
                      ))}
                  </ul>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper icon component
const ClockIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

export default CardioGuide;
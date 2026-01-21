import React, { useState, useEffect } from 'react';
import { WorkoutRoutine } from '../types';
import { Clock, Info, Dumbbell, RotateCcw, CheckCircle2, Circle, RefreshCw, Trophy } from 'lucide-react';

interface WorkoutCardProps {
  workout: WorkoutRoutine;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout }) => {
  const STORAGE_KEY = `medfit_progress_${workout.id}`;

  // Initialize state from localStorage
  const [completed, setCompleted] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error("Failed to load progress", e);
      return {};
    }
  });

  // Persist to localStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
    } catch (e) {
      console.error("Failed to save progress", e);
    }
  }, [completed, STORAGE_KEY]);

  const toggleComplete = (id: string) => {
    setCompleted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const resetProgress = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm('Deseja reiniciar o progresso deste treino?')) {
      setCompleted({});
    }
  };

  const calculateProgress = () => {
    const total = workout.exercises.length;
    if (total === 0) return 0;
    // Only count exercises that are currently in the workout plan
    const done = workout.exercises.filter(ex => completed[ex.order]).length;
    return Math.round((done / total) * 100);
  };

  const progress = calculateProgress();
  const isFinished = progress === 100;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in flex flex-col">
      {/* Header */}
      <div className="bg-slate-900 p-6 text-white relative">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              {workout.title}
              <span className="text-sm font-normal bg-slate-700 px-2 py-0.5 rounded text-slate-300">
                {workout.subtitle}
              </span>
            </h2>
            <p className="text-slate-300 mt-1">{workout.focus}</p>
          </div>
          <div className="text-right flex flex-col items-end gap-2">
             <div className="flex items-center gap-1 text-slate-300 text-sm">
                <Clock size={16} />
                <span>{workout.duration}</span>
             </div>
             <button 
                onClick={resetProgress}
                className="text-xs flex items-center gap-1 text-slate-400 hover:text-white transition-colors bg-slate-800 hover:bg-slate-700 px-2 py-1 rounded border border-slate-700"
                title="Reiniciar treino"
             >
                <RefreshCw size={12} /> Reiniciar
             </button>
          </div>
        </div>
        
        <div className="mt-4">
           <div className="flex justify-between text-xs text-slate-400 mb-1">
              <span>Progresso</span>
              <span className={`font-mono font-bold ${isFinished ? 'text-emerald-400' : ''}`}>{progress}%</span>
           </div>
           <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-500 ease-out ${isFinished ? 'bg-emerald-500' : 'bg-blue-500'}`}
                style={{ width: `${progress}%` }}
              ></div>
           </div>
        </div>
      </div>

      {/* Global Note */}
      <div className="bg-blue-50 p-4 border-b border-blue-100 flex gap-3 items-start">
        <Info className="text-blue-600 shrink-0 mt-0.5" size={18} />
        <p className="text-sm text-blue-800">
          <strong>Intervalo:</strong> 45 a 60 segundos. Use o cronômetro. Não descanse mais que isso para manter o gasto calórico alto.
        </p>
      </div>

      {/* Exercises List */}
      <div className="divide-y divide-slate-100 flex-1">
        {workout.exercises.map((ex) => {
          const isDone = !!completed[ex.order];
          return (
            <div 
              key={ex.order} 
              onClick={() => toggleComplete(ex.order.toString())}
              className={`p-4 transition-colors cursor-pointer hover:bg-slate-50 select-none ${isDone ? 'bg-slate-50/80' : ''}`}
            >
              <div className="flex items-start gap-4">
                <div className={`mt-1 transition-all duration-300 ${isDone ? 'text-emerald-500 scale-110' : 'text-slate-300'}`}>
                    {isDone ? <CheckCircle2 size={24} className="fill-emerald-50" /> : <Circle size={24} />}
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className={`font-semibold text-lg transition-colors duration-300 ${isDone ? 'text-slate-400 line-through decoration-slate-300' : 'text-slate-800'}`}>
                      {ex.order}. {ex.name}
                    </h3>
                  </div>
                  
                  <div className={`grid grid-cols-2 gap-4 mt-2 transition-opacity duration-300 ${isDone ? 'opacity-40' : ''}`}>
                    <div className="flex items-center gap-2 text-slate-600">
                      <RotateCcw size={16} className="text-slate-400" />
                      <span className="text-sm font-medium">{ex.sets} Séries</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Dumbbell size={16} className="text-slate-400" />
                      <span className="text-sm font-medium">{ex.reps} Reps</span>
                    </div>
                  </div>

                  <p className={`text-sm mt-2 text-slate-500 italic transition-opacity duration-300 ${isDone ? 'opacity-40' : ''}`}>
                    Obs: {ex.notes}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Completion Banner */}
      {isFinished && (
        <div className="bg-emerald-50 border-t border-emerald-100 p-6 text-center animate-fade-in">
           <div className="inline-flex p-3 bg-emerald-100 rounded-full mb-2 text-emerald-600">
              <Trophy size={24} />
           </div>
           <h3 className="text-lg font-bold text-emerald-800">Treino Concluído!</h3>
           <p className="text-emerald-600 text-sm">Parabéns pela constância. Descanse bem.</p>
        </div>
      )}
    </div>
  );
};

export default WorkoutCard;
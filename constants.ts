import { Exercise, WorkoutRoutine, ScheduleItem, CardioProtocol, DietSection } from './types';

export const SCHEDULE: ScheduleItem[] = [
  { day: 'Segunda', focus: 'Treino A (Empurrar)', workoutId: 'A', workoutTime: '~45 min', cardio: '30 min (Moderado)', totalDuration: '1h 15min' },
  { day: 'Terça', focus: 'Treino B (Puxar)', workoutId: 'B', workoutTime: '~45 min', cardio: '30 min (Moderado)', totalDuration: '1h 15min' },
  { day: 'Quarta', focus: 'Treino C (Pernas)', workoutId: 'C', workoutTime: '~50 min', cardio: 'Descanso ou 10 min leve', totalDuration: '50 - 60min' },
  { day: 'Quinta', focus: 'Treino A (Empurrar)', workoutId: 'A', workoutTime: '~45 min', cardio: '30 min (Moderado)', totalDuration: '1h 15min' },
  { day: 'Sexta', focus: 'Treino B (Puxar)', workoutId: 'B', workoutTime: '~45 min', cardio: '30 min (Moderado)', totalDuration: '1h 15min' },
  { day: 'Sábado', focus: 'Cardio Puro', workoutId: null, workoutTime: '-', cardio: '45 a 60 min (Longo)', totalDuration: '45 - 60min' },
  { day: 'Domingo', focus: 'Descanso Total', workoutId: null, workoutTime: '0 min', cardio: '0 min', totalDuration: '0 min' },
];

export const WORKOUTS: Record<string, WorkoutRoutine> = {
  A: {
    id: 'A',
    title: 'Treino A',
    subtitle: 'Segunda e Quinta',
    focus: 'Peito, Ombros e Tríceps',
    duration: '~45 min',
    exercises: [
      { order: 1, name: 'Supino Reto (Halter ou Máquina)', sets: 3, reps: '12 a 15', notes: 'Foco na descida controlada' },
      { order: 2, name: 'Supino Inclinado (Halter ou Máquina)', sets: 3, reps: '12', notes: 'Foco na parte superior do peito' },
      { order: 3, name: 'Desenvolvimento Sentado (Halter)', sets: 3, reps: '12 a 15', notes: 'Cuidado com a lombar' },
      { order: 4, name: 'Elevação Lateral', sets: 3, reps: '15', notes: 'Peso leve, movimento perfeito' },
      { order: 5, name: 'Tríceps Corda na Polia', sets: 3, reps: '15', notes: 'Estique bem o braço embaixo' },
      { order: 6, name: 'Tríceps Banco (ou Mergulho Maq.)', sets: 3, reps: 'Falha', notes: 'O máximo que aguentar' },
      { order: 7, name: 'Abdominal Infra (Elevação de pernas)', sets: 3, reps: '15', notes: 'No chão ou banco plano' },
    ]
  },
  B: {
    id: 'B',
    title: 'Treino B',
    subtitle: 'Terça e Sexta',
    focus: 'Costas, Bíceps e Postura',
    duration: '~45 min',
    exercises: [
      { order: 1, name: 'Puxada Alta Frente (Polia)', sets: 3, reps: '12 a 15', notes: 'Puxe até o queixo' },
      { order: 2, name: 'Remada Baixa (Sentado)', sets: 3, reps: '12', notes: 'Costas retas, puxe no umbigo' },
      { order: 3, name: 'Voador Inverso (Peck Deck)', sets: 3, reps: '15', notes: 'Foco no posterior de ombro' },
      { order: 4, name: 'Rosca Direta (Barra ou Halter)', sets: 3, reps: '12 a 15', notes: 'Sem balançar o corpo' },
      { order: 5, name: 'Rosca Martelo (Halteres)', sets: 3, reps: '12', notes: 'Pegada neutra (em pé)' },
      { order: 6, name: 'Encolhimento de Ombros', sets: 4, reps: '15', notes: 'Com halteres pesados' },
      { order: 7, name: 'Prancha Abdominal (Isometria)', sets: 3, reps: '30-45s', notes: 'Segure firme o abdômen' },
    ]
  },
  C: {
    id: 'C',
    title: 'Treino C',
    subtitle: 'Quarta',
    focus: 'Membros Inferiores Completos',
    duration: '~50 min',
    exercises: [
      { order: 1, name: 'Agachamento (Livre/Smith ou Hack)', sets: 3, reps: '10 a 12', notes: 'Amplitude máxima segura' },
      { order: 2, name: 'Leg Press 45º', sets: 3, reps: '12 a 15', notes: 'Não trave o joelho na subida' },
      { order: 3, name: 'Cadeira Extensora', sets: 3, reps: '15 + Falha', notes: 'Na última série, faça até arder' },
      { order: 4, name: 'Mesa Flexora', sets: 4, reps: '12 a 15', notes: 'Contraia bem atrás da coxa' },
      { order: 5, name: 'Panturrilha (Sentado ou Leg)', sets: 4, reps: '15 a 20', notes: 'Movimento completo' },
    ]
  }
};

export const CARDIO_PROTOCOLS: CardioProtocol[] = [
  {
    title: 'Protocolo Moderado',
    days: ['Seg', 'Ter', 'Qui', 'Sex'],
    duration: '30 minutos cravados',
    intensity: 'Carga Intermediária (Nível 4 a 6)',
    description: 'Você deve sentir as pernas pesarem um pouco.',
    notes: [
      'Sensação: Respira pelo nariz, mas abre a boca as vezes.',
      'Suor constante.',
      'Fundamental para gasto calórico diário.'
    ]
  },
  {
    title: 'Protocolo Longo',
    days: ['Sábado'],
    duration: '45 a 60 minutos',
    intensity: 'Leve a Moderada',
    description: 'O foco é aguentar o tempo todo sem parar.',
    notes: [
      'Ritmo constante.',
      'Pode ouvir podcast ou estudar enquanto faz.',
      'Sem picos de alta intensidade.'
    ]
  }
];

export const DIET_PLAN: DietSection = {
  plateRule: [
    {
      percentage: '50%',
      title: 'Fibras e Volume',
      description: 'Coma essa parte primeiro. Cria "colchão" no estômago.',
      items: 'Salada crua (alface, rúcula) e legumes cozidos (brócolis, abobrinha).',
      color: 'bg-green-500'
    },
    {
      percentage: '25%',
      title: 'Proteína Magra (Motor)',
      description: 'Tamanho da palma da mão aberta, mas grossa.',
      items: 'Frango, peixe, patinho moído ou lombo suíno.',
      color: 'bg-red-500'
    },
    {
      percentage: '25%',
      title: 'Carboidrato (Energia)',
      description: 'Arroz e Feijão entram aqui. Se tiver batata, substitui o arroz.',
      items: '3-4 colheres de arroz + 1 concha de feijão.',
      color: 'bg-amber-400'
    }
  ],
  menu: [
    {
      time: 'Manhã',
      title: 'Café da Manhã',
      description: 'Foco em proteína. Evite pão francês puro.',
      options: [
        'Opção A: 3 Ovos mexidos + 1 fatia pão integral + Café preto.',
        'Opção B: Crepioca (1 ovo + 2 col. tapioca) c/ frango ou queijo.'
      ]
    },
    {
      time: 'Almoço',
      title: 'Almoço (Tradicional Otimizado)',
      description: 'Use a regra 50/25/25.',
      options: [
        '50% Salada/Legumes + 2 Filés de Frango + 3 col. Arroz + 1 concha Feijão.'
      ]
    },
    {
      time: 'Tarde',
      title: 'Lanche (Pré-Treino)',
      description: 'Energia para o treino.',
      options: [
        '1 Iogurte Natural + 1 Fruta + 1 col. Aveia.',
        'Sanduíche natural de atum ou frango.'
      ]
    },
    {
      time: 'Noite',
      title: 'Jantar (Pós-Treino)',
      description: 'Recuperação. Se quiser secar mais, reduza levemente o arroz.',
      options: [
        'Grande salada + Omelete de 3 ovos + Mandioca ou Arroz/Feijão (metade do almoço).'
      ]
    },
    {
      time: 'Ceia',
      title: 'Ceia (Opcional)',
      description: 'Só se tiver muita fome.',
      options: [
        '1 fatia de melão/melancia ou Chá de camomila.'
      ]
    }
  ],
  tips: [
    {
      title: 'Zero Calorias Líquidas',
      description: 'Corte sucos, refri e álcool. Beba 3-4L de água. O cérebro não registra caloria líquida.'
    },
    {
      title: 'Truque da Água Gelada',
      description: '500ml de água gelada 20min antes do almoço e jantar. Acelera metabolismo e ocupa espaço.'
    },
    {
      title: 'Dia do Lixo Controlado',
      description: 'Uma refeição na semana (ex: Sábado à noite). Não o dia todo!'
    }
  ],
  shoppingList: [
    { category: 'Proteínas', items: ['Peito de frango', 'Patinho', 'Ovos', 'Tilápia', 'Lombo suíno'] },
    { category: 'Carbos', items: ['Arroz', 'Feijão', 'Aveia', 'Batata Doce/Inglesa', 'Mandioca'] },
    { category: 'Fibras', items: ['Alface', 'Rúcula', 'Tomate', 'Pepino', 'Cenoura', 'Brócolis'] },
    { category: 'Frutas', items: ['Banana (energia)', 'Maçã (saciedade)', 'Melão (diurético)', 'Limão'] }
  ]
};
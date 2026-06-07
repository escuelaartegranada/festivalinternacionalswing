import { Artist, DaySchedule } from './types';

export const scheduleData: DaySchedule[] = [
  {
    day: 'Viernes',
    date: '17 Julio',
    location: 'Miraflores (Monachil)',
    events: [
      { id: 'v_ck', time: '15:45 h.', title: 'Check In', type: 'info' },
      { id: 'v_0', time: '16:00 h.', title: 'Iniciación 0', type: 'workshop' },
      { id: 'v_1', time: '17:00 h.', title: 'Iniciación 1', type: 'workshop' },
      { id: 'v_ck2', time: '18:00 h.', title: 'Check In', type: 'info' },
      { id: 'v_mc1', time: '18:15 h.', title: 'Master Class BLUES (Rostom)', type: 'workshop' },
      { id: 'v_mc2', time: '19:15 h.', title: 'Master Class CHARLESTON (Leonor)', type: 'workshop' },
      { id: 'v_c1', time: '22:00 h.', title: 'The Sentimental Gentlemen', type: 'concert' },
      { id: 'v_c2', time: '00:00 h.', title: 'Martín Burguez & His Rhythm Combo', type: 'concert' },
      { id: 'v_c3', time: '01:30 h.', title: 'The Red Hot Rollers', type: 'concert' },
    ],
  },
  {
    day: 'Sábado',
    date: '18 Julio',
    location: 'Edif. Usos Múltiples / Miraflores / Parque de los Aragones',
    events: [
      { id: 's_ck', time: '09:30 h.', title: 'Check In Veleta/Mulhacen', type: 'info' },
      { id: 's_c1', time: '10:00 h.', title: 'Clases: Veleta & Mulhacen', type: 'workshop' },
      { id: 's_ck2', time: '12:00 h.', title: 'Check In Beginner', type: 'info' },
      { id: 's_c2', time: '12:30 h.', title: 'Beginner / Solo Jazz 1 & 2', type: 'workshop' },
      { id: 's_mc1', time: '16:00 h.', title: 'Master Class Solo Jazz (Mario)', type: 'workshop' },
      { id: 's_mc2', time: '17:00 h.', title: 'Master Class Shag Iniciación (Pablo & Cécile)', type: 'workshop' },
      { id: 's_mc3', time: '18:00 h.', title: 'Master Class Balboa (Sonia & Juan Carlos)', type: 'workshop' },
      { id: 's_mc4', time: '19:00 h.', title: 'Master Class Jive (Nineteen Jive)', type: 'workshop' },
      { id: 's_c3', time: '22:00 h.', title: 'Coastline Dixielanders', type: 'concert' },
      { id: 's_c4', time: '00:00 h.', title: 'Show de Estilos (Profes)', type: 'show' },
      { id: 's_c5', time: '00:15 h.', title: 'Cody Lee & His Rhythm Keys', type: 'concert' },
      { id: 's_c6', time: '01:30 h.', title: 'The Sun Rockets', type: 'concert' },
    ],
  },
  {
    day: 'Domingo',
    date: '19 Julio',
    location: 'Edif. Usos Múltiples / Hotel Granada Palace',
    events: [
      { id: 'd_1', time: '10:00 h.', title: 'Beginner Monachil / Veleta', type: 'workshop' },
      { id: 'd_2', time: '11:00 h.', title: 'Solo Sierra Nevada 3', type: 'workshop' },
      { id: 'd_3', time: '12:30 h.', title: 'Mulhacen / Shag Intermedio', type: 'workshop' },
      { id: 'd_4', time: '17:00 h.', title: 'Pool Party (Hotel Granada Palace)', type: 'party' },
      { id: 'd_5', time: '18:00 h.', title: 'La Petite Suite Band', type: 'concert' },
    ],
  },
];

export const teachers: Artist[] = [
  {
    id: 't1',
    name: 'Marta Chamosa & Pedro Vieira',
    role: 'Lindy Hop / Shag',
    image: '/images/marta-pedro.jpeg',
    description: 'Encantadora pareja que con su baile se centra principalmente en lograr una buena combinación de musicalidad, conexión con la pareja, crear espacios abiertos donde cada uno pueda tener su propia voz en el baile, y muy a menudo les gusta inspirarse en los pioneros y en grabaciones antiguas. Intentan añadir su propio estilo y personalidad, creando así un puente con las raíces de estos bailes, pero también tratando de impulsarlos hacia adelante. Ellos vienen de Oporto y Vigo.'
  },
  {
    id: 't2',
    name: 'Regina Sanchís & Rostom Mhadhbi',
    role: 'Lindy Hop / Blues / Balboa',
    image: '/images/regina.jpeg',
    description: 'Ella ha bailado distintos estilos desde pequeña hasta que encontró en el lindy hop y el authentic jazz, su pasión. Actualmente es profesora en The Nest Alicante, donde da clases de forma regular. En su baile busca siempre inspiración en las raíces culturales afroamericanas y los clásicos. Le interesa entender el movimiento como un espacio de exploración, juego y expresión personal, con especial atención al groove y a la musicalidad. Y en el baile en pareja, pone el foco en la conexión, las inercias, y el respeto por el espacio compartido. Le acompañará Rostom Mhadhbi; él es un apasionado del swing y el blues. Comenzó con el Lindy Hop pero pronto se expandió al Balboa, el Charleston y el blues. Rápidamente se enganchó al ritmo, las historias y el movimiento. Valora la expresión personal y la improvisación. Cree que bailar es más significativo cuando se comprenden y respetan sus raíces en la cultura afroamericana. Ha impartido clases en Estonia, Bélgica, Dinamarca, Italia, España… y ha contribuido al crecimiento de las escenas locales a lo largo de su trayectoria. Ha ganado algunos concursos, pero se siente más a gusto compartiendo, aprendiendo y bailando de festival en festival.'
  },
  {
    id: 't3',
    name: 'Astrid Akay & Sander Costermans',
    role: 'Lindy Hop / Authentic Jazz',
    image: '/images/astrid-sander.jpeg',
    description: 'Directamente desde la vibrante escena swing de Bruselas llega una pareja que combina elegancia, autenticidad y pura energía jazz sobre la pista. Miembros de la mítica crew The Old Soulz, destacan por su pasión por el Lindy Hop más auténtico, inspirado en las raíces afroamericanas del swing y en los grandes bailarines de la era dorada del jazz. Ella aporta creatividad, teatralidad y una conexión única con la improvisación, mientras que él deslumbra con su musicalidad, su estética impecable y un estilo explosivo influenciado por el early bebop. Juntos crean una mezcla magnética de técnica, expresión y diversión social que convierte cada clase y cada baile en una auténtica fiesta. En el Festival de Swing de Monachil prepárate para bailar, aprender y dejarte contagiar por el espíritu más salvaje y elegante del swing europeo. ¡La pista va a arder!'
  },
];

export const bands: Artist[] = [
  { id: 'b1', name: 'The Sentimental Gentlemen', role: 'Viernes 17', image: '/images/sentimental-gentlemen.jpeg' },
  { id: 'b2', name: 'Martin Burguez & His Rhythm Combo', role: 'Viernes 17', image: '/images/martin-burguez.jpeg' },
  { id: 'b3', name: 'The Red Hot Rollers', role: 'Viernes 17', image: '/images/red-hot-rollers.png' },
  { 
    id: 'b4', 
    name: 'Coastline Dixielanders', 
    role: 'Sábado 18', 
    image: '/images/diego-suarez.jpeg',
    members: [
      { name: 'Diego Suárez', instrumentOrRole: 'Piano', image: '/images/diego-suarez.jpeg' },
      { name: 'Tete Leal', instrumentOrRole: 'Clarinete / Saxo', image: '/images/tete-leal.jpeg' },
      { name: 'Ricky Vivar', instrumentOrRole: 'Guitarra', image: '/images/ricky-vivar.jpeg' },
      { name: 'Jose A. Serrano', instrumentOrRole: 'Contrabajo', image: '/images/jose-serrano.jpeg' },
      { name: 'Rafa Huertas', instrumentOrRole: 'Batería', image: '/images/rafa-huertas.jpeg' },
      { name: 'Jorge Urbano', instrumentOrRole: 'Trompeta', image: '/images/jorge-urbano.jpeg' }
    ]
  },
  { id: 'b5', name: 'Cody Lee & His Rhythm Keys', role: 'Sábado 18', image: '/images/cody-lee.png' },
  { id: 'b6', name: 'The Sun Rockets', role: 'Sábado 18', image: '/images/sun-rockets.jpeg' },
  { id: 'b7', name: 'La Petite Suite Band', role: 'Domingo 19', image: '/images/petite-suite.jpeg' }
];

export const workshops = [
  { id: 'w1', style: 'Shag', teachers: 'Cécile & Pablo', school: 'Hop Hop Swing', image: '/images/cecile-pablo.jpeg' },
  { id: 'w2', style: 'Charleston', teachers: 'Leo Piñar', school: 'Swing Makers', image: '/images/leo.jpeg' },
  { id: 'w3', style: 'Balboa', teachers: 'Sonia & J. Carlos', school: 'Swingdigo', image: '/images/sonia-jcarlos.jpeg' },
  { id: 'w4', style: 'Jive', teachers: 'Belén & Toni', school: 'Nineteen Jive', image: '/images/belen-toni.jpeg' },
  { id: 'w5', style: 'Solo Jazz', teachers: 'Mario Rebollido', school: 'Hop Hop Swing', image: '/images/mario.jpeg' },
  { id: 'w6', style: 'Blues', teachers: 'Rostom Mahadhbi', school: '', image: '/images/rostom.jpeg' }
];

export const passes = [
  { name: 'Full Pass Lindy', price: '100€', description: '6 horas de clase. 2 niveles (Veleta/Mulhacén) + 2 Master Classes + Pool Party.' },
  { name: 'Full Pass Solo Jazz', price: '80€', description: '5 horas de clase (Intermedio/Avanzado) + Pool Party.' },
  { name: 'Full Pass Beginner', price: '80€', description: '4 horas de clase Lindy Hop + Pool Party.' },
  { name: 'Full Pass Shag', price: '60€', description: '2 horas de clase (Intermedio) + Pool Party.' },
]

export const sponsors = [
  { name: 'Ayuntamiento de Monachil', role: 'Organiza y Patrocina' },
  { name: 'Diputación de Granada', role: 'Colabora' },
];

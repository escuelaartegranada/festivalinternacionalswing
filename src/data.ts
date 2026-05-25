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
    name: 'Marta & Pedro',
    role: 'Profesores Lindy Hop / Shag',
    image: '/images/marta-pedro.jpeg',
  },
  {
    id: 't2',
    name: 'Regina & Rostom',
    role: 'Profesores Lindy Hop / Blues',
    image: '/images/regina.jpeg',
  },
  {
    id: 't3',
    name: 'Astrid & Sander',
    role: 'Profesores Lindy Hop / Solo Jazz',
    image: '/images/astrid-sander.jpeg',
  },
];

export const bands: Artist[] = [
  { id: 'b1', name: 'The Sentimental Gentlemen', role: 'Viernes 17', image: '/images/sentimental-gentlemen.jpeg' },
  { id: 'b2', name: 'Martin Burguez & His Rhythm Combo', role: 'Viernes 17', image: '/images/martin-burguez.jpeg' },
  { id: 'b3', name: 'The Red Hot Rollers', role: 'Viernes 17', image: '/images/red-hot-rollers.png' },
  { id: 'b4', name: 'Coastline Dixielanders', role: 'Sábado 18', image: '/images/diego-suarez.jpeg' },
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

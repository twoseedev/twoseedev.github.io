import { getCollection } from 'astro:content';

export const SITE = {
  name: 'twoseedev',
  statement: 'We make the invisible visible.',
  tagline: 'Creative technology studio',
  description:
    'twoseedev is a creative technology studio. We build real-time installations, visuals, and interactive experiences that reveal the overlooked signals around us — sound, light, motion, and data.',
  email: 'hello@twoseedev.com',
  // Paste a form endpoint (e.g. https://formspree.io/f/xxxxxxx) to receive inquiries directly.
  // Left empty, the contact form opens the visitor's email app instead.
  formEndpoint: '',
  location: 'Available worldwide',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/twoseedev' },
    { label: 'Vimeo', href: 'https://vimeo.com/twoseedev' },
    { label: 'GitHub', href: 'https://github.com/twoseedev' },
  ],
};

export const SERVICES = [
  {
    id: 'installations',
    title: 'Interactive installations',
    summary: 'Spaces and objects that respond to people, sound, light, and data.',
    detail:
      'From a single responsive wall to a full room, we design and build installations that turn presence and environment into something you can see. Sensors, cameras, projection, and LED — prototyped in the studio and installed on site.',
    deliverables: ['Concept and spatial design', 'Sensor and camera systems', 'Projection mapping and LED', 'On-site install and handover'],
  },
  {
    id: 'realtime',
    title: 'Real-time visuals',
    summary: 'Generative and audio-reactive visuals for stages, events, and screens.',
    detail:
      'Live visual systems built in TouchDesigner that react to music, performers, audiences, or data feeds — designed to run reliably night after night.',
    deliverables: ['Show visuals and VJ systems', 'Audio- and data-reactive content', 'Operator-friendly control setups', 'Rendered loops for screens and social'],
  },
  {
    id: 'unreal',
    title: 'Unreal Engine & virtual production',
    summary: 'Real-time 3D environments, visualization, and virtual sets.',
    detail:
      'Environments and visualizations in Unreal Engine for virtual production, previs, and interactive experiences — including scientific and data-driven worlds that make abstract ideas tangible.',
    deliverables: ['Real-time environments', 'Data and science visualization', 'Virtual production setups', 'Interactive builds'],
  },
  {
    id: 'rnd',
    title: 'Prototyping & R&D',
    summary: 'Fast experiments to test an idea before you commit to building it.',
    detail:
      'Short, focused sprints to answer "could this work?" — a working proof of concept, a technical feasibility check, or a visual direction you can take to stakeholders.',
    deliverables: ['Proof-of-concept builds', 'Technical feasibility', 'Visual direction studies', 'Documentation for your team'],
  },
];

export const PROCESS = [
  { title: 'Discover', body: 'We start with the space, the audience, and the signal worth revealing.' },
  { title: 'Prototype', body: 'Quick studio experiments to find the right input, look, and interaction.' },
  { title: 'Build', body: 'Production-ready systems designed to run reliably, with your team in the loop.' },
  { title: 'Install & support', body: 'On-site setup, tuning, and handover — plus support while it runs.' },
];

export const AUDIENCES = [
  'Museums & cultural spaces',
  'Brands & experiential',
  'Live events & performance',
  'Architecture & public space',
  'Science & education',
];

export const TOOL_LABELS: Record<string, string> = {
  touchdesigner: 'TouchDesigner',
  unreal: 'Unreal Engine',
  other: 'Other',
};

export const url = (path = '') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

export const asset = (src?: string) =>
  src && src.startsWith('/') ? url(src) : src;

export const formatDate = (date: Date) =>
  date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });

const visible = ({ data }: { data: { draft: boolean } }) => import.meta.env.DEV || !data.draft;

export const getWork = async () =>
  (await getCollection('work', visible)).sort(
    (a, b) => a.data.order - b.data.order || b.data.year - a.data.year,
  );

export const getLab = async () =>
  (await getCollection('lab', visible)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

export type PageRoute = 'home' | 'about' | 'family' | 'news' | 'contact';

export interface TapeProduct {
  id: string;
  name: string;
  subtitle: string;
  bottomLabel: string;
  bottomAccentText?: string;
  ringColor: string;
  rimColor: string;
  pageBgColor: string;
  pageTextColor: string;
  topCurvedText: string;
  bottomCurvedText: string;
  rightCurvedText: string;
  tagline: string;
  description: string;
  useCases: string[];
  specs: {
    widths: string;
    length: string;
    backing: string;
    adhesion: string;
  };
  tapeStripColor: string;
}

export const TAPE_PRODUCTS: TapeProduct[] = [
  {
    id: 'cloth-tape',
    name: 'CLOTH TAPE',
    subtitle: 'NORMAL',
    bottomLabel: 'NORMAL',
    ringColor: '#676AF6',
    rimColor: '#9093FF',
    pageBgColor: '#989BFF',
    pageTextColor: '#0A0D4A',
    topCurvedText: 'MADE IN MALAYSIA',
    bottomCurvedText: 'Heavy-duty cloth tape built for tough repairs & heavy-duty tasks!',
    rightCurvedText: 'FULL LENGTH: 150 YARDS ± 5%',
    tagline: 'The quick fix that outlasts the thing it fixed.',
    description:
      'Woven polyethylene-coated cloth tape engineered for rugged binding, bundling, heavy repairs, and bookbinding without splitting or fraying.',
    useCases: ['Heavy Repairs', 'Book Binding', 'Cable Holding', 'Industrial Bundling'],
    specs: {
      widths: '24mm / 36mm / 48mm',
      length: '10 Yards – 150 Yards',
      backing: 'PE-Laminated Cotton Cloth',
      adhesion: 'High-Tack Natural Rubber',
    },
    tapeStripColor: '#676AF6',
  },
  {
    id: 'masking-tape',
    name: 'MASKING TAPE',
    subtitle: 'NORMAL',
    bottomLabel: 'NORMAL',
    ringColor: '#FFCE00',
    rimColor: '#FFE45E',
    pageBgColor: '#FFD633',
    pageTextColor: '#2B2000',
    topCurvedText: 'MADE IN MALAYSIA',
    bottomCurvedText: 'Perfect for everyday bundling, labelling & light paint work!',
    rightCurvedText: 'FULL LENGTH: 25 YARDS ± 5%',
    tagline: 'Always ready for school projects, quick labels, and weekend crafts.',
    description:
      'Easy-going crepe paper masking tape that tears cleanly by hand, holds steady on wood, glass, paper, and walls, and peels off clean with zero residue.',
    useCases: ['Labeling', 'Paint Work', 'Bundling', 'School Projects'],
    specs: {
      widths: '12mm / 18mm / 24mm / 36mm / 48mm',
      length: '20 Yards / 25 Yards',
      backing: 'Saturated Crepe Paper',
      adhesion: 'Clean-Release Rubber Adhesive',
    },
    tapeStripColor: '#EBD9A4',
  },
  {
    id: 'opp-normal',
    name: 'OPP TAPE',
    subtitle: 'NORMAL',
    bottomLabel: 'NORMAL',
    ringColor: '#3CD800',
    rimColor: '#76F242',
    pageBgColor: '#8CFF3B',
    pageTextColor: '#053B0C',
    topCurvedText: 'MADE IN MALAYSIA',
    bottomCurvedText: 'Perfect for sealing, packing & sticking with style!',
    rightCurvedText: 'FULL LENGTH: 100 YARDS ± 5%',
    tagline: 'From our hands to theirs, keeping every parcel intact.',
    description:
      'Crystal-clear and tan BOPP carton sealing tape with high tensile strength so boxes stay sealed through warehouse stacks, courier vans, and rainy days.',
    useCases: ['Carton Sealing', 'Moving Boxes', 'Parcel Dispatch', 'Storage'],
    specs: {
      widths: '48mm / 72mm',
      length: '40 Yards / 100 Yards',
      backing: 'Biaxially Oriented Polypropylene',
      adhesion: 'Water-Based Acrylic',
    },
    tapeStripColor: 'rgba(218, 240, 210, 0.72)',
  },
  {
    id: 'opp-low-noise',
    name: 'OPP TAPE',
    subtitle: 'LOW NOISE',
    bottomLabel: 'LOW NOISE',
    ringColor: '#D6F500',
    rimColor: '#E9FF59',
    pageBgColor: '#B8FF00',
    pageTextColor: '#053B0C',
    topCurvedText: 'MADE IN MALAYSIA',
    bottomCurvedText: 'Perfect for sealing, packing & sticking with style!',
    rightCurvedText: 'FULL LENGTH: 100 YARDS ± 5%',
    tagline: 'Quiet unwind. Heavy-duty grip. Zero midnight packing screech.',
    description:
      'Specially formulated silent-release BOPP packing tape for offices, fulfillment rooms, and late-night movers who need dependable strength without the loud rip.',
    useCases: ['Quiet Office Packing', 'E-Commerce Orders', 'Night Moves', 'Archiving'],
    specs: {
      widths: '48mm',
      length: '40 Yards / 100 Yards',
      backing: 'Silent-Release BOPP Film',
      adhesion: 'Low-Noise Acrylic Emulsion',
    },
    tapeStripColor: 'rgba(225, 245, 200, 0.72)',
  },
  {
    id: 'stationery-tape',
    name: 'STATIONERY TAPE',
    subtitle: 'CELLO · EASY-TEAR',
    bottomLabel: 'CELLO • EASY-TEAR',
    ringColor: '#E3572B',
    rimColor: '#F4845F',
    pageBgColor: '#F38B6A',
    pageTextColor: '#3B1105',
    topCurvedText: 'MADE IN MALAYSIA',
    bottomCurvedText: 'Made for light sealing, gift wrapping & everyday craft!',
    rightCurvedText: 'FULL LENGTH: 40 YARDS ± 5%',
    tagline: 'Crisp, clear, and always within reach on the study desk.',
    description:
      'Smooth-dispensing cellulose & clear stationery tape designed for neat gift wrapping, paper mending, envelope sealing, and everyday desk jobs.',
    useCases: ['Gift Wrapping', 'Paper Mending', 'Envelope Sealing', 'Desk Work'],
    specs: {
      widths: '12mm / 18mm / 24mm',
      length: '15 Yards / 40 Yards',
      backing: 'Transparent Cellulose / BOPP',
      adhesion: 'Instant Clear Tack',
    },
    tapeStripColor: 'rgba(255, 255, 255, 0.55)',
  },
  {
    id: 'double-sided-tissue',
    name: 'DOUBLE-SIDED TISSUE TAPE',
    subtitle: 'ARTS & CRAFT',
    bottomLabel: 'ARTS & CRAFT',
    ringColor: '#13B3E6',
    rimColor: '#5ED2F7',
    pageBgColor: '#56C8EE',
    pageTextColor: '#03293A',
    topCurvedText: 'MADE IN MALAYSIA',
    bottomCurvedText: 'Perfect for seamless bonding, paper craft & gift-wrapping magic!',
    rightCurvedText: 'FULL LENGTH: 15 YARDS ± 5%',
    tagline: 'Invisible hold for scrapbooks, card-making, and precision mounting.',
    description:
      'Thin, conformable non-woven tissue carrier coated on both sides with balanced tack adhesive and easy-peel release liner for spotless craft magic.',
    useCases: ['Scrapbooking', 'Gift Wrapping Magic', 'Photo Mounting', 'Paper Crafts'],
    specs: {
      widths: '6mm / 12mm / 18mm / 24mm',
      length: '10 Yards / 15 Yards',
      backing: 'Lightweight Non-Woven Tissue',
      adhesion: 'Dual-Side Acrylic Tack',
    },
    tapeStripColor: '#9CE3FA',
  },
];

export interface NewsArticle {
  id: string;
  category: 'NEWS' | 'EVENT';
  day: string;
  monthYear: string;
  title: string;
  excerpt: string;
  body: string[];
  highlight?: boolean;
  artType: 'bouquet' | 'mrdiy';
}

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'three-generations-face',
    category: 'NEWS',
    day: '09',
    monthYear: 'SEP 2026',
    title: 'Same Tape. Three Generations of It. Finally, A Face.',
    excerpt:
      'After decades of quietly holding Malaysian homes, classrooms, and parcels together, Sweet Tape unveils its refreshed look and digital playground.',
    body: [
      'For three generations, Sweet Tape has lived inside kitchen drawers, school pencil cases, hardware shelves, and bustling packing tables across Malaysia. You probably reached for a roll without even thinking twice.',
      'This year, SB Tape Group Sdn Bhd is giving our signature rolls a fresh, unmistakable personality—keeping the exact same Malaysian-made stickiness inside every core while bringing each tape’s character to life.',
      'From the quiet strength of OPP Low Noise to the clean-release charm of Masking Tape and the craft-table magic of Double-Sided Tissue Tape, meet the whole family and stick around for what rolls out next.',
    ],
    highlight: true,
    artType: 'bouquet',
  },
  {
    id: 'mr-diy-launch',
    category: 'EVENT',
    day: '07',
    monthYear: 'JUL 2026',
    title: 'Need to Stick? Get It Quick. SweetTape Is Now at MR. D.I.Y',
    excerpt:
      'Find your favorite Masking, Cloth, OPP, Stationery, and Double-Sided Tissue rolls at participating MR. D.I.Y outlets nationwide.',
    body: [
      'Last-minute school diorama at 9 PM? Moving day box emergency on a Sunday morning? Sweet Tape is now easier than ever to grab off the shelf at MR. D.I.Y stores across Malaysia.',
      'Look out for our bright lime, yellow, purple, coral, and sky-blue cores in the stationery and hardware aisles—full length, tested adhesion, zero shortcuts.',
      'Drop by your nearest store, pick your player, and tag your weekend DIY fixes with us.',
    ],
    highlight: false,
    artType: 'mrdiy',
  },
];

export const HERITAGE_MILESTONES = [
  {
    era: '1979 · GENERATION 01',
    title: 'The First Adhesive Roll',
    copy: 'Started as a family-run Malaysian tape converter focused on dependable everyday stationery and carton sealing rolls for local shops.',
  },
  {
    era: '1998 · GENERATION 02',
    title: 'Scaling Across Hardware & Craft',
    copy: 'Expanded production lines for crepe masking tape, heavy-duty cloth tape, and double-sided tissue adhesives under SB Tape Group.',
  },
  {
    era: '2026 · GENERATION 03',
    title: 'Stick By You, Reimagined',
    copy: 'Three generations later, our Malaysian-made rolls combine proven industrial tack with playful, human-centered design for every desk and home.',
  },
];

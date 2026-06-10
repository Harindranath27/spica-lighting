import { Product, Project } from "./types";

export const BRAND_NAME = "Spica Lighting";
export const TAGLINE = "Precision In Every Light";
export const FOUNDED = "2017";
export const GST_NUMBER = "33ADTFS4928B1ZX";
export const FOUNDER = "Senthil Kumar K S";
export const TEAM_SIZE = "2–3 people";

export const CONTACT_DETAILS = {
  primaryPhone: "+91 90920 69595",
  secondaryPhone: "+91 90920 49595",
  whatsapp: "+91 90920 49595",
  email: "spicalighting@gmail.com",
  address: "No. 39, B-7, L.I.C Colony, 1st Main Road, K.K Nagar, Trichy – 620021, Tamil Nadu",
  workingHours: "Monday – Saturday, 9:00 AM – 6:00 PM",
  whatsappLink: "https://wa.me/919092069595",
  linkedin: "https://linkedin.com/company/spica-lighting"
};

export const BUSINESS_STATS = [
  {
    label: "Years in Business",
    value: "9+ Years",
    sub: "Est. 2017"
  },
  {
    label: "Projects Supplied",
    value: "200+ Projects",
    sub: "Across Tamil Nadu"
  },
  {
    label: "Statewide Presence",
    value: "Tamil Nadu",
    sub: "Trichy, Chennai, Coimbatore & districts"
  },
  {
    label: "Authorized Brands",
    value: "4 Brands",
    sub: "Wipro, North West, K-Lite & Nexus"
  }
];

export const TRUST_BADGES = [
  { term: "IIM Trichy", label: "Indian Institute of Management", role: "Cricket Stadium Floodlighting" },
  { term: "NIT Trichy", label: "National Institute of Technology", role: "Campus & Facility Lighting" },
  { term: "Silverline Hospital", label: "Multi-Storey Healthcare Facility", role: "Exterior & Interior Facade" },
  {
  term: "Commercial Projects",
  label: "Corporate & Institutional Supply",
  role: "Lighting & Electrical Solutions"
}
];

  export const BRANDS = [
  {
    id: "wipro",
    
  },
  {
    id: "northwest",
   
  },
  {
    id: "klite",
    
  },
  {
    id: "nexus",
   
  }
];
export const CATEGORIES_NAV = [
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "industrial", label: "Industrial" },
  { id: "outdoor", label: "Outdoor" },
  { id: "architectural", label: "Architectural" },
  { id: "switches", label: "Switches" },
];
export const PRODUCTS: Product[] = [
{
  brand: "wipro",
  name: "COB Downlights",
  category: "residential",
  image: "/products/cob-downlight.png",
  wattage: "3W–24W",
  cct: "3000K / 4000K / 6500K",
  feature: "Premium COB downlights for residential and commercial interiors.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Glitz NXG Downlights",
  category: "residential" ,
  image: "/products/glitz-nxg.png",
  wattage: "3W–24W",
  cct: "3000K",
  feature: "Premium tiltable COB downlights.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Morphor Retrofit Downlights",
  category: "residential" ,
  image: "/products/morphor.png",
  wattage: "7W–18W",
  cct: "3000K / 4000K / 6500K",
  feature: "Retrofit lighting solution with multiple housing options.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Atom LED Spotlights",
  category: "residential" ,
  image: "/products/atom-spotlight.png",
  wattage: "1W–3W",
  cct: "3000K / 4000K / 6500K",
  feature: "Compact spotlight for highlighting applications.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Round Panel Lights",
  category: "residential" ,
  image: "/products/round-panel.png",
  wattage: "6W–24W",
  cct: "6500K",
  feature: "Slim LED panel lighting.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Square Panel Lights",
  category: "residential",
  image: "/products/square-panel.png",
  wattage: "6W–24W",
  cct: "6500K",
  feature: "Modern recessed panel lights.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Smart Panels",
  category: "residential",
  image: "/products/smart-panel.png",
  wattage: "6W–15W",
  cct: "2700K–6500K",
  feature: "App-controlled smart lighting panels.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Linea Pro",
  category: "commercial" ,
  image: "/products/linea-pro.png",
  wattage: "20W–60W",
  cct: "4000K / 5700K",
  feature: "Slim profile linear lighting system.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Linea X Suspended",
  category: "commercial",
  image: "/products/linea-x-suspended.png",
  wattage: "20W–40W",
  cct: "4000K / 5700K",
  feature: "Suspended linear office lighting.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Linea X Surface",
  category: "commercial",
  image: "/products/linea-x-surface.png",
  wattage: "20W–40W",
  cct: "4000K / 5700K",
  feature: "Surface mounted linear lighting.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Gleamline",
  category: "commercial",
  image: "/products/gleamline.png",
  wattage: "25W–60W",
  cct: "4000K / 5700K",
  feature: "Premium suspended linear luminaire.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Llano",
  category: "commercial",
  image: "/products/llano.png",
  wattage: "10W–60W",
  cct: "5700K",
  feature: "Designer suspended lighting solution.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Lino",
  category: "commercial",
  image: "/products/lino.png",
  wattage: "20W–60W",
  cct: "5700K",
  feature: "High-performance office linear lighting.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Skymesh",
  category: "commercial",
  image: "/products/skymesh.png",
  wattage: "30W–60W",
  cct: "5700K",
  feature: "Suspended modular ceiling lighting.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Skyscale",
  category: "commercial",
  image: "/products/skyscale.png",
  wattage: "80W",
  cct: "5700K",
  feature: "Large-format immersive ceiling light.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "LED Bulbs",
  category: "residential",
  image: "/products/led-bulb.png",
  wattage: "5W–20W",
  cct: "3000K / 6500K",
  feature: "Energy efficient home lighting.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Smart Bulbs",
  category: "residential",
  image: "/products/smart-bulb.png",
  wattage: "9W–12.5W",
  cct: "2700K–6500K",
  feature: "WiFi-enabled RGB smart bulbs.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Smart Battens",
  category: "residential",
  image: "/products/smart-batten.png",
  wattage: "20W–24W",
  cct: "2700K–6500K",
  feature: "App-controlled smart battens.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Smart Trimless COB",
  category: "residential",
  image: "/products/smart-trimless-cob.png",
  wattage: "10W–15W",
  cct: "2700K–6500K",
  feature: "Premium smart COB lighting.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Smart Module COB",
  category: "residential",
  image: "/products/smart-module-cob.png",
  wattage: "10W–15W",
  cct: "2700K–6500K",
  feature: "Retail and hospitality smart spotlight.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Flood Lights",
  category: "outdoor",
  image: "/products/flood-light.png",
  wattage: "Various",
  cct: "6500K",
  feature: "Outdoor flood illumination.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Street Lights",
  category: "outdoor",
  image: "/products/street-light.png",
  wattage: "Various",
  cct: "5700K",
  feature: "Road and infrastructure lighting.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Solar Street Lights",
  category: "outdoor",
  image: "/products/solar-street-light.png",
  wattage: "Various",
  cct: "5700K",
  feature: "Solar-powered outdoor lighting.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Landscape Lights",
  category: "outdoor",
  image: "/products/landscape-light.png",
  wattage: "Various",
  cct: "3000K / 4000K",
  feature: "Garden and landscape lighting.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Facade Lights",
  category: "outdoor",
  image: "/products/facade-light.png",
  wattage: "Various",
  cct: "3000K / 4000K",
  feature: "Architectural building illumination.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Sports Lighting",
  category: "outdoor",
  image: "/products/sports-light.png",
  wattage: "Various",
  cct: "5700K",
  feature: "Stadium and sports facility lighting.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "High Bay Lights",
  category: "industrial",
  image: "/products/high-bay.png",
  wattage: "Various",
  cct: "5700K",
  feature: "Warehouse and industrial lighting.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Cleanroom Lights",
  category: "industrial",
  image: "/products/cleanroom-light.png",
  wattage: "Various",
  cct: "5700K",
  feature: "Healthcare and pharmaceutical facilities.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Tunnel Lights",
  category: "industrial",
  image: "/products/tunnel-light.png",
  wattage: "Various",
  cct: "5700K",
  feature: "Tunnel and roadway applications.",
  mrpRange: "Enquire"
},
{
  brand: "wipro" ,
  name: "Acoustic Lighting",
  category: "commercial",
  image: "/products/acoustic-light.png",
  wattage: "Various",
  cct: "4000K / 5700K",
  feature: "Lighting integrated with acoustic panels.",
  mrpRange: "Enquire"
},
{
  brand: "klite",
  name: "Wall Cylin",
  category: "facade",
  image: "/products/Wall Cylin.png",
  wattage: "Various",
  cct: "Various",
  feature: "Hybrid optics wall luminaire creating dramatic up and down facade illumination.",
  mrpRange: "Enquire"
},
{
  brand: "klite",
  name: "Wall Quad",
  category: "facade",
  image: "/products/Wall Quad.png",
  wattage: "Various",
  cct: "Various",
  feature: "Architectural square-profile wall luminaire for modern commercial facades.",
  mrpRange: "Enquire"
},
{
  brand: "klite",
  name: "Luna-7",
  category: "landscape",
  image: "/products/Luna-7.png",
  wattage: "50W / 100W",
  cct: "Various",
  feature: "Premium curved post-top luminaire for campuses, parks and landscapes.",
  mrpRange: "Enquire"
},
{
  brand: "klite",
  name: "Keshav",
  category: "landscape",
  image: "/products/Keshav.png",
  wattage: "Various",
  cct: "Various",
  feature: "V-shaped post-top luminaire with symmetrical and asymmetrical light distribution.",
  mrpRange: "Enquire"
},
{
  brand: "klite",
  name: "Dixon Pro",
  category: "landscape",
  image: "/products/Dixon Pro.png",
  wattage: "Various",
  cct: "Various",
  feature: "Minimalist architectural post-top luminaire.",
  mrpRange: "Enquire"
},
{
  brand: "klite",
  name: "Reflecto Dixon Mega",
  category: "landscape",
  image: "/products/Reflecto Dixon Mega.png",
  wattage: "50W",
  cct: "Various",
  feature: "Heavy-duty architectural luminaire for public squares and urban projects.",
  mrpRange: "Enquire"
},
{
  brand: "klite",
  name: "Navira",
  category: "landscape",
  image: "/products/Navira.png",
  wattage: "Various",
  cct: "Various",
  feature: "Angular architectural lighting pole with a bold contemporary design.",
  mrpRange: "Enquire"
},
{
  brand: "klite",
  name: "Cyrilla Round",
  category: "architectural",
  image: "/products/Cyrilla Round.png",
  wattage: "Various",
  cct: "Various",
  feature: "Classic lantern-style post-top luminaire for heritage projects.",
  mrpRange: "Enquire"
},
{
  brand: "klite",
  name: "Pelican Fort",
  category: "architectural",
  image: "/products/Pelican Fort.png",
  wattage: "Various",
  cct: "Various",
  feature: "Decorative heritage luminaire ideal for luxury and classical developments.",
  mrpRange: "Enquire"
},
{
  brand: "klite",
  name: "Avenue",
  category: "architectural",
  image: "/products/Avenue.png",
  wattage: "Various",
  cct: "Various",
  feature: "Decorative street luminaire designed for premium urban environments.",
  mrpRange: "Enquire"
},
{
  brand: "klite",
  name: "Luna Street",
  category: "street",
  image: "/products/Luna Street.png",
  wattage: "Various",
  cct: "Various",
  feature: "Asymmetrical street lighting solution delivering high efficiency and reduced glare.",
  mrpRange: "Enquire"
},
{
  brand: "klite",
  name: "Ray",
  category: "street",
  image: "/products/Ray.png",
  wattage: "Up to 240W",
  cct: "Various",
  feature: "Heavy-duty roadway luminaire with Type III optical distribution.",
  mrpRange: "Enquire"
},
{
  brand: "klite",
  name: "Zimba",
  category: "street",
  image: "/products/Zimba.png",
  wattage: "50W / 100W",
  cct: "Various",
  feature: "Robust street lighting solution for roads and perimeter lighting.",
  mrpRange: "Enquire"
},
{
  brand: "klite",
  name: "Seagull Mega",
  category: "street",
  image: "/products/Seagull Mega.png",
  wattage: "Various",
  cct: "Various",
  feature: "Iconic dual-fixture luminaire inspired by a seagull in flight.",
  mrpRange: "Enquire"
},
{
  brand: "klite",
  name: "Beta 150x100 Series",
  category: "architectural",
  image: "/products/Beta 150x100 Series.png",
  wattage: "Various",
  cct: "Various",
  feature: "Customizable architectural pole system with multiple arm configurations.",
  mrpRange: "Enquire"
} ,
{
  brand: "northwest",
  name: "Artisa",
  category: "switches",
  image: "/products/Artisa.png",
  wattage: "-",
  cct: "-",
  feature: "Luxury modular switch range with premium designer finishes and anti-bacterial touch points.",
  mrpRange: "Enquire"
},
{
  brand: "northwest",
  name: "Artisa Flat",
  category: "switches",
  image: "/products/Artisa Flat.png",
  wattage: "-",
  cct: "-",
  feature: "Ultra-premium flat profile modular switch series for luxury interiors.",
  mrpRange: "Enquire"
},
{
  brand: "northwest",
  name: "Nowa",
  category: "switches",
  image: "/products/Nowa.png",
  wattage: "-",
  cct: "-",
  feature: "Ultra-slim 6.5mm modular switch range with premium gloss finish.",
  mrpRange: "Enquire"
},
{
  brand: "northwest",
  name: "Stylus+",
  category: "switches",
  image: "/products/Stylus+.png",
  wattage: "-",
  cct: "-",
  feature: "Dual-fitment modular switch range designed for fast and secure installations.",
  mrpRange: "Enquire"
},
{
  brand: "northwest",
  name: "Convex",
  category: "switches",
  image: "/products/Convex.png",
  wattage: "-",
  cct: "-",
  feature: "Heavy-duty FR-grade modular switch range built for demanding environments.",
  mrpRange: "Enquire"
},
{
  brand: "northwest",
  name: "Venia",
  category: "switches",
  image: "/products/Venia.png",
  wattage: "-",
  cct: "-",
  feature: "Affordable premium modular switch range with sleek curved plate design.",
  mrpRange: "Enquire"
},
{
  brand: "northwest",
  name: "Fianza MCB",
  category: "switches",
  image: "/products/Fianza MCB.png",
  wattage: "-",
  cct: "-",
  feature: "Miniature Circuit Breakers engineered for circuit protection and reliability.",
  mrpRange: "Enquire"
},
{
  brand: "northwest",
  name: "Avancée Distribution Boards",
  category: "switches",
  image: "/products/Avancée Distribution Boards.png",
  wattage: "-",
  cct: "-",
  feature: "Final distribution boards designed for residential and commercial power management.",
  mrpRange: "Enquire"
} ,
{
  brand: "nexus",
  category: "architectural",
  name: "2035-1 Pendant Lamp",
  feature: "Metal + Onyx Marble",
  wattage: "LED 12W",
  cct: "Antique Brass",
  image: "/products/nexus-2035-1.png"
},
{
  brand: "nexus",
  category: "architectural",
  name: "2039-H Pendant Lamp",
  feature: "Metal + Onyx Marble",
  wattage: "1xE14",
  cct: "Antique Brass",
  image: "/products/nexus-2039-h.png"
},
{
  brand: "nexus",
  category: "architectural",
  name: "2026-RD Marble Pendant",
  feature: "Metal + Onyx Marble",
  wattage: "1xE14",
  cct: "Antique Brass",
  image: "/products/nexus-2026-rd.png"
},
{
  brand: "nexus",
  category: "architectural",
  name: "2026-1SQ Marble Pendant",
  feature: "Metal + Onyx Marble",
  wattage: "1xE14",
  cct: "Antique Brass",
  image: "/products/nexus-2026-1sq.png"
},
{
  brand: "nexus",
  category: "architectural",
  name: "2031-1 Pendant",
  feature: "Metal + Onyx Marble",
  wattage: "1xG9",
  cct: "Antique Brass",
  image: "/products/nexus-2031-1.png"
},
{
  brand: "nexus",
  category: "architectural",
  name: "2041-H Pendant",
  feature: "Metal + Onyx Marble",
  wattage: "1xE27",
  cct: "Antique Brass",
  image: "/products/nexus-2041-h.png"
},
{
  brand: "nexus",
  category: "architectural",
  name: "K11 Designer Pendant",
  feature: "Premium Metal Finish",
  wattage: "1xGU10",
  cct: "Antique Brass",
  image: "/products/nexus-k11.png"
},
{
  brand: "nexus",
  category: "architectural",
  name: "K11-M Pendant",
  feature: "Metal Finish",
  wattage: "1xGU10",
  cct: "Black / White",
  image: "/products/nexus-k11m.png"
},
{
  brand: "nexus",
  category: "architectural",
  name: "K11-CC Pendant",
  feature: "Contemporary Pendant",
  wattage: "1xGU10",
  cct: "Black",
  image: "/products/nexus-k11cc.png"
},
{
  brand: "nexus",
  category: "architectural",
  name: "C1212 Pendant",
  feature: "Metal + Acrylic",
  wattage: "LED 12W",
  cct: "Antique Brass + Black",
  image: "/products/nexus-c1212.png"
},
{
  brand: "nexus",
  category: "architectural",
  name: "C1315 Pendant",
  feature: "Metal + Acrylic",
  wattage: "LED 15W",
  cct: "Antique Brass + Black",
  image: "/products/nexus-c1315.png"
},
{
  brand: "nexus",
  category: "architectural",
  name: "C1722 Pendant",
  feature: "Metal + Acrylic",
  wattage: "LED 22W",
  cct: "Antique Brass + Black",
  image: "/products/nexus-c1722.png"
},
{
  brand: "nexus",
  category: "architectural",
  name: "C1216-1 Pendant",
  feature: "Metal + Acrylic",
  wattage: "LED 12W",
  cct: "Brushed Brass",
  image: "/products/nexus-c1216.png"
},
{
  brand: "nexus",
  category: "architectural",
  name: "51501-PA Pendant",
  feature: "Metal + Acrylic",
  wattage: "LED 9W",
  cct: "Dull Gold",
  image: "/products/nexus-51501pa.png"
},
{
  brand: "nexus",
  category: "architectural",
  name: "51501-PC Pendant",
  feature: "Metal + Acrylic",
  wattage: "LED 9W",
  cct: "Dull Gold",
  image: "/products/nexus-51501pc.png"
}
];


export const PROJECTS: Project[] = [
  {
    name: "IIM Trichy",
    type: "Institutional",
    scope: "Institutional Campus",
    productsUsed: "Project Reference",
    imageIndex: 6,
    city: "Trichy"
  },
  {
    name: "NIT Trichy",
    type: "Institutional",
    scope: "Institutional Campus",
    productsUsed: "Project Reference",
    imageIndex: 1,
    city: "Trichy"
  },
  {
    name: "Silverline Cancer & Multispecialty Hospital",
    type: "Healthcare",
    scope: "Healthcare Facility",
    productsUsed: "Project Reference",
    imageIndex: 8,
    city: "Manachanallur, Trichy"
  },
  {
    name: "GVN Hospitals Pvt Ltd",
    type: "Healthcare",
    scope: "Healthcare Facility",
    productsUsed: "Project Reference",
    imageIndex: 4,
    city: "Trichy"
  },
  {
    name: "Athma Hospital",
    type: "Healthcare",
    scope: "Healthcare Facility",
    productsUsed: "Project Reference",
    imageIndex: 4,
    city: "Trichy"
  },
  {
    name: "Dr. Kannan's Gastromed Hospital",
    type: "Healthcare",
    scope: "Healthcare Facility",
    productsUsed: "Project Reference",
    imageIndex: 5,
    city: "Trichy"
  },
  {
    name: "Meenakshi Hospital",
    type: "Healthcare",
    scope: "Healthcare Facility",
    productsUsed: "Project Reference",
    imageIndex: 8,
    city: "Thanjavur"
  },
  {
    name: "Hotel Sri Akshayam",
    type: "Hospitality",
    scope: "Hospitality Project",
    productsUsed: "Project Reference",
    imageIndex: 3,
    city: "Kumbakonam"
  },
  {
    name: "Hotel Sai Karthik",
    type: "Hospitality",
    scope: "Hospitality Project",
    productsUsed: "Project Reference",
    imageIndex: 7,
    city: "Thiruverumbur, Trichy"
  },
  {
    name: "Hotel Ariyas",
    type: "Hospitality",
    scope: "Hospitality Project",
    productsUsed: "Project Reference",
    imageIndex: 3,
    city: "Mannargudi"
  },
  {
    name: "Hotel Anand",
    type: "Hospitality",
    scope: "Hospitality Project",
    productsUsed: "Project Reference",
    imageIndex: 3,
    city: "Trichy"
  },
  {
    name: "Vijey Hotels",
    type: "Hospitality",
    scope: "Hospitality Project",
    productsUsed: "Project Reference",
    imageIndex: 3,
    city: "Trichy"
  },
  {
    name: "Krishna Jewellery",
    type: "Commercial",
    scope: "Commercial Project",
    productsUsed: "Project Reference",
    imageIndex: 5,
    city: "Madurai"
  },
  {
    name: "Morais Developers Pvt Ltd",
    type: "Commercial",
    scope: "Commercial Project",
    productsUsed: "Project Reference",
    imageIndex: 5,
    city: "Trichy"
  },
  {
    name: "MAPL India Pvt Ltd",
    type: "Commercial",
    scope: "Commercial Project",
    productsUsed: "Project Reference",
    imageIndex: 5,
    city: "Coimbatore"
  },
  {
    name: "DS Fire Systems Pvt Ltd",
    type: "Commercial",
    scope: "Commercial Project",
    productsUsed: "Project Reference",
    imageIndex: 5,
    city: "Trichy"
  },
  {
    name: "360 Interior Design Studio",
    type: "Commercial",
    scope: "Commercial Project",
    productsUsed: "Project Reference",
    imageIndex: 5,
    city: "Trichy"
  },
  {
    name: "R.G Residency",
    type: "Commercial",
    scope: "Commercial Project",
    productsUsed: "Project Reference",
    imageIndex: 5,
    city: "Srirangam"
  },
  {
    name: "Tamil Mahal",
    type: "Marriage Hall",
    scope: "Marriage Hall",
    productsUsed: "Project Reference",
    imageIndex: 1,
    city: "Manachanallur, Trichy"
  },
  {
    name: "Malathi Mahal",
    type: "Marriage Hall",
    scope: "Marriage Hall",
    productsUsed: "Project Reference",
    imageIndex: 1,
    city: "Trichy"
  },
  {
    name: "SNS Mahal",
    type: "Marriage Hall",
    scope: "Marriage Hall",
    productsUsed: "Project Reference",
    imageIndex: 1,
    city: "Trichy"
  }
];
export const FREQUENT_QUESTIONS = [
{
q: "Are all your products genuine and branded?",
a: "Yes. Spica Lighting supplies genuine products from authorized brands including Wipro Lighting, Wipro North-West, K-Lite, and Nexus. We focus on quality, reliability, and long-term performance."
},
{
q: "Do you provide lighting solutions for homes and commercial projects?",
a: "Yes. We support residential, retail, office, hospitality, industrial, healthcare, and institutional projects. Our team can assist with product selection and lighting recommendations based on your requirements."
},
{
q: "Do you supply materials outside Trichy?",
a: "Yes. We supply lighting and electrical products across Tamil Nadu and support projects in multiple cities and districts through our distribution network."
},
{
q: "How can I request a quotation?",
a: "You can submit an enquiry through our website, contact us by phone, or reach us on WhatsApp. Share your project details and our team will respond with a customized quotation."
},
{
q: "Can you help me choose the right lighting for my space?",
a: "Yes. We can recommend suitable lighting solutions based on room dimensions, ceiling height, application, ambiance requirements, and energy efficiency goals."
},
{
q: "What types of projects has Spica Lighting completed?",
a: "Our supplied projects include institutions, hospitals, hotels, commercial buildings, and industrial facilities, including IIM Trichy, NIT Trichy, Silverline Hospital, GVN Hospitals, Hotel Sri Akshayam, and other notable developments."
}
];


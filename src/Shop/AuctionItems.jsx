import natGeoImg from "../assets/nat-geo.jpg";
import portalLampImg from "../assets/entretemps-lamp.jpg";
import receptionLampImg from "../assets/stack-lamp-on.jpg";
import chainPileLamp from "../assets/chain-pile.jpg";
import standingLampImg from "../assets/standing-lamp.jpeg";
import chainPendantLampImg from "../assets/chainmail-lamp.jpeg";
import hatLamp from "../assets/creature-lamp.jpg";
import orbLampImg from "../assets/orb-portal-lamp.jpg";
import greenPlinthImg from "../assets/green-plinth.jpg";
import coralStoolImg from "../assets/coral-stool.jpeg";
import blueStoolImg from "../assets/stool-chips.jpg";
import togoImg from "../assets/togo.jpeg";
import vesselImg from "../assets/vessel.jpg";
import chessImg from "../assets/chess.jpeg";
import chainmailImg from "../assets/chainmail.jpeg";
import obeliskImg from "../assets/obelisk.jpeg";
import phoneImg from "../assets/phone.jpeg";
import keysImg from "../assets/keys.jpg";
import pillowImg from "../assets/soft-rock.jpg";
import floral from "../assets/floral.jpeg";
import ashTrayImg from "../assets/cigarettes.jpg";
import tvGuideImg from "../assets/tv-guide.jpg";
import glassCandy from "../assets/glass-candy.jpg";
import chipBagImg from "../assets/origional.jpg";
import chipImg from "../assets/single-chip.jpg";
import goldChipImg from "../assets/gold-chip.jpg";
import porcelainCigImg from "../assets/porcelain-cig.jpg";
import beadCigAImg from "../assets/beaded-cig-A.jpg";
import beadCigBImg from "../assets/beaded-cig-B.jpg";
import beadCigCImg from "../assets/beaded-cig-C.jpg";
import beadCigDImg from "../assets/beaded-cig-D.jpg";
import beadCigEImg from "../assets/beaded-cig-E.jpg";
import beadCigFImg from "../assets/beaded-cig-F.jpg";
import glassCigAImg from "../assets/glass-cig-A.jpg";
import glassCigBImg from "../assets/glass-cig-B.jpg";
import gayCavalierImg from "../assets/gay-cavalier.jpg";
import appleImg from "../assets/apple.jpg";
import bananaImg from "../assets/banane.jpg";
import dixieCrunchImg from "../assets/dixie-crunch.jpg";
import dixieSetImg from "../assets/dixie-set.jpeg";
import lanyardImg from "../assets/lanyard.jpg";

const blankie = "Etty Anderson";
const murph = "Marie Foxall";
const buddies = "Etty Anderson / Marie Foxall";

const receptionLamp = {
  currentBid: 380,
  incrementValue: 10,
  itemId: "reception-lamp",
  itemName: "Reception Lamp",
  description: "Thrown porcelain, stain, lucite",
  artist: buddies,
  imgSrc: receptionLampImg,
  altText:
    "Thrown porcelain lamp with stacked bubble base, ceramic and lucite shade",
};

const portalLamp = {
  currentBid: 550,
  incrementValue: 10,
  itemId: "portal-lamp",
  itemName: "Portal Lamp",
  description: 'Steel wire, paper, glass, 72" tall',
  artist: murph,

  imgSrc: portalLampImg,
  altText:
    "Paper mache 6-ft tall portal lamp with blue, lime green, coral and lavender paint.",
};

const chainPile = {
  currentBid: 470,
  incrementValue: 10,
  itemId: "chain-pile-lamp",
  itemName: "Pile of Chain Lamp",
  description: "Tinted porcelain, thrown lamp base",
  artist: blankie,
  imgSrc: chainPileLamp,
  altText: "Pink chainmail porcelain table lamp",
};

const standLamp = {
  currentBid: 700,
  incrementValue: 25,
  itemId: "standing-lamp",
  itemName: "Standing Lamp",
  description: 'Thrown porcelain, poured porcelain shade, 55" tall',
  artist: blankie,
  imgSrc: standingLampImg,
  altText: "Tall thrown porcelain lamp with blue, pink and yellow accents",
};

const chainPendantLamp = {
  currentBid: 410,
  incrementValue: 10,
  itemId: "chain-pendant-lamp",
  itemName: "Chain Pendant Lamp",
  description: "Porcelain, stain, glaze, lucite",
  artist: buddies,
  imgSrc: chainPendantLampImg,
  altText:
    "Porcelain pendant lamp with glazed stack of ceramic pieces on top and ceramic/lucite shade",
};

const hatsLamp = {
  currentBid: 400,
  incrementValue: 10,
  itemId: "hats-lamp",
  itemName: "Hats Lamp",
  description: "Porcelain, stain, glaze, wicker, white oak",
  artist: buddies,
  imgSrc: hatLamp,
  altText:
    "Porcelain lamp base with stack of ceramic pieces, turned wood and long stitched purple wicker shade",
};

const orbLamp = {
  currentBid: 280,
  incrementValue: 10,
  itemId: "orb-lamp",
  itemName: "Orb Portal Lamp",
  description: "Steel, paper, plastic",
  artist: murph,
  imgSrc: orbLampImg,
  altText:
    "Organic spherical white paper mache lamp with recycled plastic film",
};

const greenPlinth = {
  currentBid: 400,
  incrementValue: 10,
  itemId: "green-plinth",
  itemName: "Green Plinth",
  description: 'Wheel thrown ceramic plinth/table 23" tall',
  artist: blankie,
  imgSrc: greenPlinthImg,
  altText: "Two foot tall green/natural striped ceramic plinth table",
};

const blueStool = {
  currentBid: 400,
  incrementValue: 10,
  itemId: "blue-stool",
  itemName: "Blue Stool",
  description: 'Wheel thrown ceramic stool/table 19.5" tall',
  artist: blankie,
  imgSrc: blueStoolImg,
  altText: "Cobalt blue round stool table with rounded legs",
};

const coralStool = {
  currentBid: 400,
  incrementValue: 10,
  itemId: "coral-stool",
  itemName: "Coral Stool",
  description: 'Wheel thrown ceramic stool/table 20" tall',
  artist: blankie,
  imgSrc: coralStoolImg,
  altText: "Coral cloud-shaped stool table with rounded legs",
};

const toGo = {
  currentBid: 210,
  incrementValue: 5,
  itemId: "togo-cup",
  itemName: "To Go",
  description: "Wheel thrown porcelain, lucite",
  artist: buddies,
  imgSrc: togoImg,
  altText: "Peach glazed porcelain to-go cup with lucite straw",
};

const vesselA = {
  currentBid: 480,
  incrementValue: 10,
  itemId: "vessel-A",
  itemName: "Vessel A",
  description: "Nerikomi thrown porcelain vessel",
  artist: blankie,
  imgSrc: vesselImg,
  altText: "Coral and blue stacked porcelain vessel with chains",
};

const chess = {
  currentBid: 400,
  incrementValue: 10,
  itemId: "chess",
  itemName: "Chess",
  description: "Nerikomi & thrown coloured porcelain",
  artist: blankie,
  imgSrc: chessImg,
  altText: "Coral and blue nerikomi chess board and pieces",
};

const chainmail = {
  currentBid: 80,
  incrementValue: 5,
  itemId: "chainmail",
  itemName: "Chainmail",
  description: "Porcelain & lucite",
  artist: buddies,
  imgSrc: chainmailImg,
  altText: "Pink porcelain and lucite chainmail",
};

const obelisk = {
  currentBid: 150,
  incrementValue: 5,
  itemId: "obelisk",
  itemName: "Obelisk",
  description: "Lucite",
  artist: murph,
  imgSrc: obeliskImg,
  altText: "Squiggly lucite sculpture",
};

const officePhone = {
  currentBid: 180,
  incrementValue: 5,
  itemId: "receptionist",
  itemName: "The Receptionist's Phone",
  description: "Ceramic, acetate, paper mache",
  artist: buddies,
  imgSrc: phoneImg,
  altText: "Ceramic phone with acetate buttons, and paper mache handset",
};

const keys = {
  currentBid: 150,
  incrementValue: 5,
  itemId: "keys",
  itemName: "Keys Please",
  description: "Paper mache, silver foil, douglas fir & lucite",
  artist: murph,
  imgSrc: keysImg,
  altText:
    "Two oversized keys, one in paper mache and one in wood, joined by a lucite chain",
};

const pillow = {
  currentBid: 50,
  incrementValue: 5,
  itemId: "pillow",
  itemName: "Soft Rock Pillow",
  description: "Cotton & batting",
  artist: murph,
  imgSrc: pillowImg,
  altText: "Abstract brightly coloured quilted pillow",
};

const painting = {
  currentBid: 150,
  incrementValue: 5,
  itemId: "floral-painting",
  itemName: "Waiting Room Floral",
  description: "Acrylic",
  artist: blankie,
  imgSrc: floral,
  altText: "Brightly coloured painting of a vase of flowers",
};

const porcelainCig = {
  currentBid: 120,
  incrementValue: 5,
  itemId: "porcelain-cig",
  itemName: "Porcelain Giant Ciggy",
  description: "Coloured porcelain",
  artist: blankie,
  imgSrc: porcelainCigImg,
  altText: "Oversized porcelain cigarette sculpture",
};

const beadedCigA = {
  currentBid: 50,
  incrementValue: 5,
  itemId: "beaded-cig-a",
  itemName: "Beaded Ciggy A",
  description: "lucite, glass beads",
  artist: murph,
  imgSrc: beadCigAImg,
  altText: "Cigarette made of glass beads",
};
const beadedCigB = {
  currentBid: 60,
  incrementValue: 5,
  itemId: "beaded-cig-b",
  itemName: "Beaded Ciggy B",
  description: "lucite, glass beads",
  artist: murph,
  imgSrc: beadCigBImg,
  altText: "Cigarette made of glass beads",
};
const beadedCigC = {
  currentBid: 50,
  incrementValue: 5,
  itemId: "beaded-cig-c",
  itemName: "Beaded Ciggy C",
  description: "lucite, glass beads",
  artist: murph,
  imgSrc: beadCigCImg,
  altText: "Cigarette made of glass beads",
};
const beadedCigD = {
  currentBid: 50,
  incrementValue: 5,
  itemId: "beaded-cig-d",
  itemName: "Beaded Ciggy D",
  description: "lucite, glass beads",
  artist: murph,
  imgSrc: beadCigDImg,
  altText: "Cigarette made of glass beads",
};
const beadedCigE = {
  currentBid: 50,
  incrementValue: 5,
  itemId: "beaded-cig-e",
  itemName: "Beaded Ciggy E",
  description: "lucite, glass beads",
  artist: murph,
  imgSrc: beadCigEImg,
  altText: "Cigarette made of glass beads",
};

const beadedCigF = {
  currentBid: 60,
  incrementValue: 5,
  itemId: "beaded-cig-f",
  itemName: "Beaded Ciggy F",
  description: "lucite, glass beads",
  artist: murph,
  imgSrc: beadCigFImg,
  altText: "Cigarette made of glass beads",
};

const glassCigA = {
  currentBid: 75,
  incrementValue: 5,
  itemId: "glass-cig-a-marie",
  itemName: "Glass Ciggy A",
  description: "Coloured glass",
  artist: murph,
  imgSrc: glassCigAImg,
  altText: "Glass cigarette sculpture",
};

const glassCigB = {
  currentBid: 60,
  incrementValue: 5,
  itemId: "glass-cig-b-etty",
  itemName: "Glass Ciggy B",
  description: "Coloured glass",
  artist: blankie,
  imgSrc: glassCigBImg,
  altText: "Glass cigarette sculpture",
};

const ashTray = {
  currentBid: 150,
  incrementValue: 10,
  itemId: "ashtray",
  itemName: "Silver Ashtray",
  description: "Porcelain, glaze, white gold  lustre",
  artist: blankie,
  imgSrc: ashTrayImg,
  altText: "Silver porcelain ashtray",
};

const tvGuide = {
  currentBid: 200,
  incrementValue: 10,
  itemId: "tv-guide",
  itemName: "TV Guide",
  description: "Ceramic, glaze, white gold lustre",
  artist: blankie,
  imgSrc: tvGuideImg,
  altText: "Ceramic replica of 1999 TV Guide with Mulder & Scully",
};

const natGeo = {
  currentBid: 275,
  incrementValue: 10,
  itemId: "nat-geo",
  itemName: "National Geographic",
  description: "Ceramic, glaze, white gold lustre",
  artist: blankie,
  imgSrc: natGeoImg,
  altText:
    "Ceramic recreation of National Geographic magazine with astronaut on the cover",
};

const gayCavalier = {
  currentBid: 250,
  incrementValue: 10,
  itemId: "gay-cav",
  itemName: "Gay Cavalier",
  description: "Ceramic, glaze, gold lustre",
  artist: blankie,
  imgSrc: gayCavalierImg,
  altText: "Ceramic recreation of Gay Cavalier romance novel",
};

const apple = {
  currentBid: 80,
  incrementValue: 5,
  itemId: "apple",
  itemName: "Apple Core",
  description: "Coloured porcelain",
  artist: blankie,
  imgSrc: appleImg,
  altText: "Ceramic apple core",
};
const banana = {
  currentBid: 210,
  incrementValue: 10,
  itemId: "banana",
  itemName: "Banane",
  description: "Nerikomi porcelain",
  artist: blankie,
  imgSrc: bananaImg,
  altText: "Ceramic half-peeled banana",
};
// const chip = {
//   currentBid: 20,
//   incrementValue: 5,
//   itemId: "chip",
//   itemName: "Porcelain chip",
//   description: "Coloured porcelain",
//   artist: blankie,
//   imgSrc: chipImg,
//   altText: "Ceramic potato chip",
// };
const bagOfChips = {
  currentBid: 180,
  incrementValue: 10,
  itemId: "chip-bag",
  itemName: "Chip Bag with some Chips",
  description: "Nerikomi porcelain, glaze, white gold lustre",
  artist: blankie,
  imgSrc: chipBagImg,
  altText: "Ceramic potato chip bag with spilled chips",
};

const goldChip = {
  currentBid: 55,
  incrementValue: 5,
  itemId: "gold-chip",
  itemName: "Golden Chip",
  description: "Soda-fired porcelain, gold lustre",
  artist: blankie,
  imgSrc: goldChipImg,
  altText: "Ceramic half-peeled banana",
};

const candy = {
  currentBid: 70,
  incrementValue: 5,
  itemId: "candy",
  itemName: "Ooh, piece of candy",
  description: 'Glass, vinyl, 12" long',
  artist: buddies,
  imgSrc: glassCandy,
  altText: "oversized glass peppermint candy wrapped in clear vinyl",
};

const dixieCupSet = {
  currentBid: 120,
  incrementValue: 5,
  itemId: "dixie-set",
  itemName: "Dixie cup set",
  description: "Nerikomi porcelain",
  artist: blankie,
  imgSrc: dixieSetImg,
  altText:
    "oversized ceramic recreation of disposable dixie cups, one large, one small",
};

const dixieCupCrunch = {
  currentBid: 75,
  incrementValue: 5,
  itemId: "dixie-crunch",
  itemName: "Dixie cup - crunched",
  description: "Nerikomi porcelain",
  artist: blankie,
  imgSrc: dixieCrunchImg,
  altText: "oversized ceramic recreation of disposable dixie cup, scrunched up",
};

const lanyard = {
  currentBid: 450,
  incrementValue: 10,
  itemId: "lanyard",
  itemName: "Beaded lanyard pen",
  description: "Glass beads, pvc, pen",
  artist: murph,
  imgSrc: lanyardImg,
  altText: "long woven beaded chain lanyard with fully beaded-encrusted pen",
};

export const allAuctionitems = [
  receptionLamp,
  portalLamp,
  chainPile,
  standLamp,
  chainPendantLamp,
  hatsLamp,
  orbLamp,
  greenPlinth,
  blueStool,
  coralStool,
  toGo,
  vesselA,
  chess,
  chainmail,
  obelisk,
  officePhone,
  keys,
  pillow,
  painting,
  porcelainCig,
  glassCigA,
  glassCigB,
  ashTray,
  beadedCigA,
  beadedCigB,
  beadedCigC,
  beadedCigD,
  beadedCigE,
  beadedCigF,
  tvGuide,
  natGeo,
  gayCavalier,
  apple,
  banana,
  candy,
  // chip,
  bagOfChips,
  goldChip,
  dixieCupSet,
  dixieCupCrunch,
  lanyard,
];

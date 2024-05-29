import natGeoImg from "../assets/nat-geo.jpg";
import portalLampImg from "../assets/entretemps-lamp.jpg";
import receptionLampImg from "../assets/stack-lamp-on.jpg";
import chainPileLamp from "../assets/chain-pile.jpg";
import standingLampImg from "../assets/standing-lamp.jpeg";

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

const natGeo = {
  currentBid: 350,
  incrementValue: 10,
  itemId: "nat-geo",
  itemName: "National Geographic",
  description: "",
  artist: blankie,
  imgSrc: natGeoImg,
  altText:
    "Ceramic recreation of National Geographic magazine with astronaut on the cover",
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
  currentBid: 410,
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

export const allAuctionitems = [
  receptionLamp,
  portalLamp,
  chainPile,
  standLamp,
];

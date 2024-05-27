import natGeoImg from "../assets/nat-geo.jpg";
import portalLampImg from "../assets/entretemps-lamp.jpg";

const natGeo = {
  currentBid: 350,
  incrementValue: 10,
  itemId: "nat-geo",
  itemName: "National Geographic",
  imgSrc: natGeoImg,
  altText:
    "Ceramic recreation of National Geographic magazine with astronaut on the cover",
};
const portalLamp = {
  currentBid: 550,
  incrementValue: 10,
  itemId: "portal-lamp",
  itemName: "Portal Lamp",
  imgSrc: portalLampImg,
  altText:
    "Paper mache 6-ft tall portal lamp with blue, lime green, coral and lavender paint.",
};

export const allAuctionitems = [natGeo, portalLamp];

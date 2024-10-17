var information_id6 = [
  "Miscellaneous", // Page Title Here
  {
    title: "Amrita Main gate", // Name of the location
    content: "Main Entrance", // Description of place
    image: "gate.jpeg", // Just enter the name of image file with extension. No need of full path
    latitude: "10.899302", // Latitude of the place
    longitude: "76.900400", // Longitude of the place
  },
  {
    title: "Ettimadi Railway Station", // Name of the location
    content: "Ettimadai Railway Station", // Description of place
    image: "rail.jpeg", // Just enter the name of image file with extension. No need of full path
    latitude: "10.898300", // Latitude of the place
    longitude: "76.895900", // Longitude of the place
  },
];


for(let i=0; i < information_id6.length; i++) {
  information_id6[i]['image'] = "../6/res/" + information_id6[i]['image'];
}

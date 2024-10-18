var information_id7 = [
  "Labs and Learning centers", // Page Title Here
  {
    title: "E-Learning Studio", // Name of the location
    content: "E-Learning Studio", // Description of place
    image: "elab.jpeg", // Just enter the name of image file with extension. No need of full path
    latitude: "10.901457", // Latitude of the place
    longitude: "76.902743", // Longitude of the place
  },
];

for(let i=0; i < information_id7.length; i++) {
  information_id7[i]['image'] = "../7/res/" + information_id7[i]['image'];
}
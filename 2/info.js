var information_id2 = [
  "", // Page Title Here
  {
    title: "", // Name of the location
    content: "", // Description of place
    image: "", // Just enter the name of image file with extension. No need of full path
    latitude: "", // Latitude of the place
    longitude: "", // Longitude of the place
  },
];


for(let i=0; i < information_id2.length; i++) {
  information_id2[i]['image'] = "../2/res/" + information_id2[i]['image'];
}
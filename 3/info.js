var information_id3 = [
  "Canteens", // Page Title Here
  {
    title: "Main Canteen", // Name of the location
    content: "Main canteen offers a wide variety of veg and non veg food. Timings: 10am - 8pm", // Description of place
    image: "main.jpg", // Just enter the name of image file with extension. No need of full path
    latitude: "10.900127", // Latitude of the place
    longitude: "76.903698", // Longitude of the place
  },
];


for(let i=0; i < information_id3.length; i++) {
  information_id3[i]['image'] = "../3/res/" + information_id3[i]['image'];
}
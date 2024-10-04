var information_id2 = [
  "Hostels", // Page Title Here
  {
    title: "Vyasa Maharishi Bhavanam", // Name of the location
    content: "Vyasa Maharishi Bhavanam is a boys' hostel at Amrita Vishwa Vidyapeetham, providing secure and comfortable accommodations. It features furnished rooms, Wi-Fi, and round-the-clock security. Common areas for recreation and study, along with a dining hall offering healthy meals, are available. The hostel's location allows easy access to campus facilities, and supportive staff ensure student well-being.", // Description of place
    image: "vbh.jpg", // Just enter the name of image file with extension. No need of full path
    latitude: "10.901615", // Latitude of the place
    longitude: "76.905785", // Longitude of the place
  },
];


for(let i=0; i < information_id2.length; i++) {
  information_id2[i]['image'] = "../2/res/" + information_id2[i]['image'];
}
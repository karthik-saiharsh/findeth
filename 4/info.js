var information_id4 = [
  "Halls", // Page Title Here
  {
    title: "New Auditorium", // Name of the location
    content: "New Auditorium at Amrita Vishwa Vidyapeetham is a spacious and technologically advanced venue. It boasts high-quality audio-visual equipment, ample seating, and excellent acoustics. The auditorium is perfect for large-scale events such as conferences, cultural performances, and ceremonies. Its convenient location within the campus ensures easy access for all participants. Regular upkeep ensures it remains in pristine condition for all uses.", // Description of place
    image: "new.jpg", // Just enter the name of image file with extension. No need of full path
    latitude: "10.904307", // Latitude of the place
    longitude: "76.902621", // Longitude of the place
  },
];


for(let i=0; i < information_id4.length; i++) {
  information_id4[i]['image'] = "../4/res/" + information_id4[i]['image'];
}
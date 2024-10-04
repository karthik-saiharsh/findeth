var information_id1 = [
  "Academic Blocks", // Page Title Here
  {
    title: "Academic Block 3", // Name of the location
    content: "AB3 consists of the department of computer science and engineering, Amrita school of Artificial Intelligence, TIFAC Centre and their respective faculty rooms. AMuDA Lab, CHE and IoT Lab, SIGMA Lab, Amrita-Cognizant Innovation Lab, Amrita Smart Spaces Lab, SEIRS Research Lab and AI and Robotics Lab. Listening Studio(AARTC) is located on the third floor. Two seminars are located on the first and second floor respectively.", // Description of place
    image: "AB3.jpg", // Just enter the name of image file with extension. No need of full path
    latitude: "10.906206", // Latitude of the place
    longitude: "76.897803", // Longitude of the place
  },
];


for(let i=0; i < information_id1.length; i++) {
  information_id1[i]['image'] = "../1/res/" + information_id1[i]['image'];
}

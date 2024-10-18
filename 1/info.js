var information_id1 = [
  "Academic Blocks", // Page Title Here
  {
    title: "Academic Block - 1", // Name of the location
    content: "AB1 houses the School of Engineering and the School of Physical Sciences. It's a central hub for engineering students and those in the physical sciences, hosting a range of labs, lecture halls, and research spaces.", // Description
    image: "Ab1.jpeg", // Path to Image (Image has to be rectangular in aspect ratio (16 by 9))
    latitude: "10.900442",
    longitude: "76.902771",
  },

  {
    title: "Academic Block - 2", // Name of the location
    content: "AB2 is dedicated to the Electrical Department. Students here focus on electrical engineering studies, and it features specialized labs and classrooms designed for electrical circuits, electronics, and power systems.", // Description
    image: "AB2.jpeg", // Path to Image (Image has to be rectangular in aspect ratio (16 by 9))
    latitude: "10.904015",
    longitude: "76.898344",
  },

  {
    title: "Academic Block - 3", // Name of the location
    content: "AB3 is home to the School of Computing and the School of Artificial Intelligence. This block is the center for all things computing, programming, and AI, with modern computer labs and cutting-edge technology for research in machine learning, data science, and more.", // Description
    image: "AB3.jpeg", // Path to Image (Image has to be rectangular in aspect ratio (16 by 9))
    latitude: "10.906206",
    longitude: "76.897803",
  },

  {
    title: "Amrita School of business", // Name of the location
    content: "ASB(Amrita School of Business) offers programs in business and management, focusing on nurturing future leaders and entrepreneurs. The building hosts lecture halls, discussion rooms, and seminar spaces, all designed to create a conducive environment for business education.", // Description
    image: "ASB.jpeg", // Path to Image (Image has to be rectangular in aspect ratio (16 by 9))
    latitude: "10.904470",
    longitude: "76.901795",
  },

  {
    title: "CIR Block ", // Name of the location
    content: "CIR(Corporate and Industrial Relations) serves as the link between students and the corporate world. It facilitates internships, placements, and industry collaborations, helping students bridge the gap between academic studies and professional careers.", // Description
    image: "CIR.jpeg", // Path to Image (Image has to be rectangular in aspect ratio (16 by 9))
    latitude: "10.905392",
    longitude: "76.901880",
  },

];


for(let i=0; i < information_id1.length; i++) {
  information_id1[i]['image'] = "../1/res/" + information_id1[i]['image'];
}

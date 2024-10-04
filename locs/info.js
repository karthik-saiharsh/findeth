// Add all markers in this page

var all_places = [
  "Campus Map", // Title of the page
  {
    name: "AB1", // Name of the marker
    latitude: "10.900442",
    longitude: "76.902771",
  },
  {
    name: "AB2", // Name of the marker
    latitude: "10.904015",
    longitude: "76.898344",
  },
  {
    name: "AB3", // Name of the marker
    latitude: "10.906206",
    longitude: "76.897803",
  },
  {
    name: "ASB", // Name of the marker
    latitude: "10.904470",
    longitude: "76.901795",
  },
  {
    name: "CIR", // Name of the marker
    latitude: "10.905392",
    longitude: "76.901880",
  },
  {
    name: "Maithreyi Bhavanam", // Name of the marker
    latitude: "10.900761",
    longitude: "76.901233",
  },
  {
    name: "Gargi Bhavanam", // Name of the marker
    latitude: "10.902940",
    longitude: "76.899803",
  },
  {
    name: "Vasishta Bhavanam", // Name of the marker
    latitude: "10.901573",
    longitude: "76.895994",
  },
  {
    name: "Gauthama Bhavanam", // Name of the marker
    latitude: "10.902721",
    longitude: "76.897143",
  },
  {
    name: "Agasthya Bhavanam", // Name of the marker
    latitude: "10.902493",
    longitude: "76.896215",
  },
  {
    name: "Adithi Bhavanam", // Name of the marker
    latitude: "10.907245",
    longitude: "76.898844",
  },
  {
    name: "Yagnavalkya Bhavanam", // Name of the marker
    latitude: "10.901462",
    longitude: "76.904652",
  },
  {
    name: "Yagnavalkya Bhavanam Annex", // Name of the marker
    latitude: "10.902788",
    longitude: "76.905057",
  },
  {
    name: "Vyasa Maharishi Bhavanam", // Name of the marker
    latitude: "10.901615",
    longitude: "76.905785",
  },
  {
    name: "Nachiketas Bhavanam", // Name of the marker
    latitude: "10.900477",
    longitude: "76.904765",
  },
  {
    name: "Kapila Bhavanam", // Name of the marker
    latitude: "10.904263",
    longitude: "76.900615",
  },
  {
    name: "Main Canteen", // Name of the marker
    latitude: "10.900127",
    longitude: "76.903698",
  },
  {
    name: "MBA Canteen", // Name of the marker
    latitude: "10.904599",
    longitude: "76.902241",
  },
  {
    name: "IT Canteen", // Name of the marker
    latitude: "10.904916",
    longitude: "76.898078",
  },
  {
    name: "Night canteen", // Name of the marker
    latitude: "10.902315",
    longitude: "76.896792",
  },
  {
    name: "Millet cafe", // Name of the marker
    latitude: "10.907010",
    longitude: "76.898989",
  },
  {
    name: "Amriteshwari Hall", // Name of the marker
    latitude: "10.900512",
    longitude: "76.903779",
  },
  {
    name: "Sandeepani Hall(AB2)", // Name of the marker
    latitude: "10.903714",
    longitude: "76.898184",
  },
  {
    name: "New Auditorium", // Name of the marker
    latitude: "10.904307",
    longitude: "76.902621",
  },
  {
    name: "Anugraha hall (AB-3)", // Name of the marker
    latitude: "10.906425",
    longitude: "76.897323",
  },
  {
    name: "Sudhamani Hall", // Name of the marker
    latitude: "10.900526",
    longitude: "76.903950",
  },
  {
    name: "Acharya Hall (AB-1)", // Name of the marker
    latitude: "10.900396",
    longitude: "76.902852",
  },
  {
    name: "Swimming Pool", // Name of the marker
    latitude: "10.906240",
    longitude: "76.898937",
  },
  {
    name: "Central Library", // Name of the marker
    latitude: "10.906240",
    longitude: "76.898937",
  },
  {
    name: "Central Kitchen ", // Name of the marker
    latitude: "10.901404",
    longitude: "76.901254",
  },
  {
    name: "Amrita Store", // Name of the marker
    latitude: "10.901706",
    longitude: "76.901857",
  },
  {
    name: "Ground", // Name of the marker
    latitude: "10.9022453",
    longitude: "76.903017",
  },
  {
    name: "Vashishta Bhavanam Ground", // Name of the marker
    latitude: "10.901643",
    longitude: "76.894587",
  },
  {
    name: "Anokha hub", // Name of the marker
    latitude: "10.901291",
    longitude: "76.901803",
  },
  {
    name: "Boys gym 1", // Name of the marker
    latitude: "10.901831",
    longitude: "76.902094",
  },
  {
    name: "Boys gym 2", // Name of the marker
    latitude: "10.901499",
    longitude: "76.894800",
  },
  {
    name: "Children's Park", // Name of the marker
    latitude: "10.901267",
    longitude: "76.899601",
  },
  {
    name: "Amrita Guest House", // Name of the marker
    latitude: "10.901439",
    longitude: "76.898868",
  },
  {
    name: "Amma Shrine", // Name of the marker
    latitude: "10.902171",
    longitude: "76.901073",
  },
  {
    name: "Clinic", // Name of the marker
    latitude: "10.901921",
    longitude: "76.901938",
  },
  {
    name: "Naturals", // Name of the marker
    latitude: "10.901806",
    longitude: "76.901928",
  },
  {
    name: "Dhanlaxmi Bank", // Name of the marker
    latitude: "10.899652",
    longitude: "76.900363",
  },
  {
    name: "Dhana Lakshmi ATM", // Name of the marker
    latitude: "10.903726",
    longitude: "76.897699",
  },
  {
    name: "SBI ATM", // Name of the marker
    latitude: "10.901752",
    longitude: "76.901948",
  },
  {
    name: "ICICI ATM", // Name of the marker
    latitude: "10.900437",
    longitude: "76.903652",
  },
  {
    name: "Mechincal Labs", // Name of the marker
    latitude: "10.901457",
    longitude: "76.902743",
  },
  {
    name: "Amrita Main gate", // Name of the marker
    latitude: "10.899302",
    longitude: "76.900400",
  },
  {
    name: "Ettimadi Railway Station", // Name of the marker
    latitude: "10.898300",
    longitude: "76.895900",
  },
  
];

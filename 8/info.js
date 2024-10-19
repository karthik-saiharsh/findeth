var information_id8 = [
  "Bank and ATM", // Page Title Here
  {
    title: "Dhanalakshmi Bank", // Name of the location
    content: "Dhanlaxmi Bank at Amrita Vishwa Vidyapeetham, provides comprehensive banking services for students, faculty, and staff. The branch offers services such as account management, loans, and customer support. Its convenient campus location ensures easy access for all university members. The bank maintains regular hours to accommodate the academic schedule. It also ensures a secure and efficient banking experience.", // Description
    image: "dhan.jpeg", // Path to Image (Image has to be rectangular in aspect ratio (16 by 9))
    latitude: "10.899652",
    longitude: "76.900363",
  },
  {
    title: "Dhanalakshmi ATM", // Name of the location
    content: "Dhana Lakshmi ATM at Amrita Vishwa Vidyapeetham,  offers 24/7 access to cash withdrawal and other basic banking services. This ATM is strategically located for easy access by students, faculty, and staff. It ensures quick and secure transactions, helping meet the urgent financial needs of the campus community. Regular maintenance and cash refills ensure its reliability. The ATM is well-monitored for security.", // Description
    image: "datm.jpeg", // Path to Image (Image has to be rectangular in aspect ratio (16 by 9))
    latitude: "10.903726",
    longitude: "76.897699",
  }, 
  {
    title: "SBI ATM", // Name of the location
    content: "SBI ATM at Amrita Vishwa Vidyapeetham,  provides 24/7 banking services, including cash withdrawals, balance inquiries, and fund transfers. Positioned conveniently within the campus, it serves the financial needs of students, faculty, and staff efficiently. The ATM is regularly serviced to ensure operational reliability. It is monitored for security, ensuring safe transactions at all times.", // Description
    image: "loading.png", // Path to Image (Image has to be rectangular in aspect ratio (16 by 9))
    latitude: "10.901752",
    longitude: "76.901948",
  },
   {
    title: "ICICI ATM", // Name of the location
    content: "ICICI ATM at Amrita Vishwa Vidyapeetham, offers round-the-clock banking services such as cash withdrawals and account inquiries. Its strategic location within the campus allows easy access for the university community. The ATM is maintained to ensure it remains operational and reliable. It provides a secure and efficient way for users to manage their financial needs. Regular security checks are conducted to ensure user safety.", // Description
    image: "loading.png", // Path to Image (Image has to be rectangular in aspect ratio (16 by 9))
    latitude: "10.900437",
    longitude: "76.903652",
  },
];

for(let i=0; i < information_id8.length; i++) {
  information_id8[i]['image'] = "../8/res/" + information_id8[i]['image'];
}

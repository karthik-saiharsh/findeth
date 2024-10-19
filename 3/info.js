var information_id3 = [
  "Canteen", // Page Title Here
  {
    title: "Main Canteen", // Name of the location
    content: "The largest and most diverse food option on campus, the Main Canteen offers a wide range of dishes, including both vegetarian and non-vegetarian options like chicken. It is a popular spot for students to gather between classes or after long days.", // Description
    image: "main.png", // Path to Image (Image has to be rectangular in aspect ratio (16 by 9))
    latitude: "10.900127",
    longitude: "76.903698",
  },

  {
    title: "MBA Canteen", // Name of the location
    content: "A purely vegetarian canteen, the MBA Canteen serves wholesome meals to students who prefer vegetarian diets, especially those from the business school. It has a peaceful environment and a well-curated menu.", // Description
    image: "loading.png", // Path to Image (Image has to be rectangular in aspect ratio (16 by 9))
    latitude: "10.904599",
    longitude: "76.902241",
  },

  {
    title: "IT Canteen", // Name of the location
    content: "Known for its specialty in fish dishes, alongside vegetarian meals, the IT Canteen is frequented by students from the computing and IT departments. It is known for quick and tasty meals between classes.", // Description
    image: "loading.png", // Path to Image (Image has to be rectangular in aspect ratio (16 by 9))
    latitude: "10.904916",
    longitude: "76.898078",
  },

  {
    title: "Night Canteen", // Name of the location
    content: "Located inside the hostels, the Night Canteen offers snacks and light food options late into the night, making it a go-to place for students staying up to study or those craving a midnight snack.", // Description
    image: "loading.png", // Path to Image (Image has to be rectangular in aspect ratio (16 by 9))
    latitude: "10.902315",
    longitude: "76.896792",
  },

  {
    title: "Millet Cafe", // Name of the location
    content: "Positioned near Aditi Bhavanam, this is a small vegetarian cafe with a focus on healthy, millet-based food options. It has a quiet and calming ambiance, but typically, boys are not allowed here, maintaining a reserved space for certain students.", // Description
    image: "loading.png", // Path to Image (Image has to be rectangular in aspect ratio (16 by 9))
    latitude: "10.907010",
    longitude: "76.898989",
  },
];


for(let i=0; i < information_id3.length; i++) {
  information_id3[i]['image'] = "../3/res/" + information_id3[i]['image'];
}

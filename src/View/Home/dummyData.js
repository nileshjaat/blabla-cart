const create_UUID = () => {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
};

export const shoes = [
  {
    id: create_UUID(),
    name: 'Sports Running Shoes',
    image:
      'https://image.freepik.com/free-photo/colorful-running-fashion-sneaker-shoes-isolated-white-background_47469-291.jpg',
  },

  {
    id: create_UUID(),
    name: 'Men Running Shoes',
    image: 'https://m.media-amazon.com/images/I/41Leu3gBUFL.jpg',
  },

  {
    id: create_UUID(),
    name: 'Sport Shoes Green',
    image:
      'https://thumbs.dreamstime.com/b/sport-shoes-green-white-background-sport-shoes-green-white-background-accessory-activity-athletic-background-black-casual-174225544.jpg',
  },

  {
    id: create_UUID(),
    name: 'White Shoes',
    image:
      'https://media.istockphoto.com/photos/creative-minimal-paper-idea-concept-white-shoe-with-white-background-picture-id1149654373?k=20&m=1149654373&s=170667a&w=0&h=HlhjkWFPHfAbxXfHCnT3b5LQgNGjGRPkAW3KcKoC2sw=',
  },

  {
    id: create_UUID(),
    name: 'Vintage Red Shoes',
    image:
      'https://c4.wallpaperflare.com/wallpaper/467/922/553/adidas-backgrounds-for-laptop-wallpaper-preview.jpg',
  },

  {
    id: create_UUID(),
    name: 'Nike Black Shoes',
    image:
      'https://c4.wallpaperflare.com/wallpaper/601/305/95/nike-full-hd-wallpaper-preview.jpg',
  },

  {
    id: create_UUID(),
    name: 'Sketchers Shoes',
    image: 'https://live.staticflickr.com/65535/50395873783_8c36f8de3f_b.jpg',
  },

  {
    id: create_UUID(),
    name: 'Adidas Shoes',
    image:
      'https://previews.123rf.com/images/pretoperola/pretoperola1201/pretoperola120100029/11936982-vintage-red-shoes-on-white-background.jpg',
  },

  {
    id: create_UUID(),
    name: 'Sportz Shoes',
    image: 'https://m.media-amazon.com/images/I/61utX8kBDlL._UL1100_.jpg',
  },
];

export const sunglasses = [
  {
    id: create_UUID(),
    name: 'Normal Black Sunglasses',
    image:
      'https://cdn2.vectorstock.com/i/1000x1000/54/71/sunglasses-with-black-glasses-on-white-background-vector-6005471.jpg',
  },

  {
    id: create_UUID(),
    name: 'Blue Sunglasses',
    image:
      'https://cdn5.vectorstock.com/i/1000x1000/23/74/sunglasses-isolated-on-white-background-vector-2342374.jpg',
  },

  {
    id: create_UUID(),
    name: 'Orange Aviators',
    image:
      'https://thumbs.dreamstime.com/b/aviator-sunglasses-white-background-21862766.jpg',
  },

  {
    id: create_UUID(),
    name: 'Heart Sunglasses',
    image:
      'https://previews.123rf.com/images/peterkai/peterkai1802/peterkai180200138/95600443-black-heart-shaped-sunglasses-on-a-white-background-.jpg',
  },

  {
    id: create_UUID(),
    name: 'Red Frame Sunglasses',
    image:
      'https://media.istockphoto.com/photos/red-sunglasses-picture-id504098468?k=20&m=504098468&s=612x612&w=0&h=RNEn4L_fMGXEuo4E0doSOI4xx5AhUdSZNKrlZKIAgH4=',
  },

  {
    id: create_UUID(),
    name: 'Cateye Sunglasses',
    image: 'https://ak.picdn.net/shutterstock/videos/13497266/thumb/11.jpg',
  },

  {
    id: create_UUID(),
    name: 'Round Sunglasses',
    image: 'https://s3.envato.com/files/246851438/7571180413.jpg',
  },

  {
    id: create_UUID(),
    name: 'Rainbow Sunglasses',
    image:
      'https://media.istockphoto.com/photos/accessories-rainbow-sunglasses-isolated-on-white-background-picture-id1152426468',
  },

  {
    id: create_UUID(),
    name: 'Vintage Black Sunglasses',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUhEmN76lkihOiyE69F05N2lpaPwIiLE6H4g&usqp=CAU',
  },
];

export const bags = [
  {
    id: create_UUID(),
    name: 'Yellow Hand Bag',
    image:
      'https://previews.123rf.com/images/annnam29/annnam291511/annnam29151100094/48196739-yellow-hand-bag-isolated-on-white-background.jpg',
  },

  {
    id: create_UUID(),
    name: 'Stylish Purse',
    image:
      'https://media.istockphoto.com/photos/orange-handbag-picture-id618731934?k=20&m=618731934&s=612x612&w=0&h=VAa8nqHSkl-aDgD_8Gpi_mGPlcRTe71VLwZ8uanAzi0=',
  },

  {
    id: create_UUID(),
    name: 'Black Backpack',
    image:
      'https://t3.ftcdn.net/jpg/01/78/04/24/360_F_178042489_TvL7CSsgDUPC00uTomrveQalO5Dk1tbK.jpg',
  },

  {
    id: create_UUID(),
    name: 'Hiking Rucksack',
    image:
      'https://media.istockphoto.com/photos/blue-hiking-backpack-on-a-white-background-picture-id1083577156',
  },

  {
    id: create_UUID(),
    name: 'Brown Bag',
    image:
      'https://media.gettyimages.com/photos/closeup-of-bag-against-white-background-picture-id1189523408?s=612x612',
  },

  {
    id: create_UUID(),
    name: 'Premium Hand Bag',
    image:
      'https://image.freepik.com/free-photo/hand-made-leather-brown-women-s-backpack-white-background_88135-22630.jpg',
  },

  {
    id: create_UUID(),
    name: 'School Bag',
    image:
      'https://thumbs.dreamstime.com/z/school-bag-backpack-isolated-white-background-student-supplies-57559162.jpg',
  },

  {
    id: create_UUID(),
    name: 'Leather Bag',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq_tsEYJxTGoxhnbhSMA_bEeYMmfiG2popiA&usqp=CAU',
  },

  {
    id: create_UUID(),
    name: 'Laptop Bag',
    image:
      'https://us.123rf.com/450wm/maksimee/maksimee1909/maksimee190900002/131913738-laptop-bag-in-green-color-front-view-isolated-on-white-background.jpg?ver=6',
  },
];

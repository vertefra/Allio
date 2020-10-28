const menu: menuData = {
  starters: [
    {
      id: '1',
      title: 'Burrata and Prosciutto',
      price: 1800,
      description: 'Imported from italy',
      img: '',
      available: true,
    },
    {
      id: '2',
      title: 'Focaccia',
      price: 1000,
      description: 'Homemade Focaccia, salt, olive oil, rosemary',
      img: '',
      available: true,
    },
    {
      id: '3',
      title: 'Scarpetta (Our Signature Starter)',
      price: 1800,
      description: 'Pizza Bread, marinara, parmesan, burrata, squeezer',
      img: '',
      available: true,
    },
    {
      id: '4',
      title: 'Burrata and Prosciutto',
      price: 1800,
      description: 'Imported from italy',
      img: '',
      available: true,
    },
    {
      id: '5',
      title: 'Della casa salad',
      price: 1800,
      description: 'Imported from italy',
      img: '',
      available: true,
    },
  ],

  main: [
    {
      id: '6',
      title: 'Margherita',
      price: 1600,
      description: 'tomato sauce, mozzarella, basil',
      img: '',
      available: true,
    },
    {
      id: '7',
      title: "Pepperoni (can't go wrong)",
      price: 1800,
      description: 'tomato sauce, mozzarella, spicy salami',
      img: '',
      available: true,
    },
    {
      id: '8',
      title: 'Parmigiana',
      price: 2000,
      description: 'tomato sauce, mozzarella, eggplants, parmesan basil',
      img: '',
      available: true,
    },
  ],

  specials: [
    {
      id: '9',
      img: '',
      title: 'Skisko',
      price: 2200,
      description: 'mozzarella, arugola, prosciutto, parmesan',
      available: true,
    },
    {
      id: '10',
      title: 'brunch is briunch',
      img: "",
      price: 2100,
      description: 'mozzarella, parmesan, eggs, bacon',
      available: true,
    },
  ],

  beers: [
    {
      id: '11',
      title: 'Peroni',
      img: '',
      price: 700,
      description: 'fresh, clean easy going',
      available: true,
    },
    {
      id: '12',
      img: "",
      title: 'Pilsner',
      price: 700,
      description: 'Fresh, celan, easy going',
      available: true,
    },
  ],

  wines: [
    {
      id: '13',
      img: "",
      title: 'Barberani polago',
      glassPrice: 1200,
      bottlePrice: 4800,
      description: 'Red, light body, vivid, ruity with character',
      available: true,
    },
  ],
}

type Wine = {
  id: String,
  title: String,
  img: String,
  glassPrice: Number,
  bottlePrice: Number,
  description: String,
  available: Boolean
}

type Food = {
  id: String,
  title: String,
  img: string,
  price: Number,
  description: String,
  available: Boolean
}

type menuData = {
  starters: Food[],
  main: Food[],
  specials: Food[],
  beers: Food[],
  wines: Wine[],
}


export default menu

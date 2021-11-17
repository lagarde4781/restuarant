export interface IFood {
  name: string;
  ingredients?: Array<string>;
  weight: string;
  calories: string;
  price: number;
  type: string;
}

export const foods: Array<IFood> = [
  {
    name: 'Chilaquiles',
    ingredients: [
      'Tortillas',
      'Salsa Verde',
      'Huevo',
      'Cebolla',
      'Crema',
      'Queso',
    ],
    weight: '200gr',
    calories: '550 cal',
    price: 60,
    type: 'Desayuno',
  },
  {
    name: 'Huevos rancheros',
    ingredients: ['Tortillas', '2 Huevos', 'Salsa verde'],
    weight: '125gr',
    calories: '500 cal',
    price: 55,
    type: 'Desayuno',
  },
  {
    name: 'Huevo revuelto con jamón',
    ingredients: ['Huevos', 'Jamón'],
    weight: '160gr',
    calories: '600 cal',
    price: 65,
    type: 'Desayuno',
  },
  {
    name: 'Sopa Azteca',
    ingredients: ['Jitomate', 'Pollo', 'Tortilla', 'Aguacate'],
    weight: '200gr',
    calories: '800 cal',
    price: 80,
    type: 'Comidas',
  },
  {
    name: 'Milanesa de res',
    ingredients: ['Milanesa de res', 'Papas a la francesa'],
    weight: '230gr',
    calories: '900 cal',
    price: 110,
    type: 'Comidas',
  },
  {
    name: 'Pechuga de pollo rostizada',
    ingredients: ['Huevos', 'Jamón'],
    weight: '160gr',
    calories: '600 cal',
    price: 65,
    type: 'Comidas',
  },
  {
    name: 'Hotdog',
    ingredients: ['Salchica', 'Pan', 'Mayonesa', 'Jitomate'],
    weight: '160gr',
    calories: '900 cal',
    price: 30,
    type: 'Cenas',
  },
  {
    name: 'Hamburgusa',
    ingredients: ['Carne', 'Pan', 'Mayonesa', 'Jitomate', 'Piña'],
    weight: '130gr',
    calories: '700 cal',
    price: 70,
    type: 'Cenas',
  },
  {
    name: 'Mojito',
    ingredients: ['Hierbabuena', 'Vodka', 'Azucar'],
    weight: '100gr',
    calories: '700 cal',
    price: 90,
    type: 'Bebidas',
  },
  {
    name: 'Agua',
    weight: '100gr',
    calories: '10 cal',
    price: 20,
    type: 'Bebidas',
  },
  {
    name: 'Coca',
    weight: '100gr',
    calories: '1000 cal',
    price: 20,
    type: 'Bebidas',
  },
  {
    name: 'Helado de fresa',
    weight: '200gr',
    ingredients: ['Fresa'],
    calories: '1000 cal',
    price: 100,
    type: 'Postre',
  },
  {
    name: 'Helado de chocolate',
    weight: '200gr',
    ingredients: ['Chocolate'],
    calories: '1000 cal',
    price: 100,
    type: 'Postre',
  },
];

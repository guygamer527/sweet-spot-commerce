export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  featured: boolean;
  ingredients?: string[];
}

export const categories = [
  "All",
  "Breads",
  "Cakes",
  "Pastries",
  "Cookies",
  "Specialty"
];

export const products: Product[] = [
  {
    id: "1",
    name: "Artisan Sourdough",
    category: "Breads",
    price: 8.99,
    description: "Traditional sourdough bread with a crispy crust and soft interior. Fermented for 24 hours for perfect flavor.",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80",
    featured: true,
    ingredients: ["Flour", "Water", "Salt", "Sourdough Starter"]
  },
  {
    id: "2",
    name: "Chocolate Croissant",
    category: "Pastries",
    price: 4.50,
    description: "Buttery, flaky croissant filled with rich dark chocolate. Baked fresh every morning.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
    featured: true,
    ingredients: ["Butter", "Flour", "Dark Chocolate", "Eggs", "Milk"]
  },
  {
    id: "3",
    name: "Red Velvet Cake",
    category: "Cakes",
    price: 45.00,
    description: "Moist red velvet layers with cream cheese frosting. Perfect for celebrations.",
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&q=80",
    featured: true,
    ingredients: ["Flour", "Cocoa", "Buttermilk", "Cream Cheese", "Sugar"]
  },
  {
    id: "4",
    name: "Almond Biscotti",
    category: "Cookies",
    price: 12.99,
    description: "Crunchy Italian cookies with whole almonds, perfect with coffee or tea.",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80",
    featured: false,
    ingredients: ["Almonds", "Flour", "Eggs", "Sugar", "Vanilla"]
  },
  {
    id: "5",
    name: "French Baguette",
    category: "Breads",
    price: 5.99,
    description: "Classic French baguette with a golden crust and airy crumb.",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80",
    featured: false,
    ingredients: ["Flour", "Water", "Salt", "Yeast"]
  },
  {
    id: "6",
    name: "Blueberry Muffin",
    category: "Pastries",
    price: 3.99,
    description: "Moist muffin bursting with fresh blueberries and a crumbly streusel top.",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=800&q=80",
    featured: true,
    ingredients: ["Blueberries", "Flour", "Butter", "Sugar", "Eggs"]
  },
  {
    id: "7",
    name: "Chocolate Chip Cookies",
    category: "Cookies",
    price: 15.99,
    description: "Classic cookies with chunks of premium Belgian chocolate. Dozen pack.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80",
    featured: false,
    ingredients: ["Chocolate Chips", "Butter", "Flour", "Sugar", "Vanilla"]
  },
  {
    id: "8",
    name: "Strawberry Shortcake",
    category: "Cakes",
    price: 38.00,
    description: "Light sponge cake layered with fresh strawberries and whipped cream.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80",
    featured: false,
    ingredients: ["Strawberries", "Whipped Cream", "Sponge Cake", "Sugar"]
  },
  {
    id: "9",
    name: "Cinnamon Rolls",
    category: "Pastries",
    price: 18.99,
    description: "Soft, gooey rolls with cinnamon sugar filling and cream cheese glaze. Pack of 6.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    featured: true,
    ingredients: ["Cinnamon", "Cream Cheese", "Butter", "Flour", "Sugar"]
  },
  {
    id: "10",
    name: "Tiramisu",
    category: "Specialty",
    price: 42.00,
    description: "Italian classic with layers of coffee-soaked ladyfingers and mascarpone cream.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
    featured: true,
    ingredients: ["Mascarpone", "Espresso", "Ladyfingers", "Cocoa", "Eggs"]
  },
  {
    id: "11",
    name: "Lemon Tart",
    category: "Specialty",
    price: 28.00,
    description: "Tangy lemon curd in a buttery shortcrust pastry shell with meringue topping.",
    image: "https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=800&q=80",
    featured: false,
    ingredients: ["Lemons", "Butter", "Eggs", "Sugar", "Pastry"]
  },
  {
    id: "12",
    name: "Multigrain Bread",
    category: "Breads",
    price: 7.50,
    description: "Hearty bread packed with seeds and whole grains for a nutritious choice.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    featured: false,
    ingredients: ["Whole Wheat", "Seeds", "Oats", "Honey", "Yeast"]
  }
];

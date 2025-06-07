export const categories = [
  { id: '1', name: 'All', image: 'https://via.placeholder.com/30/808080' },
  { id: '2', name: 'Formal', image: 'https://via.placeholder.com/30/808080' },
  { id: '3', name: 'Luxury', image: 'https://via.placeholder.com/30/808080' },
  { id: '4', name: 'Sports', image: 'https://via.placeholder.com/30/808080' },
  { id: '5', name: 'Everyday', image: 'https://via.placeholder.com/30/808080' },
  { id: '6', name: 'Casual', image: 'https://via.placeholder.com/30/808080' },
];

export const watchShops = [
  { id: '1', name: 'Rolex Boutique', brand: 'Rolex', rating: 4.7, freeDelivery: true, time: '20 min', image: 'https://via.placeholder.com/100/808080', description: 'A premier destination for Rolex enthusiasts, offering timeless luxury watches with exceptional service.' },
  { id: '2', name: 'Cartier Flagship Stores', brand: 'Cartier', rating: 4.5, freeDelivery: false, time: '15 min', image: 'https://via.placeholder.com/100/808080', description: 'Specializing in Cartier’s elegant designs, this shop brings sophistication to every timepiece.' },
  { id: '3', name: 'Omega Boutique', brand: 'Omega', rating: 4.2, freeDelivery: true, time: '25 min', image: 'https://via.placeholder.com/100/808080', description: 'Your go-to boutique for Omega watches, known for precision and style.' },
  { id: '4', name: 'Breitling Authorized Dealers', brand: 'Breitling', rating: 4.8, freeDelivery: false, time: '30 min', image: 'https://via.placeholder.com/100/808080', description: 'A haven for Breitling fans, offering bold and reliable watches for aviators and adventurers.' },
  { id: '5', name: 'Casio Showrooms', brand: 'Casio', rating: 4.0, freeDelivery: true, time: '18 min', image: 'https://via.placeholder.com/100/808080', description: 'Casio’s trusted retailer, providing durable and affordable watches for all lifestyles.' },
];

export const products = [
  // Rolex
  { id: 'p1', name: 'Submariner', brand: 'Rolex', price: 1200, rating: 4.8, stocks: 10, description: 'Iconic diver’s watch with unmatched durability.', image: 'https://via.placeholder.com/100/000000', freeDelivery: true, time: '20 min' },
  { id: 'p2', name: 'Daytona', brand: 'Rolex', price: 2500, rating: 4.9, stocks: 12, description: 'Chronograph made for motorsports lovers.', image: 'https://via.placeholder.com/100/000000', freeDelivery: false, time: '22 min' },
  { id: 'p3', name: 'GMT-Master II', brand: 'Rolex', price: 1800, rating: 4.7, stocks: 10, description: 'Designed for frequent travelers and pilots.', image: 'https://via.placeholder.com/100/000000', freeDelivery: true, time: '18 min' },
  { id: 'p4', name: 'Explorer', brand: 'Rolex', price: 1150, rating: 4.6, stocks: 14, description: 'Reliable companion for adventurers and climbers.', image: 'https://via.placeholder.com/100/000000', freeDelivery: false, time: '25 min' },

  // Cartier
  { id: 'p5', name: 'Tank Solo', brand: 'Cartier', price: 3200, rating: 4.4, stocks: 15, description: 'A classic and elegant rectangular watch.', image: 'https://via.placeholder.com/100/111111', freeDelivery: false, time: '15 min' },
  { id: 'p6', name: 'Santos', brand: 'Cartier', price: 6800, rating: 4.6, stocks: 13, description: 'Luxurious square case with refined design.', image: 'https://via.placeholder.com/100/111111', freeDelivery: true, time: '20 min' },
  { id: 'p7', name: 'Ballon Bleu', brand: 'Cartier', price: 7500, rating: 4.5, stocks: 10, description: 'Rounded case with signature crown guard.', image: 'https://via.placeholder.com/100/111111', freeDelivery: false, time: '22 min' },
  { id: 'p8', name: 'Pasha', brand: 'Cartier', price: 8500, rating: 4.3, stocks: 12, description: 'Bold watch with classic Cartier detailing.', image: 'https://via.placeholder.com/100/111111', freeDelivery: true, time: '18 min' },

  // Omega
  { id: 'p9', name: 'Seamaster', brand: 'Omega', price: 5200, rating: 4.7, stocks: 16, description: 'James Bond’s go-to for underwater missions.', image: 'https://via.placeholder.com/100/222222', freeDelivery: true, time: '25 min' },
  { id: 'p10', name: 'Speedmaster', brand: 'Omega', price: 6100, rating: 4.8, stocks: 14, description: 'First watch worn on the moon.', image: 'https://via.placeholder.com/100/222222', freeDelivery: false, time: '20 min' },
  { id: 'p11', name: 'Constellation', brand: 'Omega', price: 4900, rating: 4.6, stocks: 13, description: 'Stylish and precise luxury timepiece.', image: 'https://via.placeholder.com/100/222222', freeDelivery: true, time: '18 min' },
  { id: 'p12', name: 'De Ville', brand: 'Omega', price: 4400, rating: 4.5, stocks: 10, description: 'A classic dress watch with modern touches.', image: 'https://via.placeholder.com/100/222222', freeDelivery: false, time: '22 min' },

  // Breitling
  { id: 'p13', name: 'Navitimer', brand: 'Breitling', price: 6500, rating: 4.8, stocks: 11, description: 'Pilot’s tool watch with iconic slide rule.', image: 'https://via.placeholder.com/100/333333', freeDelivery: false, time: '30 min' },
  { id: 'p14', name: 'Chronomat', brand: 'Breitling', price: 7000, rating: 4.7, stocks: 12, description: 'Bold design with high performance chronograph.', image: 'https://via.placeholder.com/100/333333', freeDelivery: true, time: '25 min' },
  { id: 'p15', name: 'Avenger', brand: 'Breitling', price: 6800, rating: 4.6, stocks: 10, description: 'Tough and functional for extreme missions.', image: 'https://via.placeholder.com/100/333333', freeDelivery: false, time: '20 min' },
  { id: 'p16', name: 'Superocean', brand: 'Breitling', price: 6000, rating: 4.5, stocks: 13, description: 'Reliable diver’s watch with bold styling.', image: 'https://via.placeholder.com/100/333333', freeDelivery: true, time: '22 min' },

  // Casio
  { id: 'p17', name: 'G-Shock GA-100', brand: 'Casio', price: 6000, rating: 4.3, stocks: 10, description: 'Shock-resistant digital-analog hybrid.', image: 'https://via.placeholder.com/100/444444', freeDelivery: true, time: '18 min' },
  { id: 'p18', name: 'Edifice', brand: 'Casio', price: 8500, rating: 4.4, stocks: 16, description: 'Smart, sporty, and solar-powered.', image: 'https://via.placeholder.com/100/444444', freeDelivery: false, time: '20 min' },
  { id: 'p19', name: 'F91W', brand: 'Casio', price: 2950, rating: 4.2, stocks: 25, description: 'Classic affordable digital watch.', image: 'https://via.placeholder.com/100/444444', freeDelivery: true, time: '15 min' },
  { id: 'p20', name: 'Pro Trek', brand: 'Casio', price: 1020, rating: 4.5, stocks: 14, description: 'Outdoor watch with altimeter and compass.', image: 'https://via.placeholder.com/100/444444', freeDelivery: false, time: '22 min' },
];
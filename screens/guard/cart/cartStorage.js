let cartItems = [];

const addToCart = (item, quantity) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cartItems.push({ ...item, quantity });
  }
};

const getCartItems = () => {
  return [...cartItems];
};

const clearCart = () => {
  cartItems = [];
};

const removeItem = (itemId) => {
  cartItems = cartItems.filter((item) => item.id !== itemId);
};

const updateQuantity = (itemId, newQuantity) => {
  const item = cartItems.find((cartItem) => cartItem.id === itemId);
  if (item && newQuantity >= 0) {
    item.quantity = newQuantity;
    if (item.quantity === 0) {
      removeItem(itemId);
    }
  }
};

export { addToCart, getCartItems, clearCart, removeItem, updateQuantity };
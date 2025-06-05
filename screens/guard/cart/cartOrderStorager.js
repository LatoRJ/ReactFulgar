let currentOrder = null;

export const storeOrder = (orderData) => {
  currentOrder = orderData;
};

export const getOrder = () => {
  return currentOrder;
};

export const clearOrder = () => {
  currentOrder = null;
};
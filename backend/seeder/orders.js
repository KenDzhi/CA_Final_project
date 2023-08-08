const ObjectId = require("mongodb").ObjectId;

const orders = Array.from({ length: 22 }).map((_, i) => {
  let day = 20;
  if (i < 10) {
    var hour = "0" + i;
    var subtotal = 100;
  } else if (i > 16 && i < 21) {
    var hour = i;
    var subtotal = 100 + 12 * i;
  } else {
    var hour = i;
    var subtotal = 100;
  }

  return {
    user: new ObjectId(),
    orderTotal: {
      itemsCount: 3,
      cartSubtotal: subtotal,
    },
    cartItems: [
      {
        name: "Product name",
        price: 34,
        image: { path: "/images/category/games.jpg" },
        quantity: 532,
        count: 65,
      },
    ],
    paymentMethod: "Card",
    isPaid: false,
    isDelivered: false,
    createdAt: `2023-08-${day}T${hour}:12:36.490+02:00`,
  };
});

module.exports = orders;

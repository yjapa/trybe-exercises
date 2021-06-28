const createMenu = (menu) => {
  const restaurant = {
    fetchMenu: () => menu,
    consumption: [],
    order: (request) => { restaurant.consumption.push(request); },
    pay: () => {
      let total = 0;
      const menuPrice = restaurant.fetchMenu();
      const values = Object.keys(menuPrice).reduce((acc, curr) => {
        const prices = { ...acc, ...menuPrice[curr] };
        return prices;
      }, {});

      restaurant.consumption.forEach((product) => {
        total += values[product] || 0;
      });

      const tip = (total * 10) / 100;

      return total + tip;
    },
  };

  return restaurant;
};

console.log(createMenu({ food: {}, drink: {} }).order('coxinha'));
console.log(createMenu.consumption);
module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    format_amount: (amount) => {
      // format large numbers with commas
      return parseInt(amount).toLocaleString();
    },
    get_emoji: () => {
      const randomNum = Math.random();
  
      // Return a random emoji
      if (randomNum > 0.7) {
        return `<span for="img" aria-label="lightbulb">🖥️</span>`;
      } else if (randomNum > 0.4) {
        return `<span for="img" aria-label="laptop">💻</span>`;
      } else {
        return `<span for="img" aria-label="gear">👨‍💻</span>`;
      }
    },

    // helper function to calculate discounted price
    calculateDiscount: (originalPrice) => {
      let percentage = 0.1;
      const priceString = originalPrice.replace(/[^0-9.-]+/g,"");
      const priceInteger = parseInt(priceString);
      let discount = priceInteger * percentage;
      let newDiscountPrice = priceInteger - discount;
      return `${ "$" + parseInt(newDiscountPrice).toLocaleString()}`;
    },

  };


    
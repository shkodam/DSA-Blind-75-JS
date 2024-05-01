// Max Profit
function BestTimeToBuyAndSell(Prices) {
    let maxProfit = 0;
    let minPrice = Prices[0];
    for(let price of Prices) {
        minPrice = Math.min(minPrice,price);
        maxProfit = Math.max(maxProfit, price-minPrice);
    }
    return maxProfit;
}
export const pricewithDiscount = (price,dis = 0)=>{
    const actualPrice = Number(price) * (100 - dis) / 100
    return actualPrice
}
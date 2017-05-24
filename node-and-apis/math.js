module.exports={
    sumUp: (x, y) => {
        return x + y;
    },
    product: (x, y) => {
        return x * y
    },
    square: (x) => {
        return x * x
    },
    randomNum: (x, y) => {
        return Math.round(Math.random() * (y - x) + x)
    }
};








class Cart {
    constructor() {
        this.products = [];
        this.total = 0;
    }

    addProduct(product) {
        this.products.push(product)
        this.total += product.price
    }

    removeProduct(i) {
        this.total -= this.products[i].price;
        this.products.splice(i, 1);
    }

    getTotal() {
        let cartTotal = 0;
        for (let i = 0; i < this.products.length; i++) {
            total += this.products[i].total;
        }
        return cartTotal;
    }

    clear() {
        this.products.splice(0, this.products.length)
        this.total = 0;
    }
}

module.exports = Cart
function Car({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
}

Car.prototype.getPrice = function getPrice() {
    return this.price;
}

Car.prototype.changePrice = function changePrice(newPrice) {
    this.price = newPrice;
    return this.price;
}

console.log(Car.prototype.hasOwnProperty('getPrice'));
console.log(Car.prototype.hasOwnProperty('changePrice'));

const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
console.log(audi.getPrice());
audi.changePrice(35000);
console.log(audi.getPrice());

// -------------------------------------------------------------------------------

// Добавь в свойство prototype функции-конструктора Car два метода:

// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта,
// который его будет вызывать на newPrice.

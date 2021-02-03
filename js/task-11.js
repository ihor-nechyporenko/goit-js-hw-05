class Car {
    #brand;

    constructor({ brand, model, price }) {
      this.#brand = brand;
      this.model = model;
      this.price = price;
    }

    getBrand() {
        return this.#brand;
    }

    changeBrand(newBrand) {
        this.#brand = newBrand;
    }
}

const car1 = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
console.log(car1);
console.log(car1.getBrand());
car1.changeBrand('Honda');
console.log(car1.getBrand());

// -----------------------------------------------------------------------------------------

// Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь 
// два метода для публичного интерфейса, для чтения и изменения этого свойства.

// getBrand() - возвращает значение приватного свойства brand.
// changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.
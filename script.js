let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come Back ;(";
});
window.addEventListener("focus", () => {
    document.title = docTitle;
})

class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    static S_Small = {
        price: 50,
        calories: 20
    };

    static S_Large = {
        price: 100,
        calories: 40
    };

    static ST_Cheese = {
        price: 10,
        calories: 20
    };

    static ST_Salad = {
        price: 20,
        calories: 5
    };

    static ST_Potato = {
        price: 15,
        calories: 10
    };

    static T_Mayo = {
        price: 20,
        calories: 5
    };

    static T_Sauce = {
        price: 15,
        calories: 0
    };

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculatePrice() {
        let totalPrice = this.size.price + this.stuffing.price;
        this.toppings.forEach(topping => {
            totalPrice += topping.price;
        });
        return totalPrice;
    }

    calculateCalories() {
        let totalCalories = this.size.calories + this.stuffing.calories;
        this.toppings.forEach(topping => {
            totalCalories += topping.calories;
        });
        return totalCalories;
    }
}

let hamburger = new Hamburger(Hamburger.S_Small, Hamburger.ST_Cheese);
hamburger.addTopping(Hamburger.T_Mayo);
console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());
hamburger.addTopping(Hamburger.T_Sauce);

console.log("Price with sauce: " + hamburger.calculatePrice());



class Order {
    constructor(id, deliveryTime, distance) {
        this.id = id;
        this.deliveryTime = deliveryTime; // in minutes
        this.distance = distance; // in kilometers
    }
}

class FoodDelivery {
    constructor(timeLimit) {
        this.orders = [];
        this.timeLimit = timeLimit; // maximum delivery time in minutes
    }

    addOrder(order) {
        this.orders.push(order);
    }

    getImmediateDeliveries() {
        return this.orders.filter(order => order.deliveryTime <= this.timeLimit);
    }
}

// Example usage
const deliveryService = new FoodDelivery(30); // 30 minutes time limit

// Adding some orders
deliveryService.add

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
        this.timeLimit = timeLimit; // maximum delivery tim
Array.prototype.pushArrayOrObject = function(arrayOrObject) {
    if (arrayOrObject.constructor === Array) {
        this.push(...arrayOrObject);
    } else {
        this.push(arrayOrObject);
    }
};

export default {};

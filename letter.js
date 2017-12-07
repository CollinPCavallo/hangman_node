function Letter(value) {
    this.value = value;
    this.show = false;
    if (this.value === " ") {
        this.show = true;
    };
};
Letter.prototype.makeBlanks = function () {
    if (this.show) {
        return this.value;
    } else {
        return "_";
    }
}
Letter.prototype.doesExists = function (letter) {
    if (this.value.toUpperCase() === letter.toUpperCase()) {
        this.show = true;
        return true;
    } else {
        return false;
    }

};


module.exports = Letter;
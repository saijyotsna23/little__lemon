const seededRandom = function(seed) {
    var m = 2 ** 31 - 1; // Use a smaller modulus for simplicity
    var a = 48271; // This is a common choice for a in similar generators
    var s = seed % m;
    return function() {
        s = (s * a) % m;
        return s / m;
    };
};

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate()); // Seed with day of the month

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ':00');
        }
        if (random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    console.log('Reservation submitted:', formData);
    return true; // Simulate successful submission
};

export { fetchAPI, submitAPI };

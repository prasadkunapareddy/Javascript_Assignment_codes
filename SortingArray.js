const numbers = [6, 3, 7, 9, 2, 1];

// Use the sort() method with a custom comparison function
numbers.sort(function(a, b) {
    return b - a; //  We can Sort in descending order
});

console.log(numbers); 

let n = 4;

// --- Part 1: Upper Pyramid ---
for (let i = 1; i <= n; i++) {
    let rowStr = "";
    // Spaces
    for (let s = 1; s <= (n - i); s++) {
        rowStr += " ";
    }
    // Stars
    for (let j = 1; j <= (2 * i - 1); j++) {
        rowStr += "*";
    }
    console.log(rowStr);
}

// --- Part 2: Lower Inverted Pyramid ---
for (let i = n - 1; i >= 1; i--) {
    let rowStr = "";
    // Spaces (Same logic as upper)
    for (let s = 1; s <= (n - i); s++) {
        rowStr += " ";
    }
    // Stars (Same logic as upper)
    for (let j = 1; j <= (2 * i - 1); j++) {
        rowStr += "*";
    }
    console.log(rowStr);
}
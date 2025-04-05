function getElementWidth (content, padding, border) {
    const contentElement = parseFloat(content);
    const paddingElement = parseFloat(padding);
    const borderElement = parseFloat(border);

    const totalWidth = contentElement + 2 * paddingElement + 2 * borderElement;
    return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
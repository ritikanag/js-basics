const RectangleValues = ()=> {
    let length = 5;
    let width = 6;

    let area = length * width;
    let perimeter = 2*(length + width)

    return {area, perimeter}
}
console.log(RectangleValues())
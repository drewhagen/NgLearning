
//TYPE ANNOTATION
let drawPoint = (point: { x: number, y: number}) => {
    // ... a function happens in here
}

//INTERFACE
interface Point {
    x: number,
    y: number
} //reusable... yay!
//since this is a custom type, we use Pascal naming Conventions. Capital P!

let drawPoint = (point: Point) => {
    // ... a function happens in here
}

drawPoint({
    x: 1,
    y: 2
})
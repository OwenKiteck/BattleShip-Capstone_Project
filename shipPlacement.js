// Selecting the ships for choosing locations
let selectedShip;

const fiveLong = document.querySelector(`#five-long`);
const fourLong = document.querySelector(`#four-long`);
const threeLong1 = document.querySelector(`#three-long`);
const threeLong2 = document.querySelector(`#three-long-two`);
const twoLong = document.querySelector(`#two-long`);



fiveLong.addEventListener(`click`, () => {
    selectedShip = `5`;
    console.log(selectedShip);
}); 
fourLong.addEventListener(`click`, () => {
    selectedShip = `4`;
    console.log(selectedShip);
}); 
threeLong1.addEventListener(`click`, () => {
    selectedShip = `3-1`;
    console.log(selectedShip);
}); 
threeLong2.addEventListener(`click`, () => {
    selectedShip = `3-2`;
    console.log(selectedShip);
}); 
twoLong.addEventListener(`click`, () => {
    selectedShip = `2`;
    console.log(selectedShip);
}); 


MF2.addEventListener(`mouseover`, () => {
    // alert(`yup yup`)
    MF2.classList.add(`hover`);

    // MF2.classList.remove(`hover`);
})
MF2.addEventListener(`mouseleave`, () => {
    // alert(`yup yup`)
    MF2.classList.remove(`hover`);

    // MF2.classList.remove(`hover`);
})
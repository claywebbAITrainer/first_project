let garage = [];


function newCar(yearInput, makeInput, modelInput) {
    console.log('in newCar:', yearInput, makeInput, modelInput);
    const newCarObject = {
        year: yearInput,
        make: makeInput,
        model: modelInput
    };
    garage.push(newCarObject);
    return true;
}


$(document).ready(addCarButton);
function addCarButton() {
    $('#addCarButton').on('click', addToGarage);
}


function addToGarage() {
    let year = $('#yearInput').val();
    let make = $('#makeInput').val();
    let model = $('#modelInput').val();
    newCar(year, make, model);
    console.log('Cars in garage:', garage.length);
    console.log('The cars are:', garage);
    $('#yearInput').val('');
    $('#makeInput').val('');
    $('#modelInput').val('');
    $('#addCarButton').on('click', displayCars);
    displayCars();
    calculateTotalCars();
}


function displayCars() {
    let el = $('#carsOut');
    el.empty();
    for (let car of garage) {
        el.append(`<li>` + car.year + `, ` + car.make + ` ` + car.model + `</li>`);
    }
}


function calculateTotalCars() {
    let totalCars = 0;
    for (let i = 0; i < garage.length; i++) {
        totalCars += garage.length;
    }
    let el = $('#carsInGarage');
    el.empty();
    el.append(garage.length);
}
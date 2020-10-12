// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(onePepper => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector('.sauce').classList;
    if (state.whiteSauce) {
      sauce.add('sauce-white');
    } else {
      sauce.remove('sauce-white');
    }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector('.crust').classList;
    if (state.glutenFreeCrust) {
      crust.add('crust-gluten-free');
    } else {
      crust.remove('crust-gluten-free');
    }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  
  const btnPepperoni = document.querySelector('.btn-pepperoni').classList;
  const btnMushrooms = document.querySelector('.btn-mushrooms').classList;
  const btnGreenPeppers = document.querySelector('.btn-green-peppers').classList;
  const btnSauce = document.querySelector('.btn-sauce').classList;
  const btnCrust = document.querySelector('.btn-crust').classList;

  if(state.pepperoni) {
    btnPepperoni.add('active');
  } else {
    btnPepperoni.remove('active');
  }

  if(state.mushrooms) {
    btnMushrooms.add('active');
  } else {
    btnMushrooms.remove('active');
  }

  if(state.greenPeppers) {
    btnGreenPeppers.add('active');
  } else {
    btnGreenPeppers.remove('active');
  }

  if(state.whiteSauce) {
    btnSauce.add('active');
  } else {
    btnSauce.remove('active');
  }

  if(state.glutenFreeCrust) {
    btnCrust.add('active');
  } else {
    btnCrust.remove('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const pizzaPanel = document.querySelector('.panel.price');
  let amount = 0;

  if(state.pepperoni) {
    amount += ingredients.pepperoni.price;
  } else {
    amount -= ingredients.pepperoni.price;
  }

  if(state.mushrooms) {
    amount += ingredients.mushrooms.price;
  } else {
    amount -= ingredients.mushrooms.price;
  }

  if(state.greenPeppers) {
    amount += ingredients.greenPeppers.price;
  } else {
    amount -= ingredients.greenPeppers.price;
  }

  if(state.whiteSauce) {
    amount += ingredients.whiteSauce.price;
  } else {
    amount -= ingredients.whiteSauce.price;
  }

  if(state.glutenFreeCrust) {
    amount += ingredients.glutenFreeCrust.price;
  } else {
    amount -= ingredients.glutenFreeCrust.price;
  }

  pizzaPanel.innerHTML = `
          <h2>Your pizza's price</h2>

          <b>$10 cheese pizza</b>
          <ul>
            <li>$${state.pepperoni ? ingredients.pepperoni.price : 0} pepperoni</li>
            <li>$${state.mushrooms ? ingredients.mushrooms.price : 0} mushrooms</li>
            <li>$${state.greenPeppers ? ingredients.greenPeppers.price : 0} green peppers</li>
            <li>$${state.whiteSauce ? ingredients.whiteSauce.price : 0} white sauce</li>
            <li>$${state.glutenFreeCrust ? ingredients.glutenFreeCrust.price : 0} gluten-free crust</li>
          </ul>
          <strong>$${amount + basePrice}</strong>
  `;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
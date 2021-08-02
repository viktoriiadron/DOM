const ingredients = {
  "cocoa": ["cocoa powder", "milk", "sugar"],
  "cappuccino": ["milk", "coffee"],
  "smoothie": ["banana", "orange", "sugar"],
  "matcha frappe": ["matcha", "milk", "ice"]
};

let ul = document.querySelector('#menu');

ul.addEventListener('click', function menu(e) {
  let li = e.target;
  let key = e.target.innerHTML;
  let ol = document.createElement('ol');
  li.append(ol);
  let array = ingredients[`${key}`];

  for (i = 0; i <= array.length - 1; i++) {
    let li2 = document.createElement('li');
    li2.innerHTML = array[i];
    ol.append(li2);
  }
});

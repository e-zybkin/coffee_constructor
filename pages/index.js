import coffeeType from "../JSON/cofee.json" assert {type: 'json'};
import Card from "../scripts/components/Card.js";

const checkboxes = document.querySelectorAll('.content__flag');
const cardPlace = document.querySelector('.content__card-place');
let components = [];

function createCard(item) {
  const card = new Card(item, '.template__card');
  const view = card.render();
  return view;
}

checkboxes.forEach((item) => {
	console.log(checkboxes)

    item.addEventListener('change', () => {
      if (item.checked) {
        components.push(item.value)
        if(components.length > 4) {
          alert("Нельзя вводить больше 4 ингридиентов");
          components.splice(0);
          checkboxes.forEach((item) => {
            item.checked = false;
          });
        }

        while (cardPlace.firstChild) {
          cardPlace.removeChild(cardPlace.firstChild);
        }

        coffeeType.forEach((item) => {
          let isEqual = JSON.stringify(item.ingredients) === JSON.stringify(components);
          if(isEqual) {
            const card = createCard(item);
            cardPlace.append(card);
          }
        });


      } else {
        const delElement = (element) => element == item.value;
        components.splice(components.findIndex(delElement), 1);

        while (cardPlace.firstChild) {
          cardPlace.removeChild(cardPlace.firstChild);
        }
        coffeeType.forEach((item) => {
          let isEqual = JSON.stringify(item.ingredients) === JSON.stringify(components);
          if(isEqual) {
            const card = createCard(item);
            cardPlace.append(card);
          }
        });
      }
    })
});

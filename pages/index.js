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

function arrayUnique(array) {
  var a = array.concat();
  for(var i=0; i<a.length; ++i) {
      for(var j=i+1; j<a.length; ++j) {
          if(a[i] === a[j])
              a.splice(j--, 1);
      }
  }

  return a;
}

checkboxes.forEach((item) => {
    item.addEventListener('change', () => {
      if (item.checked) {
        components.push(item.value)

        while (cardPlace.firstChild) {
          cardPlace.removeChild(cardPlace.firstChild);
        }

        coffeeType.forEach((item) => {
          if(components.every( e => item.ingredients.includes(e))) {
            if(components.length === item.ingredients.length){
              const card = createCard(item);
              cardPlace.append(card);
            }
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

      let testAnother = [];

      coffeeType.forEach((item) => {
        if(components.length > 0) {
          if(components.every( e => item.ingredients.includes(e))) {
            testAnother = arrayUnique(testAnother.concat(item.ingredients))
          }

          checkboxes.forEach((anotherItem) => {
            if(testAnother.includes(anotherItem.value)){
              anotherItem.disabled = false;
              anotherItem.closest("div").classList.remove('content__choose-item_type_disabled')
            } else {
              anotherItem.disabled = true;
              anotherItem.closest("div").classList.add('content__choose-item_type_disabled')
            }
          })

        } else if (components.length === 0) {
          checkboxes.forEach((anotherItem) => {
            if(item.ingredients.includes(anotherItem.value) === false){
              anotherItem.disabled = false;
              anotherItem.closest("div").classList.remove('content__choose-item_type_disabled')
            }
          })
        }
      })
    })
});

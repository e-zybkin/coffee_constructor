import coffeeType from "../JSON/cofee.json" assert {type: 'json'};
import Card from "../scripts/components/Card.js";

const checkboxes = document.querySelectorAll('.content__flag');
let components = [];

checkboxes.forEach((item) => {
    item.addEventListener('change', () => {
      if (item.checked) {
        components.push(item.value)
        console.log(components)
        if(components.length > 4) {
          alert("Нельзя вводить больше 4 ингридиентов");
          components.splice(0);
          checkboxes.forEach((item) => {
            item.checked = false;
          });
        }
      } else {
        const delElement = (element) => element == item.value;
        components.splice(components.findIndex(delElement), 1);
        console.log(components);
      }
    })
});

switch (components) {

}
coffeeType.forEach((item) => {

})


function createCard(item) {
  const card = new Card(item, '.template__card');
  const view = card.render();
  return view;
}

/*$('input[type="checkbox"]').click(function(){
  if($('#yslygi').prop('checked') && $('#lak').prop('checked')) { //если выбраны оба чекбокса...
      $('img').attr('src','http://vkusnosti.org/uploads/posts/2013-06/1371657136_jagodnij-pirog.jpg');
  }
  else if($('#yslygi').prop('checked')) { //если выбран первый чекбокс...
$('img').attr('src','http://i1.smotra.ru/data/img/galleries/7184/7656/sm_img-41896_980x600.jpg');
  }
  else { //если ни один из чекбоксов не выбран
  	$('img').attr('src','http://enolivier.com/img/frozen-fruit-smoothie/_fullsize/inspirational-frozen-smoothie-fruit-drink-shake-smoothie-shakes_frozen-fruit-smoothie.jpg');
  }
})

switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
}*/

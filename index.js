console.log(" Вёрстка валидная +10\n Вёрстка семантическая +20\n Вёрстка соответствует макету +48\n Требования к css выполнены + 12\n Интерактивность, реализуемая через css +20\n Итоговая оценка: Максимальная оценка за задание 100 баллов")
console.log(' Вёрстка соответствует макету. Ширина экрана 768px +24\n Вёрстка соответствует макету. Ширина экрана 380px +24\n Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n На ширине экрана 380рх и меньше реализовано адаптивное меню +22 (Допускается появление адаптивного меня на ширине более 380, но не допускается на ширине более 770px)\n Итоговая оценка: Максимальная оценка за задание 75 баллов')
console.log(' При нажатии на кнопки:Gardens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50\n Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50\n В разделе contacts реализован select с выбором городов +25\n Итоговая оценка: Максимальная оценка за задание 100 баллов')

document.querySelector('.burger').addEventListener('click', function(){
    document.body.classList.toggle('lock')
    document.querySelector('.burger-menu_overlay').classList.toggle('active');
    document.querySelector('.first').classList.toggle('active');
    document.querySelector('.second').classList.toggle('active');
    document.querySelector('.third').classList.toggle('active');
    document.querySelector('.fourth').classList.toggle('active');
    document.querySelector('.menu').classList.toggle("animate");
  })

document.querySelector('.burger-menu_overlay').addEventListener('click', function () {
    document.body.classList.toggle('lock')
    document.querySelector('.burger-menu_overlay').classList.toggle('active');
    document.querySelector('.first').classList.toggle('active');
    document.querySelector('.second').classList.toggle('active');
    document.querySelector('.third').classList.toggle('active');
    document.querySelector('.fourth').classList.toggle('active');
    document.querySelector('.menu').classList.toggle("animate");
})

document.querySelectorAll('.items').forEach(items => items.addEventListener('click', function () {
    document.body.classList.remove('lock')
    document.querySelector('.burger-menu_overlay').classList.remove('active');
    document.querySelector('.first').classList.remove('active');
    document.querySelector('.second').classList.remove('active');
    document.querySelector('.third').classList.remove('active');
    document.querySelector('.fourth').classList.remove('active');
    document.querySelector('.menu').classList.remove("animate");
}))

let details = document.querySelectorAll("details");


for(i = 0; i < details.length; i++) {
  details[i].addEventListener("toggle", accordion);
}
function accordion(event) {
  if (!event.target.open) return;
  let details = event.target.parentNode.children;
  for(i = 0; i < details.length; i++) {
    if (details[i].tagName != "DETAILS" || !details[i].hasAttribute('open') || event.target == details[i]) continue;
    details[i].removeAttribute("open");
  }
}


const gardenButton = document.querySelector('.garden')
const lawnButton = document.querySelector('.lawn')
const plantingButton = document.querySelector('.planting')


const firstArticle = document.querySelector('.first_article')
const secondArticle = document.querySelector('.second_article')
const thirdArticle = document.querySelector('.third_article')
const fourthArticle = document.querySelector('.fourth_article')
const fifthArticle = document.querySelector('.fifth_article')
const sixthArticle = document.querySelector('.sixth_article')


gardenButton.addEventListener('click', function () {
    secondArticle.classList.toggle('filter')
    thirdArticle.classList.toggle('filter')
    fourthArticle.classList.toggle('filter')
    sixthArticle.classList.toggle('filter')
    gardenButton.classList.toggle('clicked')
    lawnButton.disabled = false;
    gardenButton.disabled = false;
    plantingButton.disabled = false;
  

   if (gardenButton.classList.contains('clicked') && !plantingButton.classList.contains('clicked') && !lawnButton.classList.contains('clicked')) {
      lawnButton.disabled = false;
      gardenButton.disabled = false;
      plantingButton.disabled = false;
    }

     if (plantingButton.classList.contains('clicked') && gardenButton.classList.contains('clicked')) {
        firstArticle.classList.remove('filter')
        secondArticle.classList.remove('filter')
        thirdArticle.classList.add('filter')
        fourthArticle.classList.remove('filter')
        fifthArticle.classList.remove('filter')
        sixthArticle.classList.remove('filter')
        lawnButton.setAttribute("disabled", "disabled");
     }

     if (gardenButton.classList.contains('clicked') && lawnButton.classList.contains('clicked')) {
        firstArticle.classList.remove('filter')
        secondArticle.classList.add('filter')
        thirdArticle.classList.remove('filter')
        fourthArticle.classList.add('filter')
        fifthArticle.classList.remove('filter')
        sixthArticle.classList.add('filter')  
        plantingButton.setAttribute('disabled', 'disabled')
     }

     if (!gardenButton.classList.contains('clicked') && !lawnButton.classList.contains('clicked') && !plantingButton.classList.contains('clicked')) {
        firstArticle.classList.remove('filter')
        secondArticle.classList.remove('filter')
        thirdArticle.classList.remove('filter')
        fourthArticle.classList.remove('filter')
        fifthArticle.classList.remove('filter')
        sixthArticle.classList.remove('filter')
        gardenButton.classList.remove('clicked')
        lawnButton.classList.remove('clicked')
        plantingButton.classList.remove('clicked')
     }    

     if (gardenButton.classList.contains('clicked') && !plantingButton.classList.contains('clicked') && !lawnButton.classList.contains('clicked')) {
      firstArticle.classList.remove('filter')
      secondArticle.classList.add('filter')
      thirdArticle.classList.add('filter')
      fourthArticle.classList.add('filter')
      fifthArticle.classList.remove('filter')
      sixthArticle.classList.add('filter')
     }

     if (plantingButton.classList.contains('clicked') && !gardenButton.classList.contains('clicked') && !lawnButton.classList.contains('clicked')) {
      firstArticle.classList.add('filter')
      secondArticle.classList.remove('filter')
      thirdArticle.classList.add('filter')
      fourthArticle.classList.remove('filter')
      fifthArticle.classList.add('filter')
      sixthArticle.classList.remove('filter')
     }

     if (lawnButton.classList.contains('clicked') && !plantingButton.classList.contains('clicked') && !gardenButton.classList.contains('clicked')) {
      firstArticle.classList.add('filter')
      secondArticle.classList.add('filter')
      thirdArticle.classList.remove('filter')
      fourthArticle.classList.add('filter')
      fifthArticle.classList.add('filter')
      sixthArticle.classList.add('filter')
     }
       
 })

 lawnButton.addEventListener('click', function () {
    firstArticle.classList.toggle('filter')
    secondArticle.classList.toggle('filter')
    fourthArticle.classList.toggle('filter')
    fifthArticle.classList.toggle('filter')
    sixthArticle.classList.toggle('filter')
    lawnButton.classList.toggle('clicked')
    lawnButton.disabled = false;
    gardenButton.disabled = false;
    plantingButton.disabled = false;


   if (lawnButton.classList.contains('clicked') && !plantingButton.classList.contains('clicked') && !gardenButton.classList.contains('clicked')) {
      lawnButton.disabled = false;
      gardenButton.disabled = false;
      plantingButton.disabled = false;
    }

     if (plantingButton.classList.contains('clicked') && lawnButton.classList.contains('clicked')) {
        firstArticle.classList.add('filter')
        secondArticle.classList.remove('filter')
        thirdArticle.classList.remove('filter')
        fourthArticle.classList.remove('filter')
        fifthArticle.classList.add('filter')
        sixthArticle.classList.remove('filter')
        gardenButton.setAttribute('disabled','disabled') 
     }

     if (gardenButton.classList.contains('clicked') && lawnButton.classList.contains('clicked')) {
        firstArticle.classList.remove('filter')
        secondArticle.classList.add('filter')
        thirdArticle.classList.remove('filter')
        fourthArticle.classList.add('filter')
        fifthArticle.classList.remove('filter')
        sixthArticle.classList.add('filter')  
        plantingButton.setAttribute('disabled','disabled')
     }

     if (!gardenButton.classList.contains('clicked') && !lawnButton.classList.contains('clicked') && !plantingButton.classList.contains('clicked')) {
        firstArticle.classList.remove('filter')
        secondArticle.classList.remove('filter')
        thirdArticle.classList.remove('filter')
        fourthArticle.classList.remove('filter')
        fifthArticle.classList.remove('filter')
        sixthArticle.classList.remove('filter')
        gardenButton.classList.remove('clicked')
        lawnButton.classList.remove('clicked')
        plantingButton.classList.remove('clicked')
     }    

     if (gardenButton.classList.contains('clicked') && !plantingButton.classList.contains('clicked') && !lawnButton.classList.contains('clicked')) {
      firstArticle.classList.remove('filter')
      secondArticle.classList.add('filter')
      thirdArticle.classList.add('filter')
      fourthArticle.classList.add('filter')
      fifthArticle.classList.remove('filter')
      sixthArticle.classList.add('filter')
     }

     if (plantingButton.classList.contains('clicked') && !gardenButton.classList.contains('clicked') && !lawnButton.classList.contains('clicked')) {
      firstArticle.classList.add('filter')
      secondArticle.classList.remove('filter')
      thirdArticle.classList.add('filter')
      fourthArticle.classList.remove('filter')
      fifthArticle.classList.add('filter')
      sixthArticle.classList.remove('filter')
     }

     if (lawnButton.classList.contains('clicked') && !plantingButton.classList.contains('clicked') && !gardenButton.classList.contains('clicked')) {
      firstArticle.classList.add('filter')
      secondArticle.classList.add('filter')
      thirdArticle.classList.remove('filter')
      fourthArticle.classList.add('filter')
      fifthArticle.classList.add('filter')
      sixthArticle.classList.add('filter')
     }
       
})

plantingButton.addEventListener('click', function () {
    firstArticle.classList.toggle('filter')
    thirdArticle.classList.toggle('filter')
    fifthArticle.classList.toggle('filter')
    plantingButton.classList.toggle('clicked')
    lawnButton.disabled = false;
    gardenButton.disabled = false;
    plantingButton.disabled = false;

    if (plantingButton.classList.contains('clicked') && !gardenButton.classList.contains('clicked') && !lawnButton.classList.contains('clicked')) {
      lawnButton.disabled = false;
      gardenButton.disabled = false;
      plantingButton.disabled = false;
    }

 

     if (plantingButton.classList.contains('clicked') && gardenButton.classList.contains('clicked')) {
        firstArticle.classList.remove('filter')
        secondArticle.classList.remove('filter')
        thirdArticle.classList.add('filter')
        fourthArticle.classList.remove('filter')
        fifthArticle.classList.remove('filter')
        sixthArticle.classList.remove('filter')
        lawnButton.setAttribute('disabled','disabled')
     }

     if (plantingButton.classList.contains('clicked') && lawnButton.classList.contains('clicked')) {
        firstArticle.classList.add('filter')
        secondArticle.classList.remove('filter')
        thirdArticle.classList.remove('filter')
        fourthArticle.classList.remove('filter')
        fifthArticle.classList.add('filter')
        sixthArticle.classList.remove('filter')  
        gardenButton.setAttribute('disabled','disabled')
     }

     if (!gardenButton.classList.contains('clicked') && !lawnButton.classList.contains('clicked') && !plantingButton.classList.contains('clicked')) {
        firstArticle.classList.remove('filter')
        secondArticle.classList.remove('filter')
        thirdArticle.classList.remove('filter')
        fourthArticle.classList.remove('filter')
        fifthArticle.classList.remove('filter')
        sixthArticle.classList.remove('filter')
        gardenButton.classList.remove('clicked')
        lawnButton.classList.remove('clicked')
        plantingButton.classList.remove('clicked')
     }    

     if (gardenButton.classList.contains('clicked') && !plantingButton.classList.contains('clicked') && !lawnButton.classList.contains('clicked')) {
      firstArticle.classList.remove('filter')
      secondArticle.classList.add('filter')
      thirdArticle.classList.add('filter')
      fourthArticle.classList.add('filter')
      fifthArticle.classList.remove('filter')
      sixthArticle.classList.add('filter')
     }

     if (plantingButton.classList.contains('clicked') && !gardenButton.classList.contains('clicked') && !lawnButton.classList.contains('clicked')) {
      firstArticle.classList.add('filter')
      secondArticle.classList.remove('filter')
      thirdArticle.classList.add('filter')
      fourthArticle.classList.remove('filter')
      fifthArticle.classList.add('filter')
      sixthArticle.classList.remove('filter')
     }

     if (lawnButton.classList.contains('clicked') && !plantingButton.classList.contains('clicked') && !gardenButton.classList.contains('clicked')) {
      firstArticle.classList.add('filter')
      secondArticle.classList.add('filter')
      thirdArticle.classList.remove('filter')
      fourthArticle.classList.add('filter')
      fifthArticle.classList.add('filter')
      sixthArticle.classList.add('filter')
     }
})




blur()



const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
	optionsContainer.classList.toggle("active");
});

optionsList.forEach(option => {
	option.addEventListener("click", () => {
		selected.innerHTML = option.querySelector("label").innerHTML;
		optionsContainer.classList.remove("active");

	});
});






const cityCard = document.querySelector('.text-select')
const city = document.querySelector('.city')
const phone = document.querySelector('.phone')
const address = document.querySelector('.address')
const callButton = document.querySelector('.city-call')
const callNumber = document.querySelector('.call')


optionsList[0].addEventListener('click', () => {
   cityCard.classList.add('active-option')
   city.innerHTML = 'Canandaigua, NY'
   phone.innerHTML = '+1	585	393 0001'
   address.innerHTML = '151 Charlotte Street'
   callButton.addEventListener('click', () => {
      callNumber.setAttribute("href", "tel:+15853930001");
   })
})

optionsList[1].addEventListener('click', () => {
   cityCard.classList.add('active-option')
   city.innerHTML = 'New York City'
   phone.innerHTML = '+1	212	456 0002'
   address.innerHTML = '9 East 91st Street'
   callButton.addEventListener('click', () => {
      callNumber.setAttribute("href", "tel:+12124560002");
   })
})

optionsList[2].addEventListener('click', () => {
   cityCard.classList.add('active-option')
   city.innerHTML = 'Yonkers, NY'
   phone.innerHTML = '+1	914	678 0003'
   address.innerHTML = '511 Warburton Ave'
   callButton.addEventListener('click', () => {
      callNumber.setAttribute("href", "tel:+19146780003");
   })
})

optionsList[3].addEventListener('click', () => {
   cityCard.classList.add('active-option')
   city.innerHTML = 'Sherrill, NY'
   phone.innerHTML = '+1	315	908 0004'
   address.innerHTML = '14 WEST Noyes BLVD'
   callButton.addEventListener('click', () => {
      callNumber.setAttribute("href", "tel:+13159080004");
})
})





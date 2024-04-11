"use strict"

const circle = document.querySelectorAll('.circle');
const rangeValueLabel = document.getElementById('form__value');
const costNumb = document.querySelectorAll('.cost__number')
const button = document.querySelector('.button');

function reetCircle(){
  circle.forEach(e =>{
        let idd = e.id;
    e.classList.remove('targetCircle');
    costNumb[idd].classList.remove('targetCost')
  })
}
circle.forEach(e => {
      let idd = e.id;
  e.addEventListener('click', () => {
    rangeValueLabel.value = e.title;
    reetCircle()
    e.classList.add('targetCircle');
    costNumb[idd].classList.add('targetCost')
  })

  e.addEventListener('mouseover', () => {
    let idd = e.id;
    e.classList.add('hoverCircle');
    costNumb[idd].classList.add('hoverCost')
  })

  e.addEventListener('mouseout', () => {
    let idd = e.id;
    e.classList.remove('hoverCircle');
    costNumb[idd].classList.remove('hoverCost')
  })
});
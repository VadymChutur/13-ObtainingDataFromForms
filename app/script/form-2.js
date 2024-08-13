import serialize from './serialize.js';
const selectRef = document.querySelector('#select-1');
const radioRef = document.querySelectorAll('input[name="rad-1"]');
const formRef = document.querySelector('#send-form');
console.log(formRef);

selectRef.onchange = function () {
  console.log(selectRef.value);
  //   console.log(selectRef.innerHTML);
};

radioRef.onchange = function () {
  console.log(selectRef.value);
};

// formRef.onclick = function (event) {
//   event.preventDefault();
//   const formEL = document.querySelector('form');
//   console.log(serialize(formEL));
// };

formRef.addEventListener('click', (event) => {
  const formEL = document.querySelector('form');
  console.log(formEL);
  event.preventDefault();
  // console.log(event);
  console.log(serialize(formEL));
});

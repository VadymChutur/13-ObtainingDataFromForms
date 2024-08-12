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

formRef.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event);
});

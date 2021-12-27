/* Задание 3 - генератор промисов
  Выполняй это задание в файлах 03-promises.html и 03-promises.js. 
Посмотри демо видео работы генератора промисов.

  В HTML есть разметка формы, в поля которой пользователь будет вводить первую задержку в миллисекундах, 
  шаг увеличения задержки для каждого промиса после первого и количество промисов которое необходимо создать.

<form class="form">
  <label>
    First delay (ms)
    <input type="number" name="delay" required />
  </label>
  <label>
    Delay step (ms)
    <input type="number" name="step" required />
  </label>
  <label>
    Amount
    <input type="number" name="amount" required />
  </label>
  <button type="submit">Create promises</button>
</form>

  Напиши скрипт, который при сабмите формы вызывает функцию createPromise(position, delay) столько раз, 
сколько ввели в поле amount. При каждом вызове передай ей номер создаваемого промиса (position) и 
задержку учитывая введенную пользователем первую задержку (delay) и шаг (step).

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

  Дополни код функции createPromise так, чтобы она возвращала один промис, 
который выполянется или отклоняется через delay времени. Значением промиса должен быть объект, 
в котором будут свойства position и delay со значениями одноименных параметров. 
Используй начальный код функции для выбора того, что нужно сделать с промисом - выполнить или отклонить.

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

Библиотека уведомлений

Для отображения уведомлений пользователю вместо console.log() используй библиотеку notiflix.

 */
//================= Инициализация  =====================================//
const refs = {
  delayField : document.querySelector('.form input'),
  stepField : document.querySelector('.form').children[1].firstElementChild,
  amountField : document.querySelector('.form').children[2].firstElementChild,
  submitButton : document.querySelector('.form button')
}
//================= Методы  =====================================//
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

const submitButtonHandler = (event) => {
  event.preventDefault();
  console.log(refs.delayField.value);
  console.log(refs.stepField.value);
  console.log(refs.amountField.value);
}
//================= Actions  =====================================//
refs.submitButton.addEventListener('click' , submitButtonHandler);

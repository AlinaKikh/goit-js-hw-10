import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const delay = Number(this.elements.delay.value);
  const state = this.elements.state.value;

  console.log(`Delay: ${delay}, State: ${state}`); // Додано для перевірки

  if (!delay || !state) {
    console.error('Помилка: не вибраний стан або не вказана затримка!');
    return;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: '',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
      console.log(`✅ Fulfilled promise in ${delay}ms`);
    })
    .catch(delay => {
      iziToast.error({
        title: '',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
      console.log(`❌ Rejected promise in ${delay}ms`);
    });
});

import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import"./assets/styles-l0sNRNKZ.js";import"./assets/vendor-CZ4EWmTT.js";document.querySelector(".form").addEventListener("submit",function(s){s.preventDefault();const t=Number(this.elements.delay.value),o=this.elements.state.value;if(console.log(`Delay: ${t}, State: ${o}`),!t||!o){console.error("Помилка: не вибраний стан або не вказана затримка!");return}new Promise((e,i)=>{setTimeout(()=>{o==="fulfilled"?e(t):i(t)},t)}).then(e=>{window.alert(`✅ Fulfilled promise in ${e}ms`),console.log(`✅ Fulfilled promise in ${e}ms`)}).catch(e=>{window.alert(`❌ Rejected promise in ${e}ms`),console.log(`❌ Rejected promise in ${e}ms`)})});
//# sourceMappingURL=2-snackbar.js.map

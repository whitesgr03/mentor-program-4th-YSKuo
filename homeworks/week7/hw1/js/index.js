const element = document.querySelector('.form');
element.addEventListener('submit', (e) => {
  const inputOfNickname = document.querySelector('input[name=nickname]');
  const inputOfEmail = document.querySelector('input[name=email]');
  const inputOfPhone = document.querySelector('input[name=phone]');
  const inputOfType = document.querySelector('input[name=type]');
  /* radio 的 value 有預設值，
  之後參考 Huli 應該有更好的方法處理它 */

  const inputOfReferal = document.querySelector('input[name=referal]');

  const arr = [inputOfNickname, inputOfEmail, inputOfPhone, inputOfReferal];
  // 每個 input 都慢慢抓有點沒效率

  for (const input of arr) {
    if (!input.value) {
      input.parentNode.classList.add('warning');
      e.preventDefault();
    }
  }

  if (arr.reduce((
    (ac, input) => ac && input.value), true)) {
    alert(`
      暱稱： ${inputOfNickname.value} \n
      電子郵件： ${inputOfEmail.value} \n
      手機號碼： ${inputOfPhone.value} \n
      報名類型： ${inputOfType.value} \n
      怎麼知道這個活動的： ${inputOfReferal.value} \n
      其他： ${document.querySelector('input[name=suggestion]').value}
      `);
  }
});

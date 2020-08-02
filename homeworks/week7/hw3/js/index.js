// escape 把那些會被瀏覽器判別為標籤的字處理成純字串
/* eslint-disable */
function escapeHTML(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
/* eslint-enable */

// 新增項目的函式
const addListItem = () => {
  const input = document.querySelector('div.list__input > input').value;
  const div = document.createElement('div');
  div.classList.add('list__item');
  div.innerHTML = `
    <label class="list__item-desc">
      <input type="checkbox" class="list__item-checkbox"/>
      ${escapeHTML(input)}
    </label>
    <button class="list__item-delete" type="button">
      <span class="icon-cross"></span>
    </button>
  `;
  document.querySelector('.list').appendChild(div);
  document.querySelector('div.list__input > input').value = '';
};

document.querySelector('.list').addEventListener('click', (e) => {
  // 新增項目
  if (e.target.classList.contains('list__input-btn')
    && document.querySelector('div.list__input > input').value) {
    // 輸入欄有值的時候才能新增項目
    addListItem();
  }

  // 刪除項目
  if (e.target.classList.contains('list__item-delete')
    || e.target.classList.contains('icon-cross')) {
    document.querySelector('.list')
      .removeChild(e.target.closest('.list__item'));
  }

  // 點 Checkbox 效果
  if (e.target.classList.contains('list__item-checkbox')) {
    e.target.closest('.list__item')
      .querySelector('.list__item-desc')
      .classList.toggle('list__item-desc-Checked');
  }
});

// 按下 Enter 來新增項目
document.querySelector('.list__input').addEventListener('keydown', (e) => {
  // 新增項目
  if (e.keyCode === 13 && document
    .querySelector('div.list__input > input').value) {
    // 判斷式前者是 Enter 的 keyCode
    addListItem();
  }
});

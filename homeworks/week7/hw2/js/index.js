const element = document.querySelector('ol');

element.addEventListener('click', (e) => {
  if (e.target.classList.contains('section__question')) {
    const answerClassList = e.target.closest('.section__text')
      .querySelector('.section__answer').classList;

    if (answerClassList.contains('visible')) {
      answerClassList.toggle('visible');
    } else {
      document.querySelectorAll('.section__answer').forEach(ans => ans.classList.remove('visible'));
      // 把所有的 visible 拿掉

      answerClassList.toggle('visible');
      // 點到的那個放入 visible
    }
  }
});

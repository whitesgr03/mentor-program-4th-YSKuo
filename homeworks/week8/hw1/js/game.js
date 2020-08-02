const prizes = {
  FIRST: {
    resultText: '恭喜你中頭獎了！日本東京來回雙人遊！',
    resultClass: 'section__game-bg-prize-1st',
  },
  SECOND: {
    resultText: '二獎！90 吋電視一台！',
    resultClass: 'section__game-bg-prize-2nd',
  },
  THIRD: {
    resultText: '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！',
    resultClass: 'section__game-bg-prize-3rd',
  },
  NONE: {
    resultText: '銘謝惠顧',
    resultClass: 'section__game-bg-prize-none',
  },
};

const section = document.querySelector('.section__game');

const showResult = (prize) => {
  const result = document.createElement('div');
  result.classList.add('half-opacity-cover');
  result.classList.add('section__game-bg');
  result.classList.add(`${prizes[prize].resultClass}`);
  result.innerHTML = `
    <div class="section__game-result" >
      <p class="section__game-prize-title">${prizes[prize].resultText}</p>
      <button class="section__game-btn">我要抽獎</button>
    </div> 
  `;
  section.removeChild(document.querySelector('.section__game-bg'));
  section.appendChild(result);
};

const askResponse = () => {
  const request = new XMLHttpRequest();
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      alert('開獎！');
      showResult(JSON.parse(request.responseText).prize);
    } else {
      console.log(request.status, request.responseText);
    }
  };
  request.onerror = function () {
    alert('系統不穩定，請再試一次');
  };
  request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true);
  request.send();
};

section.addEventListener('click', (e) => {
  if (e.target.classList.contains('section__game-btn')) {
    askResponse();
    // eslint-disable-next-line
    javascript:scroll(0, 0);
  }
});

document.querySelector('html').addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    askResponse();
    // eslint-disable-next-line
    javascript:scroll(0, 0);
  }
});

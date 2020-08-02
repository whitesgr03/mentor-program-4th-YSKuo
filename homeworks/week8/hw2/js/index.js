const ID = 'x7y521n6qqt75hqyrbu5pdz1k9kuse';

const renderGameName = (obj) => {
  const list = document.querySelector('ul.navbar__list');
  const listItem = document.createElement('li');
  listItem.innerHTML = `
  ${obj.game.name}
  `;
  list.appendChild(listItem);
};

const renderStreamBlock = (stream) => {
  const streams = document.querySelector('.section__streams');
  const sectionOfStream = document.createElement('a');
  sectionOfStream.classList.add('section__stream');
  sectionOfStream.innerHTML = `
    <a href=${stream.channel.url} target="_blank">
      <img src=${stream.preview.medium} alt="" class="section__stream-preview" />
    </a>
    <div class="section__stream-author-info">
      <a href="#">
        <img src=${stream.channel.logo} alt="" class="section__stream-author-logo" />
      </a>
      <div class="section__stream-author-text">
        <a href=${stream.channel.url} target="_blank" class="section__stream-author-status">${stream.channel.status}</a>
        <a href=${stream.channel.url} target="_blank" class="section__stream-author-name">${stream.channel.display_name}</a>
      </div>
    </div>
  `;
  streams.appendChild(sectionOfStream);
};

const info = {
  games: {
    url: 'https://api.twitch.tv/kraken/games/top',
    quertString: 'limit=5',
    parseRequest: 'top',
    rendering: renderGameName,
  },
  streams: {
    url: 'https://api.twitch.tv/kraken/streams/',
    quertString: '',
    qsParams: {
      limit: '20',
      game: '',
      offset: 0,
    },
    parseRequest: 'streams',
    rendering: renderStreamBlock,
    channel: [],
    currentStreamsNum: 0,
  },
};

const askResRendering = (type) => {
  const request = new XMLHttpRequest();
  request.addEventListener('load', () => {
    if (request.status >= 200 && request.status < 400) {
      const { parseRequest } = type;
      const arr = JSON.parse(request.responseText)[parseRequest];

      for (const obj of arr) {
        type.rendering(obj);
      }

      if (type === info.streams && arr.length < 20) {
        console.log(arr);
        document.querySelector('.section__show-more').classList.remove('visible');
      }
    } else {
      console.log(request.status, request.responseText);
    }
    request.onerror = function () {
      console.log('error');
    };
  });
  request.open('GET', `${type.url}?${type.quertString}`, true);
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
  request.setRequestHeader('Client-ID', ID);
  request.send();
};

const clickGameBtn = (game) => {
  info.streams.qsParams.game = game;
  info.streams.quertString = `limit=${info.streams.qsParams.limit}&game=${game}`;
  info.streams.currentStreamsNum = 20;
  document.querySelector('.section__streams').innerHTML = '';
  document.querySelector('.section__game-name').innerText = game;
  document.querySelector('.section__desc').innerText = '';
  document.querySelector('.section__desc').innerText = 'Top 20 popular live streams sorted by current viewers';
  askResRendering(info.streams);
  document.querySelector('.section__show-more').classList.add('visible');
};

const clickShowMoreBtn = () => {
  info.streams.qsParams.offset += 20;
  info.streams.quertString = `limit=${info.streams.qsParams.limit}&game=${info.streams.qsParams.game}&offset=${info.streams.qsParams.offset}`;
  info.streams.currentStreamsNum += 20;
  document.querySelector('.section__desc').innerText = `Top ${info.streams.currentStreamsNum} popular live streams sorted by current viewers`;
  askResRendering(info.streams);
};

// rendering navbar
askResRendering(info.games);

// clicking event
document.querySelector('.navbar__list').addEventListener('click', (e) => {
  clickGameBtn(e.target.innerText);
});

document.querySelector('.section__show-more').addEventListener('click', () => {
  clickShowMoreBtn();
});

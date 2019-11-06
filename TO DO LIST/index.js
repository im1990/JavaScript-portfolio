// リストをクリックすると'checked'クラスがトグルする
const lists = document.querySelector('ul');
lists.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);

// リストを追加する関数
const newElement = function() {
  const createli = document.createElement('li');
  const inputData = document.getElementById('list-input-area').value;
  const text = document.createTextNode(inputData);

  // listタグにinputに入れた文字を反映させる
  createli.appendChild(text);

  // inputが空欄の場合はアラートを出す
  if(inputData === '') {
    alert('Please input what to do!');
  // inputが空欄でない場合は、リスト表示エリアにリストを追加する
  } else {
    lists.appendChild(createli);
    createli.classList.add('parent');
  }

  // inputの中身をリセットする
  document.getElementById('list-input-area').value = '';


  // xマーク（削除ボタン）を追加する
  const span = document.createElement('span');
  span.classList.add('close');
  const batsu = document.createTextNode('\u00D7');
  span.appendChild(batsu);
  createli.appendChild(span);

  // xマークのイベント
  const close = document.getElementsByClassName('close');
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      const parentEl = this.parentElement;
      parentEl.style.display = 'none';
    }
  }
}

// 「add」ボタンをクリックするとリストが追加される
document.querySelector('.add-btn').addEventListener('click', newElement);

// インプットエリアでEnterを押すとリストが追加される
document.getElementById("list-input-area").addEventListener('keypress', e => {
  if(e.key === 'Enter') {
    newElement();
  }
});

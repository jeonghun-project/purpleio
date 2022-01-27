const getURL = document.querySelector('#textInput');
const form = document.querySelector('#myForm');
const headers = document.querySelector('body');

let myFunc;

function drawTable(response) {
  const existTable = document.querySelector('.table-container');
  if (existTable) existTable.remove();
  console.log(response);
  const container = document.createElement('div');
  container.className = 'table-container';

  for (const key in response) {
    const row = document.createElement('tr');
    const left = document.createElement('td');
    const right = document.createElement('td');

    row.className = 'row-container';

    left.textContent = key;
    right.textContent = response[`${key}`];

    if (key === 'html') {
      const textEle = document.createElement('div');
      textEle.textContent = response[`${key}`];
      right.innerHTML = response[`${key}`];
      Array.from(right.querySelectorAll('script')).forEach((oldScript) => {
        const newScript = document.createElement('script');
        Array.from(oldScript.attributes).forEach((attr) =>
          newScript.setAttribute(attr.name, attr.value),
        );
        newScript.appendChild(document.createTextNode(oldScript.innerHTML));
        oldScript.parentNode.replaceChild(newScript, oldScript);
      });
      right.prepend(textEle);
    } else if (key === 'thumbnail_url') {
      right.textContent = '';
      const imageEle = document.createElement('img');
      const textEle = document.createElement('div');
      textEle.textContent = response[`${key}`];
      imageEle.src = response[`${key}`];
      right.append(textEle, imageEle);
    }

    row.append(left, right);
    container.append(row);
  }

  headers.append(container);
}

try {
  myFunc = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/oembed', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        url: getURL.value,
      }),
    }).then((data) => {
      return data.json();
    });
    drawTable(res);
  };
} catch (Err) {
  console.log(Err);
}

if (form) {
  form.addEventListener('submit', myFunc);
}

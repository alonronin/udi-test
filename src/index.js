import contacts from './contacts';

const ul = document.createElement('ul');
document.body.append(ul);

const css = `
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  ul ul {
    padding-left: 20px;
  }
  
  a {
    display: block;
    padding: 5px;
    text-decoration: none;
    cursor: pointer;
    color: #333;
  }
  
  a:hover {
    background: lightblue;
  }
  
  a[href] {
    font-weight: bold;
  }
`;

const style = document.createElement('style');
style.innerText = css;
document.head.append(style);

const renderItems = (items, el) => {
  items.forEach(({ name, contacts }) => {
    const li = document.createElement('li');

    if (contacts) {
      const a = document.createElement('a');
      a.innerText = name;
      a.href = '';

      a.addEventListener('click', e => {
        e.preventDefault();

        const children = li.querySelectorAll('ul');
        if (children.length) return children.forEach(item => item.remove());

        const ul = document.createElement('ul');
        li.append(ul);

        renderItems(contacts, ul);
      });

      li.append(a);
    } else {
      const a = document.createElement('a');
      a.innerText = name;

      li.append(a);
    }

    el.append(li);
  })
};

renderItems(contacts, ul);

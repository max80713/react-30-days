let index = 0;

setInterval(() => {
  index += 1;
  const li = React.createElement('li', {}, '第一項'); 
  const li2 = React.createElement('li', {}, '第二項'); 
  const li3 = React.createElement('li', {}, index); 

  const ul = React.createElement('ul', {}, li, li2, li3);

  ReactDOM.render(ul, document.getElementById('root'));
}, 1000);


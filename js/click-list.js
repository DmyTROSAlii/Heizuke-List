const list = document.querySelectorAll('.item-top');
let index = 0;

list.forEach((item, i) => {
  item.addEventListener('click', () => {
    if (index !== i) {
      list[index].classList.remove('active');

      item.classList.add('active');
      index = i;
    }
  })
})

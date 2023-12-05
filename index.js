let wrap  = document.querySelectorAll('.wrap');
let points = document.querySelectorAll('.point');
let items = document.querySelectorAll('.item');
let right = document.getElementById('rightButton');
let left = document.getElementById('leftButton');

let index = 4

function clearActive () {
  for (let i = 0; i < items.length; i++) {
    items[i].className = 'item';
  }
  for (let i = 0; i < points.length; i++) {
    points[i].className = 'point';
  }
}

function goIndex(newIndex) {
  clearActive();

  console.log(items[newIndex])
  items[newIndex].className = 'item active';
  points[newIndex].className = 'point active';
}
function goLeft() {
  if (index === 0 ) {
    index = 4;
  } else {
    index--;
  }
  goIndex(index);
}
function goRight() {
  if (index < 4 ) {
    index++;
  } else {
    index = 0;
  }
  goIndex(index);
}

// 点击按钮实现图片跳转
left.addEventListener('click', () => {
  goLeft();
});
right.addEventListener('click', () => {
  goRight()
});
// 点击小圆点，跳转对应图片
points.forEach(point => {
  point.addEventListener('click', () => {
    let index = point.getAttribute("data-index")
    goIndex(index)
  })
})

for (let i = 0; i < items.length; i++) {

}
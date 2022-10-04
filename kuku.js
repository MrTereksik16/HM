//document.addEventListener('keydown', (e) => {
//if (e.code === 'KeyEnter') {
 //"выполнить действие при нажатии клавишы Enter"
// window.location.href += b;
 //}
//});
  
  


function prepare(text) {
  return "<li>" + text.split() + "</li>";
}
function kus(ku) {
  return document.querySelector(ku);
}

kus("button").addEventListener("click", function () {
  let b = kus(".bruh").value;
  kus(".bro").insertAdjacentHTML("beforeEnd", prepare(b));
});

let button = document.querySelector('.btn');
let titleform = document.querySelector('.text-for-btn');
let textnew = document.querySelector('.textnew');

button.onclick = function () {
    titleform.outerHTML = textnew.innerHTML;
};
let today = new Date();
let formatData = today.toDateString();
let selectElement = document.getElementById('date');

selectElement.innerHTML = formatData;
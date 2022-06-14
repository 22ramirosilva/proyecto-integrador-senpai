

//--------------------CARROUSEL
const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');

punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener('click', () => {

        let posicion = i
        let operacion = posicion * -(100 / 3)

        grande.style.transform = `translateX(${operacion}%)`

        punto.forEach((cadaPunto, i) => {
            punto[i].classList.remove('activo')
        });
        punto[i].classList.add('activo')
    });
});




//---------------------MODAL
let modal = document.getElementById("myModal");

let btn = document.getElementById("btn_ingresar");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

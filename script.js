// const switcher = (el) => {

//     var nav = document.querySelectorAll('.nav-item')
//     nav.forEach((ch) =>{
//         var name = ch.classList

// if(name .includes("active")){

//   alert('nyc')
// }
//     })
// }

const modalzoom = () =>{
    var modal = document.getElementById('modelId')
    modal.style.animation = 'animateModal 2s forwards'
}

const modalout = () =>{
    var modal = document.getElementById('modelId');
    modal.style.animation = 'animateModout 2s forwards'
    setTimeout(() => {


        window.location.href = 'index.html';
    }, 2000);

}
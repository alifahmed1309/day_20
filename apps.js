
    let push = document.querySelector(".cng_btn");

    push.addEventListener("click", function () {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);

        let randomColor = `rgb(${red}, ${green}, ${blue})`;
        document.body.style.backgroundColor = randomColor;
    });






let range = document.querySelector('.line');
let heading = document.querySelector('h1');

range.addEventListener("input", function(){

    let currentValue = range.value;

    console.log(heading.innerHTML = currentValue);
    
});




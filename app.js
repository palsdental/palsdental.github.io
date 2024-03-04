(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

    setInterval(img,10000);
    let x = 1;
    function img(){
    if((x%2)===0){
        document.querySelector('#photo2').style.display = "none";
        document.querySelector('#photo1').style.display = "block";
    }
    else{
        document.querySelector('#photo1').style.display = "none";
        document.querySelector('#photo2').style.display = "block";
    };
    x++}; 
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();





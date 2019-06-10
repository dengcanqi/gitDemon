window.addEventListener("load", function () {
    var btn = document.querySelector("#btn");
    var btn01 = document.querySelector("#btn01");
    var box = document.querySelector(".box");
    btn.addEventListener("click", function () {
        // console.log(111);
        box.style.backgroundColor = "skyblue"
        box.style.width = "500px"
        box.style.height = "500px"
    });
    btn01.addEventListener('click', function () {
        this.classList.add('btnColor')
    })
})
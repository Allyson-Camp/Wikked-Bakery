window.onload = function () {
    const h1 = document.querySelector("h1");
    h1.onmouseover = function () {
        window.alert("working");
    };

    const lightBtn = document.querySelector(".lightBtn");
    lightBtn.onclick = function () {
        document.body.style.backgroundColor = "red";
        document.body.style.color = "green";
    };
    //querySelector can work when selecting an element itself or if you target a class by using the .
    // const lightBtn = document.getElementById("lightBtn");
    // lightBtn.onclick = function () {
    //     document.body.style.backgroundColor = "red";
    //     document.body.style.color = "black";
    // };
};

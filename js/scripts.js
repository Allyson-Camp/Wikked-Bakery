window.onload = function () {
    const h1 = document.querySelector("h1");
    h1.onmouseover = function () {
        window.alert("working");
    };

    const lightBtn = document.querySelector(".lightBtn");
    lightBtn.onclick = function () {
        document.body.style.backgroundColor = "red";
        document.body.style.fontSize = "100px";
    };

    const darkBtn = document.querySelector(".darkBtn");
    darkBtn.onclick = function () {
      document.body.style.fontSize = "10px";
      document.body.style.backgroundColor = "purple";
    }
    //querySelector can work when selecting an element itself or if you target a class by using the .
    // const lightBtn = document.getElementById("lightBtn");
    // lightBtn.onclick = function () {
    //     document.body.style.backgroundColor = "red";
    //     document.body.style.color = "black";
    // };
};

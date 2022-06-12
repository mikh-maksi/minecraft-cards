function element(x, z) {
    let left = (x + 5) * 50;
    let top = (z + 5) * 50;
    let stl = "top:" + top + "px;" + "left:" + left + "px;";

    let el = document.createElement("div");
    el.innerHTML = "(" + x + ";" + z + ")";
    el.setAttribute("style", stl);
    wrapper.appendChild(el);
}

function elements(x1, z1, x2, z2) {
    for (let i = x1; i <= x2; i++) {
        for (let j = z1; j <= z2; j++) {
            element(i, j);
        }
    }
}




elements(-2, -3, -2, 3);
elements(2, -3, 2, 3);


element(-1, -2);
element(0, -1);
element(1, -2);
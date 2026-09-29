function changeFigures(color) {

    const figures = document.querySelectorAll(".figure");

    figures.forEach(function(figure) {
        figure.style.backgroundColor = color;
    });

}


function changeBackground(color) {

    document.body.style.backgroundColor = color;

}
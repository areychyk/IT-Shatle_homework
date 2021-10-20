// Задание 1_________________________________________

// попробуем при помощи обработчика событий скрывать выпадающее меню при наведении на любой из элементов навигации (пункты меню).


let ul = document.getElementById ("ul");

const liElement = document.getElementsByClassName ("li");

for ( let index = 0; index < liElement.length; index++){
    liElement[index].addEventListener ("mouseenter", function(){
        ul.style.display = 'none';
    });
}


// Задание 2_________________________________________
// Создать 2 кнопки со значениями удалить и добавить. При нажатии кнопки добавить на страницу добавляется элемент с каким-либо текстом. Добавлять можно сколько угодно раз. При нажатии кнопки удалить - удаляется последний добавленный элемент.


let btn1 = document.getElementById ("Btn1");
let btn2 = document.getElementById ("Btn2");

let ul = document.createElement ('ul');
document.body.append (ul)



    btn1.addEventListener ("mousedown" , () => {
        let li = document.createElement ('li');
        li.innerText = "Text";
        ul.append (li);

  
    });

    btn2.addEventListener ("mousedown" , () => {
        let liDel = document.querySelector ("li");
        liDel.remove ();
        
    });

//Задание 3--------------не совсем получается
// Создание геометрических фигур

// Реализовать функцию drawFigure, которая принимает в качестве аргументов: название геометрической фигуры, цвет заливки, положение от верхнего края страницы (css свойство top)  и положение от левого края страницы (css свойство left), а также радиус, если это круг, сторону, если квадрат и ширину и высоту, если прямоугольник. Вызывать функцию при нажатии на соответствующие клавиши, например круг - Q, квадрат - W и тд
 
// Пример использования: drawFigure(‘круг’, ‘red’, 100, 200, 40); 
// рисует красный круг с радиусом 40px и на расстоянии 100px от верхнего 200px от левого края 

function drawFigure (fig, background, top, left, width){
    let figure = document.createElement ("div");
    figure.classList.add ('element')


figure.innerText = fig;
figure.style.background = background;
figure.style.top = top + "px";
figure.style.left = left + "px";
figure.style.width = width + "px";
    if (figure.innerText = 'круг'){
        const drawFigures = function (width, height, borderRadius){
            figure.style.width = width + "px",
            figure.style.height = height + "px",
            figure.style.borderRadius = borderRadius / 2 + "px";  
            drawFigures ()
           }
    
} 

figure.style.position = "fixed";
document.body.append (figure);
}


document.addEventListener ('keydown', function (event){
    if (event.code == 'KeyQ'){
        drawFigure("круг", "red", 100, 100, 50)
        console.log ("Круг")
    }
    if (event.code == 'KeyW'){
        drawFigure("квадрат", "blue", 150, 200, 50)
        console.log ("Квадрат")
    }
    if (event.code == 'KeyE'){
        drawFigure("прямоугольник", "green", 200, 300, 100)
        console.log ("Прямоугольник")
    }
})

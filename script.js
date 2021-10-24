//   ______________   dz_7___________________________


//Задание 1___________

// Создать форму в HTML с 2 полями ввода и кнопкой отправки. Получить эту форму на событие отправки этой формы (т е нажатие кнопки), сделать кнопку неактивной и очистить форму

const form = document.forms["form"];
const button = form.elements ["submit"];
const input1 = form.elements["text1"];
const input2 = form.elements["text2"];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(input1.value);
  console.log(input2.value);
  button.disabled = true;
});



//Задание 2___________

// Создать форму в HTML с полем ввода и кнопкой отправки, на submit формы менять значение поля ввода на произвольное

const form = document.forms["form"];
const button = form.elements ["submit"];
const input1 = form.elements["text2"];


form.addEventListener("submit", function (event) {
  event.preventDefault();
  input1.value = "bla" ;
});


//Задание 3___________

// Создать форму в HTML с полем ввода, несколькими checkbox и кнопкой отправки. На submit формы вывести значения поля ввода и имена всех отмеченных полей checkbox.

const form = document.forms["form"];
const button = form.elements ["submit"];
const input1 = form.elements["text1"];
const input2 = form.elements["checkbox1"];
const input3 = form.elements["checkbox2"];
const select = form.elements["select"];


form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (input2.checked){
          input1.value = "Первый включён" ;
          console.log (input1.value = "Первый включён");
    }
    if (input3.checked){
      input1.value = "Второй включён" ;
      console.log (input2.value = "Второй включён");
  }
  console.log (input1.value);
  });

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (document.getElementById('checkbox1').checked){
        input1.value = "Первый включён" ;
  }else{
    input1.value = "Первый вылючён" ;
  }
  if (document.getElementById('checkbox2').checked){
    input1.value = "Второй включён" ;
}else{
    input1.value = "Второй вылючён" ;
  }
  
});


// Задание 4________

//   Создать форму в HTML с полем ввода и кнопкой отправки. На submit формы, если поля ввода пустое, делать фокус на поле ввода.


const form = document.forms["form"];
const button = form.elements ["submit"];
const input1 = form.elements["text1"];


form.addEventListener("submit", function (event) {
  event.preventDefault();
  input1.value = "";
  input1.focus ();
});




// Задание 5________

// Создать форму в HTML с полями для ввода имени, фамилии, телефона и сообщения. Для поля телефона задать максимальное количество символов 13, сообщение может быть большим. При submit формы создавать объект со всеми значениями формы и выводить его.


const form = document.forms["form"];
const button = form.elements ["submit"];
const input1 = form.elements["text1"];
const input2 = form.elements["text2"];
const input3 = form.elements["text3"];
const input4 = form.elements["text4"];


form.addEventListener("submit", function (event) {
  event.preventDefault();
  let user = {
      Имя: input1.value,
      Фамилия: input2.value,
      Телефон: input3.value,
      Сообщение: input4.value,
  };

  console.log (user);
});




// Задание 1________

// Создать калькулятор расхода и дохода. Пользователь вводит число в поле ввода и выбирает с помощью radio кнопки доход это или расход. На нажатие кнопки нужно рассчитать текущее значение счета,  а также отрисовать  столбики диаграммы дохода и расхода разными цветами. При нажатии кнопки поля ввода очищаются



const form = document.forms["form"];
const button = form.elements ["submit"];
const input1 = form.elements["text1"];
const input2 = form.elements["radio1"];
const input3 = form.elements["radio2"];
const numbers = [];
const resultNumbers = [];


// //не получается с расходом и доходом, при расходе или доходе отнимает все числа из массива

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let sum = 4;
    if (input2.checked){
        numbers.push(Number(input1.value));
        for (i=0; i<numbers.length; i++){
            sum = sum + numbers [i];
        }
    let div = document.createElement ('div');
    div.innerText = "Доход: " + sum;
    document.body.append (div)
    div.style.backgroundColor = "blue";
    div.style.margin = "10px";
    div.style.width = sum*50 + "px";
    }
    
    if (input3.checked){
        numbers.push(Number(input1.value));
        for (i=0; i<numbers.length; i++){
       sum = sum - numbers[numbers.length -1];
        }
    let div2 = document.createElement ('div');
    div2.innerText = "Расход: " + sum;
    document.body.append (div2)
    div2.style.backgroundColor = "green";
    div2.style.margin = "10px";
    div2.style.width = sum*50 + "px";
    }
    console.log (sum);
  });



// Задание 2________

//   Создать функцию, которая создает модальное окно с вопросом о имени и возрасте пользователя. Поля обязательные для заполнения. В окне 2 кнопки - отмена и добавить. При нажатии отмены, окно закрывается, при нажатии на добавить, проверяется, если возраст больше 18, то на странице появляется новый элемент списка с именем и возрастом пользователя, если нет выводится красное текстовое сообщение. 
//   Функция вызывается на нажатие кнопки - Добавить пользователя

const form_user = document.forms["user"];
const button1 = form_user.elements ["user_button"];

const form = document.forms["form"];
const add = form.elements ["add"];
const cancell = form.elements ["cancell"];
const nameUser = form.elements["nameUser"];
const years = form.elements["years"];

let btn = document.getElementById ("myBtn")
let modal = document.getElementById ("myModal");

btn.onclick = function (){
    modal.style.display = "block";
}
cancell.onclick = function (){
    modal.style.display = "none";
}

form.addEventListener ("submit", function (event){
    event.preventDefault(); 
    if (years.value >=18){
    }
    let div = document.createElement ('div');
    div.innerText ="Имя: " + nameUser.value;
    document.body.append (div)
    let div2 = document.createElement ('div');
    div2.innerText ="Возраст: " + years.value;
    document.body.append (div2)
    
    if (years.value <18){
        let div3 = document.createElement ('div');
        div3.innerText ="Еще мал!!!";
        div3.style.backgroundColor = "red";
        div3.style.textAlign = "center";
        div3.style.fontSize = "50px";

        document.body.append (div3)
    }
});




// Задание 3 ________
// Создать собственную валидацию поля емейл:
// При потере фокуса или отправке формы, проверять с помощью регулярного выражения значение поля email и показывать ошибку, если оно не соответствует

const form = document.forms["form"];
const button = form.elements ["submit"];
const input1 = form.elements["text1"];

form.addEventListener ("submit"&&"change", function (event){
    event.preventDefault();
    if (input1.value == "Text@mail.ru"){
        alert("True") 
    }
    if (input1.value !== "Text@mail.ru"){
        alert("Error") 
    }

});


// Задание 4 ________

// Создать функцию, которая создает геометрическую фигуру, данные о фигуре из формы - можно выбрать форму фигуры, ввести цвет, размеры, положение на странице. Если выбран круг, то появляется поле ввода радиуса, если квадрат, то сторона, если прямоугольник, то 2 поля размера.
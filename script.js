// Тема DOM 
//Задание 1_____________

// Создать элемент p с классом “text” и с текстом - “Это всего лишь текст”, после него вставьте div с классом “alert” и с текстом “А это сообщение об ошибке” с красным фоном, белым текстом и полями (padding) размером 20px


let p = document.createElement ("p");
p.className = "text";
p.innerText = "Это всего лишь текст";

let div = document.createElement ("div");
div.className = "alert";
div.innerText = "А это сообщение об ошибке";
div.style.background = "red";
div.style.color = "blue";
div.style.padding = "20px";

document.body.append (p);
document.body.after (div);

p.after (div);



//Задание 2_____________
// Создать список элементов с помощью тега <ol> со значениями из массива строк: ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry", "Sergey", "Ivan", "Alan"]
// Каждый четный элемент должен иметь css класс “even” и иметь зеленый фон, а нечетный - “odd” и иметь синий фон.
// *Если это пользователь, у которого в имени встречаются минимум 2 одинаковые буквы без учета регистра (например, Peter, Tatiana) - цвет текста должен стать белым.



let test=document.createElement('section');
test.setAttribute('id','test');

let ol=document.createElement('ol');


document.body.appendChild(test);
test.appendChild(ol);

let li_1 = document.createElement ('li');
li_1.innerText = "Viktor";
ol.append (li_1);
let li_2 = document.createElement ('li');
li_2.innerText = "Tatiana";
ol.append (li_2);
let li_3 = document.createElement ('li');
li_3.innerText = "Eduard";
ol.append (li_3);
let li_4 = document.createElement ('li');
li_4.innerText = "Michael";
ol.append (li_4);
let li_5 = document.createElement ('li');
li_5.innerText = "Denis";
ol.append (li_5);

// li_1.style.background = "green";
// Не могу решить эту задачу и двигаться дальше___________________

let list = document.getElementsByTagName ("li");
console.log (list);

list.forEach (function (item){
    if (item%2==0){
        list.className = "even";
        list.style.background = "green";
    } else { 
        item%2!==0;
        list.className = "odd";
        list.style.background = "blue";
    }
});

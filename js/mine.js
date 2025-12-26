// task 1
let btn1 = document.querySelector('.task_1_btn');
function btn_task1 (){
    let degree = document.querySelector('.task_1_inp').value;
    let result = document.querySelector('.task_1_h5');
    if(degree > 30){
        result.textContent = "Hot"
    }
    else{
        result.textContent = "Cold"
    }
};
btn1.onclick=btn_task1;
// task 2
let btn2 = document.querySelector('.task_2_btn');
function btn_task2 (){
    let number = document.querySelector('.task_2_inp').value;
    let result = document.querySelector('.task_2_h5');
    if(number % 2 === 0){
        result.textContent = "Even"
    }
    else{
        result.textContent = "Odd"
    }
};
btn2.onclick=btn_task2;
// task 3
let btn3 = document.querySelector('.task_3_btn');
function btn_task3 (){
    let number = document.querySelector('.task_3_inp').value;
    let university = document.querySelector('.university_inp');
    let result = document.querySelector('.task_3_h5');
    if (number % 2 === 0) {
        result.textContent = "Even";
    } else {
        result.textContent = "Odd";
    }
    if (number > 20) {
        university.classList.remove('d-none');
    } else {
        university.classList.add('d-none');
    }
};
btn3.onclick=btn_task3;

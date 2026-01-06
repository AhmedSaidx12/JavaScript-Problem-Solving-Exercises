// task 1
function task1() {
  let result = document.querySelector(".task_1_h5");
  for (let i = 1; i <= 10; i++) {
    result.textContent += i + "\n";
  }
}
task1();
// task 2
function task2() {
  let result = document.querySelector(".task_2_h5");
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      result.textContent += i + "\n";
    }
  }
}
task2();
// task 3
function task3() {
  let result = document.querySelector(".task_3_h5");
  let count = 0;
  for (let i = 1; i <= 100; i++) {
    count += i;
    result.textContent = count;
  }
}
task3();
// task 4
let btn4 = document.querySelector(".task_4_btn");
function btn_task4() {
  let number = document.querySelector(".task_4_inp").value;
  let result = document.querySelector(".task_4_h5");
  if (number < 0) {
    result.textContent = "Negative";
  } else if (number > 0) {
    result.textContent = "Positive";
  } else {
    result.textContent = "zero";
  }
}
btn4.onclick = btn_task4;
// task 5
let btn5 = document.querySelector(".task_5_btn");
function btn_task5() {
  let number = document.querySelector(".task_5_inp").value;
  let result = document.querySelector(".task_5_h5");
  if (number >= 90) {
    result.textContent = "Excellent";
  } else if (number >= 80) {
    result.textContent = "Very Good";
  } else if (number >= 70) {
    result.textContent = "Good";
  } else if (number >= 60) {
    result.textContent = "Pass";
  } else {
    result.textContent = "Fail";
  }
}
btn5.onclick = btn_task5;
// task 6
let btn6 = document.querySelector(".task_6_btn");
function btn_task6() {
  let number = document.querySelector(".task_6_inp").value;
  let result = document.querySelector(".task_6_h5");
  result.textContent = "";
  for (let i = 1; i <= 12; i++) {
    result.textContent += i + " * " + number + " = " + i * number + "\n";
  }
}
btn6.onclick = btn_task6;
// task 7
function task7() {
  let result = document.querySelector(".task_7_h5");
  let count = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
      result.textContent = count += 1;
    }
  }
}
task7();
// task 8
let btn8 = document.querySelector(".task_8_btn");
function btn_task8() {
  let number1 = Number(document.querySelector(".task_8_inp1").value);
  let number2 = Number(document.querySelector(".task_8_inp2").value);
  let number3 = Number(document.querySelector(".task_8_inp3").value);
  let result = document.querySelector(".task_8_h5");
  if (number1 > number2 && number1 > number3) {
    result.textContent = number1;
  } else if (number2 > number1 && number2 > number3) {
    result.textContent = number2;
  } else {
    result.textContent = number3;
  }
}
btn8.onclick = btn_task8;
// task 9
let btn9 = document.querySelector(".task_9_btn");
function btn_task9() {
  let number = Number(document.querySelector(".task_9_inp").value);
  let result = document.querySelector(".task_9_h5");
  switch (number) {
    case 1:
      result.textContent = 31;
      break;
    case 2:
      result.textContent = 28;
      break;
    case 3:
      result.textContent = 31;
      break;
    case 4:
      result.textContent = 30;
      break;
    case 5:
      result.textContent = 31;
      break;
    case 6:
      result.textContent = 30;
      break;
    case 7:
      result.textContent = 31;
      break;
    case 8:
      result.textContent = 31;
      break;
    case 9:
      result.textContent = 30;
      break;
    case 10:
      result.textContent = 31;
      break;
    case 11:
      result.textContent = 30;
      break;
    case 12:
      result.textContent = 31;
      break;
    default:
      result.textContent = "zero";
      break;
  }
}
btn9.onclick = btn_task9;
// task 10
let btn10 = document.querySelector(".task_10_btn");
function btn_task10() {
  let number1 = Number(document.querySelector(".task_10_inp1").value);
  let operator = document.querySelector(".task_10_inp2").value;
  let number2 = Number(document.querySelector(".task_10_inp3").value);
  let result = document.querySelector(".task_10_h5");
  switch (operator) {
    case "+":
      result.textContent = number1 + "+" + number2 + "=" + (number1 + number2);
      break;
    case "-":
      result.textContent = number1 + "-" + number2 + "=" + (number1 - number2);
      break;
    case "*":
      result.textContent = number1 + "*" + number2 + "=" + number1 * number2;
      break;
    case "/":
      result.textContent = number1 + "/" + number2 + "=" + number1 / number2;
      break;
    default:
      result.textContent = "Error 404";
      break;
  }
}
btn10.onclick = btn_task10;
// task 11
let btn11 = document.querySelector(".task_11_btn");
function btn_task11() {
  let number = document.querySelector(".task_11_inp").value;
  let result = document.querySelector(".task_11_h5");
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      count += i;
      result.textContent = count;
    }
  }
}
btn11.onclick = btn_task11;
// task 12
let btn12 = document.querySelector(".task_12_btn");
function btn_task12() {
  let number = document.querySelector(".task_12_inp").value;
  let result = document.querySelector(".task_12_h5");
  result.textContent = number.split("").reverse().join("");
}
btn12.onclick = btn_task12;
// task 13
let btn13 = document.querySelector(".task_13_btn");
function btn_task13() {
  let number = document.querySelector(".task_13_inp").value;
  let result = document.querySelector(".task_13_h5");
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      count += 1;
      result.textContent = count;
    }
  }
}
btn13.onclick = btn_task13;
// task 14
let btn14 = document.querySelector(".task_14_btn");
function btn_task14() {
    let number = Number(document.querySelector(".task_14_inp").value);
    let result = document.querySelector(".task_14_h5");
    let prime = true;
    if (number <= 1) {
        result.textContent = "Not a prime number";
    } else if (number === 2) {
        result.textContent = "prime number";
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
            prime = false;
            break;
            }
        }
        if (prime) {
            result.textContent = "prime number";
        } else {
            result.textContent = "Not a prime number";
        }
    }
}
btn14.onclick = btn_task14;
// task 15
let btn15 = document.querySelector(".task_15_btn");
function btn_task15() {
  let user = document.querySelector(".task_15_inp1").value;
  let pass = Number(document.querySelector(".task_15_inp2").value);
  let result = document.querySelector(".task_15_h5");
  if(user === "admin" && pass === 1234){
     result.textContent = "Login Successful";
  }
  else{
    result.textContent = "Invalid Data";
  }
}
btn15.onclick = btn_task15;
// task 16
let btn16 = document.querySelector('.task_16_btn');
function btn_task16 (){
    let degree = document.querySelector('.task_16_inp').value;
    let result = document.querySelector('.task_16_h5');
    if(degree > 30){
        result.textContent = "Hot"
    }
    else{
        result.textContent = "Cold"
    }
};
btn16.onclick=btn_task16;
// task 17
let btn17 = document.querySelector('.task_17_btn');
function btn_task17 (){
    let number = document.querySelector('.task_17_inp').value;
    let result = document.querySelector('.task_17_h5');
    if(number % 2 === 0){
        result.textContent = "Even"
    }
    else{
        result.textContent = "Odd"
    }
};
btn17.onclick=btn_task17;
// task 18
let btn18 = document.querySelector('.task_18_btn');
function btn_task18 (){
    let number = document.querySelector('.task_18_inp').value;
    let university = document.querySelector('.university_inp');
    let result = document.querySelector('.task_18_h5');
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
btn18.onclick=btn_task18;


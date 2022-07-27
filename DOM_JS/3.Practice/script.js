//В этом упражнении нужно реализовать логику добавления алертов по клику на кнопку.
//После клика на кнопку, в контейнер с классом alerts добавляется алерт, с названием Alert 1
//Последующий клик добавляет новый алерт сверху:
//Каждый клик добавляет новый алерт, меняя число в его имени.


// const button = document.getElementById('alert-generator');
// const div = document.querySelector('.alerts');

// button.addEventListener('click', addDivConteiner);

// //функция counter работает как счётчик для функции addDivConteiner, которая находится под событием addEventListener
// let currentCount = 1;
// function counter() {
//   return currentCount++;
// }

// function addDivConteiner() {
//   const elDiv = document.createElement('div');
//   elDiv.textContent = 'Alert ' + counter();
//   div.prepend(elDiv);
// }


/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/

//В задании дана форма обратной связи, состоящая из трех полей: 
// email, name и comment. Напишите и экспортируйте функцию по умолчанию, 
// которая при отправке формы получает из неё данные и экранирует их. 
// Когда форма заполнена и "отправлена" (нажата кнопка send), 
// то вместо формы появляется такой вывод:
{/* <div>
  <p>Feedback has been sent</p>
  <div>Email: test@email.com</div>
  <div>Name: Matz</div>
  <div>Comment: My Comment</div>
</div> */}

// const form = document.querySelector('form');
//   let div = document.createElement('div');
//   document.body.append(div);
//   let pLabel = document.createElement('p');
//   let divEmail = document.createElement('div');
//   let divName = document.createElement('div');
//   let divComment = document.createElement('div');

//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target); 
//     let email = formData.get('email');
//     let name = formData.get('name');
//     let comment = formData.get('comments');
//     pLabel.innerHTML = 'Feedback has been sent';
//     divEmail.innerHTML = 'Email: ' + email;
//     divName.innerHTML = 'Name: ' + name;
//     divComment.innerHTML = 'Comment: ' + comment;
//     div.append(pLabel,divEmail,divName,divComment);
//   });


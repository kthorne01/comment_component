import "./style.css";


document.querySelector("#app").innerHTML = `


   <h5>Submitted data :</h5>
   <p id="data"></p>
  <div>
    <section id="comments">
    <c-comment name="JA" email="kthornetdcp@gmail.com" comment="I made it through COVID." day_time="7-15-2022" only_time="4:55 AM"></c-comment>
    <c-comment name="AB" email="tthorne@yahoo.com" comment="I was able to transition into tech." day_time="7-15-2022" only_time="4:55 AM"></c-comment>
    <c-comment name="AM" email="boondocks@hotmail.com" comment="I passed my class after praying for an increase
    in my mental capacity." day_time="7-15-2022" only_time="4:55 AM"></c-comment>
    </section>
  </div>
`;

// {/* <input type="submit" value="Submit"></input> */}
// {/* <input type="submit" onclick="myFunction()" value="Submit"> */}

// function myFunction(){
//   let data = "";  let name = document.getElementById("#userName").value
//   let email = document.getElementById("#userEmail").value
//   let comment = document.getElementById("userComment").value

//  data = "User name : "+name+"<br/>User email : "+email+ "<br/>User comment : "+comment

//  document.getElementById("data").innerHTML = data  // display data to paragraph
//  };

// const submit = document.getElementById('submit');
// submit.addEventListener('click', function handleClick(event) {
//   event.preventDefault();

//   const inputs = document.querySelectorAll('#userName, #userEmail, #userComment');

//   inputs.forEach(input => {
//     input.value = '';
//   });
// });


const addComment = (ev) => {
  ev.preventDefault();

  // get user input from the DOM
  const name = document.querySelector("#userName").value;
  const email = document.querySelector("#userEmail").value;
  const comment = document.querySelector("#userComment").value;


  const currentDate = new Date();
  const time = currentDate.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
 ;

  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth(); //January is 0, not 1
  const currentYear = currentDate.getFullYear();
  

  const dateString =
    // currentMonth + 1 + "-" + currentDayOfMonth + "-" + currentYear + " "+ time;
    currentMonth + 1 + "-" + currentDayOfMonth + "-" + currentYear;
    

  console.log(name);
  console.log(email);
  console.log(comment);
  console.log(dateString);
  console.log(time);


  //building a new tag using template literals 
  const template = `
  <c-comment 
    name="${name}" 
    email="${email}" 
    comment="${comment}"
    day_time="${dateString}"
    only_time="${time}">
  </c-comment>`;

  //adding new tag to the DOM
  document
    .querySelector("#comments")
    .insertAdjacentHTML("afterbegin", template);
    document.querySelector("#userName").value = "";
    document.querySelector("#userEmail").value = "";
    document.querySelector("#userComment").value = "Delete this text and share your testimony here...";

    // formObject.reset();
    // document.querySelector("form").addEventListener("submit", addComment);
};

// takes what user types and clears the comment out of the input field


document.querySelector("form").addEventListener("submit", addComment);

// document.querySelector("myForm").addEventListener("Submit", addComment);

    
// function myFunction() {
//   // document.querySelector("form").addEventListener("submit", addComment);
//   document.getElementById("myForm").reset();
// }




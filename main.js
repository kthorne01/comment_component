import "./style.css";


document.querySelector("#app").innerHTML = `
<section>
<h1>What's Your Testimony?</h1>
</section>
<form id="myForm">
      <strong>Name</strong>: <input id="userName" type="text" name="fname" required>
      <br><br>
      <strong>Email</strong> : <input id="userEmail" type="text" name="email" required>
      <br><br>
      <textarea id ="userComment" rows="4" cols="50" name="comment" required> Share your testimony here...</textarea>
      <br><br>
    <label><em><strong>I definitely want to share my testimony with others!!</strong></em></label><br>
    <input type="checkbox" id="checkbox" name="checkbox" value="Yes" class="checkbox" required >
    <label for="check"></label><br>
    <p>
    <input type="submit" value="Submit">
    </p>
   </form>
   <h5>Submitted data :</h5>
   <p id="data"></p>
  <div>
    <section id="comments">
    <c-comment name="JA" email="kthornetdcp@gmail.com" comment="I made it through COVID."></c-comment>
    <c-comment name="AB" email="tthorne@yahoo.com" comment="I was able to transition into tech."></c-comment>
    <c-comment name="AM" email="boondocks@hotmail.com" comment="I passed my class after praying for an increase
    in my mental capacity."></c-comment>
    </section>
  </div>
`;

// function myFunction(){
//   let data = "";  let name = document.getElementById("#userName").value
//   let email = document.getElementById("#userEmail").value
//   let comment = document.getElementById("userComment").value
 
//  data = "User name : "+name+"<br/>User email : "+email+ "<br/>User comment : "+comment
 
//  document.getElementById("data").innerHTML = data  // display data to paragraph
//  };

const addComment = (ev) => {
  ev.preventDefault();
  const name = document.querySelector("#userName").value;
  const email = document.querySelector("#userEmail").value;
  const comment = document.querySelector("#userComment").value;

  console.log(name);
  console.log(email);
  console.log(comment);

  //building a new tag and appending it to ........ in the DOM 
  const template = `
  <c-comment 
    name="${name}" 
    email="${email}" 
    comment="${comment}">
  </c-comment>`;
  document.querySelector("#comments").insertAdjacentHTML("afterbegin",template);
};
document.querySelector("form").addEventListener("submit", addComment);

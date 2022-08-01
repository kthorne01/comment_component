document.querySelector("#app").innerHTML = `
<form id="myForm">
      Full name: <input id="userName" type="text" name="fname" required>
      <br><br>
      Email : <input id="userEmail" type="text" name="email" required>
      <br><br>
      <textarea id ="userComment" rows="4" cols="50" name="comment" required> Enter comment here...</textarea>
      <br><br>
      <input type="button" onclick="myFunction()" value="Submit">
   </form>
   <h5>Submitted data :</h5>
   <p id="data"></p>
   `;


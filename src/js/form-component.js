/*

Form component:
1. Draws the form.
2. Listens for the form submit
3. It creates a new comment object:

   {
        name: __________,
        email: _________,
        comment: _______, 
        timestamp: new Date()
   }

    and sends it to the state manager.
4. It clears out the form

*/

export default class Form {
  // what is a constructor?
  // brings the instance to life
  constructor(sm) {
    this.stateManager = sm;
    const formTemplate = `
        <section>
<h1>What's Your Testimony?</h1>
</section>
        <form id="myForm">
      <strong>Name</strong>: <input id="userName" type="text" name="name" required>
      <br><br>
      <strong>Email</strong> : <input id="userEmail" type="text" name="email" placeholder="e.g. joe@gmail.com" required>
      <br><br>
      <textarea id ="userComment" rows="4" cols="50" name="comment" placeholder="Share your testimony here..." required></textarea>
      <br><br>
    <label><em><strong>I definitely want to share my testimony with others!!</strong></em></label><br>
    <input type="checkbox" id="checkbox" name="checkbox" value="Yes" class="checkbox" required >
    <label for="check"></label><br>
    <p>
    <input type="submit" value="Submit" class="submit"></input>
    </p>
   </form>

        `;

    document.querySelector(".form-container").innerHTML = formTemplate;

    document
      .querySelector("form")
      .addEventListener("submit", this.addComment.bind(this));
  }

  addComment(ev) {
    // goal of add comment is to let the state manager know
    // that a new comment has been added:
    ev.preventDefault();

    const date = new Date();
    let dateString = date.toLocaleDateString();
    dateString += " " + date.toLocaleTimeString();

    const commentObject = {
      name: document.querySelector("#userName").value,
      email: document.querySelector("#userEmail").value,
      comment: document.querySelector("#userComment").value,
      timestamp: dateString,
    };
    console.log(commentObject);

    // tell the state manager that we have
    // a new comment to add:
    this.stateManager.addComment(commentObject);

    // Your Job: how do you clear out your form!!
    document.querySelector("#userName").value = "";
    document.querySelector("#userEmail").value = "";
    document.querySelector("#userComment").value = "";
    document.querySelector("#checkbox").checked = false;
  }
}

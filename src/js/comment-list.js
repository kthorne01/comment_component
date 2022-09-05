/*
The job of the comment list is to:
1. At the very beginning, draw all the comments.
2. If it gets notified that a new comment has been created, 
   it should draw a new comment at the top.
*/

export default class CommentList {
  //constructor function
  constructor(stateManager) {
    //then the comment list is going to subscribe to the "comment Updated"
    stateManager.subscribe("add_comment", this.redraw.bind(this));
    stateManager.subscribe("comment_loaded", this.redraw.bind(this));

    //if I commment out this.redraw, I won't be able to see the comments loaded anymore
    //this.redraw(stateManager.comments);
  }

  //redraw function
  redraw(comments) {
    document.querySelector(".comments").innerHTML = "";
    // when a new instance of CommentList is created,
    // it needs to know what comments it should draw.
    // it should draw those comments.
    console.log(comments, "comments");
    for (let i = 0; i < comments.length; i++) {
      // Kayla first:
      // let name = comments[i].name;************************
      // let email = comments[i].email;
      // let comment = comments[i].comment;
      // let timestamp = comments[i].timestamp;

      // creating an HTML representation of it
      console.log(comments[i]);
      let template = `
                <c-comment 
                    name="${comments[i].name}" 
                    email="${comments[i].email}" 
                    comment="${comments[i].comment}"
                    day_time="${comments[i].timestamp}">
                </c-comment>
            `;

      ///***************************
      console.log(template);

      // we need to append it to the DOM
      document
        .querySelector(".comments")
        .insertAdjacentHTML("beforebegin", template);
    }
    //this redraw method will clear out the comments and redraw with the new comments
  }

  //greeting function
  // greeting(){
  //   console.log("hello world");
  // }
}

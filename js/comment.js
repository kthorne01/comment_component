class Comment extends HTMLElement {
    // constructor() {
    //   super();
    // }
    //builds the html for the component
  
    connectedCallback() {
      // const rn = Math.random() * 100;
      // this.innerHTML =
      const shadow = this.attachShadow({mode: "open"});
        shadow.innerHTML = 
        `<div class="comment card">
        <h5>***********************************************</h5>
        <h3> 
        <em><strong>Name:</em></strong> ${this.getAttribute("name")}
        </h3>
        <h3>
        <em><strong>Email:</em></strong> ${this.getAttribute("email")}
        </h3>
        <h3>
        <em><strong>Your Testimony:</em></strong> ${this.getAttribute("comment")}
        </h3>
        <h6>
        ${this.getAttribute("day_time")} <br>
        </h6>
        <h5>***********************************************</h5>
        </div>
        
        <style>
        .comment {
          border: 1px navy solid;
          border-radius: 5px;
          padding: 15px;
          
          background-color: deepskyblue;
          box-shadow: 10px 10px rgb(19, 66, 99);
          margin-top:10px ;
          margin-bottom:10px ;
          margin-left: auto;
          margin-right: auto;
          text-align:center;
        }

        .card {
          padding: 2em;
          background-color: deepbluesky;
          text-align: center;
        }

        </style>
        
        `;
    }
  }

  customElements.define('c-comment', Comment);

  // ${this.getAttribute("day_time")} <br>
  // ${this.getAttribute("only_time")}
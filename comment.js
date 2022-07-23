class Comment extends HTMLElement {
    constructor() {
      super();
    }
    //builds the html for the component
    connectedCallback() {
        this.innerHTML = `<div class="comment card">
        <h5>***********************************************</h5>
        <h3> 
        <em><strong>Name:</em></strong> ${this.getAttribute("name")}
        </h3>
        <h3>
        <em><strong>Email:</em></strong> ${this.getAttribute("email")}
        </h3>
        <h3>
        <em><strong>Your Thoughts:</em></strong> ${this.getAttribute("comment")}
        </h3>
        <h5>***********************************************</h5></div>`;
    }
  }

  customElements.define('c-comment', Comment);
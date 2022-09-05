const l=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}};l();class u extends HTMLElement{constructor(){super()}connectedCallback(){const e=this.attachShadow({mode:"open"});e.innerHTML=`<div class="comment card">
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
        
        `}}customElements.define("c-comment",u);class d{constructor(){this.comments=[{name:"Julius",email:"julius@gmail.com",comment:"Here is my comment!",timestamp:"7/29/2022 3:15:13PM"},{name:"Adwaina",email:"adwaina@gmail.com",comment:"text text text text text text text text text text ",timestamp:"8/3/2022 3:15:13PM"},{name:"Monique",email:"mo@gmail.com",comment:"text text text text text text text text text text ",timestamp:"8/4/2022 3:15:13PM"}],this.subscribers=[],this.loadDatabase()}loadDatabase(){var e=indexedDB.open("kts_db",2);e.onupgradeneeded=function(t){this.db=t.target.result;let o=this.db;console.log("running onupgradeneeded"),o.objectStoreNames.contains("comments")||o.createObjectStore("comments",{keyPath:"id",autoincrement:!0})}.bind(this),e.onsuccess=function(t){console.log("running onsuccess");let o=t.target.result;this.readCommentsFromDataStore(o,"comment_loaded")}.bind(this)}addComment(e){var t=indexedDB.open("kts_db",2);t.onsuccess=function(n){console.log("running onsuccess"),o=n.target.result;var r=o.transaction(["comments"],"readwrite");console.log(r);var s=r.objectStore("comments");e.id=Math.floor(Math.random()*1e8),console.log(e),console.log(s);var c=s.add(e);c.onerror=function(i){console.log("Error",i.target.error.name)},c.onsuccess=function(i){console.log("The comment has been successfully added!"),this.readCommentsFromDataStore(o,"add_comment")}.bind(this),r.oncomplete=()=>{o.close()}}.bind(this);let o=this.db}subscribe(e,t){this.subscribers.push([e,t])}notify(e,t){for(let o=0;o<this.subscribers.length;o++){const n=this.subscribers[o],r=n[0],s=n[1];r===e&&(console.log("notifying my subscriber"),s(t))}}readCommentsFromDataStore(e,t){var o=e.transaction("comments","readonly"),n=o.objectStore("comments"),r=n.openCursor(),s=[];r.onsuccess=function(c){c.target.result&&(s.push(c.target.result.value),c.target.result.continue())},o.oncomplete=function(c){console.log(s),console.log(t),this.notify(t,s)}.bind(this)}}class b{constructor(e){e.subscribe("add_comment",this.redraw.bind(this)),e.subscribe("comment_loaded",this.redraw.bind(this))}redraw(e){document.querySelector(".comments").innerHTML="",console.log(e,"comments");for(let t=0;t<e.length;t++){console.log(e[t]);let o=`
                <c-comment 
                    name="${e[t].name}" 
                    email="${e[t].email}" 
                    comment="${e[t].comment}"
                    day_time="${e[t].timestamp}">
                </c-comment>
            `;console.log(o),document.querySelector(".comments").insertAdjacentHTML("beforebegin",o)}}}class h{constructor(e){this.stateManager=e;const t=`
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

        `;document.querySelector(".form-container").innerHTML=t,document.querySelector("form").addEventListener("submit",this.addComment.bind(this))}addComment(e){e.preventDefault();const t=new Date;let o=t.toLocaleDateString();o+=" "+t.toLocaleTimeString();const n={name:document.querySelector("#userName").value,email:document.querySelector("#userEmail").value,comment:document.querySelector("#userComment").value,timestamp:o};console.log(n),this.stateManager.addComment(n),document.querySelector("#userName").value="",document.querySelector("#userEmail").value="",document.querySelector("#userComment").value="",document.querySelector("#checkbox").checked=!1}}const m=new d;new b(m);new h(m);

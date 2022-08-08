export default class Counter {
    constructor(stateManager) {
        stateManager.subscribe('comment-added', this.redraw.bind(this));
        this.redraw(stateManager.comments);
    }

    redraw(comments) {
        document.querySelector('.counter-display').innerHTML = `
            <h2>${comments.length}</h2>
        `;
    }

    greeting() {
        console.log("Hello world!");
    }
}
import "./style.css";

document.querySelector("#app").innerHTML = `
    <h1>We Value Your Opinion!</h1>
    <div>
    <c-comment name="JA" email="kthornetdcp@gmail.com" comment="I am me."></c-comment>
    <c-comment name="AB" email="tthorne@yahoo.com" comment="You are you."></c-comment>
    <c-comment name="AM" email="boondocks@hotmail.com" comment="Be who you are."></c-comment>
  </div>
`;

setupCounter(document.querySelector("#counter"));

const containrEl = document.querySelector(".container");

window.addEventListener("mousemove", (event)=>{
    containrEl.innerHTML = 
    `<div class="mouse-event">
    ${event.clientX}
    <h4>Mouse X Prosition(px)</h4>
  </div>
  <div class="mouse-event">
    ${event.clientY}
    <h4>Mouse Y Prosition(px)</h4>
  </div>`
    // mousemove jokhon ashbe skhane obossoi event chole ashbe, see MDN
});
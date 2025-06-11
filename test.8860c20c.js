console.log("test.js подключен и работает"),document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("hiking-quiz"),t=document.getElementById("quiz-result"),o={novice:1,moderate:2,advanced:3};e.addEventListener("submit",n=>{n.preventDefault();let r=new FormData(e),d=0;for(let e=1;e<=7;e++){let t=r.get("q"+e);t&&o[t]&&(d+=o[t])}let i="";i=d<=7?"Novice Hiker":d<=14?"Moderate Hiker":d<=18?"Advanced Moderate Hiker":d<=20?"Expert Hiker":"Expert Backpacker",t.innerHTML=`
      <h2>Your hiking level: <span style="color:#fbd784";>${i}</span></h2>
      <p>Total points scored: ${d}</p>
    `,t.scrollIntoView({behavior:"smooth"})})}),document.querySelector(".btn-start-test").addEventListener("click",()=>{document.getElementById("quiz-section").scrollIntoView({behavior:"smooth"})});
//# sourceMappingURL=test.8860c20c.js.map

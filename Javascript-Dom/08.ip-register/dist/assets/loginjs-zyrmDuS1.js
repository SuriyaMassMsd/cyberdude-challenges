const l=document.querySelector("#left-image"),a=document.querySelector("form"),d=document.getElementById("closeToast");a.addEventListener("submit",function(e){e.preventDefault();const t=new FormData(a);for(const i of t);const o=t.get("email"),n=t.get("password");m(o,n)});function m(e,t){const o=localStorage.getItem(e);if(o!=null){const n=JSON.parse(o);if(e===n.email&&t===n.password){alert("your account loged In successfully"),document.getElementById("myToast").classList.remove("hidden");const r=document.querySelector("#ipres");fetch("https://ipv4.icanhazip.com/").then(s=>s.text()).then(s=>{r.textContent=`Your ip Address : ${s}`}),setInterval(function(){window.location.href="./index.html"},1e4)}else alert("password is invalid")}else alert("Invalid user"),a.reset()}d.addEventListener("click",function(){window.location.href="./index.html"});const c=["left-image.jpg","left-img.jpg","left-side.jpg","left.jpg","left-imgs.jpg"];setInterval(function(){const e=Math.floor(Math.random()*c.length);l.src=c[e],l.style.width="720px",l.style.height="600px"},3e3);
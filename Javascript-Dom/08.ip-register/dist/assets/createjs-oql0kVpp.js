const c=document.querySelector("#left-image"),i=document.querySelector("form"),r=document.getElementById("closeToast");i.addEventListener("submit",function(t){t.preventDefault();const s=new FormData(i),e=[];for(const o of s)e.push(o);const n=Object.fromEntries(e),l=s.get("email");m(l,n)});function m(t,s){const e=localStorage.getItem(t);if(e!=null){const n=JSON.parse(e);t===n.email&&alert("this email is already exits")}else{localStorage.setItem(t,JSON.stringify(s)),alert("your account created successfully"),i.reset(),document.getElementById("myToast").classList.remove("hidden");const l=document.querySelector("#ipres");fetch("https://ipv4.icanhazip.com/").then(o=>o.text()).then(o=>{l.textContent=`Your ip Address is : ${o}`}),setInterval(function(){window.location.href="./login.html"},1e4)}}r.addEventListener("click",function(){window.location.href="./login.html"});const a=["left-image.jpg","left-img.jpg","left-side.jpg","left.jpg","left-imgs.jpg"];setInterval(function(){const t=Math.floor(Math.random()*a.length);c.src=a[t],c.style.width="720px",c.style.height="600px"},3e3);
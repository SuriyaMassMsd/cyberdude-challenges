(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u=document.querySelector("form");document.querySelector("#imgDownload");const s=document.querySelector("#image"),n=document.querySelector("#show");document.querySelector("#sdimage");u.addEventListener("submit",function(r){r.preventDefault(),d()});function d(){const r=document.querySelector("#input").value;if(r.indexOf("=")===31&&r.length===43){n.classList.remove("hidden");let l=`https://i.ytimg.com/vi/${r.split("=")[1]}/maxresdefault.jpg`;s.src=l,s.style.width="1280px",s.style.height="720px"}else if(r.indexOf("=")===31&&r.length===48){n.classList.remove("hidden");let o=`https://i.ytimg.com/vi/${r.slice(17,28)}/maxresdefault.jpg`;s.src=o,s.style.width="1280px",s.style.height="720px"}else{n.classList.remove("hidden");let o=`https://i.ytimg.com/vi/${r.slice(32,43)}/maxresdefault.jpg`;s.src=o,s.style.width="1280px",s.style.height="720px"}}

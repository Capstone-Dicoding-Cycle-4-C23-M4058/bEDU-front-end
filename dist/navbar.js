import Cookie from"./cookie";const NavbarEdited={updateNavBtn(){const e=Cookie.getCookieValue("bEDUCookie"),n=Cookie.parseJwtPayload(e),t=document.getElementById("nav-btn4"),a=document.getElementById("nav-btn"),d=window.location.hash.substring(2);if(n&&"Admin"!==n.role){t.innerHTML="Logout";const e=document.getElementById("nav-btn5");e&&e.parentNode.removeChild(e);let n=document.getElementById("nav-btn3"),a=document.getElementById("nav-btn6");a||(a=document.createElement("a"),a.href="/#/profile_user",a.className="nav-btn",a.id="nav-btn6",a.innerHTML="Profile",n.parentNode.insertBefore(a,n.nextSibling))}else if("admin"===d||"create_article"===d||"profile_admin"===d){t.innerHTML="Logout",a.href="/#/admin",t.href="/#/admin";let e=document.getElementById("nav-btn5");e||(e=document.createElement("a"),e.href="/#/create_article",e.className="nav-btn",e.id="nav-btn5",e.innerHTML="Create Article",a.parentNode.insertBefore(e,a.nextSibling));let n=document.getElementById("nav-btn6");n||(n=document.createElement("a"),n.href="/#/profile_admin",n.className="nav-btn",n.id="nav-btn6",n.innerHTML="Profile",a.parentNode.insertBefore(n,e.nextSibling));const d=document.getElementById("nav-btn2");d&&d.parentNode.removeChild(d);const o=document.getElementById("nav-btn3");o&&o.parentNode.removeChild(o)}else{t.innerHTML="Login";const e=document.getElementById("nav-btn5");e&&e.parentNode.removeChild(e)}}};NavbarEdited.updateNavBtn(),window.addEventListener("hashchange",(()=>{NavbarEdited.updateNavBtn()})),window.addEventListener("pageshow",(()=>{NavbarEdited.updateNavBtn()}));export default NavbarEdited;
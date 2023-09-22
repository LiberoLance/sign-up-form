const pw = document.getElementById("password");
const cpw = document.getElementById("cofmpassword");
const errmsg = document.getElementById("error-msg")
let pws = "";
let cpws = "";

pw.addEventListener("focusout", (e) => {
  pws = pw.value;  
});

cpw.addEventListener("focusout", (e) => { 
  cpws = cpw.value;
  match();
});

function match() {
  if(pws != cpws) {
    pw.style.borderColor = "red";
    cpw.style.borderColor = "red";
    errmsg.style.visibility = "visible";
  }
  else {
    errmsg.style.visibility = "hidden";
    pw.style.borderColor = "green";
    cpw.style.borderColor = "green";
  }
}


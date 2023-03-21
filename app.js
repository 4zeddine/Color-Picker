// Page load changing the colors to coresponding Hex values
window.addEventListener("load",(event)=>{
  for (let i = 0; i < 10; i++) {
    const color =document.querySelectorAll(".color")[i];
    const hex = document.querySelectorAll(".hex-value")[i];
    color.style.backgroundColor= hex.innerHTML;
    
  }

});

// Button click
document.querySelector('.new-pallete').addEventListener("click",(event) => {

  for (let i = 0; i < 10; i++) {
    const color =document.querySelectorAll(".color")[i];
    const hex = document.querySelectorAll(".hex-value")[i];
    const randomHex=Math.floor(Math.random()*16777215).toString(16);
    hex.innerHTML="#"+randomHex;
    color.style.backgroundColor= hex.innerHTML;
    
  }


  
});



const input1 = document.querySelector("#num1");
const input2 = document.querySelector("#num2");
const btn = document.querySelector("#btn")
const result = document.querySelector("#result")

btn.addEventListener("click", suma);

function suma (){
   const sumaBtn  = input1.value + input2.value;
   result.innerText = "Resultado:" + sumaBtn;
   
    
    
}


//const img = document.createElement("img")
//img.setAttribute("src", "https://www.calliaweb.co.uk/wp-content/uploads/2015/10/600x400.jpg")
//pid.append(img);
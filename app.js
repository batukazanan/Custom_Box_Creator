//TODO 1- Yeni eklenen box sağ tarafta bir alana gelecek. Her eklenen kısım o alanda gözükecek. Üstüne tıklandığında silinecek
//TODO 2- Eklenen box bilgileri bir object içinde tutulacak (örn: id: 1, color: red) ve console'a yazılacak.
//-TODO 3- Submit edildiğinde input valueleri sıfırlanacak.

//! **** SELECTION OPERATION ****


let box_width = document.getElementById("box-width");
let box_height = document.getElementById("box-height");
let background_color = document.getElementById("background-color");
let border_width = document.getElementById("border-width");
let border_type = document.getElementById("border-type");
let border_color = document.getElementById("border-color");
let create_box = document.getElementById("create-box");

//* **** The function that will run when the button is clicked ****

create_box.addEventListener("click", box_creator);

function box_creator(){
    
    if(!document.querySelector(".box-field"))

    {
        const box_field = document.createElement("div");
        const container = document.querySelector(".container");
        box_field.className = "box-field";
        container.appendChild(box_field);

        box_field.style.cssText = `
    
        width:${box_width.value}px;
        height:${box_height.value}px;
        background-color:${background_color.value};
        border-width:${border_width.value};
        border-style:${border_type.value};
        border-color:${border_color.value};

        `;

        clearInputs();

    }

}

if(box_creator == true){
    console.log("başarılı");
}


function clearInputs() {

    box_width.value = "";
    box_height.value = "";
    background_color.value = "";
    border_width.value = "";
    border_type.value = "";
    border_color.value = "";

}
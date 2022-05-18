const AngelaCarrol = {
    nome : ['Angela Carrol'],
    job : ['Chief editor'],
    foto : ['img/angela-caroll-chief-editor.jpg']

}

for (let key in AngelaCarrol) {
   console.log(AngelaCarrol[key]);


}

const imgELem = document.createElement("img");
imgELem.src = 'img/angela-caroll-chief-editor.jpg';

let addimage = document.querySelector(".card-image");

addimage.append(imgELem);
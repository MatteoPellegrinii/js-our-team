const cards = [
    {
        nome : 'Angela Carrol',
        job : 'Chief editor',
        foto : ['img/angela-caroll-chief-editor.jpg'],
    },
    {
        nome : 'Angela Carrol',
        job : 'Chief editor',
        foto : ['img/angela-lopez-social-media-manager.jpg']
    },
    {
        nome : 'Angela Carrol',
        job : 'Chief editor',
        foto : ['img/barbara-ramos-graphic-designer.jpg']
    },
    {
        nome : 'Angela Carrol',
        job : 'Chief editor',
        foto : ['img/walter-gordon-office-manager.jpg']
    },
    {
        nome : 'Angela Carrol',
        job : 'Chief editor',
        foto : ['img/scott-estrada-developer.jpg']
    },
    {
        nome : 'Angela Carrol',
        job : 'Chief editor',
        foto : ['img/wayne-barnett-founder-ceo.jpg']
    },

]

console.log(cards);





for (let i = 0; i < cards.length; i++) {
    
    // creare classe
    let container = document.querySelector(".team-container");
    let TeamcardClass = document.createElement("div");
    TeamcardClass.classList.add("team-card");
    container.append(TeamcardClass);

    
    // assegnare immagine
    const imgELem = document.createElement("img");
    imgELem.src = cards[i].foto;
    let addimage = document.createElement("div");
    addimage.classList.add("card-image")
    addimage.append(imgELem);
    TeamcardClass.append(addimage);


    const textElem = document.createElement("div");
    textElem.classList.add("card-text");
    TeamcardClass.append(textElem);

    //   assegnare nome
    const nomeElem = document.createElement("h3");
    textElem.append(nomeElem);


    //   assegnare lavoro
    const jobElem = document.createElement("p");
    textElem.append(jobElem);

    let oggettoclasseiesimo = cards[i];
    console.log(oggettoclasseiesimo);
    cards[i].foto.push(imgELem);
    nomeElem.append(cards[i].nome);
    jobElem.append(cards[i].job);
    
}








const cards = [
    {
        nome : 'Angela Carrol',
        job : 'Chief editor',
        foto : [],
    },
    {
        nome : 'Angela Carrol',
        job : 'Chief editor',
        foto : []
    },
    {
        nome : 'Angela Carrol',
        job : 'Chief editor',
        foto : []
    },
    {
        nome : 'Angela Carrol',
        job : 'Chief editor',
        foto : []
    },
    {
        nome : 'Angela Carrol',
        job : 'Chief editor',
        foto : []
    },
    {
        nome : 'Angela Carrol',
        job : 'Chief editor',
        foto : []
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
    imgELem.src = 'img/angela-caroll-chief-editor.jpg';
    let addimage = document.createElement("div");
    addimage.classList.add("card-image")
    addimage.append(imgELem);
    TeamcardClass.append(addimage);



    //   assegnare nome
    const nomeElem = document.createElement("h3");
    TeamcardClass.append(nomeElem);


    //   assegnare lavoro
    const jobElem = document.createElement("p");
    TeamcardClass.append(jobElem);

    let oggettoclasseiesimo = cards[i];
    console.log(oggettoclasseiesimo);
    cards[i].foto.push(imgELem);
    nomeElem.append(cards[i].nome);
    jobElem.append(cards[i].job);
    
    
}








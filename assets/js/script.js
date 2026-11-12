// seleziono il contenitore dei prodotti
const contenitoreProdotti = document.querySelector("#listaProdotti")

//creo l'arrey prodotti
const prodotti = [
    {
        id: "scarpa",
        nome: "Sneaker Run",
        descrizione: "Scarpa leggera per la corsa, suola in gomma traspirante.",
        prezzo: "89,00",
        immagine: "assets/img/sneaker.jpg",
        categoria: "Scarpe"
    },
    {
        id: "tShirt",
        nome: "T - shirt basic",
        descrizione: "Cotone biologico, taglio regolare, disponibile in 5 colori.",
        prezzo: "19,00",
        immagine: "assets/img/maglia.jpg",
        categoria: "T-shirt"
    },
    {
        id: "borsa",
        nome: "Borsa City",
        descrizione: "Tessuto resistente, tasca interna, cinghia regolabile.",
        prezzo: "49,00",
        immagine: "assets/img/borsa.jpg",
        categoria: "borse"
    }
]

//ciclo i prodotti e per ognuno creo e stampo la card.
prodotti.forEach(prodotto => {
    // istruzioni da eseguire per ogni prodotto
    const colonna = creaElemento("div", "col-12 col-md-6 col-lg-4", "", contenitoreProdotti);
    const card = creaElemento("div", "card", "", colonna);
    const immagine = creaElemento("img", "card-img-top", "", card);
    immagine.src = prodotto.immagine;
    immagine.alt = prodotto.nome;
    const corpoCard = creaElemento("div", "card-body", "", card);
    const titolo = creaElemento("h3", "card-title", prodotto.nome, corpoCard);
    const descrizione = creaElemento("p", "card-text", prodotto.descrizione, corpoCard);
    const prezzo = creaElemento("p", "card-text", `€ ${prodotto.prezzo}`, corpoCard);
    const contenitoreDettagli = creaElemento("div", "text-center", "", corpoCard);
    const dettagli = creaElemento("a", "btn btn-primary px-5", "Dettagli", contenitoreDettagli, prodotto.id);

    dettagli.addEventListener("click", (event) => {
        event.preventDefault();

        const idClick = event.target.id;
        const prodottoSelezionato = prodotti.find(prodotto => prodotto.id === idClick);

        titoloModale.textContent = prodottoSelezionato.nome;
        immagineModale.src = prodottoSelezionato.immagine;
        immagineModale.alt = prodottoSelezionato.nome;
        descrizioneModale.textContent = prodottoSelezionato.descrizione;
        prezzoModale.textContent = `€ ${prodottoSelezionato.prezzo}`;

        modale.show();
    });

});

//funzione secondaria
function creaElemento(tag, classe, contenuto, genitore, id = "") {
    const elemento = document.createElement(tag);

    elemento.className = classe;
    elemento.textContent = contenuto;

    if (id) {
        elemento.id = id;
    }

    genitore.appendChild(elemento);

    return elemento;
}

//recupero la modale
const modale = new bootstrap.Modal(document.querySelector("#modaleProdotto"));
const titoloModale = document.querySelector("#titoloModale");
const immagineModale = document.querySelector("#immagineModale");
const descrizioneModale = document.querySelector("#descrizioneModale");
const prezzoModale = document.querySelector("#prezzoModale");
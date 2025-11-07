const appDiv = document.getElementById('app');

function updateview(){
    let HTML = /*HTML*/`
    <h2>handlekurv</h2>
    <ul>
    `

    for(let i = 0; i < model.handlekurv.length; i++){
        let minevarer = model.handlekurv[i];
        HTML += /*HTML*/ `
        <li>
        <p>Vare: ${minevarer.navn}</p>
        <p>Pris: ${minevarer.pris} kr</p>
        <p>antall: ${minevarer.antall} stk</p>
        </li>
        
        `
    }


    HTML += /*HTML*/ `
    <u>Totalt å betale: ${totalPrice()}</u>
    </ul>
    
    `
    appDiv.innerHTML = HTML;
}

updateview()
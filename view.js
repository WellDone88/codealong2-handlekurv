const appDiv = document.getElementById('app');

function updateview(){
    let HTML = /*HTML*/`
    <h2>handlekurv</h2>
    <ul>
    `

    for(let i = 0; i < model.handlekurv.length; i++){
        let minevarer = model.handlekurv[i];
        HTML += /*HTML*/ `
        <li style ="display: flex flexdirection: column">
        <p>Vare: ${minevarer.navn}</p>
        <p>Pris: ${minevarer.pris} kr</p>
        <p>antall: ${minevarer.antall} stk</p>
        </li>
        
        `
    }


    HTML += /*HTML*/ `
    <p>Totalt å betale: ${totalPrice()} kr</p>
    </ul>
    
    `
    appDiv.innerHTML = HTML;
}

updateview()
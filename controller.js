function totalPrice(){
    let total = 0;
    for(let i= 0; i < model.handlekurv.length; i++){
        total += model.handlekurv[i].pris * model.handlekurv[i].antall;

        
    }

    return total;
}
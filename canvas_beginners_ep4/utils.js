export function getRandomColor(){
    let lettre = '0123456789ABCDEF';
    let couleur = '#';

    for (var i = 0; i < 6; i++){
        couleur += lettre[Math.floor(Math.random() * 16)]
    }
    return couleur;
}
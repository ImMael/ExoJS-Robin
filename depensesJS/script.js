function calculer(){
    let personne = document.getElementById("nbpersons").value;
    let montant = document.getElementById("mtpayer").value;
    let txtresult = document.getElementById("resultat");
    let resultat;
    resultat = montant / personne;
    txtresult.innerHTML = "Le résultat est de "+resultat.toFixed(2) + " par personne(s)";
}
function validateForm() {
    let ligne = document.forms["myForm"]["ligne"];
    let colonne = document.forms["myForm"]["colonne"];
    console.log(ligne);
    console.log(colonne);


let body= document.body;

let tbl = document.createElement("table");
let tblBody = document.createElement("tbody");

//créer les tr et td avec des boucles for

for(let i=0; i < ligne; i++){
    let row = document.createElement("tr");

    for(let j=0; j < colonne; j++){
        let cell = document.createElement("td");
        row.appendChild(cell);
    }
    tblBody.appendChild(row);
}

tbl.appendChild(tblBody);
body.appendChild(tbl);

}
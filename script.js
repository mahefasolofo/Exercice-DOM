let pickedColor;
let selectedCell;

window.addEventListener('load', function(){
    let colors = document.getElementsByClassName('color-picker');
    for(i = 0; i < colors.length; i++)
        colors[i].addEventListener('click', function(){
            pickedColor = this.innerText;
           
        });
});

function validateForm() {
    
    //e.preventDefault();
    let ligne = document.forms["myform"]["ligne"];
    let colonne = document.forms["myform"]["colonne"];
    
    let body= document.getElementById('table-container');
    let tbl = document.createElement("table");
    tbl.setAttribute('id', 'created-table');
    let tblBody = document.createElement("tbody");

    //créer les tr et td avec des boucles for

    for(let i=0; i < parseInt(ligne.value); i++){
        let row = document.createElement("tr");

        for(let j=0; j < parseInt(colonne.value); j++){
            let cell = document.createElement("td");
            cell.addEventListener('click', function(){
                selectedCell = cell;
                clearClass(cell);
                if(pickedColor !== undefined) cell.classList.add(pickedColor);
            });
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    body.appendChild(tbl);

    return false;
}

function clearClass(cell){
    cell.classList.forEach(e => cell.classList.remove(e));
}
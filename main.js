
 
var proudactName = document.getElementById("pn");
var proudactPrice = document.getElementById("pp");
var proudactCateg = document.getElementById("pc");
var proudactDesc = document.getElementById("pd");
var updateing =document.getElementById('bt');

var allProudacts =[];
clear();


function addNewProudact(){

    var proudact = {
        name: proudactName.value ,
        price: proudactPrice.value ,
        Categ: proudactCateg.value ,
        desc: proudactDesc.value

    }
    allProudacts.push(proudact)
    clear();
    displayAllProudacts();
    
}



function clear() {
    proudactName.value = "";
    proudactPrice.value = "";
    proudactDesc.value = "" ;
    proudactCateg.value = "";
    
}
function displayAllProudacts(){
    var allP = '';
    for(var i = 0 ; i < allProudacts.length  ; i++){
        allP = allP + `  
    <tr>
        <td>`+allProudacts[i].name +`</td>
        <td>`+allProudacts[i].price+`</td> 
        <td>`+allProudacts[i].Categ+`</td>
        <td>`+allProudacts[i].desc+`</td>
        <td> <button onclick="deleteElement(${i})" class=" btn btn-danger"> delete</button></td>
        <td> <button onclick="updateElement(${i})" class=" btn btn-warning" >update</button></td>


    </tr>
`

    }

    document.getElementById('tr').innerHTML= allP;


}
function deleteElement(sss){
    allProudacts.splice( sss ,1)
    displayAllProudacts()
}


function updateElement(aa){

    proudactName.value = allProudacts[aa].name;
    proudactPrice.value = allProudacts[aa].price;
    proudactCateg.value = allProudacts[aa].Categ;
    proudactDesc.value = allProudacts[aa].desc;
    updateing.innerHTML=`<button class=" btn btn-outline-warning" id="bt" onclick="zzz(${aa})">updet</button>
    
`



}


function qq(){
   var  updateing =document.getElementById('bt').innerHTML=`<button class=" btn btn-outline-info"  onclick="addNewProudact()">add</button>`;


}
function zzz(aa){
    var proudactt={
        name: proudactName.value ,
        price: proudactPrice.value ,
        Categ: proudactCateg.value ,
        desc: proudactDesc.value
    }
    allProudacts.splice( aa ,1 , proudactt);
    displayAllProudacts();
    clear();

    qq();

      
}





var allsites=[];
if(localStorage.getItem("allsites"))
    {
        allsites= JSON.parse(localStorage.getItem("allsites"));
  
    displaylink(allsites);
}

var pname=document.getElementById("pname");
var psite=document.getElementById("sitelink");
function addsite(){
    var siteinfo={
        name: pname.value,
        sitelink:psite.value,
       

    }
    var isNameValid = checkvalidationname();
    var isUrlValid = checkvalidationurl();

    
    if (!isNameValid || !isUrlValid) {
        var infoBox = document.querySelector('.box-info');
        infoBox.classList.remove('d-none');
        infoBox.classList.add('d-flex');
        return; 
    }
    allsites.push(siteinfo);
    
    clearform();
    displaylink(allsites);
    localStorage.setItem("allsites",JSON.stringify(allsites));

}
function clearform(){
    pname.value="";
    psite.value="";
    pname.classList.remove("is-invalid");
    psite.classList.remove("is-invalid");
  
}
function deleteitem(id){
    allsites.splice(id,1);
    localStorage.setItem("allsites",JSON.stringify(allsites));
    
displaylink(JSON.parse(localStorage.getItem("allsites")));
}
function displaylink(arrinfo){
    
    var cartona='';
    for(var i=0;i<arrinfo.length;i++){
        cartona+=`    <tr>
            <th scope="row">${[i+1]}</th>
            <td>${arrinfo[i].name}</td>
            <td> <button onclick="visititem('${arrinfo[i].sitelink}');" type="button" class="btn btn-success">Visit <i class="fa-solid fa-eye"></i></button>
            </td>
            <td> <button onclick="deleteitem(${i});" type="button" class="btn btn-danger">Delete <i class="fa-solid fa-trash-can"></i></button>
            </td>
            
          </tr>`
    }
    document.getElementById('showallsites').innerHTML=cartona;
}
function visititem(id){
    var urlid=id;
    window.open(urlid);
}
function checkvalidationname() {
    var pnameVal = pname.value;
    var isNameValid = /^[A-Za-z](?!.*-).*$/.test(pnameVal);
   
 
  
    if (!isNameValid) {
        pname.classList.add("is-invalid");
    } else {
        pname.classList.remove("is-invalid");
    }

    return isNameValid;


 
}
function checkvalidationurl(){
    var sitelinkVal = psite.value;
    var isUrlValid = /^(ftp|http|https):\/\/[^ "]+$/.test(sitelinkVal);
    if (!isUrlValid) {
        psite.classList.add("is-invalid");
    } else {
        psite.classList.remove("is-invalid");
    }
    return isUrlValid;
}

function closeInfoBox() {
    var infoBox = document.querySelector('.box-info');
    infoBox.classList.remove('d-flex');
    infoBox.classList.add('d-none');
    clearform();
}
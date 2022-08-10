let el, i;
let data = [
    
];
let panel = document.querySelector("#panel");

//aqui limiamos los campos
function clearform(){
    document.querySelector("#fname").value= "";
    document.querySelector("#Iname").value= "";
}
function renderItem(){
    panel.textContent= "";
    data.forEach(x =>{
        el = document.createElement("option");
        el.innerText = `${x.firstname} ${x.lastname}`;
        panel.append(el);
    });
}

function create(){
    let fn = document.querySelector("#fname").value;
    let In = document.querySelector("#Iname").value;
    data = [...data, {firstname: fn, lastname: In }];
    clearform();
    renderItem();
}
function panelClick(){
    i = panel.selectedIndex;
    document.querySelector("#fname").value = data[i].firstname;
    document.querySelector("#Iname").value = data[i].lastname;
}
function update(){
    data[i].firstname = document.querySelector("#fname").value;
    data[i].lastname = document.querySelector("#Iname").value;
    clearform();
    renderItem();
}
function deleteItem(){
    data.splice(i, 1);
    renderItem();
    clearform();
}
renderItem();
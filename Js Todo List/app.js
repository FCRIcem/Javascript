const form=document.querySelector("#todo-form");
const todoInput=document.querySelector("#todo");
const todoList=document.querySelector(".list-group");
const firstCardBody=document.querySelectorAll(".card-body")[0];
const secondCardBody=document.querySelectorAll(".card-body")[1];
const filter=document.querySelector("#filter");
const clearButton=document.querySelector("#clear-todos");

eventListeners();



function eventListeners(){//tüm event listeleri için
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);

}
function clearAllTodos(e){
    //arayüzden todoları temizleme
     if(confirm("tüümünü silmek istediğinize eminmisiniz ?")){
        // todoList.innerHTML = ""; yavaş bir işlem
        while(todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");
     }
}

function filterTodos(e){
    const filterValue = e.target.value.toLowerCase();
    const listItem = document.querySelectorAll(".list-group-item");

    listItem.forEach(function(listItem){
        const text = listItem.textContent.toLocaleLowerCase();
        if(text.indexOf(filterValue) === -1){
            //bulamadı
             listItem.setAttribute("style","display : none!important");
        }
        else{
            listItem.setAttribute("style","display : block");
        }
    })
}   
function deleteTodo(e){
    if(e.target.className=== "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);

        showAlert("succes","todo başarıyla silindi");
    }
}
function deleteTodoFromStorage(deletetodo){
 let todos=getTodosFromStorage();

 todos.forEach(function (todo, index){
    if(todo === deletetodo){
        
        todos.splice(index, 1); //array dan değeri silebiliriz
    }
 });
 localStorage.setItem("todos",JSON.stringify(todos));
}
function loadAllTodosToUI(){
    let todos=getTodosFromStorage();
 
    todos.forEach(function(todo){
        addTodoToUI(todo);


    });

}

function addTodo(e){
    const newTodo=todoInput.value.trim();

    if(newTodo === ""){
//         <div class="alert alert-dark" role="alert">
//   This is a dark alert—check it out!
// </div>
        showAlert("danger","lütfen bir todo girin");

    }
    else{
        addTodoToUI(newTodo);
        addTodoTostorage(newTodo);
        showAlert("succes","başarıyla eklendi");
    }

    console.log(newTodo);


    

    e.preventDefault();
}
function getTodosFromStorage(){// storage den bütün todoları alacak
    let todos;
    if(localStorage.getItem("todos")=== null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));

    }

    return todos;
}
function addTodoTostorage(newTodo){
    let todos=getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
    
}
function showAlert(type,message){
    const alert=document.createElement("div");
    alert.className=`alert alert-${type}`;
    alert.textContent=message;
    // console.log(alert);

    firstCardBody.appendChild(alert);
    
    setTimeout(function(){
        alert.remove();

    },1000);


}



function addTodoToUI(newTodo){// string değerini list item olarak uı a eleyecek
//     <!-- <li class="list-group-item d-flex justify-content-between">
//     Todo 1
//     <a href = "#" class ="delete-item">
//         <i class = "fa fa-remove"></i>
//     </a>

// </li>-->
// yukarudaki bloğu dinamik bir şekilde yazdıran kodu aşağıya yazıyorum
// list item oluşturma
const listItem = document.createElement("li");
const link = document.createElement("a");
// link oluşturma
link.href="#";
link.className="delete-item";
link.innerHTML="<i class = 'fa fa-remove'></i>";
listItem.className="list-group-item d-flex justify-content-between";


//text node ekleme

listItem.appendChild(document.createTextNode(newTodo));
listItem.appendChild(link);

// todoList'e list-item'ı ekleme

todoList.appendChild(listItem);

// yazdıktan ve ekledikten sonra listenin silinmesi için aşağıdaki kod kullanılıyor
todoInput.value="";

console.log(listItem);



}


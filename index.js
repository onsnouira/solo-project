var counter = 0;
function generateid() {
  return counter++;
}

function makeSomething(content) {
  return {
    id: generateid(),
    content: content,
  };
}

function makeToDoList() {
  var obj = [];
  obj.list = [];
  obj.addTask = addTask;
  obj.removeTask = removeTask;
  obj.add = add;

  return obj;
}
function add(content) {
  this.list.push(makeSomething(content));
  return this.list;
}

var tdo = makeToDoList();

function addTask() {
  var taskInput = document.getElementById("taskid").value;
  var ulInput = document.getElementById("ulid");

  var liinput = document.createElement("li");
  console.log(taskInput.length)
  liinput.textContent = taskInput;
  liinput.className = counter;
  if(taskInput.length > 0){

    $("#ulid").append(`
    <li class =  ${counter} >${taskInput} <button id = ${counter} class = remove>remove</button> </li>
    `)
    tdo.add(ulInput)
  }
  
}

$('#button').on("click",addTask)



function removeTask(id) {
//   //   this.list = this.list.filter(function (element, index) {
//   //     return element.id !== id;
//   //   });
   console.log('helloooooo');
  console.log(this.getAttribute("id"))
  $(`li.${this.getAttribute("id")}`).remove();

}

$(document).on("click",".remove",removeTask);



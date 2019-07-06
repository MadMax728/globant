// Code for the TODO app goes here.
function addList() {
        console.log("store", store);
        let obj = {
            text:"",
            isDone: false,
        }
        var element = document.getElementById("txt");
        obj.text = element.value;
        store.todo.push(obj);
        var ul=document.getElementById('list');
        ul.innerHTML = "";
        for (var i=0; i<store.todo.length; i++){
            var li=document.createElement('li');

            var remove=document.createElement('button');
            remove.innerHTML="Remove";
            remove.value= i;
            remove.addEventListener ("click", function(event) {
                console.log();
                let index = event.target.value;
                store.todo.splice(index, 1);
                ul.innerHTML = "";
                remove(index);
            });
            ul.appendChild(remove);
            if(store.todo.isDone) {
                var unDone=document.createElement('button');
                unDone.innerHTML="UnDone";
                unDone.value= i;
                unDone.addEventListener ("click", function(event) {
                    console.log("Index", i);
                    let index = event.target.value;
                    store.todo[index].isDone = false;
                });
                ul.appendChild(unDone);
            } else {
                var done=document.createElement('button');
                done.innerHTML="Done";
                done.value= i;
                done.addEventListener ("click", function(event) {
                    let index = event.target.value;
                    console.log("Index ", store.todo[index]);
                    store.todo[index].isDone = true;
                });
                ul.appendChild(done);
            }
            ul.appendChild(li);
            li.innerHTML=li.innerHTML + store.todo[i].text;
        }
}
function remove(index) {
    for (var j=0; j<store.todo.length; j++){
        var l=document.createElement('li');
        ul.appendChild(l);
        l.innerHTML=l.innerHTML + store.todo[j].text;
    }
}
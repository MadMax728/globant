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
            remove.addEventListener ("click", function() {
                console.log(i);
                store.todo.splice(i, 1);
            });
            ul.appendChild(remove);
            if(store.todo.isDone) {
                var unDone=document.createElement('button');
                unDone.innerHTML="UnDone";
                unDone.addEventListener ("click", function() {
                    console.log("Index", i);
                    store.todo[i].isDone = false;
                });
                ul.appendChild(unDone);
            } else {
                var done=document.createElement('button');
                done.innerHTML="Done";
                done.index= i;
                done.addEventListener ("click", function($event) {
                    console.log("index",i);
                    console.log("Index ", store.todo[i]);
                    store.todo[i].isDone = true;
                });
                ul.appendChild(done);
            }
            ul.appendChild(li);
            li.innerHTML=li.innerHTML + store.todo[i].text;
        }
}
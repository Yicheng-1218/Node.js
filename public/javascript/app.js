const studentsTable = document.querySelector('#stu-table');
const form = document.querySelector("#add-students-form");
// create element & render 
function renderStudents(doc){
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let tr = document.createElement("tr");
    tr.setAttribute('data-id', doc.id);
    td1.textContent = doc.data().name;
    td2.textContent = doc.data().age;
    td3.textContent = doc.data().gender;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    
    // delete 
    let cross = document.createElement('div');
    cross.textContent = 'x';
    tr.appendChild(cross);
    cross.addEventListener('click', (test) => {
        test.stopPropagation();
        let id = test.target.parentElement.getAttribute('data-id');
        console.log(id);
        db.collection('students').doc(id).delete();
        window.location.reload();
    });
    //

    studentsTable.appendChild(tr);
}

// getting data 
db.collection('students').get().then(data => {
    data.docs.forEach(doc => {
        renderStudents(doc);
    });
});
// 

// add data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(form.name.value==''||form.age.value==''||form.gender.value=='')
    {
        alert('不可有空白欄');
    }else{
        db.collection('students').get().then(data=>{
            let std_list=[];
            data.docs.forEach(a=>{
                std_list.push(a.id);
            })
            index=1;
            while(('student'+index) == std_list[index-1]){
                index++;
            }
            let std_id='student'+index;
            db.collection('students').doc(std_id).set({
                name: form.name.value,
                gender: form.gender.value,
                age: form.age.value
            })
            window.location.reload();
        })
        // db.collection('ClassA').doc(std_id).set({
        //     name: form.name.value,
        //     gender: form.gender.value,
        //     age: form.age.value
        // });
    }
});
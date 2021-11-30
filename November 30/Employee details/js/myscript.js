const details = e => {
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && JSON.parse(localStorage.getItem('formData')).some(data => data.fname.toLowerCase() == document.getElementById('fname').value.toLowerCase() && data.lname.toLowerCase() == document.getElementById('lname').value.toLowerCase());
    if (!exist) {
        formData.push({
            fname: document.getElementById('fname').value,
            lname: document.getElementById('lname').value,
            empid: document.getElementById('empid').value,
            designation: document.getElementById('designation').value
        });
        localStorage.setItem('formData', JSON.stringify(formData));
        // console.log(localStorage.getItem('formData'));
        dispData();
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
    }
    else {
        alert("ooopppssss..... Duplicate Found!!!\n Already stored");
    }
    e.preventDefault();
}


function dispData() {
    console.log(JSON.parse(localStorage.getItem('formData')));
    if (localStorage.getItem('formData')) {
        var output = document.querySelector('tbody');
        output.innerHTML = "";
        JSON.parse(localStorage.getItem('formData')).forEach(data => {
            output.innerHTML += `
            <tr>
            <td>${data.fname}</td>
            <td>${data.lname}</td>
            <td>${data.empid}</td>
            <td>${data.designation}</td>
            <td>
            <button class="btn btn-primary">Edit</button>&nbsp;
            <button class="btn btn-danger" id="delete">Delete</button></td>
            </tr>
            `;
        });
    }
}
dispData();



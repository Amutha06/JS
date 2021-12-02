const signUp = e =>{
	let formData ={
		fname: document.getElementById("fname").value,
		lname: document.getElementById("lname").value,
	    email: document.getElementById("email").value,
		pwd: document.getElementById("pwd").value
    }
    localStorage.setItem("formData",JSON.stringify(formData));

    displayData();
    e.preventDefault();
}

function displayData(){
	if(localStorage.getItem("formData")){
    let{fname,lname,email,pwd} = JSON.parse(localStorage.getItem("formData"));
	var output = document.getElementById("output");
	output.innerHTML = `
	<table>
	<tbody>
        <tr>
            <td>FirstName</td>
            <td>${fname}</td>
        </tr>
         <tr>
            <td>LastName</td>
            <td>${lname}</td>
        </tr>
         <tr>
            <td>Email</td>
            <td>${email}</td>
        </tr>
         <tr>
            <td>Password</td>
            <td>${pwd}</td>
        </tr>
     </tbody>
</table>
       `;
}
}
// displayData();

function Redirect(){
	window.location.href = "redirect.html";
}
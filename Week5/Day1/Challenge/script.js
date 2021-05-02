// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, send the data as JSON.
// The output should be:



const jsonConverter = () => {
	let firstName = document.forms[0].elements.firstname.value;
	let lastName = document.forms[0].elements.lastname.value;
	let obj = {firstName,lastName}
	console.log(JSON.stringify(obj));
	return false;

}

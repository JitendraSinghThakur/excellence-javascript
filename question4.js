//Question 4
//Let’s see we an api url www.example.com/api/get/1 
//Write a sample code to call this rest api and display the result.


const getDisplayResult = () => {
	return fetch('https://www.example.com/api/get/1')
		.then((response) => response.json())
		.then((json) => {
			return json;
		})
		.catch((error) => {
			console.error(error);
		});
};

console.log(getDisplayResult());

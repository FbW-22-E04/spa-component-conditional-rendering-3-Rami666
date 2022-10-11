import React from "react"
const Alert = props => {
	
	//Create an <Alert /> component that renders a bootstrap alert. The component must be able to receive the following 2 properties:
	//show (bool): True or false.
	//text (string): The message to include inside the alert message.
	//If show is false, the component should not render anything.
	//If show is true, the component should render a bootstrap alert with the text provided.

	if (props.show === false) {
		return null
	} else {
		 return <div className="alert alert-primary" role="alert">
		 	{props.text}
		 </div>
	}

	return (
		<div className="alert alert-danger" role="alert">
			This is a primary alert-check it out!
		</div>
	);
};

export default Alert;
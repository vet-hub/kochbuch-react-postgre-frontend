import './App.css';
import "./styleVerena.scss";
import { useState, useEffect } from "react";
import { Link, NavLink, Route, Routes, useParams } from "react-router-dom";

function App() {
	return (
	  <div className="App">
		 <header>
			<h1>Koch Dir was!</h1>
		 </header>
 
		 <NavCategory />
 
		 <br />
		 <hr />
		 <br />
 
		 {
			//	<CategoryRecipe />
			// <Recipes />
		 }
		 <footer>&copy; Copyright 2023</footer>
	  </div>
	);
 }


function NavCategory() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {


	/* 
		To tell the development server to proxy any unknown requests to your API server in development, 
		add a proxy field to your package.json, for example:
		"proxy": "http://localhost:8001",   - 
		This way, when you fetch('/api/category') in development, the development server will recognize 
		that it’s not a static asset, and will proxy your request to http://localhost:8001/api/category as a fallback. 
		The development server will only attempt to send requests without text/html in its Accept header to the proxy.
		Conveniently, this avoids CORS issues and error messages in development
		https://create-react-app.dev/docs/proxying-api-requests-in-development/
	*/

	fetch('/categs')
		.then((res) => res.json())  		// res.json() -function returns an Object
		.then((dataObj) => {
			console.log('dataObj:', dataObj, ' | ', dataObj.data);	// {data: Array(4)} | Array(4)
			setCategories(dataObj.data);										// Array(4)
			// setData(data.message)
	});

	/* 
		axios
		.get("https://localhost:8001")
		.then((response) => {
		console.log(response);
		// setItems(response.data);
		})
		.catch((error) => console.log(error));
	*/		
	
	}, []);

	return (
		<nav className="Category">
		<h2>Worauf hast Du heute Lust?</h2>
		<ul>

		{categories.map((category, idx) => (
				<li key={idx}>
				<NavLink to={`/category/${encodeURI(category.name)}`}>
					{category.name}
				</NavLink>
				</li>
			))}

		</ul>
		</nav>
	);
}

export default App;

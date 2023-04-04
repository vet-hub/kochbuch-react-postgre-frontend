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
			.then((res) => res.json())
			.then((data) => {
				console.log('data:', data.data);
				setCategories(data.data);
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
/* 
		categories.get("/all", async (req, res) => {
			console.log(pool);
			try {
			  const { rows } = await pool.query("select * from category;");
			  res.json(rows);
			} catch (err) {
			  res.sendStatus(500);
			}
		 });
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

  /*
	// version2: onClick - category Name für Filter übergeben 

	const resipeFiltr = (categ) => {
		console.log(categ);
	}

	return (
	  <div className="Category">
		 <h2>Category</h2>
		 <ul>
			{categories.map((category, idx) => (
				<li key={idx} onClick={() => resipeFiltr(category.fields.cateName)}>
						<h3>{category.fields.cateName}</h3>
				</li>
		 ))}
		 </ul>
	  </div>
	);
 */
}

export default App;

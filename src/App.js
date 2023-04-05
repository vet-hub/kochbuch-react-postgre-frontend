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
 

		 <Routes>
        <Route path="/" element={<RecipesInCategory />} />
        <Route path="/category/:cate_name" element={<RecipesInCategory />} />
      </Routes>

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
		To tell the development server to proxy any unknown requests to your API server in development, add a proxy field to your package.json, for example:
		"proxy": "http://localhost:8001",   - The development server will only attempt to send requests without text/html (not a static asset/resourses) in its Accept header to the proxy.
		https://create-react-app.dev/docs/proxying-api-requests-in-development/
	*/

	/*  */

	fetch('/categs')							// >>> categRouter.get('/', getCategs);
		.then((res) => res.json())  		// res.json() -function returns an Object
		.then((dataObj) => {
			console.log('dataObj:', dataObj, ' | ', dataObj.data);	// {data: Array(4)} | Array(4)
			setCategories(dataObj.data);										// Array(4)
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


function RecipesInCategory() {
	const { cate_name = "Top bewertet" } = useParams(); // "/category/:cate_name" | defaullt value 'Top bewertet'
	const [recipesInCat, setRecipesInCat] = useState([]);
 
	console.log("cate_name: ", cate_name);
 
	const getData = async () => {

	//   const entryItem = await client.getEntries({
	// 	 content_type: "category",
	// 	 "fields.cateName": cate_name,
	//   });
 
	//  const recipesInCategory = entryItem.items[0].fields.cateRecipes; // recipes array in one category
	//  console.log("TEST resipesInCategory: ", recipesInCategory);
 
	//  setRecipesInCat(recipesInCategory);
	};
 
	useEffect(() => {

		fetch('/categs/category/1')		// >>> categRouter.get('category/1', getCategs);
		.then((res) => res.json())  		// res.json() -function returns an Object
		.then((dataObj) => {
			console.log('dataObj2:', dataObj, ' | ', dataObj.data);	// {data: Array(4)} | Array(4)
			setRecipesInCat(dataObj.data);										// Array(4)
		});

	}, [cate_name]);
 
	return (
	  <section>
		 <h2>Hier unsere Vorschläge für {cate_name}-Rezepte:</h2>
		 <div className="Recipes">

		 </div>
	  </section>
	);
 }
 


export default App;

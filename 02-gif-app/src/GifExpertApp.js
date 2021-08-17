import React, { useState } from "react";
import AddCategory from './components/adCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
  //const categories =
  const [categories, setCategories] = useState([
    "My hero academy",
  ]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr />
      <ol>
        {
	    categories.map(category => ( 
		<GifGrid category= { category } key= { category }/>
	    ))
	}
      </ol>
    </>
  );
};

export default GifExpertApp;

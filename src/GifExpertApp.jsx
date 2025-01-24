import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  let errorMessage = "La categoria {0} ya existe";

  const onAddCategory = (newCategory) => {
    const categoryExist = categories.find((cat) => cat == newCategory)
      ? true
      : false;

    if (!categoryExist) {
      document.getElementById("error").style.display = "none";
      document.getElementById("error").innerText = "";
      setCategories([newCategory, ...categories]);
    } else {
      document.getElementById("error").innerText = errorMessage.replace(
        "{0}",
        newCategory
      );
      document.getElementById("error").style.display = "block";
    }
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <div
        id="error"
        className="alert alert-danger"
        role="alert"
        style={{ display: "none" }}
      ></div>
      <AddCategory onNewCategory={onAddCategory} />

      <br />
      <br />

      {categories.map((cat) => (
        <GifGrid key={cat} category={cat} />
      ))}
    </>
  );
};

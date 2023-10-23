import React, { useState, useEffect } from "react";
import axios from "axios";

const allCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getAllCategoris = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/categories/customers/all`
        );
        setCategories(data.categories);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCategoris();
  }, []);

  console.log(categories);
  return categories;
};

export default allCategories;

const getCategories = async () => {
  const response = await fetch("http://localhost:3000/api/categories");

  const data = await response.json();

  return data;
};

export default getCategories;
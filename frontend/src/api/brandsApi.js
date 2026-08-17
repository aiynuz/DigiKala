const getBrands = async () => {
  const response = await fetch("http://localhost:3000/api/brands");

  if (!response.ok) {
    throw new Error("Brands API Error");
  }

  return await response.json();
};

export default getBrands;
const getTopBanners = async () => {
  const response = await fetch(
    "http://localhost:3000/api/topBanners"
  );

  if (!response.ok) {
    throw new Error("Top Banners API Error");
  }

  return await response.json();
};

export default getTopBanners;
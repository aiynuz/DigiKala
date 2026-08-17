const getBottomBanners = async () => {
  const response = await fetch(
    "http://localhost:3000/api/bottomBanners"
  );

  if (!response.ok) {
    throw new Error("Bottom Banners API Error");
  }

  return await response.json();
};

export default getBottomBanners;
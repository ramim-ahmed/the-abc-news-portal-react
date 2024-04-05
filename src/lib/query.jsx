export const fetchNewsCategories = async () => {
  const res = await fetch("./categories.json");
  return res.json();
};

export const fetchAllNews = async () => {
  const res = await fetch("./news.json");
  return res.json();
};

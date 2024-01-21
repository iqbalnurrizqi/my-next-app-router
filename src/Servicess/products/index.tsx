export const getData = async (url: string) => {
    // const res = await fetch("https://fakestoreapi.com/products");
    const res = await fetch(url, 
    {
       next: { 
        tags: ["products"] 
      } });
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    return res.json();
  }
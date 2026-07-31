"use server";

//public get all properties

interface ISearchProps {
  query?: { [key: string]: string | undefined };
}
export const getAllProperties = async ({ query }: ISearchProps) => {
  const params = new URLSearchParams();

  console.log(params, "this is the params");

  if (query && query.searchTerm) {
    params.set("searchTerm", query.searchTerm as string);
  }
  if (query && query.minPrice) {
    params.set("minPrice", query.minPrice as string);
  }
  if (query && query.maxPrice) {
    params.set("maxPrice", query.maxPrice as string);
  }
  if (query && query.type) {
    params.set("type", query.type as string);
  }

  const res = await fetch(
    `${process.env.BACKEND_URL}/api/properties?${params.toString()}`,
  );

  const result = await res.json();

  return result;
};

"use server";

//public get all properties

interface ISearchProps {
  query?: { [key: string]: string | undefined };
}
export const getAllProperties = async ({ query }: ISearchProps = {}) => {
  const params = new URLSearchParams();

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
    {
      cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 5,
        tags: ["all-properties"],
      },
    },
  );

  const result = await res.json();

  return result;
};

//get property details

export const getPorpertyDetails = async (id: string) => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/properties/${id}`, {
    cache: "no-cache",
    next: {
      revalidate: 60 * 60 * 12,
      tags: ["property-details"],
    },
  });

  const result = await res.json();

  return result;
};

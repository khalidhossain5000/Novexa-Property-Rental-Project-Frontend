interface IImageUploadResponse {
  success: boolean;
  data: {
    url: string;
    display_url: string;
    delete_url: string;
  };
}

export const imageUpload = async (image: File) => {
  const formData = new FormData();
  formData.append("image", image);

  const response = await fetch(
    `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
    {
      method: "POST",
      body: formData,
    },
  );

  if (!response.ok)
    return {
      success: false,
      message: "Failed To Upload image",
    };

  const result: IImageUploadResponse = await response.json();

  if (!result.success)
    return {
      success: false,
      message: "Failed To Upload image",
    };

  return result.data.url;
};

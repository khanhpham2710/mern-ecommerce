import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
});

const deleteImageCloudinary = async (url) => {
  try {
    const imageId = url.split("/").pop().split('.')[0]
    await cloudinary.uploader.destroy("ecommerce/" + imageId);
  } catch (error) {
    console.log(error);
  }
};

export default deleteImageCloudinary;

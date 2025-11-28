// utils/cloudinaryUpload.js
import cloudinary from "./cloudinary.js";

// export const uploadBufferToCloudinary = (buffer, options = {}) => {
//   return new Promise((resolve, reject) => {
//     const uploadStream = cloudinary.uploader.upload_stream(
//       options,
//       (error, result) => {
//         if (error) return reject(error);
//         resolve(result);
//       }
//     );

//     uploadStream.end(buffer);
//   });
// };

export const uploadBufferToCloudinary = (file, options = {}) => {
  return cloudinary.uploader.upload(file, options);
};

import mongoose from "mongoose";

export const conexion = async () => {
  try {
    if (!process.env.NUXT_MONGODB)return;
    await mongoose.connect(process.env.NUXT_MONGODB);
    console.log("Conectado");
  } catch (error) {
    console.error(error);
  }
};

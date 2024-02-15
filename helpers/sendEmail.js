import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  post: 465,
  secure: true,
  auth: {
    user: "mykola.baliasevych@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendUserEmail = async (data) => {
  const email = { ...data, from: "mykola.baliasevych@meta.ua" };
  await transport.sendMail(email);
  return true;
};

export default sendUserEmail;

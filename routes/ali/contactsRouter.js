import express from "express";
import contactsControllers from "../../controllers/contactsControllers.js";
import validateBody from "../../midlewares/validateBody.js";
import { createContactSchema } from "../../schemas/contactsSchemas.js";

const {
  getAllContacts,
  getContactById,
  deleteContact,
  createContact,
  updateContact,
} = contactsControllers;

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", getContactById);

contactsRouter.delete("/:id", deleteContact);

contactsRouter.post("/", validateBody(createContactSchema), createContact);

contactsRouter.put("/:id", validateBody(createContactSchema), updateContact);

export default contactsRouter;

import express from "express";
import contactsControllers from "../../controllers/contactsControllers.js";
import validateBody from "../../midlewares/validateBody.js";
import {
  createContactSchema,
  updataFavoriteSchema,
} from "../../schemas/contactsSchemas.js";
import isValidId from "../../midlewares/isValidId.js";

const {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  updateFavorite,
  deleteContact,
} = contactsControllers;

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", isValidId, getContactById);

contactsRouter.post("/", validateBody(createContactSchema), createContact);

contactsRouter.put(
  "/:id",
  isValidId,
  validateBody(createContactSchema),
  updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  validateBody(updataFavoriteSchema),
  updateFavorite
);

contactsRouter.delete("/:id", isValidId, deleteContact);

export default contactsRouter;

import express from "express";
import contactsControllers from "../../controllers/contactsControllers.js";
import validateBody from "../../midlewares/validateBody.js";
import {
  createContactSchema,
  updataFavoriteSchema,
} from "../../schemas/contactsSchemas.js";
import isValidId from "../../midlewares/isValidId.js";
import authenticate from "../../midlewares/authenticate.js";

const {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  updateFavorite,
  deleteContact,
} = contactsControllers;

const contactsRouter = express.Router();

contactsRouter.get("/", authenticate, getAllContacts);

contactsRouter.get("/:id", authenticate, isValidId, getContactById);

contactsRouter.post(
  "/",
  authenticate,
  validateBody(createContactSchema),
  createContact
);

contactsRouter.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(createContactSchema),
  updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(updataFavoriteSchema),
  updateFavorite
);

contactsRouter.delete("/:id", authenticate, isValidId, deleteContact);

export default contactsRouter;

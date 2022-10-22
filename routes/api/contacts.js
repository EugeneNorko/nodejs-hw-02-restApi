const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getListContacts));

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact));

router.delete("/:contactId", ctrlWrapper(ctrl.removeContact));

router.put(
    "/:contactId",
    validateBody(schemas.addSchema),
    ctrlWrapper(ctrl.updateContact)
);

router.patch(
    "/:contactId/favorite",
    validateBody(schemas.updateFavoriteSchema),
    ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;

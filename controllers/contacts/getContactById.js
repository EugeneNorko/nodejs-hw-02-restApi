const { Contact } = require("../../models/contact");

const { RequestError } = require("../../helpers");

const getContactById = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findById(contactId);
    if (!result) {
        throw RequestError(404, "Not found");
    }
    res.status(200).json(result);
};

module.exports = getContactById;

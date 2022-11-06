const nodemailer = require("nodemailer");

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 25,
    secure: false,
    auth: {
        user: "eugenenorko@meta.ua",
        pass: META_PASSWORD,
    },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
    const mail = { ...data, from: "eugenenorko@meta.ua" };
    await transport.sendMail(mail);
    return true;
};

module.exports = sendEmail;

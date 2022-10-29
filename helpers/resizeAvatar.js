const jimp = require("jimp");

const resizeAvatar = (imageURL) =>
    jimp
        .read(imageURL)
        .then((image) => {
            return image.cover(250, 250).write(imageURL);
        })
        .catch((err) => {
            console.log(err);
        });

module.exports = resizeAvatar;

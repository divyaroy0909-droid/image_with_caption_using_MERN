const ImageKit = require('@imagekit/nodejs')

const { toFile } = require('@imagekit/nodejs');


const imagekit = new ImageKit({
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadFile(buffer) {

    const file = await toFile(buffer, "image.jpg");

    const result = await imagekit.files.upload({
        file: file,
        fileName: "image.jpg"
    });

    return result;
}

module.exports = uploadFile;
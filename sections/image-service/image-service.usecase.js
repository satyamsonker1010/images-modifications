const sharp = require("sharp");
const path = require("path");
const convertImageUseCase = async ({ type, w, h, q, others }) => {
  try {
    let pathData = path.join(__dirname, "../../", "inputFiles");
    let finalInputPath = `${pathData}/dummy.png`;

    let image = sharp(finalInputPath);

    if (w || h) {
        console.log(Number(w));
      image = image.resize({width:(w && Number(w)) || null , height:(h && Number(h)) || null });
    }

    if (type && q) {
      image = image.toFormat(type, { quality: (q && Number(q)) || 100 });
    } else if (type) {
      image = image.toFormat(type);
    } else if (q) {
      image = image.toFormat({ quality: (q && Number(q)) || 100 });
    }
    console.log(type , w,q,h)
    const outputPath = `1.${type || "webp"}`;

    await image.toFile(outputPath);
    console.log("Image conversion successful");
  } catch (error) {
    console.log(error);
    throw Error("Image convert failed");
  }
};

module.exports = {
  convertImageUseCase,
};

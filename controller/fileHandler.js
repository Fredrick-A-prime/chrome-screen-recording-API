const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const videoUpController = (req, res) => {
  try {
    console.log(req.files);
    const uploadFile = req.files.video;

    const fileFolder = path.join(__dirname, `../uploads`);
    if (!fs.existsSync(fileFolder)) {
      fs.mkdirSync(fileFolder);
    }
    const fileName = `${uuidv4()}-${uploadFile.name}`;

    uploadFile.mv(`${fileFolder}/${fileName}`, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Error uploading file" });
      }
      return res.status(200).json({ message: "File uploaded successfully" });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error uploading file" });
  }
};

module.exports = videoUpController;

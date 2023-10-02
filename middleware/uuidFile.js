const path = require('path')
const fs = require("fs");
const readUUIDMapping = () => {

    const jsonfilePath = path.join(__dirname, "../uuid_map.json")

    try {
        const data = fs.readFileSync(jsonfilePath, "utf8");
        return JSON.parse(data);
    } catch (err) {
        console.log(err);

        return {};
    }
};

const writeUUIDMapping = (uuidMap) => {
    const jsonfilePath = path.join(__dirname, "../uuid_map.json")
    try {
        fs.writeFileSync(jsonfilePath, JSON.stringify(uuidMap, null, 2), "utf-8");
    } catch (err) {
        console.error("Error writing uuid mapping file", err)
    }
}

const getUUIDForVideo = (videoId) => {
    try {
      const uuidMapping = readUUIDMapping();
  
      if (uuidMapping.hasOwnProperty(videoId)) {
        return uuidMapping[videoId];
      } else {
        return null;
      }
    } catch (err) {
      console.error(err);
      return null;
    }
  };
  

module.exports = { readUUIDMapping, writeUUIDMapping, getUUIDForVideo };
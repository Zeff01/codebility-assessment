const { log } = require("console");
const crypto = require("crypto");
const moment = require("moment-timezone");

function generateReferenceNo() {
  const currentDate = moment().tz("Asia/Manila");
  const formattedDate = currentDate.format("YYMMDDHHmm");
  const randomString = crypto.randomBytes(3).toString("hex").toUpperCase();
  const randomInteger = crypto.randomInt(9999);
  console.log(randomInteger);

  return `${randomInteger}`;
  // return `${formattedDate}${randomString}`;
}

function generateTimestamp() {
  return moment().tz("Asia/Manila").format("YYYY-MM-DD HH:mm:ss");
}

module.exports = { generateReferenceNo, generateTimestamp };

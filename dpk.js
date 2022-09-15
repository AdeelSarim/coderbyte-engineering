const crypto = require("crypto");

exports.deterministicPartitionKey = (key) => {
  const TRIVIAL_PARTITION_KEY = "0";
  let customId;

  if (key) {
    const eventData = JSON.stringify(key);
    customId = crypto.createHash("sha3-512").update(eventData).digest("hex");
  } else {
    customId = TRIVIAL_PARTITION_KEY;
  }

  return customId;
};
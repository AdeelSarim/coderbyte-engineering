const crypto = require("crypto");

exports.deterministicPartitionKey = (key) => {
  const TRIVIAL_PARTITION_KEY = "0";

  if (key) {
    const eventData = JSON.stringify(key);
    return crypto.createHash("sha3-512").update(eventData).digest("hex");
  } else {
    return TRIVIAL_PARTITION_KEY;
  }
};
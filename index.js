require("dotenv").config({ path: ".env" });
const axios = require("axios");
const ALCHEMY_URL = process.env.ALCHEMY_URL;

axios
  .post(ALCHEMY_URL, {
    jsonrpc: "2.0",
    id: "1",
    method: "eth_getBlockByNumber",
    params: [
      "0xb443", // block 46147
      false,
    ],
  })
  .then((response) => {
    console.log(response.data.result);
  });

const axios = require('axios');

require('dotenv').config();

// copy-paste your URL provided in your Alchemy.com dashboard
const alchemy = process.env.ALCHEMY_URL;
const address = process.env.WALLET_ADDRESS;

axios.post(alchemy, {
  jsonrpc: "2.0",
  id: 1,
  method: "eth_getBalance",
  params: [address, "latest"]
}).then((response) => {
  console.log(parseInt(response.data.result));
});
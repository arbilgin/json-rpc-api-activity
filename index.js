const axios = require('axios');

// copy-paste your URL provided in your Alchemy.com dashboard
const ALCHEMY_URL = "";
const address = "";

axios.post(ALCHEMY_URL, {
  jsonrpc: "2.0",
  id: 1,
  method: "eth_getBalance",
  params: [address, "latest"]
}).then((response) => {
  console.log(parseInt(response.data.result));
});
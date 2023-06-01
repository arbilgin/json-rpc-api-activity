const axios = require('axios');

// copy-paste your URL provided in your Alchemy.com dashboard
const ALCHEMY_URL = "https://eth-mainnet.g.alchemy.com/v2/ap4JyKB4C9d3WIoUhqzsMOKlNVviwRmA";

axios.post(ALCHEMY_URL, {
  jsonrpc: "2.0",
  id: 1,
  method: "eth_getBalance",
  params: ["0x808b891a69f2cF52f84228DA61f2F4F5b08297DE", "latest"]
}).then((response) => {
  console.log(parseInt(response.data.result));
});
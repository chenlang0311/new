const _ = require("lodash");
const {join}  =require("path");
let config = {
    "viewDir" : join(__dirname, "..", "views"),
    "staticDir" : join(__dirname, "..", "assets")
};

const localConfig = {
    port: 3000,
    baseUrl: "http//"
}
config = _.extend(config, localConfig);
export default config;
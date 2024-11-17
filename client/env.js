const { EnvDev } = require("./env/env.dev")
const { EnvProd } = require("./env/env.prod")

const env = EnvDev;

process.env = {
    ...process.env,
    ...env
}

exports.env = env
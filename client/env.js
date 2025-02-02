const { EnvDev } = require("./env/env.dev")
const { EnvProd } = require("./env/env.prod")

process.env = {
    isDev: true,
    ...process.env,
    ...(process.env.isDev ? EnvDev : EnvProd)
}

exports.env = process.env.isDev ? EnvDev : EnvProd;
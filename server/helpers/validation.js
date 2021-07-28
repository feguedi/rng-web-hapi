const Boom = require('@hapi/boom')

function failAction (request, h, error) {
    if (process.env.NODE_ENV !== 'production') {
        if (error.isJoi) {
            console.error('==================')
            console.error(JSON.stringify(error, null, 2))
            console.error('==================')
        }
        throw errorHandler(error)
    }
}

function ipRegex (value) {
    const regex = /(25[0-5]|24[0-9]|1[0-9]{2}|[0-9]{2}|[0-9])[.](25[0-5]|24[0-9]|1[0-9]{2}|[0-9]{2}|[0-9])[.](25[0-5]|24[0-9]|1[0-9]{2}|[0-9]{2}|[0-9])[.](25[0-5]|24[0-9]|1[0-9]{2}|[0-9]{2}|[0-9])/g
    const ipValid = regex.test(value)

    return ipValid && value
}

function publicIp (value) {
    const regex = /192[.]168[.]1[.](25[0-5]|24[0-9]|1[0-9]{2}|[0-9]{2}|0)/
    const localIpValid = regex.test(value)

    return localIpValid && value
}

module.exports = {
    failAction,
    ipRegex,
    publicIp,
}

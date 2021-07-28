const os = require( 'os' )
const { ipRegex, publicIp } = require('./validation')

const host = process.env.HOST
const networkInterfaces = os.networkInterfaces()

const getPublicIp = () => {
    if (publicIp(host)) {
        return host
    }

    const interfaces = new Set()
    
    Object.keys(networkInterfaces).forEach(key => {
        networkInterfaces[key].forEach(intrfc => {
            ipRegex && interfaces.add(intrfc.address)
        })
    })

    const publicIps = [...interfaces].filter(address => publicIp(address))

    return publicIps[0]
}

exports.ip = getPublicIp()

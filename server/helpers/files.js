const stream = require('stream')
const { Buffer } = require('buffer')
const XLSX = require('xlsx')

const generarExcel = (arrayData, format) => {
    try {
        const wb = XLSX.utils.book_new()
        const ws = XLSX.utils.aoa_to_sheet([arrayData])
        XLSX.utils.book_append_sheet(wb, ws, 'Random number generator')

        const buf = XLSX.write(wb, { type: 'buffer', bookType: format || 'xlsx' })
        return buf
    } catch (error) {
        
    }
}

const bufferToStream = binary => {
    const readableStream = new stream.Readable({
        read() {
            try {
                const data = Buffer.from(binary, 'utf-8')
                this.push(data)
                this.push(null)
            } catch (error) {
                console.error('No fue posible agregar:', error)
            }
        }
    })

    return readableStream
}

module.exports = {
    generarExcel,
    bufferToStream,
}


export const DEFAULT_CONVERTER = 'rgba_hex'
export const converters = {
  rgba_hex: c => convert(c)
}

const convert = c => {
    const a = (255*c.a < 16 ? "0" : "") + Math.round(255*c.a).toString(16)
    const r = (255*c.r < 16 ? "0" : "") + Math.round(255*c.r).toString(16)
    const g = (255*c.g < 16 ? "0" : "") + Math.round(255*c.g).toString(16)
    const b = (255*c.b < 16 ? "0" : "") + Math.round(255*c.b).toString(16)
    return "#" + a + r + g + b
} 

export default converters

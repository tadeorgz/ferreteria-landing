export function createWhatsAppLink(numero, mensaje) {
    const cleanNumber = String(numero || '').replace(/\D/g, '')
    const encodedMessage = encodeURIComponent(mensaje || '')

    return `https://wa.me/${cleanNumber}?text=${encodedMessage}`
}

export function createProductInquiryMessage(companyName, productName) {
    return `Hola ${companyName}, estoy interesado en el producto: ${productName}. ¿Tienen stock?`
}
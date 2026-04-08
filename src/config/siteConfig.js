const publicWhatsAppNumber = import.meta.env.VITE_PUBLIC_WHATSAPP_NUMBER
const publicDefaultMessage =
    import.meta.env.VITE_PUBLIC_DEFAULT_WHATSAPP_MESSAGE
const publicMapEmbedUrl =
    import.meta.env.VITE_PUBLIC_MAP_EMBED_URL

export const siteConfig = {
    heroBackgroundImage:
        'jelleke-vanooteghem-MohB4LCIPyM-unsplash.jpg',
    companyName: 'Ferreteria Valkiria',
    tagline: 'Todo para construir, reparar y mejorar tu hogar',
    heroTitle: 'Tu ferreteria de confianza para proyectos que duran',
    heroDescription:
        'Encuentra herramientas, accesorios y materiales en un solo lugar. Te asesoramos y respondemos por WhatsApp en minutos.',
    whatsappNumber: publicWhatsAppNumber,
    defaultWhatsAppMessage: publicDefaultMessage,
    ctaLabel: 'Hablar por WhatsApp',
    address: 'Av. Dr. Enrique Pouey y Baltasar Brum, 15900 Las Piedras, Departamento de Canelones',
    mapEmbedUrl: publicMapEmbedUrl,
    colors: {
        brand: '#2563eb',
        brandDark: '#846c34',
        accent: '#f97316',
        bgSoft: '#eff6ff',
        text: '#0f172a',
    },
    socialLinks: [
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/ferreteria_valkiria/',
        },
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/ferreteriavalkiria/',
        }
        // ,
        // {
        //     name: 'TikTok',
        //     url: 'https://tiktok.com',
        // },
    ],
}
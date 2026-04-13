const publicWhatsAppNumber = import.meta.env.VITE_PUBLIC_WHATSAPP_NUMBER
const publicDefaultMessage =
    import.meta.env.VITE_PUBLIC_DEFAULT_WHATSAPP_MESSAGE
const publicMapEmbedUrl =
    import.meta.env.VITE_PUBLIC_MAP_EMBED_URL

export const siteConfig = {
    heroBackgroundImage:
        'jelleke-vanooteghem-MohB4LCIPyM-unsplash.jpg',
    companyName: 'Nombre de la Ferreteria ',
    tagline: 'Todo para construir, reparar y mejorar tu hogar',
    heroTitle: 'Tu ferreteria de confianza para proyectos que duran',
    heroDescription:
        'Encuentra herramientas, accesorios y materiales en un solo lugar. Te asesoramos y respondemos por WhatsApp en minutos.',
    whatsappNumber: publicWhatsAppNumber,
    defaultWhatsAppMessage: publicDefaultMessage,
    ctaLabel: 'Hablar por WhatsApp',
    address: '15900 Las Piedras, Departamento de Canelones',
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
            url: 'https://www.instagram.com/taddeo.15/',
        },
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/taddeo.15/',
        }
        // ,
        // {
        //     name: 'TikTok',
        //     url: 'https://tiktok.com',
        // },
    ],
}
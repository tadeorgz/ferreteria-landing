import { Globe, MapPin, Phone, Store } from 'lucide-react'

const iconByName = {
  Instagram: Globe,
  Facebook: Globe,
  TikTok: Globe,
}

function Footer({ companyName, socialLinks, address, mapEmbedUrl, whatsappNumber }) {
  return (
    <footer id="contacto" className="mt-0 border-t border-slate-200/50 bg-slate-50">
      {/* Top CTA band */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-black text-white sm:text-3xl">¿Tenés un proyecto?</h2>
            <p className="mt-1 text-slate-400">Escribinos y te asesoramos sin cargo.</p>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, quiero asesoramiento para mi proyecto.')}`}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex shrink-0 items-center gap-2.5 overflow-hidden rounded-xl bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/35 active:scale-95"
          >
            <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
            <svg viewBox="0 0 24 24" className="relative h-5 w-5 fill-white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="relative">Hablar ahora</span>
          </a>
        </div>
      </div>

      {/* Main footer content */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-2">
          {/* Info */}
          <div className="space-y-5">
            <div>
              <div className="mb-1 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--brand-color)]">
                <Store size={12} />
                Contacto
              </div>
              <h3 className="text-xl font-black text-slate-900">{companyName}</h3>
              <p className="mt-1 text-sm text-slate-600">Lunes a Viernes de 8:00 a 19:00 hrs</p>
              <p className="mt-1 text-sm text-slate-600">Sabado de 8:00 a 17:00 hrs</p>
              <p className="mt-1 text-sm text-slate-600">Domingo de 9:00 a 14:00 hrs</p>
            </div>

            <div className="space-y-3">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-[var(--brand-color)]"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-color)]/10 group-hover:bg-[var(--brand-color)]/20">
                  <MapPin size={13} className="text-[var(--brand-color)]" />
                </div>
                <span className="leading-none">{address}</span>
              </a>

              <a
                href={`tel:+${whatsappNumber}`}
                className="group inline-flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-[var(--brand-color)]"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-color)]/10 group-hover:bg-[var(--brand-color)]/20">
                  <Phone size={13} className="text-[var(--brand-color)]" />
                </div>
                <span className="leading-none">+{whatsappNumber}</span>
              </a>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-2 pt-1">
              {socialLinks.map((social) => {
                const SocialIcon = iconByName[social.name] || Globe
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:border-[var(--brand-color)]/40 hover:bg-[var(--brand-color)]/5 hover:text-[var(--brand-color)]"
                  >
                    <SocialIcon size={14} />
                    {social.name}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <iframe
              title="Mapa de ubicacion"
              src={mapEmbedUrl}
              className="h-64 w-full border-0 lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mx-auto mt-10 w-full max-w-7xl border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} {companyName}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer
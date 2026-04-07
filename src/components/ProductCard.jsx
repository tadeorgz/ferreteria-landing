import { CircleDollarSign, Tag } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

function ProductCard({ product, whatsappHref }) {
  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(product.precio)

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--brand-color)]/25 hover:shadow-xl hover:shadow-[var(--brand-color)]/10">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-slate-100">
        <img
          src={product.imagen}
          alt={product.nombre}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Category badge */}
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
          <Tag size={10} />
          {product.categoria}
        </span>

        {/* Quick-action overlay */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center opacity-0 transition-all duration-500 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 backdrop-blur-sm">
            Ver detalles
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="line-clamp-2 text-base font-bold leading-snug text-slate-900 transition-colors duration-200 group-hover:text-[var(--brand-dark-color)]">
          {product.nombre}
        </h3>

        <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-slate-500">
          {product.descripcion}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-2.5">
          <span className="text-xs font-medium uppercase tracking-wide text-slate-400">Precio</span>
          <p className="inline-flex items-center gap-1.5 text-base font-extrabold text-[var(--brand-dark-color)]">
            <CircleDollarSign size={15} className="text-[var(--brand-color)]" />
            {formattedPrice}
          </p>
        </div>

        <WhatsAppButton
          href={whatsappHref}
          label="Consultar por WhatsApp"
          className="w-full"
        />
      </div>
    </article>
  )
}

export default ProductCard

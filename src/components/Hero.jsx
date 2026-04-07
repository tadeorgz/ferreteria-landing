import { ShieldCheck, Truck, Star } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

function Hero({ title, description, ctaHref, ctaLabel, tagline }) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-slate-900 px-4 pb-24 pt-20 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8"
    >
      {/* Atmospheric background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(15,118,110,0.35),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_80%,rgba(245,158,11,0.08),transparent)]" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orbs */}
      <div className="animate-pulse-slow absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-[var(--brand-color)]/15 blur-3xl" />
      <div className="animate-pulse-slow absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" style={{ animationDelay: '1s' }} />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Tagline badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--brand-color)]/30 bg-[var(--brand-color)]/10 px-4 py-1.5 backdrop-blur-sm">
          <Star size={12} className="fill-[var(--brand-color)] text-[var(--brand-color)]" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-color)]">
            {tagline}
          </span>
          <Star size={12} className="fill-[var(--brand-color)] text-[var(--brand-color)]" />
        </div>

        {/* Main heading */}
        <h1 className="text-balance text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
          <span className="text-white">{title.split(' ').slice(0, -3).join(' ')}</span>{' '}
          <span className="bg-gradient-to-r from-[var(--brand-color)] via-emerald-400 to-[var(--brand-color)] bg-clip-text text-transparent">
            {title.split(' ').slice(-3).join(' ')}
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-slate-400 sm:text-xl">
          {description}
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <WhatsAppButton href={ctaHref} label={ctaLabel} size="lg" />
          <a
            href="#catalogo"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10"
          >
            Ver catálogo
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
          <div className="inline-flex items-center gap-2.5 rounded-xl border border-white/8 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--brand-color)]/20">
              <ShieldCheck size={15} className="text-[var(--brand-color)]" />
            </div>
            <span className="text-sm font-medium text-slate-300">Asesoría personalizada</span>
          </div>
          <div className="inline-flex items-center gap-2.5 rounded-xl border border-white/8 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/20">
              <Truck size={15} className="text-amber-400" />
            </div>
            <span className="text-sm font-medium text-slate-300">Retiros rapidos en el local</span>
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-10 flex items-center justify-center gap-2">
          <div className="flex -space-x-2">
            {[
              'bg-emerald-500', 'bg-blue-500', 'bg-amber-500', 'bg-rose-500',
            ].map((color, i) => (
              <div
                key={i}
                className={`h-8 w-8 rounded-full border-2 border-slate-900 ${color} flex items-center justify-center text-xs font-bold text-white`}
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <p className="ml-2 text-sm text-slate-400">
            <span className="font-semibold text-white">+500 clientes</span> confían en nosotros
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  )
}

export default Hero

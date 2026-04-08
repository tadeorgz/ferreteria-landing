import { Star, Zap, Headphones, Package } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

const benefits = [
  {
    icon: Headphones,
    title: 'Asesoramiento',
    description: 'Te ayudamos a elegir lo que realmente necesitás.',
    accent: false,
  },
  {
    icon: Package,
    title: 'Stock permanente',
    description: 'Amplia variedad disponible siempre.',
    accent: true,
  },
  {
    icon: Zap,
    title: 'Atención rápida',
    description: 'Sin demoras, entrá y salí con lo tuyo.',
    accent: false,
  },
]

function Hero({ title, description, ctaHref, ctaLabel, tagline, backgroundImage }) {
  const bgImage =
    backgroundImage
  // Last 4 words get accent color
  const words = title.split(' ')
  const split = Math.max(0, words.length - 4)
  const mainWords = words.slice(0, split).join(' ')
  const accentWords = words.slice(split).join(' ')

  return (
    <section id="inicio" className="relative isolate min-h-screen overflow-hidden">

      <div
        className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat brightness-[0.72] saturate-[1.08]"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/55 to-slate-950/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(14,165,233,0.20),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_0%_100%,rgba(15,118,110,0.42),transparent_58%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_0%,transparent_28%,transparent_72%,rgba(255,255,255,0.04)_100%)]" />

      <div className="relative flex min-h-screen flex-col px-4 pb-6 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <div className="mx-auto grid w-full max-w-7xl flex-1 items-end gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.68fr)] lg:items-center">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/85 shadow-lg shadow-black/10 backdrop-blur-xl">
              <Star size={11} className="fill-[var(--accent-color)] text-[var(--accent-color)]" />
              {tagline}
            </div>

            <h1 className="text-balance text-5xl font-black leading-[0.96] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.75rem]">
              {mainWords && <span>{mainWords} </span>}
              <span
                className="bg-gradient-to-r from-[var(--accent-color)] via-amber-300 to-white bg-clip-text text-transparent"
                style={{ textShadow: '0 0 80px rgba(245,158,11,0.25)' }}
              >
                {accentWords}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-slate-200/85 sm:text-lg">
              {description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton href={ctaHref} label={ctaLabel} size="lg" />
              <a
                href="#catalogo"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/15"
              >
                Ver stock
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/8 p-4 shadow-[0_24px_90px_rgba(15,23,42,0.45)] backdrop-blur-2xl lg:justify-self-end">
            <div className="rounded-[24px] border border-white/10 bg-slate-950/35 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                Beneficios clave
              </p>
              <div className="mt-4 space-y-3">
                {benefits.map(({ icon: Icon, title: bTitle, description: bDesc, accent }, i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/6 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                  >
                    <div
                      className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent
                        ? 'from-transparent via-[var(--accent-color)] to-transparent'
                        : 'from-transparent via-[var(--brand-color)] to-transparent'
                        }`}
                    />
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ring-1 transition-transform duration-300 group-hover:scale-105 ${accent
                          ? 'bg-[var(--accent-color)]/15 ring-[var(--accent-color)]/20'
                          : 'bg-[var(--brand-color)]/15 ring-[var(--brand-color)]/20'
                          }`}
                      >
                        <Icon
                          size={18}
                          className={accent ? 'text-[var(--accent-color)]' : 'text-[var(--brand-color)]'}
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-white">{bTitle}</p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-300/80">{bDesc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
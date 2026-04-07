import { Award, Clock, Heart, MessageCircle, Users } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'
import { siteConfig } from '../config/siteConfig'
import { createWhatsAppLink } from '../utils/whatsapp'

const stats = [
  { value: '+500', label: 'Clientes atendidos', icon: Users },
  { value: '+8', label: 'Años de experiencia', icon: Clock },
  { value: '98%', label: 'Satisfacción', icon: Heart },
  { value: '24h', label: 'Respuesta en WhatsApp', icon: MessageCircle },
]

function AboutUs() {
  const ctaHref = createWhatsAppLink(
    siteConfig.whatsappNumber,
    '¡Hola! Me gustaría conocer más sobre sus servicios y experiencia.',
  )

  return (
    <section id="nosotros" className="relative overflow-hidden bg-slate-900 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_100%,rgba(15,118,110,0.2),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_100%_0%,rgba(245,158,11,0.08),transparent)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--brand-color)]/30 bg-[var(--brand-color)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-color)]">
            <Award size={12} />
            Nuestra historia
          </p>
          <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">
            Más que una ferretería,{' '}
            <span className="bg-gradient-to-r from-[var(--brand-color)] to-emerald-400 bg-clip-text text-transparent">
              tu aliado de confianza
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Nacimos de la pasión por ayudar a que cada proyecto llegue a buen puerto. Desde el primer clavo hasta la reforma completa, estamos para asesorarte con honestidad y rapidez.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — story */}
          <div className="space-y-6">
            {[
              {
                icon: Heart,
                title: 'Nacimos de una necesidad real',
                text: 'Hace más de 8 años, nuestro fundador buscaba herramientas de calidad con asesoramiento real — no solo vendedores que señalan estantes. Así nació Ferreteria Valkiria: con la convicción de que cada cliente merece ser escuchado.',
              },
              {
                icon: Users,
                title: 'Un equipo que conoce el oficio',
                text: 'Nuestro equipo está formado por profesionales con experiencia en construcción y reparaciones. No improvisamos: te recomendamos lo que realmente necesitás para tu proyecto.',
              },
              {
                icon: Clock,
                title: 'Atención rápida, siempre',
                text: 'Sabemos que el tiempo es valioso. Respondemos consultas por WhatsApp en menos de una hora y preparamos tus pedidos al instante para que no pierdas ni un día de trabajo.',
              },
              // // eslint-disable-next-line no-unused-vars
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="group flex gap-5">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-color)]/15 ring-1 ring-[var(--brand-color)]/25 transition-all duration-300 group-hover:bg-[var(--brand-color)]/25">
                  <Icon size={18} className="text-[var(--brand-color)]" />
                </div>
                <div>
                  <h3 className="mb-1 text-base font-bold text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{text}</p>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="pt-4">
              <WhatsAppButton
                href={ctaHref}
                label="Hablemos por WhatsApp"
                size="lg"
              />
            </div>
          </div>

          {/* Right — stats */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-4">
              {/* eslint-disable-next-line no-unused-vars */}
              {stats.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[var(--brand-color)]/30 hover:bg-[var(--brand-color)]/8"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-color)]/15">
                    <Icon size={18} className="text-[var(--brand-color)]" />
                  </div>
                  <p className="text-3xl font-black text-white">{value}</p>
                  <p className="mt-1 text-xs font-medium text-slate-400">{label}</p>

                  {/* Subtle corner glow */}
                  <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-[var(--brand-color)]/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="mt-6 rounded-2xl border border-white/8 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-slate-300 italic">
                "Excelente producto, recomendable la atención de la ferretería con una dinámica muy buena."
              </p>
              <p className="mt-3 text-xs font-semibold text-[var(--brand-color)]">— Milton Goncalvez, cliente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs

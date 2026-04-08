import { useMemo, useState } from 'react'
import AboutUs from './components/AboutUs'
import CategoryFilter from './components/CategoryFilter'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import { siteConfig } from './config/siteConfig'
import { products } from './data/products'
import { createProductInquiryMessage, createWhatsAppLink } from './utils/whatsapp'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

const INITIAL_VISIBLE_PRODUCTS = 8
const LOAD_MORE_STEP = 4

function App() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [visibleProductsCount, setVisibleProductsCount] = useState(INITIAL_VISIBLE_PRODUCTS)

  const categories = useMemo(
    () => ['Todas', ...new Set(products.map((p) => p.categoria))],
    [],
  )

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchBySearch = p.nombre.toLowerCase().includes(search.toLowerCase().trim())
      const matchByCategory = selectedCategory === 'Todas' || p.categoria === selectedCategory
      return matchBySearch && matchByCategory
    })
  }, [search, selectedCategory])

  const handleSearchChange = (value) => {
    setSearch(value)
    setVisibleProductsCount(INITIAL_VISIBLE_PRODUCTS)
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setVisibleProductsCount(INITIAL_VISIBLE_PRODUCTS)
  }

  const displayedProducts = useMemo(
    () => filteredProducts.slice(0, visibleProductsCount),
    [filteredProducts, visibleProductsCount],
  )

  const hasMoreProducts = displayedProducts.length < filteredProducts.length
  const canShowLess = displayedProducts.length > INITIAL_VISIBLE_PRODUCTS

  const ctaHref = createWhatsAppLink(siteConfig.whatsappNumber, siteConfig.defaultWhatsAppMessage)

  return (
    <div
      style={{
        '--brand-color': siteConfig.colors.brand,
        '--brand-dark-color': siteConfig.colors.brandDark,
        '--accent-color': siteConfig.colors.accent,
        '--bg-soft-color': siteConfig.colors.bgSoft,
        '--text-color': siteConfig.colors.text,
      }}
      className="min-h-screen bg-[var(--bg-soft-color)] text-[var(--text-color)] antialiased"
    >
      <Navbar
        companyName={siteConfig.companyName}
        navLinks={navLinks}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
      />

      <main>
        <Hero
          title={siteConfig.heroTitle}
          description={siteConfig.heroDescription}
          ctaHref={ctaHref}
          ctaLabel={siteConfig.ctaLabel}
          tagline={siteConfig.tagline}
          backgroundImage={siteConfig.heroBackgroundImage}
        />

        <CategoryFilter
          search={search}
          onSearchChange={handleSearchChange}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <span className="mb-3 text-4xl">🔍</span>
              <p className="font-semibold text-slate-700">Sin resultados</p>
              <p className="mt-1 text-sm text-slate-500">No encontramos productos con esa búsqueda.</p>
              <button
                type="button"
                onClick={() => {
                  setSearch('')
                  setSelectedCategory('Todas')
                  setVisibleProductsCount(INITIAL_VISIBLE_PRODUCTS)
                }}
                className="mt-4 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100"
              >
                Limpiar filtros
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {displayedProducts.map((product) => {
                  const inquiryMessage = createProductInquiryMessage(siteConfig.companyName, product.nombre)
                  return (
                    <ProductCard
                      key={product.id}
                      product={product}
                      whatsappHref={createWhatsAppLink(siteConfig.whatsappNumber, inquiryMessage)}
                    />
                  )
                })}
              </div>

              {(hasMoreProducts || canShowLess) && (
                <div className="mt-8 flex flex-col items-center gap-3">
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {hasMoreProducts && (
                      <button
                        type="button"
                        onClick={() => setVisibleProductsCount((prev) => prev + LOAD_MORE_STEP)}
                        className="rounded-xl bg-[var(--brand-color)] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[var(--brand-dark-color)] hover:shadow-lg"
                      >
                        Ver más productos
                      </button>
                    )}

                    {canShowLess && (
                      <button
                        type="button"
                        onClick={() =>
                          setVisibleProductsCount((prev) =>
                            Math.max(INITIAL_VISIBLE_PRODUCTS, prev - LOAD_MORE_STEP),
                          )
                        }
                        className="rounded-xl bg-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 shadow-md transition-all hover:-translate-y-0.5 hover:bg-slate-300 hover:shadow-lg"
                      >
                        Ver menos productos
                      </button>
                    )}
                  </div>
                  <p className="text-sm text-slate-500">
                    Mostrando {displayedProducts.length} de {filteredProducts.length} productos
                  </p>
                </div>
              )}
            </>
          )}
        </section>

        <AboutUs />
      </main>

      <Footer
        companyName={siteConfig.companyName}
        socialLinks={siteConfig.socialLinks}
        address={siteConfig.address}
        mapEmbedUrl={siteConfig.mapEmbedUrl}
        whatsappNumber={siteConfig.whatsappNumber}
      />
    </div>
  )
}

export default App

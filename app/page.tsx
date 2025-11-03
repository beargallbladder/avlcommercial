'use client'

import { useState, useEffect } from 'react'
import { Building2, MapPin, Phone, Mail, Car, Calendar, TrendingUp, Users, Cloud } from 'lucide-react'

const GALLERY = [
  { 
    src: "/images/building-exterior.jpg", 
    fallback: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    alt: "530 Merrimon Avenue - Building Exterior with Office Space Available Sign",
    credit: "Property Photo",
    href: "#"
  },
  { 
    src: "/images/building-frontage.jpg",
    fallback: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    alt: "Building frontage showing units 530, B, C, D, E with Designer Maid and Southeastern Physical Therapy signage",
    credit: "Property Photo",
    href: "#"
  },
  { 
    src: "/images/property-details.jpg",
    fallback: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    alt: "Property overview showing building facts, parking, and transportation details",
    credit: "Property Information",
    href: "#"
  }
]

export default function Home() {
  const [activeImage, setActiveImage] = useState(0)
  const [weather, setWeather] = useState<{ temp: number; condition: string; icon: string } | null>(null)

  useEffect(() => {
    // Fetch Asheville weather
    const fetchWeather = async () => {
      try {
        // Using OpenWeatherMap API (free tier)
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Asheville,NC,US&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY || 'demo'}`
        )
        if (response.ok) {
          const data = await response.json()
          setWeather({
            temp: Math.round(data.main.temp),
            condition: data.weather[0].main,
            icon: data.weather[0].icon
          })
        }
      } catch (error) {
        // Fallback to static data if API fails
        setWeather({ temp: 68, condition: 'Partly Cloudy', icon: '02d' })
      }
    }
    fetchWeather()
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-1">
              <img 
                src="/images/avlcommerciallog.png" 
                alt="AVL Commercial LLC Logo" 
                className="h-16 md:h-20 w-auto"
              />
            </div>
            <a href="mailto:sam@ashevilleapt.com,helen@ashevilleapt.com" className="btn-primary flex-shrink-0">
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Logo and Pricing Comparison */}
      <section className="pt-20 pb-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            {/* Main Logo */}
            <div className="flex justify-center mb-12">
              <img 
                src="/images/avlcommerciallog.png" 
                alt="AVL Commercial LLC Logo" 
                className="h-56 w-auto max-w-full"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4 tracking-tight">
              530 Merrimon Avenue
            </h1>
            <p className="text-lg text-gray-500 flex items-center justify-center gap-2 mb-16 font-light">
              <MapPin className="h-4 w-4" />
              Asheville, NC 28804
            </p>

            {/* Pricing Comparison - Main Feature */}
            <div className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-12 text-center tracking-tight">
                Competitive Pricing in Asheville
              </h2>
              <div className="flex justify-center mb-8">
                <img 
                  src="/images/pricing-comparison.svg" 
                  alt="Pricing Comparison - Our $18/SF vs Area Average $24-28/SF"
                  className="w-full max-w-5xl rounded-2xl shadow-sm"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.pricing-fallback');
                    if (fallback) {
                      (fallback as HTMLElement).style.display = 'block';
                    }
                  }}
                />
                {/* Fallback pricing comparison */}
                <div className="pricing-fallback hidden w-full max-w-5xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-black text-white p-8 rounded-2xl shadow-sm border border-gray-900">
                      <div className="text-xs font-medium mb-3 uppercase tracking-widest opacity-70">OUR PRICE</div>
                      <div className="text-5xl font-light mb-3 tracking-tight">$18<span className="text-3xl">/SF</span></div>
                      <div className="text-sm text-gray-300 mt-4 font-light">530 Merrimon Ave</div>
                      <div className="text-xs text-gray-400 mt-2 font-light">All-inclusive</div>
                    </div>
                    <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
                      <div className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-widest">AREA AVERAGE</div>
                      <div className="text-5xl font-light text-gray-900 mb-3 tracking-tight">$24<span className="text-3xl">-28/SF</span></div>
                      <div className="text-sm text-gray-600 mt-4 font-light">North Asheville</div>
                      <div className="text-xs text-gray-400 mt-2 font-light">Market rate</div>
                    </div>
                    <div className="bg-green-50 border border-green-100 p-8 rounded-2xl shadow-sm">
                      <div className="text-xs font-medium text-green-700 mb-3 uppercase tracking-widest">YOU SAVE</div>
                      <div className="text-5xl font-light text-green-700 mb-3 tracking-tight">25<span className="text-3xl">-36%</span></div>
                      <div className="text-sm text-green-600 mt-4 font-light">vs Market Rate</div>
                      <div className="text-xs text-green-500 mt-2 font-light">Significant savings</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-500 font-light text-sm">
                All-inclusive lease rate includes taxes &amp; insurance
              </p>
            </div>

            {/* Weather Widget */}
            {weather && (
              <div className="inline-flex items-center gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-4 mb-16">
                <Cloud className="h-6 w-6 text-gray-400" />
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-light uppercase tracking-wide">Asheville, NC</div>
                  <div className="text-2xl font-light text-gray-900 tracking-tight">{weather.temp}°F</div>
                  <div className="text-xs text-gray-500 font-light">{weather.condition}</div>
                </div>
              </div>
            )}
          </div>

          {/* Property Image Gallery */}
          <div className="relative mb-20">
            <div className="aspect-video w-full overflow-hidden rounded-3xl shadow-sm border border-gray-100">
              <img 
                src={GALLERY[activeImage].src}
                alt={GALLERY[activeImage].alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = GALLERY[activeImage].fallback;
                }}
              />
              <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-light">
                <a href={GALLERY[activeImage].href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  {GALLERY[activeImage].credit}
                </a>
              </div>
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="flex gap-3 mt-6 justify-center">
              {GALLERY.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative h-16 w-24 rounded-xl overflow-hidden border transition-all ${
                    activeImage === idx ? 'border-gray-900 ring-1 ring-gray-200' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = img.fallback;
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="card p-8 text-center">
              <Calendar className="h-6 w-6 text-gray-400 mx-auto mb-4" />
              <div className="text-4xl font-light text-gray-900 mb-2 tracking-tight">1972</div>
              <div className="text-sm text-gray-500 font-light">Year Built</div>
            </div>
            <div className="card p-8 text-center">
              <Car className="h-6 w-6 text-gray-400 mx-auto mb-4" />
              <div className="text-4xl font-light text-gray-900 mb-2 tracking-tight">33</div>
              <div className="text-sm text-gray-500 font-light">Parking Spaces</div>
            </div>
            <div className="card p-8 text-center">
              <Building2 className="h-6 w-6 text-gray-400 mx-auto mb-4" />
              <div className="text-4xl font-light text-gray-900 mb-2 tracking-tight">5,850 SF</div>
              <div className="text-sm text-gray-500 font-light">Building Size</div>
            </div>
            <div className="card p-8 text-center">
              <TrendingUp className="h-6 w-6 text-gray-400 mx-auto mb-4" />
              <div className="text-4xl font-light text-gray-900 mb-2 tracking-tight">$18/SF</div>
              <div className="text-sm text-gray-500 font-light">Lease Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-light text-gray-900 mb-16 text-center tracking-tight">Property Details</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Location & Access */}
            <div className="card p-8">
              <h3 className="text-xl font-light text-gray-900 mb-6 flex items-center gap-3 tracking-tight">
                <MapPin className="h-5 w-5 text-gray-400" />
                Location & Access
              </h3>
              <ul className="space-y-3 text-gray-600 font-light">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Merrimon Ave (US Hwy 25) in North Asheville</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>22 minutes to Asheville Regional Airport (15.9 mi)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>High-visibility corridor with excellent signage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Bus line access available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>24-hour access for tenants</span>
                </li>
              </ul>
            </div>

            {/* Parking & Infrastructure */}
            <div className="card p-8">
              <h3 className="text-xl font-light text-gray-900 mb-6 flex items-center gap-3 tracking-tight">
                <Car className="h-5 w-5 text-gray-400" />
                Parking & Infrastructure
              </h3>
              <ul className="space-y-3 text-gray-600 font-light">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>33 surface parking spaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>ADA accessible parking available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Building Class C, 1 story</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Central heating and air conditioning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Storage space available</span>
                </li>
              </ul>
            </div>

            {/* Available Spaces */}
            <div className="card p-8">
              <h3 className="text-xl font-light text-gray-900 mb-6 flex items-center gap-3 tracking-tight">
                <Building2 className="h-5 w-5 text-gray-400" />
                Available Spaces
              </h3>
              <ul className="space-y-3 text-gray-600 font-light">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Three suites currently available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Sizes ranging from 1,000 SF to 1,450 SF</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>$18/SF lease rate (includes taxes &amp; insurance)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Monument signage available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Reception area available</span>
                </li>
              </ul>
            </div>

            {/* Contact CTA */}
            <div className="card p-8 bg-gray-50 border-gray-200">
              <h3 className="text-xl font-light text-gray-900 mb-6 flex items-center gap-3 tracking-tight">
                <Users className="h-5 w-5 text-gray-400" />
                Get More Information
              </h3>
              <p className="text-gray-600 mb-6 font-light">
                Interested in this property? Contact us for floor plans, zoning details, and to schedule a showing.
              </p>
              <div className="space-y-3">
                <a href="mailto:sam@ashevilleapt.com" className="flex items-center gap-3 text-gray-900 hover:text-gray-700 transition-colors font-light">
                  <Mail className="h-4 w-4" />
                  <span>sam@ashevilleapt.com</span>
                </a>
                <a href="mailto:helen@ashevilleapt.com" className="flex items-center gap-3 text-gray-900 hover:text-gray-700 transition-colors font-light">
                  <Mail className="h-4 w-4" />
                  <span>helen@ashevilleapt.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-gray-400 text-xs font-light">
            © {new Date().getFullYear()} AVL Commercial LLC. Property information sourced from public listings.
          </p>
        </div>
      </footer>
    </main>
  )
}


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
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="/images/avlcommerciallog.png" 
                alt="AVL Commercial LLC Logo" 
                className="h-12 w-auto"
              />
            </div>
            <a href="mailto:sam@ashevilleapt.com,helen@ashevilleapt.com" className="btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Logo and Pricing Comparison */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* Main Logo */}
            <div className="flex justify-center mb-8">
              <img 
                src="/images/avlcommerciallog.png" 
                alt="AVL Commercial LLC Logo" 
                className="h-48 w-auto max-w-full"
              />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">530 Merrimon Avenue</h2>
            <p className="text-xl text-gray-600 flex items-center justify-center gap-2 mb-8">
              <MapPin className="h-5 w-5" />
              Asheville, NC 28804
            </p>

            {/* Pricing Comparison - Main Feature */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Competitive Pricing in Asheville</h3>
              <div className="flex justify-center mb-6">
                <img 
                  src="/images/pricing-comparison.svg" 
                  alt="Pricing Comparison - Our $18/SF vs Area Average $24-28/SF"
                  className="w-full max-w-4xl rounded-lg shadow-md"
                  onError={(e) => {
                    // Show fallback comparison if image doesn't exist
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.pricing-fallback');
                    if (fallback) {
                      (fallback as HTMLElement).style.display = 'block';
                    }
                  }}
                />
                {/* Fallback pricing comparison */}
                <div className="pricing-fallback hidden w-full max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white p-6 rounded-lg shadow-md border border-primary-700">
                      <div className="text-xs font-semibold mb-2 uppercase tracking-wide opacity-90">OUR PRICE</div>
                      <div className="text-4xl font-bold mb-2">$18/SF</div>
                      <div className="text-sm text-primary-100 mt-1">530 Merrimon Ave</div>
                      <div className="text-xs text-primary-200 mt-2">All-inclusive</div>
                    </div>
                    <div className="bg-white border-2 border-gray-200 p-6 rounded-lg shadow-md">
                      <div className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">AREA AVERAGE</div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">$24-28/SF</div>
                      <div className="text-sm text-gray-600 mt-1">North Asheville</div>
                      <div className="text-xs text-gray-500 mt-2">Market rate</div>
                    </div>
                    <div className="bg-green-50 border-2 border-green-400 p-6 rounded-lg shadow-md">
                      <div className="text-xs font-semibold text-green-700 mb-2 uppercase tracking-wide">YOU SAVE</div>
                      <div className="text-4xl font-bold text-green-700 mb-2">25-36%</div>
                      <div className="text-sm text-green-600 mt-1">vs Market Rate</div>
                      <div className="text-xs text-green-500 mt-2">Significant savings</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-600">All-inclusive lease rate includes taxes &amp; insurance</p>
            </div>

            {/* Weather Widget */}
            {weather && (
              <div className="inline-flex items-center gap-4 bg-white rounded-lg shadow-md px-6 py-4 mb-8">
                <Cloud className="h-8 w-8 text-primary-600" />
                <div className="text-left">
                  <div className="text-sm text-gray-600">Asheville, NC</div>
                  <div className="text-2xl font-bold text-gray-900">{weather.temp}°F</div>
                  <div className="text-sm text-gray-600">{weather.condition}</div>
                </div>
              </div>
            )}
          </div>

          {/* Property Image Gallery */}
          <div className="relative">
            <div className="aspect-video w-full overflow-hidden rounded-xl shadow-2xl">
              <img 
                src={GALLERY[activeImage].src}
                alt={GALLERY[activeImage].alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = GALLERY[activeImage].fallback;
                }}
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                <a href={GALLERY[activeImage].href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {GALLERY[activeImage].credit}
                </a>
              </div>
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="flex gap-4 mt-4 justify-center">
              {GALLERY.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative h-20 w-32 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === idx ? 'border-primary-600 ring-2 ring-primary-200' : 'border-gray-300 hover:border-gray-400'
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
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <Calendar className="h-8 w-8 text-primary-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">1972</div>
              <div className="text-gray-600">Year Built</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <Car className="h-8 w-8 text-primary-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">33</div>
              <div className="text-gray-600">Parking Spaces</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <Building2 className="h-8 w-8 text-primary-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">5,850 SF</div>
              <div className="text-gray-600">Building Size</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <TrendingUp className="h-8 w-8 text-primary-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">$18/SF</div>
              <div className="text-gray-600">Lease Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Property Details</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Location & Access */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary-600" />
                Location & Access
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Merrimon Ave (US Hwy 25) in North Asheville</li>
                <li>• 22 minutes to Asheville Regional Airport (15.9 mi)</li>
                <li>• High-visibility corridor with excellent signage</li>
                <li>• Bus line access available</li>
                <li>• 24-hour access for tenants</li>
              </ul>
            </div>

            {/* Parking & Infrastructure */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Car className="h-6 w-6 text-primary-600" />
                Parking & Infrastructure
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 33 surface parking spaces</li>
                <li>• ADA accessible parking available</li>
                <li>• Building Class C, 1 story</li>
                <li>• Central heating and air conditioning</li>
                <li>• Storage space available</li>
              </ul>
            </div>

            {/* Available Spaces */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Building2 className="h-6 w-6 text-primary-600" />
                Available Spaces
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Three suites currently available</li>
                <li>• Sizes ranging from 1,000 SF to 1,450 SF</li>
                <li>• $18/SF lease rate (includes taxes & insurance)</li>
                <li>• Monument signage available</li>
                <li>• Reception area available</li>
              </ul>
            </div>

            {/* Contact CTA */}
            <div className="bg-primary-50 p-6 rounded-lg shadow-lg border-2 border-primary-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="h-6 w-6 text-primary-600" />
                Get More Information
              </h4>
              <p className="text-gray-700 mb-4">
                Interested in this property? Contact us for floor plans, zoning details, and to schedule a showing.
              </p>
              <div className="space-y-2">
                <a href="mailto:sam@ashevilleapt.com" className="flex items-center gap-2 text-primary-600 hover:text-primary-700">
                  <Mail className="h-5 w-5" />
                  <span>sam@ashevilleapt.com</span>
                </a>
                <a href="mailto:helen@ashevilleapt.com" className="flex items-center gap-2 text-primary-600 hover:text-primary-700">
                  <Mail className="h-5 w-5" />
                  <span>helen@ashevilleapt.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} AVLCommercial.com. Property information sourced from public listings. 
            Images used with attribution - replace with your own for production use.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Note: Verify all details with official sources. Property specifications subject to change.
          </p>
        </div>
      </footer>
    </main>
  )
}


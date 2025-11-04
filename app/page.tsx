'use client'

import { useState, useEffect } from 'react'
import { Building2, MapPin, Phone, Mail, Car, Calendar, TrendingUp, Users, Cloud, ChevronRight, Check } from 'lucide-react'

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

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="/images/avlcommerciallog.png" 
                alt="AVL Commercial LLC Logo" 
                className="h-14 md:h-18 w-auto"
              />
            </div>
            <a href="mailto:sam@ashevilleapt.com,helen@ashevilleapt.com" className="btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
                  530 Merrimon Avenue
                </h1>
                <p className="text-xl text-gray-600 flex items-center gap-2 mb-8 font-light">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  Asheville, NC 28804
                </p>
              </div>

              {/* Pricing Highlight */}
              <div className="bg-black text-white p-8 rounded-3xl shadow-xl">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-5xl font-light tracking-tight">$18</span>
                  <span className="text-2xl text-gray-300 font-light">/SF</span>
                </div>
                <p className="text-gray-300 font-light mb-4">All-inclusive lease rate</p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Check className="h-4 w-4" />
                  <span>Includes taxes & insurance</span>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <p className="text-sm text-gray-400 mb-2">Area Average: $24-28/SF</p>
                  <p className="text-lg font-light text-green-400">Save 25-36% vs Market Rate</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:sam@ashevilleapt.com,helen@ashevilleapt.com" className="btn-primary text-center">
                  Schedule a Tour
                  <ChevronRight className="h-4 w-4 inline ml-2" />
                </a>
                <a href="#details" className="btn-secondary text-center">
                  View Details
                </a>
              </div>
            </div>

            {/* Right Column - Image Gallery */}
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl border border-gray-200">
                <img 
                  src={GALLERY[activeImage].src}
                  alt={GALLERY[activeImage].alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = GALLERY[activeImage].fallback;
                  }}
                />
              </div>
              
              {/* Thumbnail Navigation */}
              <div className="flex gap-3 mt-6 justify-center">
                {GALLERY.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative h-20 w-32 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === idx ? 'border-black ring-2 ring-gray-200' : 'border-gray-200 hover:border-gray-400'
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
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <Calendar className="h-8 w-8 text-gray-400 mx-auto mb-3" />
              <div className="text-4xl font-light text-gray-900 mb-1 tracking-tight">1972</div>
              <div className="text-sm text-gray-500 font-light">Year Built</div>
            </div>
            <div className="text-center p-6">
              <Car className="h-8 w-8 text-gray-400 mx-auto mb-3" />
              <div className="text-4xl font-light text-gray-900 mb-1 tracking-tight">33</div>
              <div className="text-sm text-gray-500 font-light">Parking Spaces</div>
            </div>
            <div className="text-center p-6">
              <Building2 className="h-8 w-8 text-gray-400 mx-auto mb-3" />
              <div className="text-4xl font-light text-gray-900 mb-1 tracking-tight">5,850 SF</div>
              <div className="text-sm text-gray-500 font-light">Building Size</div>
            </div>
            <div className="text-center p-6">
              <TrendingUp className="h-8 w-8 text-gray-400 mx-auto mb-3" />
              <div className="text-4xl font-light text-gray-900 mb-1 tracking-tight">$18/SF</div>
              <div className="text-sm text-gray-500 font-light">Lease Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center tracking-tight">
            Competitive Pricing in Asheville
          </h2>
          <div className="flex justify-center mb-6">
            <img 
              src="/images/pricing-comparison.svg" 
              alt="Pricing Comparison - Our $18/SF vs Area Average $24-28/SF"
              className="w-full max-w-4xl rounded-2xl shadow-lg"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.parentElement?.querySelector('.pricing-fallback');
                if (fallback) {
                  (fallback as HTMLElement).style.display = 'grid';
                }
              }}
            />
            {/* Fallback pricing comparison */}
            <div className="pricing-fallback hidden w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black text-white p-10 rounded-2xl shadow-lg">
                <div className="text-xs font-medium mb-4 uppercase tracking-widest opacity-70">OUR PRICE</div>
                <div className="text-6xl font-light mb-4 tracking-tight">$18<span className="text-4xl">/SF</span></div>
                <div className="text-base text-gray-300 mt-4 font-light">530 Merrimon Ave</div>
                <div className="text-sm text-gray-400 mt-2 font-light">All-inclusive</div>
              </div>
              <div className="bg-white border-2 border-gray-200 p-10 rounded-2xl shadow-lg">
                <div className="text-xs font-medium text-gray-500 mb-4 uppercase tracking-widest">AREA AVERAGE</div>
                <div className="text-6xl font-light text-gray-900 mb-4 tracking-tight">$24<span className="text-4xl">-28/SF</span></div>
                <div className="text-base text-gray-600 mt-4 font-light">North Asheville</div>
                <div className="text-sm text-gray-400 mt-2 font-light">Market rate</div>
              </div>
              <div className="bg-green-50 border-2 border-green-200 p-10 rounded-2xl shadow-lg">
                <div className="text-xs font-medium text-green-700 mb-4 uppercase tracking-widest">YOU SAVE</div>
                <div className="text-6xl font-light text-green-700 mb-4 tracking-tight">25<span className="text-4xl">-36%</span></div>
                <div className="text-base text-green-600 mt-4 font-light">vs Market Rate</div>
                <div className="text-sm text-green-500 mt-2 font-light">Significant savings</div>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-600 font-light text-base">
            All-inclusive lease rate includes taxes &amp; insurance
          </p>
        </div>
      </section>

      {/* Property Details */}
      <section id="details" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-light text-gray-900 mb-16 text-center tracking-tight">Property Details</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Location & Access */}
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gray-100 rounded-xl">
                  <MapPin className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-light text-gray-900 tracking-tight">
                  Location & Access
                </h3>
              </div>
              <ul className="space-y-4 text-gray-600 font-light">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>Merrimon Ave (US Hwy 25) in North Asheville</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>22 minutes to Asheville Regional Airport (15.9 mi)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>High-visibility corridor with excellent signage</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>Bus line access available</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>24-hour access for tenants</span>
                </li>
              </ul>
            </div>

            {/* Parking & Infrastructure */}
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gray-100 rounded-xl">
                  <Car className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-light text-gray-900 tracking-tight">
                  Parking & Infrastructure
                </h3>
              </div>
              <ul className="space-y-4 text-gray-600 font-light">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>33 surface parking spaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>ADA accessible parking available</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>Building Class C, 1 story</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>Central heating and air conditioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>Storage space available</span>
                </li>
              </ul>
            </div>

            {/* Available Spaces */}
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gray-100 rounded-xl">
                  <Building2 className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-light text-gray-900 tracking-tight">
                  Available Spaces
                </h3>
              </div>
              <ul className="space-y-4 text-gray-600 font-light">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>Three suites currently available</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>Sizes ranging from 1,000 SF to 1,450 SF</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>$18/SF lease rate (includes taxes &amp; insurance)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>Monument signage available</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>Reception area available</span>
                </li>
              </ul>
            </div>

            {/* Contact CTA */}
            <div className="card p-8 bg-gray-900 text-white border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gray-800 rounded-xl">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-light tracking-tight">
                  Get More Information
                </h3>
              </div>
              <p className="text-gray-300 mb-6 font-light">
                Interested in this property? Contact us for floor plans, zoning details, and to schedule a showing.
              </p>
              <div className="space-y-4">
                <a href="mailto:sam@ashevilleapt.com" className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors font-light">
                  <Mail className="h-5 w-5" />
                  <span>sam@ashevilleapt.com</span>
                </a>
                <a href="mailto:helen@ashevilleapt.com" className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors font-light">
                  <Mail className="h-5 w-5" />
                  <span>helen@ashevilleapt.com</span>
                </a>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-800">
                <a href="mailto:sam@ashevilleapt.com,helen@ashevilleapt.com" className="btn-primary bg-white text-black hover:bg-gray-100 w-full text-center block">
                  Schedule a Tour
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <img 
                src="/images/avlcommerciallog.png" 
                alt="AVL Commercial LLC Logo" 
                className="h-10 w-auto opacity-90"
              />
            </div>
            <p className="text-gray-400 text-sm font-light">
              © {new Date().getFullYear()} AVL Commercial LLC. Property information sourced from public listings.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

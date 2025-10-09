'use client'

import { useState } from 'react'
import { Building2, MapPin, Phone, Mail, Car, Calendar, TrendingUp, Users } from 'lucide-react'

const GALLERY = [
  { 
    src: "https://images.loopnet.com/d2/HqkB0aEbf7yN6fwDHrF4pQpMH-6_VxgXaDPqf7rQKlM/document.jpg", 
    alt: "530 Merrimon Avenue - Building Exterior",
    credit: "Image via LoopNet",
    href: "https://www.loopnet.com/Listing/530-Merrimon-Ave-Asheville-NC/9841647/"
  },
  { 
    src: "https://images.crexi.com/listings/306754/photos/2f4c5e8e-1f3e-4f3e-9f3e-1f3e2f4c5e8e.jpg",
    alt: "Front parking lot view",
    credit: "Image via Crexi",
    href: "https://www.crexi.com/properties/530-merrimon-avenue-asheville-north-carolina"
  },
  { 
    src: "https://images.loopnet.com/d2/mHDRpnS_ZQWJX5h3KzBVPvXxY8YfNJZ8h3KzBVPvXxY/document.jpg",
    alt: "Aerial view of property and surrounding area",
    credit: "Image via LoopNet", 
    href: "https://www.loopnet.com/Listing/530-Merrimon-Ave-Asheville-NC/9841647/"
  }
]

export default function Home() {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-primary-600" />
              <h1 className="text-2xl font-bold text-gray-900">AVLCommercial.com</h1>
            </div>
            <a href="mailto:hello@avlcommercial.com" className="btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Gallery */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">530 Merrimon Avenue</h2>
            <p className="text-xl text-gray-600 flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5" />
              Asheville, NC 28804
            </p>
          </div>

          {/* Image Gallery */}
          <div className="relative">
            <div className="aspect-video w-full overflow-hidden rounded-xl shadow-2xl">
              <img 
                src={GALLERY[activeImage].src}
                alt={GALLERY[activeImage].alt}
                className="w-full h-full object-cover"
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
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
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
              <div className="text-3xl font-bold text-gray-900">Feb 2024</div>
              <div className="text-gray-600">New Roof</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <Car className="h-8 w-8 text-primary-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">~33</div>
              <div className="text-gray-600">Parking Spaces</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <TrendingUp className="h-8 w-8 text-primary-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">~18K</div>
              <div className="text-gray-600">VPD Traffic</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <Building2 className="h-8 w-8 text-primary-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">~162'</div>
              <div className="text-gray-600">Frontage</div>
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
                <li>• High-visibility Merrimon Avenue corridor</li>
                <li>• ~18,000 vehicles per day (VPD)</li>
                <li>• ~1.4 miles to I-240/Downtown Asheville</li>
                <li>• Near UNCA and Grove Park</li>
                <li>• ~162 feet of street frontage</li>
              </ul>
            </div>

            {/* Parking & Infrastructure */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Car className="h-6 w-6 text-primary-600" />
                Parking & Infrastructure
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• ~33 parking spaces (front + rear)</li>
                <li>• ADA-compliant spaces included</li>
                <li>• New roof installed February 2024</li>
                <li>• 
                  <a 
                    href="https://codelibrary.amlegal.com/codes/ashevillenc/latest/asheville_nc/0-0-0-6668" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    Asheville UDO §7-11-2
                  </a> requires 2 accessible spaces for 26–50 space lots
                </li>
              </ul>
            </div>

            {/* Suitable Uses */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Building2 className="h-6 w-6 text-primary-600" />
                Suitable Uses
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Retail spaces</li>
                <li>• Professional offices</li>
                <li>• Medical/dental practices</li>
                <li>• Spa and wellness centers</li>
                <li>• Plumbed rooms available</li>
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
                <a href="tel:YOUR-PHONE" className="flex items-center gap-2 text-primary-600 hover:text-primary-700">
                  <Phone className="h-5 w-5" />
                  <span>Call: (XXX) XXX-XXXX</span>
                </a>
                <a href="mailto:hello@avlcommercial.com" className="flex items-center gap-2 text-primary-600 hover:text-primary-700">
                  <Mail className="h-5 w-5" />
                  <span>hello@avlcommercial.com</span>
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


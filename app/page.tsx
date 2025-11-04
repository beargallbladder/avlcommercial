'use client'

import { Building2, MapPin, Mail, Car, Calendar, TrendingUp, Users, Check } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero - Logo Takes Entire Top */}
      <section className="bg-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between mb-20">
            <div className="flex-1"></div>
            <div className="flex-1 flex justify-center">
              <img 
                src="/images/avlcommerciallog.png" 
                alt="AVL Commercial LLC Logo" 
                className="h-32 md:h-40 lg:h-48 w-auto"
              />
            </div>
            <div className="flex-1 flex justify-end">
              <a href="mailto:sam@ashevilleapt.com,helen@ashevilleapt.com" className="btn-primary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Property Info */}
      <section className="bg-white border-t border-gray-100 pt-16 pb-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
              530 Merrimon Avenue
            </h1>
            <p className="text-xl text-gray-500 flex items-center justify-center gap-2 mb-12 font-light">
              <MapPin className="h-5 w-5 text-gray-400" />
              Asheville, NC 28804
            </p>
          </div>

          {/* Pricing Highlight */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-black text-white p-12 rounded-3xl">
              <div className="flex items-baseline gap-3 mb-3 justify-center">
                <span className="text-6xl md:text-7xl font-light tracking-tight">$18</span>
                <span className="text-3xl text-gray-300 font-light">/SF</span>
              </div>
              <p className="text-gray-300 font-light text-center mb-6 text-lg">All-inclusive lease rate</p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-8">
                <Check className="h-4 w-4" />
                <span>Includes taxes & insurance</span>
              </div>
              <div className="pt-8 border-t border-gray-800 text-center">
                <p className="text-sm text-gray-400 mb-2">Area Average: $24-28/SF</p>
                <p className="text-xl font-light text-green-400">Save 25-36% vs Market Rate</p>
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <Calendar className="h-8 w-8 text-gray-400 mx-auto mb-4" />
              <div className="text-4xl font-light text-gray-900 mb-2 tracking-tight">1972</div>
              <div className="text-sm text-gray-500 font-light">Year Built</div>
            </div>
            <div className="text-center">
              <Car className="h-8 w-8 text-gray-400 mx-auto mb-4" />
              <div className="text-4xl font-light text-gray-900 mb-2 tracking-tight">33</div>
              <div className="text-sm text-gray-500 font-light">Parking Spaces</div>
            </div>
            <div className="text-center">
              <Building2 className="h-8 w-8 text-gray-400 mx-auto mb-4" />
              <div className="text-4xl font-light text-gray-900 mb-2 tracking-tight">5,850 SF</div>
              <div className="text-sm text-gray-500 font-light">Building Size</div>
            </div>
            <div className="text-center">
              <TrendingUp className="h-8 w-8 text-gray-400 mx-auto mb-4" />
              <div className="text-4xl font-light text-gray-900 mb-2 tracking-tight">$18/SF</div>
              <div className="text-sm text-gray-500 font-light">Lease Rate</div>
            </div>
          </div>

          {/* Pricing Comparison */}
          <div className="mb-20">
            <h2 className="text-3xl font-light text-gray-900 mb-12 text-center tracking-tight">
              Competitive Pricing in Asheville
            </h2>
            <div className="flex justify-center mb-6">
              <img 
                src="/images/pricing-comparison.svg" 
                alt="Pricing Comparison - Our $18/SF vs Area Average $24-28/SF"
                className="w-full max-w-4xl rounded-2xl shadow-sm"
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
                <div className="bg-black text-white p-10 rounded-2xl border border-gray-900">
                  <div className="text-xs font-medium mb-4 uppercase tracking-widest opacity-70">OUR PRICE</div>
                  <div className="text-6xl font-light mb-4 tracking-tight">$18<span className="text-4xl">/SF</span></div>
                  <div className="text-base text-gray-300 mt-4 font-light">530 Merrimon Ave</div>
                  <div className="text-sm text-gray-400 mt-2 font-light">All-inclusive</div>
                </div>
                <div className="bg-white border border-gray-200 p-10 rounded-2xl">
                  <div className="text-xs font-medium text-gray-500 mb-4 uppercase tracking-widest">AREA AVERAGE</div>
                  <div className="text-6xl font-light text-gray-900 mb-4 tracking-tight">$24<span className="text-4xl">-28/SF</span></div>
                  <div className="text-base text-gray-600 mt-4 font-light">North Asheville</div>
                  <div className="text-sm text-gray-400 mt-2 font-light">Market rate</div>
                </div>
                <div className="bg-green-50 border border-green-100 p-10 rounded-2xl">
                  <div className="text-xs font-medium text-green-700 mb-4 uppercase tracking-widest">YOU SAVE</div>
                  <div className="text-6xl font-light text-green-700 mb-4 tracking-tight">25<span className="text-4xl">-36%</span></div>
                  <div className="text-base text-green-600 mt-4 font-light">vs Market Rate</div>
                  <div className="text-sm text-green-500 mt-2 font-light">Significant savings</div>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-500 font-light text-sm">
              All-inclusive lease rate includes taxes &amp; insurance
            </p>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-light text-gray-900 mb-16 text-center tracking-tight">Property Details</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Location & Access */}
            <div className="card p-8">
              <div className="mb-6">
                <MapPin className="h-6 w-6 text-gray-400 mb-4" />
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
              <div className="mb-6">
                <Car className="h-6 w-6 text-gray-400 mb-4" />
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
              <div className="mb-6">
                <Building2 className="h-6 w-6 text-gray-400 mb-4" />
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
              <div className="mb-6">
                <Users className="h-6 w-6 text-gray-300 mb-4" />
                <h3 className="text-xl font-light tracking-tight">
                  Get More Information
                </h3>
              </div>
              <p className="text-gray-300 mb-6 font-light">
                Interested in this property? Contact us for floor plans, zoning details, and to schedule a showing.
              </p>
              <div className="space-y-4 mb-6">
                <a href="mailto:sam@ashevilleapt.com" className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors font-light">
                  <Mail className="h-5 w-5" />
                  <span>sam@ashevilleapt.com</span>
                </a>
                <a href="mailto:helen@ashevilleapt.com" className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors font-light">
                  <Mail className="h-5 w-5" />
                  <span>helen@ashevilleapt.com</span>
                </a>
              </div>
              <div className="pt-6 border-t border-gray-800">
                <a href="mailto:sam@ashevilleapt.com,helen@ashevilleapt.com" className="btn-primary bg-white text-black hover:bg-gray-100 w-full text-center block">
                  Schedule a Tour
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

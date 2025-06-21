import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Star, MapPin, CheckCircle, Users, TrendingUp, Shield, Phone, MessageCircle, Menu, X } from 'lucide-react'
import './App.css'
import logoImage from './assets/ChatGPTImageJun20,2025,03_20_00AM.png'
import heroImage from './assets/ChatGPTImageJun20,2025,07_46_12AM.png'

function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const testimonials = [
    {
      name: "Abdullah Al-Qahtani",
      business: "Eastern Taste Restaurant",
      text: "Thanks to the GoLocation team for verifying my restaurant on Google Maps! Now my customers can find us easily, and delivery orders have clearly increased. Professional and fast service. I recommend it to everyone.",
      rating: 5
    },
    {
      name: "Noura Al-Shehri", 
      business: "Beauty Touches Salon",
      text: "Reviews were a challenge for us, but GoLocation helped us increase positive reviews and improve our reputation on Google Maps. Now customers are using our services more, and our work is continuous without interruption. Thank you very much!",
      rating: 5
    },
    {
      name: "Fahad Al-Otaibi",
      business: "Eastern Taste Restaurant", 
      text: "The SEO improvement service from GoLocation made a big difference for me after they adjusted the map settings. We now appear in the first results, and customers call us easily. Professional work and fast communication. I advise any project owner to try their services.",
      rating: 5
    }
  ]

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Money Back Guarantee",
      description: "If your business is not verified, we will refund the full amount without any deductions."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Over 10 Years Experience",
      description: "More than 10 years of experience in improving the visibility of commercial activities and managing them on Google Maps."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Direct Relationship with Google",
      description: "We deal directly with Google employees to verify your business maps quickly and effectively."
    }
  ]

  const services = [
    {
      title: "Google Maps Reviews",
      subtitle: "Increase or Delete",
      price: "$299",
      features: [
        "Increase positive reviews for your business",
        "Real and not fake accounts", 
        "Delete negative reviews on your map for your business",
        "6 months guarantee for positive reviews"
      ],
      popular: true
    },
    {
      title: "Google Maps Services",
      subtitle: "Map Verification", 
      price: "$999",
      features: [
        "Google Maps verification",
        "Transfer Google Maps ownership",
        "Reactivate suspended Google Maps accounts",
        "Payment after service completion"
      ],
      popular: false
    },
    {
      title: "Google Ads and SEO",
      subtitle: "For Sales Increase",
      price: "$4999", 
      features: [
        "Manage Google Ads campaigns",
        "Manage Google Maps search campaigns",
        "Improve Google Maps SEO for first page appearance",
        "Payment after service completion"
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src={logoImage} alt="GoLocation" className="h-10 sm:h-12 w-auto" />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              <a href="#home" className="text-gray-900 hover:text-blue-600 transition-colors text-sm xl:text-base">Home</a>
              <a href="#services" className="text-gray-900 hover:text-blue-600 transition-colors text-sm xl:text-base">Map Documentation</a>
              <a href="#activate" className="text-gray-900 hover:text-blue-600 transition-colors text-sm xl:text-base">Activate Account</a>
              <a href="#reviews" className="text-gray-900 hover:text-blue-600 transition-colors text-sm xl:text-base">Delete Comments</a>
              <a href="#ratings" className="text-gray-900 hover:text-blue-600 transition-colors text-sm xl:text-base">Increase Ratings</a>
              <a href="#consultation" className="text-gray-900 hover:text-blue-600 transition-colors text-sm xl:text-base">Consultation</a>
              <a href="#contact" className="text-gray-900 hover:text-blue-600 transition-colors text-sm xl:text-base">Contact</a>
            </nav>
            
            {/* Desktop CTA Button */}
            <Button className="hidden md:flex bg-red-600 hover:bg-red-700 text-white text-sm lg:text-base">
              Request Consultation
            </Button>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-gray-200 mt-4 pt-4">
              <nav className="flex flex-col space-y-3">
                <a href="#home" className="text-gray-900 hover:text-blue-600 transition-colors py-2">Home</a>
                <a href="#services" className="text-gray-900 hover:text-blue-600 transition-colors py-2">Map Documentation</a>
                <a href="#activate" className="text-gray-900 hover:text-blue-600 transition-colors py-2">Activate Suspended Account</a>
                <a href="#reviews" className="text-gray-900 hover:text-blue-600 transition-colors py-2">Delete Negative Comments</a>
                <a href="#ratings" className="text-gray-900 hover:text-blue-600 transition-colors py-2">Increase Ratings</a>
                <a href="#consultation" className="text-gray-900 hover:text-blue-600 transition-colors py-2">Request Consultation</a>
                <a href="#contact" className="text-gray-900 hover:text-blue-600 transition-colors py-2">Contact Us</a>
                <Button className="bg-red-600 hover:bg-red-700 text-white mt-4 w-full">
                  Request Consultation
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute top-20 right-20 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-5 h-5 bg-yellow-400 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-10 right-10 w-4 h-4 bg-red-400 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/4 w-6 h-1 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-8 h-1 bg-green-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/3 right-1/4 w-5 h-1 bg-red-400 rounded-full animate-pulse delay-700"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="text-purple-600 font-semibold mb-4 text-sm sm:text-base">GoLocation - Google Maps Experts</div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Innovative Solutions to Increase Your 
                <span className="text-blue-600"> Business Visibility</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                At GoLocation, we help you improve your visibility on Google Maps and ensure your business reaches customers looking for you. Our goal is to elevate your store or business to the top, and increase your sales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
                <Button size="lg" variant="outline" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-green-600 text-green-600 hover:bg-green-50">
                  We're Here to Help
                </Button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <img 
                src={heroImage} 
                alt="Professional using Google Maps services" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-white p-4 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-purple-100 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Professional Google Maps Services</h2>
            <p className="text-lg sm:text-xl text-gray-600">Choose the perfect plan for your business needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative ${service.popular ? 'ring-2 ring-blue-600 lg:scale-105' : ''} hover:shadow-xl transition-all duration-300`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-6 sm:p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">"{service.subtitle}"</p>
                    <div className="text-3xl sm:text-4xl font-bold text-blue-600">{service.price}</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${service.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'} text-white`}>
                    Request Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
            <p className="text-lg sm:text-xl text-gray-600">How we helped business owners appear on Google Maps and increase their customer base</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-8 h-8 text-blue-600 mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic text-sm sm:text-base">"{testimonial.text}"</p>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.business}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Start with us today!</h2>
          <p className="text-lg sm:text-xl mb-8 text-blue-100">
            At GoLocation, we verify your business on Google Maps, improve your search visibility, 
            and manage your ads professionally. Elevate your business now and increase your customer base.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Us Now
            </Button>
            <Button size="lg" variant="outline" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-white text-white hover:bg-white hover:text-blue-600">
              <Phone className="w-5 h-5 mr-2" />
              We're Here to Help
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <img src={logoImage} alt="GoLocation" className="h-10 sm:h-12 w-auto mb-4" />
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                Professional Google Maps services to help your business grow and reach more customers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white transition-colors">Map Verification</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Review Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SEO Optimization</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Google Ads</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>Email: info@golocation.xyz</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>&copy; 2025 GoLocation. All rights reserved. | Professional Google Maps Services</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App


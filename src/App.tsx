import { Hotel, MapPin, Phone, Mail, Star, Check, Gift, Coffee, Users, Calendar, Wifi, Car, Clock, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/Front View.png',
    '/IMG-20250609-WA0008.jpg',
    '/IMG-20250609-WA0013.jpg',
    '/IMG-20250609-WA0015.jpg',
    '/IMG-20250609-WA0016.jpg',
    '/IMG-20250609-WA0017.jpg',
    '/IMG-20250609-WA0019.jpg',
    '/IMG-20250609-WA0020.jpg',
    '/WhatsApp Image 2025-06-06 at 12.31.24_a38bfa30.jpg',
    '/WhatsApp Image 2025-06-06 at 16.42.08_7016fcb4.jpg',
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const getVisibleImages = () => {
    const visible = [];
    const maxPositions = window.innerWidth < 640 ? 1 : 2;
    for (let i = -maxPositions; i <= maxPositions; i++) {
      const index = (currentIndex + i + images.length) % images.length;
      visible.push({ index, position: i });
    }
    return visible;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Experience <span className="text-amber-600">Aditya Inn</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            A glimpse into comfort and elegance
          </p>
        </div>

        <div className="relative h-64 sm:h-96 flex items-center justify-center">
          {getVisibleImages().map(({ index, position }) => {
            const isMobile = window.innerWidth < 640;
            const baseTranslateX = isMobile ? 120 : 280;
            const scale = position === 0 ? 1 : Math.max(0.65 - Math.abs(position) * 0.15, 0.45);
            const opacity = position === 0 ? 1 : Math.max(0.5 - Math.abs(position) * 0.1, 0.3);
            const zIndex = 50 - Math.abs(position);
            const translateX = position * baseTranslateX;

            return (
              <div
                key={index}
                className="absolute transition-all duration-500 ease-in-out rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  width: isMobile ? '280px' : '400px',
                  height: isMobile ? '210px' : '300px',
                }}
              >
                <img
                  src={images[index]}
                  alt={`Hotel view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}

          <button
            onClick={prevSlide}
            className="absolute left-4 z-50 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 z-50 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === currentIndex ? 'bg-amber-600 w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Hotel className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
              <span className="text-lg sm:text-2xl font-bold text-gray-900">Aditya Inn</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#offers" className="text-gray-700 hover:text-amber-600 transition">Offers</a>
              <a href="#rooms" className="text-gray-700 hover:text-amber-600 transition">Rooms</a>
              <a href="#reviews" className="text-gray-700 hover:text-amber-600 transition">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition">Contact</a>
            </div>
            <a href="tel:+919677735969" className="bg-amber-600 text-white px-3 sm:px-6 py-2 rounded-lg hover:bg-amber-700 transition font-semibold text-sm sm:text-base">
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-16 py-12 sm:py-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23d97706\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-amber-600 text-white px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 animate-pulse max-w-[95%] sm:max-w-none">
            <Gift className="h-3.5 w-3.5 sm:h-5 sm:w-5 flex-shrink-0" />
            <span className="font-semibold text-[10px] sm:text-sm md:text-base whitespace-nowrap">Best rooms from ₹1,500/night – Book direct and save</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Affordable Stay & Restaurant in Karur <span className="text-amber-600">– Salem Bypass</span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Clean, comfortable and convenient rooms for business, family and transit travelers at Aditya Inn, near Bye Pass Roundana.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 w-full px-4">
            <a href="tel:+919677735969" className="bg-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-amber-700 transition font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block w-full sm:w-auto text-center">
              Call to Book Now
            </a>
            <a href="https://wa.me/919677735969" className="border-2 border-amber-600 text-amber-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-amber-50 transition font-bold text-base sm:text-lg w-full sm:w-auto text-center">
              WhatsApp for Best Price
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-600" />
              <span>Best Price Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-600" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-600" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <ImageCarousel />

      {/* Exclusive Offers Section */}
      <section id="offers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Skip OTAs. Get Better Rates.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Get better rates, flexible check-in and zero hidden fees when you book direct at Aditya Inn, Karur.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col h-full">
              <div className="bg-amber-600 w-14 sm:w-16 h-14 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Users className="h-7 sm:h-8 w-7 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Group Discounts</h3>
              <p className="text-gray-700 mb-6 flex-grow">
                Group booking discounts for 5+ rooms – save up to 20% on business and family stays.
              </p>
              <span className="inline-block bg-amber-600 text-white px-4 py-2 rounded-full font-semibold text-center">
                Save up to 20%
              </span>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col h-full">
              <div className="bg-blue-600 w-14 sm:w-16 h-14 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Gift className="h-7 sm:h-8 w-7 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Room + Meal Packages</h3>
              <p className="text-gray-700 mb-6 flex-grow">
                Room + meal combos with our in-house veg restaurant.
              </p>
              <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-semibold text-center">
                Special Package Rates
              </span>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col h-full">
              <div className="bg-green-600 w-14 sm:w-16 h-14 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Star className="h-7 sm:h-8 w-7 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Repeat Guest Benefits</h3>
              <p className="text-gray-700 mb-6 flex-grow">
                Loyalty rewards – 10% lifetime discount for repeat guests.
              </p>
              <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-full font-semibold text-center">
                10% lifetime discount
              </span>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Zero Hidden Fees</h3>
            <p className="text-xl mb-6">
              No booking fees. No service charges. No commission markup. The price you see is the price you pay.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Check className="h-5 w-5" />
                <span>Early check-in / late check-out (subject to availability)</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Check className="h-5 w-5" />
                <span>Direct customer support</span>
              </div>
            </div>
            <div className="mt-6">
              <a href="tel:+919677735969" className="bg-white text-amber-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-bold inline-block">
                Call Now for Direct Booking Offer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery/Experience Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Hotel in Karur on Salem Bye Pass Road
            </h2>
            <h3 className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-semibold">
              Near industrial areas, temples and shopping – ideal for business and family stays.
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition">
              <div className="h-48 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <MapPin className="h-24 w-24 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategic Location</h3>
                <p className="text-gray-700">
                  Just 500m from Salem Bye Pass Road with easy access to industrial zones, temples, and shopping centers.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                <Hotel className="h-24 w-24 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Modern Comfort</h3>
                <p className="text-gray-700">
                  Clean AC and Non-AC rooms in Karur with WiFi, TV, parking and veg restaurant access.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition">
              <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                <Star className="h-24 w-24 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Local Flavor</h3>
                <p className="text-gray-700">
                  Authentic South Indian vegetarian dishes at our in-house restaurant. Taste the true flavors of Tamil Nadu.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">What's Nearby</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Temples & Heritage</h4>
                <p className="text-sm text-gray-600">2–5 km from Aditya Inn Karur</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Car className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Industrial Areas</h4>
                <p className="text-sm text-gray-600">3–8 km – convenient for business travelers</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Shopping Centers</h4>
                <p className="text-sm text-gray-600">1–3 km for quick errands</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Highway Access</h4>
                <p className="text-sm text-gray-600">Just 500m from Salem Bye Pass Road</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-700 font-medium">
                Located at 125/1, near Yamaha Bikes North, Bye Pass Roundana, Salem Bye Pass Road, Karur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms & Suites Section */}
      <section id="rooms" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Clean Rooms in Karur from ₹1,500/night
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              AC and Non-AC options available for solo travelers, couples, and families
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-amber-500 transition flex flex-col h-full">
              <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <Hotel className="h-20 w-20 text-white opacity-70" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Standard Room – from ₹1,500/night</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </span>
                </div>
                <p className="text-gray-700 mb-4 text-sm font-medium">
                  Best for solo and business travelers
                </p>
                <p className="text-sm text-gray-600 mb-4 italic">Available in AC and Non-AC options</p>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>Comfortable Bed</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>Free WiFi</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>TV</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>Chair & Kettle</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>Toiletries</span>
                  </li>
                </ul>
                <div className="flex justify-center items-center">
                  <a href="tel:+919677735969" className="bg-amber-600 text-white px-6 py-2.5 rounded-lg hover:bg-amber-700 transition font-semibold inline-block">
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-amber-500 flex flex-col h-full">
              <div className="bg-amber-600 text-white text-center py-2 font-semibold">
                Best Value
              </div>
              <div className="h-48 bg-gradient-to-br from-amber-300 to-orange-400 flex items-center justify-center">
                <Hotel className="h-20 w-20 text-white opacity-70" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Deluxe Room – ideal for couples</h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Enhanced space with all essential amenities for small families.
                </p>
                <p className="text-sm text-gray-600 mb-4 italic">Available in AC and Non-AC options</p>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>Comfortable Bed</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>Free WiFi</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>TV</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>Chair & Kettle</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>Toiletries</span>
                  </li>
                </ul>
                <div className="flex justify-center items-center">
                  <a href="tel:+919677735969" className="bg-amber-600 text-white px-6 py-2.5 rounded-lg hover:bg-amber-700 transition font-semibold inline-block">
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-amber-500 transition flex flex-col h-full">
              <div className="h-48 bg-gradient-to-br from-blue-300 to-cyan-400 flex items-center justify-center">
                <Hotel className="h-20 w-20 text-white opacity-70" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Suite Room – spacious for families</h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Maximum comfort with extra room for families and long stays.
                </p>
                <p className="text-sm text-gray-600 mb-4 italic">Available in AC and Non-AC options</p>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>Comfortable Bed</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>Free WiFi</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>TV</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>Chair & Kettle</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>Toiletries</span>
                  </li>
                </ul>
                <div className="flex justify-center items-center">
                  <a href="tel:+919677735969" className="bg-amber-600 text-white px-6 py-2.5 rounded-lg hover:bg-amber-700 transition font-semibold inline-block">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">All budget hotel rooms in Karur include: Bed, WiFi, TV, Chair, Kettle, Toiletries</p>
            <div className="flex justify-center gap-6 flex-wrap">
              <div className="flex items-center text-gray-700">
                <Wifi className="h-5 w-5 text-amber-600 mr-2" />
                <span>Free WiFi</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Car className="h-5 w-5 text-amber-600 mr-2" />
                <span>Free Parking</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Coffee className="h-5 w-5 text-amber-600 mr-2" />
                <span>In-house Restaurant</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Clock className="h-5 w-5 text-amber-600 mr-2" />
                <span>24-hour Reception</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Rated 4.9/5 by 45+ Guests
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Reviews from Justdial and other platforms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Clean rooms and great food. The room was clean, quiet, and had all the essential amenities. The staff was incredibly attentive and we especially enjoyed the delicious food at the restaurant."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-amber-700 font-bold text-xl">VG</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Clean rooms and great food</p>
                  <p className="text-sm text-gray-600">Justdial Review</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Convenient location on Salem Bye Pass Road. All staff and owner have good approach with customers. Car parking is available at this property."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-700 font-bold text-xl">LT</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Convenient location on Salem Bye Pass Road</p>
                  <p className="text-sm text-gray-600">Justdial Review</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Spacious rooms and value for money. The location on Salem Bye Pass Road is perfect for travelers. Staff is helpful and attentive. Great value for money."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-700 font-bold text-xl">BT</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Spacious rooms and value for money</p>
                  <p className="text-sm text-gray-600">Verified Review</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
              <div className="text-center">
                <p className="text-3xl font-bold text-amber-600">4.9</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-500 fill-current" />
                  ))}
                </div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <p className="text-2xl font-bold text-gray-900">45+</p>
                <p className="text-sm text-gray-600">Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-6">
            <Calendar className="h-5 w-5" />
            <span className="font-semibold">Festive Season Special: Limited Time Only!</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Book Today & Save
          </h2>

          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-95">
            Don't miss out on our exclusive direct booking discount. Experience genuine hospitality, transparent pricing, and rewards that booking platforms will never offer you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+919677735969" className="bg-white text-amber-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-bold text-lg shadow-lg transform hover:scale-105 inline-block">
              Reserve Your Room Now
            </a>
            <a href="tel:+919994409412" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition font-bold text-lg inline-block">
              Call Us: +91 96777 35969
            </a>
          </div>

          <p className="text-sm opacity-90">
            Offer valid for bookings made directly through our website or phone. Terms & conditions apply.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Get In Touch
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              We're here to help 24/7
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 text-center hover:shadow-lg transition">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-700 mb-2">Available 24/7</p>
              <a href="tel:+919677735969" className="text-amber-600 font-bold text-lg hover:text-amber-700">
                +91 96777 35969
              </a>
              <a href="tel:+919994409412" className="text-amber-600 font-bold text-lg hover:text-amber-700 block mt-2">
                +91 99944 09412
              </a>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center hover:shadow-lg transition">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp</h3>
              <p className="text-gray-700 mb-2">Quick Response</p>
              <a href="https://wa.me/919677735969" className="text-green-600 font-bold text-lg hover:text-green-700">
                Chat with us
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center hover:shadow-lg transition">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
              <p className="text-gray-700 mb-2">We'll respond within 2 hours</p>
              <a href="mailto:info@adithyainn.com" className="text-blue-600 font-bold text-lg hover:text-blue-700">
                hoteladityainnkarur@gmail.com
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Us</h3>
            <p className="text-gray-700 mb-2 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-amber-600 mr-2" />
              125/1, Yamaha Bikes North, Salem Bye Pass Road, Bye Pass Roundana, Karur, Tamil Nadu
            </p>
            <a href="https://www.google.com/travel/search?ts=CAESCgoCCAMKAggDEAAaHBIaEhQKBwjpDxAKGBcSBwjpDxAKGBgYATICEAAqBwoFOgNJTlI&qs=CAEyFENnc0k3T2FpdnJEMXp0SzVBUkFCOAhCCRE7db_Gd6P4C0IJEaiXFTQbgoUdQgkRfaVk6movl2RaOTI3qgE0EAEyHxABIhvymLx3ujIemifL0Y8qolduxmCVh3MK8Aq-acYyDxACIgthZGl0aHlhIGlubg&utm_campaign=sharing&utm_medium=link_btn&utm_source=htls" target="_blank" rel="noopener noreferrer" className="mt-4 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition font-semibold inline-flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Hotel className="h-8 w-8 text-amber-500" />
                <span className="text-2xl font-bold">Aditya Inn</span>
              </div>
              <p className="text-gray-400">
                Budget hotel in Karur offering clean, comfortable, and affordable stay on Salem Bye Pass Road.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#offers" className="hover:text-amber-500 transition">Special Offers</a></li>
                <li><a href="#rooms" className="hover:text-amber-500 transition">Our Rooms</a></li>
                <li><a href="#reviews" className="hover:text-amber-500 transition">Guest Reviews</a></li>
                <li><a href="#contact" className="hover:text-amber-500 transition">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Policies</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-amber-500 transition">Cancellation Policy</a></li>
                <li><a href="#" className="hover:text-amber-500 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-amber-500 transition">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-amber-500 transition">FAQs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-3">Stay Connected</h4>
              <p className="text-gray-400 mb-3 text-sm">
                Subscribe to get exclusive deals and updates
              </p>
              <div className="flex gap-2 items-center">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-amber-500 text-white text-sm h-9"
                />
                <button className="bg-amber-600 px-3 py-1.5 rounded-lg hover:bg-amber-700 transition h-9 flex items-center justify-center">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Aditya Inn, Karur. All rights reserved. | Designed By Growth Pulse </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

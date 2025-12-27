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
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + images.length) % images.length;
      visible.push({ index, position: i });
    }
    return visible;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience <span className="text-amber-600">Aditya Inn</span>
          </h2>
          <p className="text-xl text-gray-600">
            A glimpse into comfort and elegance
          </p>
        </div>

        <div className="relative h-96 flex items-center justify-center">
          {getVisibleImages().map(({ index, position }) => {
            const scale = position === 0 ? 1 : Math.max(0.6 - Math.abs(position) * 0.15, 0.4);
            const opacity = position === 0 ? 1 : Math.max(0.4 - Math.abs(position) * 0.1, 0.2);
            const zIndex = 50 - Math.abs(position);
            const translateX = position * 280;

            return (
              <div
                key={index}
                className="absolute transition-all duration-500 ease-in-out rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  width: '400px',
                  height: '300px',
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
              <Hotel className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold text-gray-900">Aditya Inn</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#offers" className="text-gray-700 hover:text-amber-600 transition">Offers</a>
              <a href="#rooms" className="text-gray-700 hover:text-amber-600 transition">Rooms</a>
              <a href="#reviews" className="text-gray-700 hover:text-amber-600 transition">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition">Contact</a>
            </div>
            <a href="tel:+919677735969" className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition font-semibold">
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] md:h-screen flex items-center justify-center overflow-hidden mt-4 md:mt-16 py-12 md:py-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23d97706\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-amber-600 text-white px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 animate-pulse max-w-[95%] sm:max-w-none">
            <Gift className="h-3.5 w-3.5 sm:h-5 sm:w-5 flex-shrink-0" />
            <span className="font-semibold text-[10px] sm:text-sm md:text-base whitespace-nowrap">Special Discount on Direct Bookings</span>
          </div>

          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Affordable Rooms in Karur<br />
            <span className="text-amber-600">On Salem Bypass </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
           Clean, comfortable and convenient rooms for business, family and transit travelers at Aditya Inn, near Bye Pass Roundana
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:+919677735969" className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block">
              Call to Book Now
            </a>
            <a href="#offers" className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-lg hover:bg-amber-50 transition font-bold text-lg">
              WhatsApp for Best Price
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Book Direct?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Skip the middleman. Enjoy benefits that third-party platforms simply can't match.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col h-full">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Group Booking Discounts</h3>
              <p className="text-gray-700 mb-6 flex-grow">
                Planning a family gathering or corporate trip? Get special discounted rates for group bookings of 5+ rooms.
              </p>
              <span className="inline-block bg-amber-600 text-white px-4 py-2 rounded-full font-semibold text-center">
                Save up to 20%
              </span>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col h-full">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Room + Meal Combos</h3>
              <p className="text-gray-700 mb-6 flex-grow">
                Indulge in our specially curated packages combining premium rooms with authentic meals at our in-house restaurant.
              </p>
              <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-semibold text-center">
                Special Package Rates
              </span>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col h-full">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Loyalty Rewards</h3>
              <p className="text-gray-700 mb-6 flex-grow">
                Book twice, save forever. Repeat guests enjoy exclusive discounts, room upgrades, and priority reservations.
              </p>
              <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-full font-semibold text-center">
                10% lifetime discount
              </span>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Plus: Zero Hidden Fees</h3>
            <p className="text-xl mb-6">
              No booking fees. No service charges. No commission markup. The price you see is the price you pay.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Check className="h-5 w-5" />
                <span>Early Check-in (Subject to availability)</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Check className="h-5 w-5" />
                <span>Late Check-out Options</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Check className="h-5 w-5" />
                <span>Direct Customer Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery/Experience Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hotel in Karur on Salem Bye Pass Road
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Near industrial areas, temples and shopping – ideal for business and family stays.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition">
              <div className="h-48 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <MapPin className="h-24 w-24 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategic Location</h3>
                <p className="text-gray-700">
                  Minutes from major industrial zones, business hubs, and highway connections. Easy access to temples, markets, and local attractions.
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
                  Thoughtfully designed interiors with warm lighting, premium bedding, and contemporary amenities that make you feel at home.
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
                  Enjoy authentic South Indian vegetarian dishes, freshly prepared and served with care.
Taste the true flavors of Tamil Nadu right here at Aditya Inn.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Nearby Attractions</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Temples & Heritage</h4>
                <p className="text-sm text-gray-600">2-5 km</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Car className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Industrial Areas</h4>
                <p className="text-sm text-gray-600">3-8 km</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Shopping Centers</h4>
                <p className="text-sm text-gray-600">1-3 km</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Highway Access</h4>
                <p className="text-sm text-gray-600">500m</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms & Suites Section */}
      <section id="rooms" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Stay
            </h2>
            <p className="text-xl text-gray-600">
              Every room designed with your comfort and convenience in mind
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-amber-500 transition flex flex-col h-full">
              <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <Hotel className="h-20 w-20 text-white opacity-70" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Standard Room</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </span>
                </div>
                <p className="text-gray-700 mb-4 text-sm">
                  Perfect for business travelers and solo adventurers. Clean, comfortable rooms from  ₹1,500 with essential amenities.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Deluxe Room</h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Spacious comfort for couples and small families. Enhanced space with all the essential amenities.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Suite Room</h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Premium space for families and extended stays. Maximum comfort with extra room to relax.
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
            <p className="text-gray-600 mb-4">All rooms include: Bed, WiFi, TV, Chair, Kettle, Toiletries</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Rated 4.9/5 by 45+ guests on Review
            </h2>
            <p className="text-2xl text-gray-600">
             What Our Guests Say
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "We stayed at Aditya Inn for a weekend getaway and were thoroughly impressed. The room was clean, quiet, and had all the essential amenities. The staff was incredibly attentive and went above and beyond to ensure we had a comfortable stay. We especially enjoyed the delicious food at the restaurant."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-amber-700 font-bold text-xl">JD</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Justdial Review</p>
                  <p className="text-sm text-gray-600">Clean rooms and great food</p>
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
                "Nice property. All staff and owner have good approach with customers. Car parking is available at this property. Located near Karur city, very convenient location on Salem Bye Pass Road."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-700 font-bold text-xl">LT</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Local Traveler</p>
                  <p className="text-sm text-gray-600">Convenient location on Salem Bye Pass Road</p>
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
                "Good hotel with spacious rooms and all necessary amenities. The location on Salem Bye Pass Road is perfect for travelers. Staff is helpful and attentive. Great value for money and comfortable stay."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-700 font-bold text-xl">BT</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Business Traveler</p>
                  <p className="text-sm text-gray-600">Spacious rooms and value for money</p>
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

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Call to Book Now
          </h2>

          <p className="text-xl mb-8 opacity-95">
            Don't miss out on our exclusive direct booking discount. Experience genuine hospitality, transparent pricing, and rewards that booking platforms will never offer you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+919677735969" className="bg-white text-amber-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-bold text-lg shadow-lg transform hover:scale-105 inline-block">
              Call to Book Now
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              We're here to help 24/7
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp for Best Price</h3>
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
                Enjoy a clean, comfortable, and affordable stay — Aditya Inn Karur.
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

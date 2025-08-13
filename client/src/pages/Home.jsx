import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CalendarIcon, 
  MapPinIcon, 
  PhoneIcon, 
  ClockIcon,
  StarIcon,
  UserGroupIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  const features = [
    {
      icon: CalendarIcon,
      title: 'Easy Reservations',
      description: 'Book your table online in just a few clicks'
    },
    {
      icon: MapPinIcon,
      title: 'Prime Location',
      description: 'Located in the heart of the city with easy access'
    },
    {
      icon: PhoneIcon,
      title: '24/7 Support',
      description: 'Call us anytime for assistance or special requests'
    },
    {
      icon: ClockIcon,
      title: 'Flexible Hours',
      description: 'Open daily from 11 AM to 11 PM'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Regular Customer',
      content: 'The best dining experience I\'ve had in years. The food is exceptional and the service is impeccable.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Food Blogger',
      content: 'Amazing flavors and beautiful presentation. This place is a must-visit for food lovers.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Local Resident',
      content: 'Perfect for both casual dinners and special occasions. The atmosphere is wonderful.',
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
    ));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Welcome to La Cuisine
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experience the finest dining with our award-winning chefs and carefully curated menu
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/reservations"
                className="btn-primary text-lg px-8 py-3"
              >
                <CalendarIcon className="h-6 w-6 mr-2" />
                Book a Table
              </Link>
              <Link
                to="/menu"
                className="btn-secondary text-lg px-8 py-3"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Why Choose La Cuisine?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We pride ourselves on delivering exceptional dining experiences with the highest quality ingredients and service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, La Cuisine has been serving the finest French-inspired cuisine to our valued guests. 
                Our passion for food and commitment to excellence has made us a beloved destination for food enthusiasts.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Every dish is crafted with love using locally sourced ingredients and traditional cooking techniques 
                passed down through generations of master chefs.
              </p>
              <Link
                to="/about"
                className="btn-primary"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <div className="bg-primary-600 rounded-lg p-8 text-white">
                <div className="flex items-center mb-4">
                  <SparklesIcon className="h-8 w-8 mr-3" />
                  <h3 className="text-2xl font-serif font-bold">Award-Winning</h3>
                </div>
                <p className="text-lg mb-6">
                  Recognized for excellence in culinary arts and outstanding service by leading food critics and industry experts.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">50k+</div>
                    <div className="text-sm">Happy Customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it - hear from our satisfied guests
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                    <UserGroupIcon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Ready to Experience Fine Dining?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable culinary journey. Book your table today and discover why La Cuisine is the talk of the town.
          </p>
          <Link
            to="/reservations"
            className="btn-secondary text-lg px-8 py-3 inline-flex items-center justify-center whitespace-nowrap"
          >
            <CalendarIcon className="h-6 w-6 mr-2" />
            Reserve Your Table
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

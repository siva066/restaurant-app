import React from 'react';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon,
  StarIcon,
  UserGroupIcon,
  SparklesIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const teamMembers = [
    {
      name: 'Chef Marie Dubois',
      role: 'Head Chef',
      description: 'With over 20 years of culinary experience, Chef Marie brings French elegance to every dish.',
      image: '👩‍🍳'
    },
    {
      name: 'Pierre Laurent',
      role: 'Sous Chef',
      description: 'Pierre specializes in traditional French techniques and modern culinary innovations.',
      image: '👨‍🍳'
    },
    {
      name: 'Sophie Moreau',
      role: 'Pastry Chef',
      description: 'Sophie creates the most exquisite desserts that are both beautiful and delicious.',
      image: '🧁'
    }
  ];

  const awards = [
    {
      year: '2023',
      title: 'Best Fine Dining Restaurant',
      organization: 'City Food Awards'
    },
    {
      year: '2022',
      title: 'Excellence in Service',
      organization: 'Hospitality Association'
    },
    {
      year: '2021',
      title: 'Chef of the Year',
      organization: 'Culinary Institute'
    }
  ];

  const values = [
    {
      icon: HeartIcon,
      title: 'Passion for Food',
      description: 'Every dish is crafted with love and attention to detail'
    },
    {
      icon: SparklesIcon,
      title: 'Excellence',
      description: 'We strive for perfection in every aspect of our service'
    },
    {
      icon: UserGroupIcon,
      title: 'Community',
      description: 'Building lasting relationships with our guests and community'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              About La Cuisine
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              A culinary journey that began with a simple dream: to create unforgettable dining experiences
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010 by Chef Marie Dubois, La Cuisine began as a small family restaurant with a big vision. 
                What started as a passion project has grown into one of the city's most beloved dining destinations.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey has been guided by a simple philosophy: exceptional food, warm hospitality, and an 
                unwavering commitment to quality. Every dish tells a story, every ingredient has a purpose, and 
                every guest becomes part of our extended family.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to honor our roots while embracing innovation, creating a dining experience 
                that bridges tradition and modernity.
              </p>
            </div>
            <div className="bg-primary-600 rounded-lg p-8 text-white">
              <div className="flex items-center mb-4">
                <SparklesIcon className="h-8 w-8 mr-3" />
                <h3 className="text-2xl font-serif font-bold">Our Mission</h3>
              </div>
              <p className="text-lg mb-6">
                To provide an exceptional dining experience that celebrates the art of French cuisine while 
                creating lasting memories for our guests.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">50k+</div>
                  <div className="text-sm">Happy Guests</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at La Cuisine
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The talented individuals who make La Cuisine truly special
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recognition for our commitment to culinary excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl mb-4">🏆</div>
                <div className="text-2xl font-bold text-primary-600 mb-2">
                  {award.year}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {award.title}
                </h3>
                <p className="text-gray-600">
                  {award.organization}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Visit Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We'd love to welcome you to La Cuisine
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <MapPinIcon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">
                123 Gourmet Street<br />
                Culinary District<br />
                City, State 12345
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <PhoneIcon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">
                +91 1234567890<br />
                +91 1234567890
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <EnvelopeIcon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">
                info@lacuisine.com<br />
                reservations@lacuisine.com
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <ClockIcon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600">
                Daily: 11:00 AM - 11:00 PM<br />
                Closed on Mondays
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

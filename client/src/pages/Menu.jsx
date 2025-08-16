import React, { useState, useEffect } from 'react';
import { 
  FireIcon, 
  SparklesIcon, 
  StarIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import axios from 'axios';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Dishes' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'main-courses', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await axios.get('https://restaurant-app-q3iz.onrender.com');
      setMenuItems(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching menu items:', error);
      setLoading(false);
    }
  };

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch && item.isAvailable;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'appetizers':
        return '🥗';
      case 'main-courses':
        return '🍽️';
      case 'desserts':
        return '🍰';
      case 'beverages':
        return '🥤';
      default:
        return '🍴';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading menu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Menu
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated selection of dishes, crafted with the finest ingredients 
              and prepared by our award-winning chefs.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search for dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No dishes found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{getCategoryIcon(item.category)}</span>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CurrencyDollarIcon className="h-4 w-4 text-gray-400" />
                      <span className="text-lg font-bold text-primary-600">
                        ${item.price}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {item.isVegetarian && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <SparklesIcon className="h-3 w-3 mr-1" />
                          Vegetarian
                        </span>
                      )}
                      {item.isSpicy && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          <FireIcon className="h-3 w-3 mr-1" />
                          Spicy
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center">
                      <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">4.8</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Menu Categories Info */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
            Menu Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(1).map((category) => (
              <div key={category.id} className="text-center">
                <div className="text-4xl mb-3">{getCategoryIcon(category.id)}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {category.id === 'appetizers' && 'Start your meal with our delicious appetizers'}
                  {category.id === 'main-courses' && 'Our signature main courses prepared to perfection'}
                  {category.id === 'desserts' && 'Sweet endings to your dining experience'}
                  {category.id === 'beverages' && 'Refreshing drinks to complement your meal'}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Dietary Information */}
        <div className="mt-8 bg-primary-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Dietary Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
                                      <SparklesIcon className="h-5 w-5 text-green-600" />
              <span className="text-sm text-gray-700">
                Vegetarian options available
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FireIcon className="h-5 w-5 text-red-600" />
              <span className="text-sm text-gray-700">
                Spicy dishes are marked
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

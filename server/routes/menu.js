const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// Get all menu items
router.get('/', async (req, res) => {
  try {
    const { category, available } = req.query;
    let query = {};

    if (category) {
      query.category = category;
    }

    if (available !== undefined) {
      query.isAvailable = available === 'true';
    }

    const menuItems = await MenuItem.find(query).sort({ category: 1, name: 1 });
    res.json(menuItems);
  } catch (error) {
    console.error('Error fetching menu items:', error);
    res.status(500).json({ message: 'Error fetching menu items' });
  }
});

// Get menu item by ID
router.get('/:id', async (req, res) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id);
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json(menuItem);
  } catch (error) {
    console.error('Error fetching menu item:', error);
    res.status(500).json({ message: 'Error fetching menu item' });
  }
});

// Create new menu item
router.post('/', async (req, res) => {
  try {
    const { name, description, price, category, image, isVegetarian, isSpicy, preparationTime } = req.body;

    if (!name || !description || !price || !category) {
      return res.status(400).json({ message: 'Name, description, price, and category are required' });
    }

    const menuItem = new MenuItem({
      name,
      description,
      price,
      category,
      image: image || '',
      isVegetarian: isVegetarian || false,
      isSpicy: isSpicy || false,
      preparationTime: preparationTime || 15
    });

    const savedMenuItem = await menuItem.save();
    res.status(201).json(savedMenuItem);
  } catch (error) {
    console.error('Error creating menu item:', error);
    res.status(500).json({ message: 'Error creating menu item' });
  }
});

// Update menu item
router.put('/:id', async (req, res) => {
  try {
    const { name, description, price, category, image, isVegetarian, isSpicy, isAvailable, preparationTime } = req.body;

    const menuItem = await MenuItem.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        price,
        category,
        image,
        isVegetarian,
        isSpicy,
        isAvailable,
        preparationTime
      },
      { new: true, runValidators: true }
    );

    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }

    res.json(menuItem);
  } catch (error) {
    console.error('Error updating menu item:', error);
    res.status(500).json({ message: 'Error updating menu item' });
  }
});

// Delete menu item
router.delete('/:id', async (req, res) => {
  try {
    const menuItem = await MenuItem.findByIdAndDelete(req.params.id);
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json({ message: 'Menu item deleted successfully' });
  } catch (error) {
    console.error('Error deleting menu item:', error);
    res.status(500).json({ message: 'Error deleting menu item' });
  }
});

// Get menu items by category
router.get('/category/:category', async (req, res) => {
  try {
    const menuItems = await MenuItem.find({ 
      category: req.params.category,
      isAvailable: true 
    }).sort({ name: 1 });
    
    res.json(menuItems);
  } catch (error) {
    console.error('Error fetching menu items by category:', error);
    res.status(500).json({ message: 'Error fetching menu items' });
  }
});

// Toggle menu item availability
router.patch('/:id/toggle-availability', async (req, res) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id);
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }

    menuItem.isAvailable = !menuItem.isAvailable;
    const updatedMenuItem = await menuItem.save();
    
    res.json(updatedMenuItem);
  } catch (error) {
    console.error('Error toggling menu item availability:', error);
    res.status(500).json({ message: 'Error updating menu item' });
  }
});

module.exports = router;

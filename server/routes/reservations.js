const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

// Create a new reservation
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, date, time, guests, specialRequests } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !date || !time || !guests) {
      return res.status(400).json({ message: 'All required fields must be provided' });
    }

    // Check if the date is in the future
    const reservationDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (reservationDate < today) {
      return res.status(400).json({ message: 'Reservation date must be in the future' });
    }

    // Check for existing reservation at the same time
    const existingReservation = await Reservation.findOne({
      date: reservationDate,
      time: time,
      status: { $ne: 'cancelled' }
    });

    if (existingReservation) {
      return res.status(400).json({ message: 'This time slot is already booked' });
    }

    const reservation = new Reservation({
      name,
      email,
      phone,
      date: reservationDate,
      time,
      guests,
      specialRequests: specialRequests || ''
    });

    const savedReservation = await reservation.save();
    res.status(201).json(savedReservation);
  } catch (error) {
    console.error('Error creating reservation:', error);
    res.status(500).json({ message: 'Error creating reservation' });
  }
});

// Get all reservations
router.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ createdAt: -1 });
    res.json(reservations);
  } catch (error) {
    console.error('Error fetching reservations:', error);
    res.status(500).json({ message: 'Error fetching reservations' });
  }
});

// Get reservation by ID
router.get('/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.json(reservation);
  } catch (error) {
    console.error('Error fetching reservation:', error);
    res.status(500).json({ message: 'Error fetching reservation' });
  }
});

// Update reservation status
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    if (!['pending', 'confirmed', 'cancelled'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }

    res.json(reservation);
  } catch (error) {
    console.error('Error updating reservation:', error);
    res.status(500).json({ message: 'Error updating reservation' });
  }
});

// Update reservation (general)
router.patch('/:id', async (req, res) => {
  try {
    const { status } = req.body;
    if (status && !['pending', 'confirmed', 'cancelled'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }

    res.json(reservation);
  } catch (error) {
    console.error('Error updating reservation:', error);
    res.status(500).json({ message: 'Error updating reservation' });
  }
});

// Delete reservation
router.delete('/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(req.params.id);
    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.json({ message: 'Reservation deleted successfully' });
  } catch (error) {
    console.error('Error deleting reservation:', error);
    res.status(500).json({ message: 'Error deleting reservation' });
  }
});

// Get reservations by date
router.get('/date/:date', async (req, res) => {
  try {
    const date = new Date(req.params.date);
    const reservations = await Reservation.find({
      date: {
        $gte: date,
        $lt: new Date(date.getTime() + 24 * 60 * 60 * 1000)
      }
    }).sort({ time: 1 });
    
    res.json(reservations);
  } catch (error) {
    console.error('Error fetching reservations by date:', error);
    res.status(500).json({ message: 'Error fetching reservations' });
  }
});

module.exports = router;

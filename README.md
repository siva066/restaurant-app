# La Cuisine Restaurant Website

A modern, responsive restaurant website built with React.js frontend and Node.js/Express backend with MongoDB database. Features include online reservations, menu management, and a beautiful user interface.

## 🍽️ Features

### Frontend (React.js + TypeScript)
- **Modern UI/UX**: Beautiful, responsive design with Tailwind CSS
- **Navigation**: Smooth navigation with React Router
- **Reservation System**: Online table booking with form validation
- **Menu Display**: Interactive menu with category filtering
- **Contact Form**: Customer inquiry submission
- **Responsive Design**: Mobile-first approach

### Backend (Node.js + Express + MongoDB)
- **RESTful API**: Complete CRUD operations for reservations and menu
- **Database**: MongoDB with Mongoose ODM
- **Validation**: Input validation and error handling
- **CORS**: Cross-origin resource sharing enabled
- **Environment Configuration**: Secure environment variable management

## 🚀 Tech Stack

### Frontend
- React.js 18
- TypeScript
- Tailwind CSS
- React Router DOM
- Axios
- Heroicons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Dotenv

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd restaurant
```

### 2. Backend Setup

Navigate to the server directory and install dependencies:
```bash
cd server
npm install
```

Create a `.env` file in the server directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/restaurant
NODE_ENV=development
```

Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal, navigate to the client directory and install dependencies:
```bash
cd client
npm install
```

Start the React development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## 📁 Project Structure

```
restaurant/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── App.tsx        # Main app component
│   │   └── index.tsx      # Entry point
│   ├── package.json
│   └── tailwind.config.js
├── server/                 # Node.js backend
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── server.js          # Main server file
│   ├── package.json
│   └── config.env         # Environment variables
└── README.md
```

## 🗄️ Database Schema

### Reservation Model
```javascript
{
  name: String (required),
  email: String (required),
  phone: String (required),
  date: Date (required),
  time: String (required),
  guests: Number (1-20),
  specialRequests: String,
  status: String (pending/confirmed/cancelled),
  createdAt: Date
}
```

### MenuItem Model
```javascript
{
  name: String (required),
  description: String (required),
  price: Number (required),
  category: String (appetizers/main-courses/desserts/etc),
  image: String,
  isVegetarian: Boolean,
  isSpicy: Boolean,
  isAvailable: Boolean,
  preparationTime: Number
}
```

## 🔌 API Endpoints

### Reservations
- `POST /api/reservations` - Create new reservation
- `GET /api/reservations` - Get all reservations
- `GET /api/reservations/:id` - Get reservation by ID
- `PATCH /api/reservations/:id/status` - Update reservation status
- `DELETE /api/reservations/:id` - Delete reservation
- `GET /api/reservations/date/:date` - Get reservations by date

### Menu
- `GET /api/menu` - Get all menu items
- `GET /api/menu/:id` - Get menu item by ID
- `POST /api/menu` - Create new menu item
- `PUT /api/menu/:id` - Update menu item
- `DELETE /api/menu/:id` - Delete menu item
- `GET /api/menu/category/:category` - Get menu items by category
- `PATCH /api/menu/:id/toggle-availability` - Toggle item availability

## 🎨 Customization

### Colors
The color scheme can be customized in `client/tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#fef2f2',
    100: '#fee2e2',
    // ... more shades
  }
}
```

### Restaurant Information
Update restaurant details in:
- `client/src/components/Footer.tsx`
- `client/src/pages/Contact.tsx`
- `client/src/pages/Home.tsx`

### Menu Categories
Modify menu categories in `client/src/pages/Menu.tsx`:
```javascript
const categories = [
  { id: 'appetizers', name: 'Appetizers' },
  { id: 'main-courses', name: 'Main Courses' },
  // Add more categories
];
```

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Deploy to platforms like Heroku, Railway, or DigitalOcean
3. Update MongoDB connection string for production

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy to platforms like Vercel, Netlify, or GitHub Pages
3. Update API base URL in axios calls

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions, please contact:
- Email: info@lacuisine.com
- Phone: (555) 123-4567

## 🎯 Future Enhancements

- [ ] User authentication and profiles
- [ ] Online ordering system
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] SMS confirmations
- [ ] Table management system
- [ ] Analytics and reporting
- [ ] Multi-language support
- [ ] Mobile app development

---

**Enjoy your dining experience! 🍽️**

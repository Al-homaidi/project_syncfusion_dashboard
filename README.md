# Syncfusion Dashboard

A modern, feature-rich admin dashboard built with React and Syncfusion components. This dashboard provides a comprehensive interface for managing e-commerce data, visualizing analytics, and handling various business operations.

## Features

- 📊 **Interactive Charts & Analytics**
  - Line, Area, Bar, Pie, Financial, and Stacked charts
  - Color mapping and Pyramid visualizations
  - Real-time data visualization

- 🛒 **E-commerce Dashboard**
  - Sales overview and statistics
  - Product management
  - Order tracking

- 📅 **Calendar & Scheduling**
  - Full-featured calendar component
  - Event management

- 👥 **User Management**
  - Employee management
  - Customer database
  - User profiles

- 📝 **Productivity Tools**
  - Kanban board for task management
  - Rich text editor
  - Color picker utility

- 🎨 **Customization**
  - Dark/Light theme support
  - Customizable color schemes
  - Responsive sidebar navigation

## Technologies Used

- **React** 17.0.2
- **Syncfusion EJ2 React Components**
  - Charts
  - Grids
  - Calendars
  - Kanban
  - Rich Text Editor
  - And more
- **React Router DOM** - For navigation
- **Tailwind CSS** - For styling
- **Framer Motion** - For animations
- **React Icons** - Icon library

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project_syncfusion_dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (irreversible)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Charts/         # Chart components
│   ├── Button.jsx
│   ├── Cart.jsx
│   ├── Header.jsx
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   └── ...
├── pages/              # Page components
│   ├── Charts/         # Chart pages
│   ├── Ecommerce.jsx
│   ├── Orders.jsx
│   ├── Calendar.jsx
│   └── ...
├── contexts/           # React context providers
├── data/               # Static data and assets
└── App.js              # Main application component
```

## Available Routes

- `/` or `/ecommerce` - E-commerce dashboard
- `/orders` - Orders management
- `/employees` - Employee management
- `/customers` - Customer management
- `/kanban` - Kanban board
- `/editor` - Rich text editor
- `/calendar` - Calendar view
- `/color-picker` - Color picker tool
- `/line` - Line chart
- `/area` - Area chart
- `/bar` - Bar chart
- `/pie` - Pie chart
- `/financial` - Financial chart
- `/color-mapping` - Color mapping chart
- `/pyramid` - Pyramid chart
- `/stacked` - Stacked chart

## License

This project uses Syncfusion components. Please refer to the `license.txt` file for licensing information.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


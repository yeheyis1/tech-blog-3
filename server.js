const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const apiRoutes = require('./controllers/api'); // Import API routes
const routes = require('./controllers'); // Import routes from controllers/index.js
const sequelize = require('./config/connection'); // Import Sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the view engine and register partials directory
const hbs = exphbs.create({
  defaultLayout: 'main',
  partialsDir: ['views/partials'] // Register partials directory
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Set up session middleware
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from public folder

// Use routes from controllers
app.use(routes);  // This will handle all routes including /api
app.use('/api', apiRoutes); // This handles API routes, including posts

// Sync Sequelize models and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});

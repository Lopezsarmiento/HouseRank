const express = require('express'); // Web server
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan'); // retrieves info from browser
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(morgan('tiny'));
// set static dir for static files
app.use(express.static(path.join(__dirname, '/public')));
// if files not found in '/public' go to node_modules
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

// Retrieving Routes
const rankHouseRouter = require('./src/routes/rankHouseRoutes');
const viewRankingRouter = require('./src/routes/viewRankingRoutes');
const linksRouter = require('./src/routes/linksRoutes');
// use Routers
app.use('/rankHouse', rankHouseRouter);
app.use('/viewRank', viewRankingRouter);
app.use('/links', linksRouter);

// index router
app.get('/', (req, res) => {
  res.render(
    'index',
    {
      title: 'HouseRank'
    }
  );
});

app.listen(port, () => {
  debug(`listening on Port ${chalk.green(port)}`);
});

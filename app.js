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
// angular
app.use('/js', express.static(path.join(__dirname, '/node_modules/angular')));
// angular-route
app.use('/js', express.static(path.join(__dirname, '/node_modules/angular-route')));
// controllers
app.use('/home', express.static(path.join(__dirname, '/src/components/home')));
app.use('/rankHouse', express.static(path.join(__dirname, '/src/components/rankHouse')));
app.use('/viewRanking', express.static(path.join(__dirname, '/src/components/viewRanking')));
app.use('/links', express.static(path.join(__dirname, '/src/components/links')));


app.set('views', './src/views');
app.set('view engine', 'ejs');

// Retrieving Routes
const rankHouseRouter = require('./src/routes/rankHouseRoutes');
const viewRankingRouter = require('./src/routes/viewRankingRoutes');
const linksRouter = require('./src/routes/linksRoutes');
// use Routers
// app.use('/rankHouse', rankHouseRouter);
// app.use('/viewRank', viewRankingRouter);
// app.use('/links', linksRouter);

// index router
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(port, () => {
  debug(`listening on Port ${chalk.green(port)}`);
});

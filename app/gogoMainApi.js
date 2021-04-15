var symbolRouter = require('../routes/symbolListApi');

module.exports = app => {
    app.use('/api/v1', symbolRouter);
};
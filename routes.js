//routes.js//initialize express router
let router = require('express').Router();//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    });
});

//Import Property Controller
var propertyController = require('./propertyController')

//Controller Routes
router.route('/properties')
    .get(propertyController.index)
    .post(propertyController.add)

router.route('/properties/:property_id')
    .get(propertyController.view)
    .patch(propertyController.update)
    .put(propertyController.update)
    .delete(propertyController.delete)

router.route('/search')
    .get(propertyController.index)

router.route('/landing')
    .get(propertyController.filterForLandingPage)

//Export API routes
module.exports = router;
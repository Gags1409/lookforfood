/**
 * This contains all functionality related to trucks route
 * @module router
 *
 */

const express = require('express');
const router = express.Router();
const csv = require('csv-parser');
const fs = require('fs');
const { validate } = require('jsonschema');
const searchSchema = require('./schema/searchSchema.json');

/**
 * returns distance between two locations( latitude and longitude)
 * @param {...number} lat1 - latitude.
 * @param {...number} lon1 - longitude
 * @param {...number} lat2 - latitude.
 * @param {...number} lon2 - longitude
 * @param {String} unit - Km or N
 */

function distance(lat1, lon1, lat2, lon2, unit) {
  const radlat1 = (Math.PI * lat1) / 180;
  const radlat2 = (Math.PI * lat2) / 180;
  const theta = lon1 - lon2;
  const radtheta = (Math.PI * theta) / 180;
  let dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  // K is Kilometres
  if (unit === 'K') {
    dist *= 1.609344;
  }
  // N is nautical miles
  if (unit === 'N') {
    dist *= 0.8684;
  }
  return dist.toFixed(3);
}
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  // eslint-disable-next-line no-console
  console.log('Time: ', Date.now());
  next();
});

/**
 * /trucks post route.
 * @param {Object} req - request.
 * @param {Object} res - response
 */

// define the post search trucks request
router.post('/', (req, res) => {
  let response = { errors: [], data: [] };
  //check if the current request.body payload is a valid
  const validReq = validate(req.body, searchSchema);
  if (validReq.errors && validReq.errors.length > 0) {
    const errors = validReq.errors.map(error => error.stack);
    response.errors = errors;
    return res.send(response);
  }
  const results = [];
  fs.createReadStream('./assets/data/Mobile_Food_Facility_Permit.csv')
    .pipe(csv())
    .on('data', data => {
      if (data.FacilityType === 'Truck') {
        const dist = distance(
          req.body.latitude,
          req.body.longitude,
          data.Latitude,
          data.Longitude,
          'K',
        );
        const truckData = {
          applicant: data.Applicant,
          address: data.Address,
          latitude: data.Latitude,
          longitude: data.Longitude,
          distance: dist,
        };
        results.push(truckData);
      }
    })
    .on('end', () => {
      const sortedResult = results.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
      response.data = sortedResult.slice(0, 5);
      res.send(response);
    });
});

module.exports = router;

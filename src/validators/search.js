function isLatitude(lat) {
  // eslint-disable-next-line no-restricted-globals
  return isFinite(lat) && Math.abs(lat) <= 90;
}

function isLongitude(lng) {
  // eslint-disable-next-line no-restricted-globals
  return isFinite(lng) && Math.abs(lng) <= 180;
}

function getSearchErrors(frmData) {
  const errors = [];
  if (!frmData.latitude) {
    errors.push('Latitude is required');
  } else if (!isLatitude(frmData.latitude)) {
    errors.push('Latitude must be a number between -90 and 90.');
  }

  if (!frmData.longitude) {
    errors.push('Longitude is required');
  } else if (!isLongitude(frmData.longitude)) {
    errors.push('Longitude between -180 and 180.');
  }
  return errors;
}

export default {
  getSearchErrors,
};

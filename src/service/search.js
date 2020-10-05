import { ajax } from '@lion/ajax';

export default class SearchService {
  constructor(lat, lon) {
    this.latitude = lat;
    this.longitude = lon;
  }

  getFoodTrucks() {
    const req = {
      latitude: this.latitude,
      longitude: this.longitude,
    };
    try {
      return ajax
        .post('http://localhost:3000/trucks', req)
        .then(response => {
          return response;
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log('errors from server', error);
          return false;
        });
    } catch (error) {
      throw new Error('Server is not up');
    }
  }
}

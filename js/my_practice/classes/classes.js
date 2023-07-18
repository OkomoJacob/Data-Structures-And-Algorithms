class MapObject {
  constructor(latitude, longitude) {
    this.lat = latitude;
    this.long = longitude;
  }

  getMapCoords() {
    return `Latitude: ${this.lat}, Longitude: ${this.long}`;
  }
}

//Subclass(Inheritance)

class GoogleMapMarker extends MapObject {
  constructor(latitude, longitude, label) {
    super(latitude, longitude);
    this.label = label;
  }

  getMapCoords() {
    return `${super.getMapCoords()}, Location: ${this.label}`;
  }
}

// Class Instantiation: To create an object of a class
const marker1 = new GoogleMapMarker(-0.178, 36.980, 'Nairobi')
const marker2 = new GoogleMapMarker(1.235, 37.876, 'Koya')

console.log(marker1.getMapCoords());
console.log(marker2.getMapCoords());
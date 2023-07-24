from abc import ABC, abstractclassmethod

# Parent Class
class MapObject:
    def __init__(self, latitude, longitude) -> None:
        self.lat = latitude
        self.long = longitude
        
    def get_map_coords(self):
        return f"Latutude: {self.lat}, Longitude: {self.long}"
        
#Subclass (GoogleMapMarker)
class GoogleMapMarker(MapObject):
    def __init__(self, latitude, longitude, label) -> None:
        super().__init__(latitude, longitude)
        self.label = label
        
    def get_map_coords(self):
        return f"{super().get_map_coords()}, Label: {self.label}"
        
# Class Instantiation: Create an object of a class
marker1 = GoogleMapMarker(-0.178, 36.980, 'Nairobi')
marker2 = GoogleMapMarker(1.235, 37.876, 'Koya')

# Output the class call.

print(marker1.get_map_coords())
print(marker2.get_map_coords())
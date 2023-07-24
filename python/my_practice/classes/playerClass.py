from abc import ABC

# Parent Class
class Player:
    def __init__(self, name, type) -> None:
        self.name = name
        self.type = type
        
    def introduce(self):
        return f"Hi, I'm {self.name}, {self.type}"
       
# Sub Class
class Wizard(Player):
    def __init__(self, name, type) -> None:
        super().__init__(name, type)
        print("Wizard", self)
        
    def play(self):
        return f"Oyaa, I'm {self.type}"
        
wizard1 = Wizard("James", "Healer")
wizard2 = Wizard("John", "Doe")
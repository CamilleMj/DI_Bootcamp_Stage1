import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Please provide either radius or diameter.")

    @property
    def diameter(self):
        return self.radius * 2

    @property
    def area(self):
        return math.pi * self.radius ** 2

    def __str__(self):
        return f"Circle with radius: {self.radius}"

    def __add__(self, other):
        total_radius = self.radius + other.radius
        return Circle(radius=total_radius)

    def __gt__(self, other):
        return self.radius > other.radius

    def __lt__(self, other):
        return self.radius < other.radius

    def __eq__(self, other):
        return self.radius == other.radius

    def sort_key(self):
        return self.area

circle1 = Circle(radius=5)
circle2 = Circle(diameter=10)
circle3 = Circle(radius=3)

print(circle1)
print(circle2.diameter)
print(circle3.area)

circle4 = circle1 + circle3
print(circle4)

print(circle1 > circle3)
print(circle1 == circle2)

circles = [circle1, circle2, circle3, circle4]
sorted_circles = sorted(circles, key=lambda x: x.sort_key())

for circle in sorted_circles:
    print(circle)

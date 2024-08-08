import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bike_store.settings')

import django
django.setup()

from rent.models import Customer, Address, RentalStation, Vehicle, VehicleAtRentalStation
from faker import Faker
import random

fake = Faker()

def create_customers(number):
    for _ in range(number):
        address = Address(
            address=fake.street_address(),
            address2=fake.secondary_address(),
            city=fake.city(),
            country=fake.country(),
            postal_code=fake.zipcode()
        )
        address.save()

        customer = Customer(
            first_name=fake.first_name(),
            last_name=fake.last_name(),
            email=fake.email(),
            phone_number=fake.phone_number(),
            address=address
        )
        customer.save()

    print(f"CREATED {number} Customers")

def create_rental_stations(number):
    for _ in range(number):
        address = Address(
            address=fake.street_address(),
            city=fake.city(),
            country=fake.country(),
            postal_code=fake.zipcode()
        )
        address.save()

        station = RentalStation(
            name=fake.street_address(),
            capacity=random.randint(10, 100),
            address=address
        )
        station.save()

    print(f"CREATED {number} Rental Stations")

def assign_vehicles_to_stations():
    vehicles = Vehicle.objects.all()
    stations = RentalStation.objects.all()

    for vehicle in vehicles:
        station = random.choice(stations)
        vehicle_at_station = VehicleAtRentalStation(
            vehicle=vehicle,
            rental_station=station,
            arrival_date=fake.date_this_year()
        )
        vehicle_at_station.save()

    print("Vehicles assigned to stations")

# Create data
create_customers(100)
create_rental_stations(10)
assign_vehicles_to_stations()

from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Rental, Vehicle, RentalStation, VehicleAtRentalStation
from .serializers import RentalSerializer
from django.shortcuts import get_object_or_404
from .models import Customer
from .serializers import CustomerSerializer
from .serializers import VehicleSerializer
from .serializers import RentalStationSerializer
from django.db.models import Count
from django.db import transaction

from django.db.models.functions import TruncMonth
from datetime import datetime

# Create your views here
class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class VehicleTypeViewSet(viewsets.ModelViewSet):
    queryset = VehicleType.objects.all()
    serializer_class = VehicleTypeSerializer

class VehicleSizeViewSet(viewsets.ModelViewSet):
    queryset = VehicleSize.objects.all()
    serializer_class = VehicleSizeSerializer

class VehicleViewSet(viewsets.ModelViewSet):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer

class RentalViewSet(viewsets.ModelViewSet):
    queryset = Rental.objects.all()
    serializer_class = RentalSerializer

class RentalRateViewSet(viewsets.ModelViewSet):
    queryset = RentalRate.objects.all()
    serializer_class = RentalRateSerializer

class RentalStationViewSet(viewsets.ModelViewSet):
    queryset = RentalStation.objects.all()
    serializer_class = RentalStationSerializer

class VehicleAtRentalStationViewSet(viewsets.ModelViewSet):
    queryset = VehicleAtRentalStation.objects.all()
    serializer_class = VehicleAtRentalStationSerializer

class RentalList(APIView):
    def get(self, request, format=None):
        rentals = Rental.objects.order_by('return_date', 'rental_date').all()
        serializer = RentalSerializer(rentals, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = RentalSerializer(data=request.data)
        if serializer.is_valid():
            vehicle = serializer.validated_data.get('vehicle')
            if vehicle and Rental.objects.filter(vehicle=vehicle, return_date__isnull=True).exists():
                return Response({"error": "Vehicle is currently rented."}, status=status.HTTP_400_BAD_REQUEST)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RentalDetail(APIView):
    def get(self, request, pk, format=None):
        rental = get_object_or_404(Rental, pk=pk)
        serializer = RentalSerializer(rental)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        rental = get_object_or_404(Rental, pk=pk)
        serializer = RentalSerializer(rental, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        rental = get_object_or_404(Rental, pk=pk)
        rental.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class CustomerList(APIView):
    def get(self, request, format=None):
        customers = Customer.objects.order_by('last_name', 'first_name').all()
        serializer = CustomerSerializer(customers, many=True)
        return Response(serializer.data)

class CustomerAdd(APIView):
    def get(self, request, format=None):
        customers = Customer.objects.order_by('last_name', 'first_name').all()
        serializer = CustomerSerializer(customers, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VehicleList(APIView):
    def get(self, request, format=None):
        vehicles = Vehicle.objects.all().order_by('vehicle_type')
        serializer = VehicleSerializer(vehicles, many=True)
        return Response(serializer.data)

class VehicleDetail(APIView):
    def get(self, request, pk, format=None):
        vehicle = get_object_or_404(Vehicle, pk=pk)
        vehicle_at_station = VehicleAtRentalStation.objects.filter(vehicle=vehicle, departure_date__isnull=True).first()
        last_rental = Rental.objects.filter(vehicle=vehicle).order_by('-rental_date').first()

        vehicle_data = {
            'vehicle': VehicleSerializer(vehicle).data,
            'status': 'rented' if last_rental and not last_rental.return_date else 'available',
        }

        if vehicle_data['status'] == 'available':
            if vehicle_at_station:
                vehicle_data['current_station'] = {
                    'name': vehicle_at_station.rental_station.name,
                    'station_id': vehicle_at_station.rental_station.id,
                }
        else:
            vehicle_data['last_rental'] = {
                'rental_date': last_rental.rental_date,
                'customer': {
                    'first_name': last_rental.customer.first_name,
                    'last_name': last_rental.customer.last_name,
                },
                'rented_from_station': last_rental.vehicleatstation_set.first().rental_station.name if last_rental.vehicleatstation_set.exists() else 'Unknown',
            }

        return Response(vehicle_data)

class VehicleAdd(APIView):
    def get(self, request, format=None):
        vehicles = Vehicle.objects.all().order_by('vehicle_type')
        serializer = VehicleSerializer(vehicles, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = VehicleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RentalStationList(APIView):
    def get(self, request, format=None):
        stations = RentalStation.objects.all()
        serializer = RentalStationSerializer(stations, many=True)
        return Response(serializer.data)

class RentalStationAdd(APIView):
    def get(self, request, format=None):
        stations = RentalStation.objects.all()
        serializer = RentalStationSerializer(stations, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = RentalStationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RentalStationDetail(APIView):
    def get(self, request, station_id, format=None):
        station = get_object_or_404(RentalStation, pk=station_id)
        vehicles = Vehicle.objects.filter(vehicleatrentalstation__rental_station=station)
        station_data = {
            'station': RentalStationSerializer(station).data,
            'vehicles': VehicleSerializer(vehicles, many=True).data
        }
        return Response(station_data)

class VehicleDistributionStats(APIView):
    def get(self, request, format=None):
        distribution = Vehicle.objects.values('vehicleatrentalstation__rental_station__name').annotate(count=Count('id'))
        return Response(distribution)

class DistributeVehicles(APIView):
    @transaction.atomic
    def post(self, request, format=None):
        # Retrieve all vehicles
        vehicles = Vehicle.objects.all()
        # Retrieve all stations
        stations = RentalStation.objects.all()
        num_stations = stations.count()

        if num_stations == 0:
            return Response({"error": "No rental stations available."}, status=status.HTTP_400_BAD_REQUEST)

        # Clear previous vehicle assignments
        VehicleAtRentalStation.objects.filter(departure_date__isnull=True).update(departure_date=fake.date_this_year())

        # Calculate distribution
        vehicles_per_station = len(vehicles) // num_stations
        remainder = len(vehicles) % num_stations

        assigned_vehicles = 0
        for station in stations:
            vehicles_to_assign = vehicles_per_station + (1 if remainder > 0 else 0)
            remainder -= 1

            for _ in range(vehicles_to_assign):
                vehicle = vehicles[assigned_vehicles]
                VehicleAtRentalStation.objects.create(
                    vehicle=vehicle,
                    rental_station=station,
                    arrival_date=fake.date_this_year(),
                )
                assigned_vehicles += 1

        return Response({"message": "Vehicles distributed evenly among stations!"}, status=status.HTTP_200_OK)
    
class MonthlyRentalStats(APIView):
    def get(self, request, format=None):
        # Parse query parameters for date range
        start_date = request.query_params.get('start_date')
        end_date = request.query_params.get('end_date')

        rentals = Rental.objects.all()
        if start_date and end_date:
            rentals = rentals.filter(rental_date__range=[start_date, end_date])

        # Annotate rentals by month
        monthly_stats = rentals.annotate(month=TruncMonth('rental_date')).values('month').annotate(count=Count('id')).order_by('month')

        # Convert to desired JSON format
        result = {stat['month'].strftime("%B %Y"): stat['count'] for stat in monthly_stats}
        
        return Response(result)

class PopularRentalStation(APIView):
    def get(self, request, format=None):
        # Parse query parameters for date range
        start_date = request.query_params.get('start_date')
        end_date = request.query_params.get('end_date')

        rentals = Rental.objects.all()
        if start_date and end_date:
            rentals = rentals.filter(rental_date__range=[start_date, end_date])

        # Count rentals per station
        station_stats = rentals.values('vehicle__vehicleatrentalstation__rental_station__name').annotate(count=Count('id')).order_by('-count')

        # Convert to desired JSON format
        result = {stat['vehicle__vehicleatrentalstation__rental_station__name']: stat['count'] for stat in station_stats}
        
        return Response(result)

class PopularVehicleType(APIView):
    def get(self, request, format=None):
        # Parse query parameters for date range
        start_date = request.query_params.get('start_date')
        end_date = request.query_params.get('end_date')

        rentals = Rental.objects.all()
        if start_date and end_date:
            rentals = rentals.filter(rental_date__range=[start_date, end_date])

        # Count rentals per vehicle type
        vehicle_type_stats = rentals.values('vehicle__vehicle_type__name').annotate(count=Count('id')).order_by('-count')

        # Convert to desired JSON format
        result = {stat['vehicle__vehicle_type__name']: stat['count'] for stat in vehicle_type_stats}
        
        return Response(result)
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'addresses', AddressViewSet)
router.register(r'customers', CustomerViewSet)
router.register(r'vehicle-types', VehicleTypeViewSet)
router.register(r'vehicle-sizes', VehicleSizeViewSet)
router.register(r'vehicles', VehicleViewSet)
router.register(r'rentals', RentalViewSet)
router.register(r'rental-rates', RentalRateViewSet)
router.register(r'rental-stations', RentalStationViewSet)
router.register(r'vehicle-at-rental-stations', VehicleAtRentalStationViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('rental/', RentalList.as_view()),
    path('rental/<int:pk>/', RentalDetail.as_view()),
    path('customer/', CustomerList.as_view()),
    path('customer/add/', CustomerAdd.as_view()),
    path('vehicle/', VehicleList.as_view()),
    path('vehicle/<int:pk>/', VehicleDetail.as_view()),
    path('vehicle/add/', VehicleAdd.as_view()),
    path('station/', RentalStationList.as_view()),
    path('station/add/', RentalStationAdd.as_view()),
    path('station/<int:station_id>/', RentalStationDetail.as_view()),
    path('station/distribution/', VehicleDistributionStats.as_view()),
    path('station/distribute/', DistributeVehicles.as_view()),
]

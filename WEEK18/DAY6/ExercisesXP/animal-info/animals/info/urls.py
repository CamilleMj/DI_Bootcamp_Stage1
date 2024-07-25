from django.urls import path
from . import views

urlpatterns = [
    path('/animals/', views.animals, name='animals'),
    path('/families/', views.families, name='families'),
    path('/animal/X/', views.animal, name='animal_key'),
    path('/animal_in_family/X/', views.family, name='family_key'),
]
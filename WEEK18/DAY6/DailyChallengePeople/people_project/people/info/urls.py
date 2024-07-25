from django.urls import path
from .views import display_people
from .views import display_person
from .views import display_all_people

urlpatterns = [
    path('people/', display_people, name='display_people'),
    path('person/', display_person, name='person-details'),
    path('all_people/', display_all_people, name='all_people'),
]
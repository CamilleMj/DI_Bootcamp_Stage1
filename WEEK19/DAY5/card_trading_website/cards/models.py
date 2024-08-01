from django.db import models
import random
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    amount_of_money = models.PositiveIntegerField(default=1000)
    points = models.PositiveIntegerField(default=0)

class Card(models.Model):
    name_character = models.CharField(max_length=100)
    species = models.CharField(max_length=50)
    house = models.CharField(max_length=50)
    image_url = models.URLField(blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    patronus = models.CharField(max_length=50)
    price = models.PositiveIntegerField(default=lambda: random.randint(200, 2000))
    xp_points = models.PositiveIntegerField(default=lambda: random.randint(1, 10))
    current_owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True, related_name='current_cards')
    previous_owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True, related_name='previous_cards')


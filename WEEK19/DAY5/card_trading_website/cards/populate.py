import random
import requests
from django.core.management.base import BaseCommand
from cards.models import User, Card

class Command(BaseCommand):
    help = 'Fetch data from the Harry Potter API and populate the Card model'

    def handle(self, *args, **kwargs):
        user, created = User.objects.get_or_create(
            username='default_user',
            defaults={'email': 'default_user@example.com', 'amount_of_money': 1000}
        )

        response = requests.get('https://hp-api.onrender.com/api/characters')
        if response.status_code != 200:
            self.stdout.write(self.style.ERROR('Failed to fetch data from the API'))
            return

        characters = response.json()
        for character in characters:
            Card.objects.create(
                id=character['id'],
                name_character=character['name'],
                species=character.get('species', 'Unknown'),
                house=character.get('house', 'Unknown'),
                image_url=character.get('image', ''),
                date_of_birth=character.get('dateOfBirth', None),
                patronus=character.get('patronus', 'None'),
                price=random.randint(200, 2000),
                xp_points=random.randint(1, 10),
                current_owner=None,
                previous_owner=None
            )

        self.stdout.write(self.style.SUCCESS('Successfully populated the Card model'))

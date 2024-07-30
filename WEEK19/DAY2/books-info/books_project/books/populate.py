import os
import requests
from datetime import datetime
from .models import Book

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'books_project.settings')
import django
django.setup()

def populate_books():
    search_terms = 'python'
    api_url = f'https://www.googleapis.com/books/v1/volumes?q={search_terms}'

    try:
        response = requests.get(api_url)
        data = response.json()

        for item in data.get('items', []):
            volume_info = item.get('volumeInfo', {})
            title = volume_info.get('title', '')
            author = ', '.join(volume_info.get('authors', []))
            published_date = volume_info.get('publishedDate', '')

            try:
                published_date = datetime.strptime(published_date, '%Y-%m-%d')
            except ValueError:
                published_date = None

            Book.objects.create(title=title, author=author, published_date=published_date)

        print('Sample data populated successfully!')
    except requests.RequestException as e:
        print(f'Error fetching data from API: {e}')

if __name__ == '__main__':
    populate_books()

from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Book
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
import json

# Create your views here.
def list_books(request):
    books = Book.objects.all()
    book_data = [{'id': book.id, 'title': book.title, 'author': book.author} for book in books]
    return JsonResponse({'books': book_data})

def book_detail(request, book_id):
    try:
        book = Book.objects.get(id=book_id)
        book_data = {'id': book.id, 'title': book.title, 'author': book.author}
        return JsonResponse(book_data)
    except Book.DoesNotExist:
        return JsonResponse({'error': 'Book not found'}, status=404)

@csrf_exempt
def create_book(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        author = request.POST.get('author')
        published_date=request.POST.get('published_date')

        new_book = Book.objects.create(title=title, author=author, published_date=published_date)
        new_book.save()

        book_data = {'id': new_book.id, 'title': new_book.title, 'author': new_book.author}
        return JsonResponse(book_data, status=201)  # 201 Created
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)  # 400 Bad Request

from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from . import views

urlpatterns = [
    path('list_books',views.book,name='list_books'),
    path('create_book',views.create_post,name='book_detail'),
]
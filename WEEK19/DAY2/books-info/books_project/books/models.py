from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator
from django.core.validators import MinLengthValidator

# Create your models here.

class User(models.Model):
    username=models.CharField(max_length=100, unique=True,primary_key=True)
    email=models.EmailField()
    password=models.CharField(max_length=100)
    
class Book(models.Model):
    id=models.IntegerField(primary_key=True)
    title = models.CharField(max_length=200, blank=False)
    author = models.CharField(max_length=100, blank=False)
    published_date = models.DateField(blank=False)
    description = models.TextField(blank=False)
    page_count = models.PositiveIntegerField()
    categories = models.CharField(max_length=100, blank=False)
    thumbnail_url = models.URLField(blank=True)

class BookReview(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    review_text = models.TextField(validators=[MinLengthValidator(10)], blank=False)


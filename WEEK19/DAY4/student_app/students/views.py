from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Student
from .serializers import StudentSerializer
from rest_framework import generics
from django.utils.timezone import make_aware

# Create your views here.
class StudentListView(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        date_joined = self.request.query_params.get('date_joined')

        if date_joined:
            # Convert date_joined to a datetime object (adjust timezone if needed)
            date_joined_dt = make_aware(date_joined)  # Example: '2024-08-01T00:00:00Z'

            # Filter students by date_joined
            queryset = queryset.filter(date_joined=date_joined_dt)

        return queryset
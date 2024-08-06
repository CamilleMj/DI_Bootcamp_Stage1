from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from rest_framework import generics
from .models import Department, Employee, Task, Project
from .serializers import (
    DepartmentSerializer,
    EmployeeSerializer,
    TaskSerializer,
    ProjectSerializer,
)
from .permissions import IsDepartmentAdmin

# Create your views here.
class DepartmentAPIView(APIView):
    def get(self, request):
        departments = Department.objects.all()
        serializer = DepartmentSerializer(departments, many=True)
        return Response(serializer.data)
    serializer_class = DepartmentSerializer
    permission_classes = [IsDepartmentAdmin] 

    def post(self, request):
        serializer = DepartmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EmployeeAPIView(APIView):
    def get(self, request):
        employees = Employee.objects.all()
        serializer = EmployeeSerializer(employees, many=True)
        return Response(serializer.data)
    serializer_class = EmployeeSerializer
    permission_classes = [IsDepartmentAdmin] 

    def post(self, request):
        serializer = EmployeeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProjectAPIView(APIView):
    def get(self, request):
        Projects = Project.objects.all()
        serializer = ProjectSerializer(Projects, many=True)
        return Response(serializer.data)
    serializer_class = ProjectSerializer
    permission_classes = [IsDepartmentAdmin] 

    def post(self, request):
        serializer = ProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class TaskAPIView(APIView):
    def get(self, request):
        Tasks = Task.objects.all()
        serializer = TaskSerializer(Tasks, many=True)
        return Response(serializer.data)
    serializer_class = TaskSerializer
    permission_classes = [IsDepartmentAdmin] 

    def post(self, request):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
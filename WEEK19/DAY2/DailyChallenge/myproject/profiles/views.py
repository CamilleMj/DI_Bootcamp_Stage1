from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Profile

# Create your views here.
@csrf_exempt
def create_profile(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        # Create a new profile
        profile = Profile.objects.create(name=name, email=email)
        return JsonResponse({'message': 'Profile created successfully!'})
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)

def delete_profile(request, id):
    try:
        profile = Profile.objects.get(id=id)
        profile.delete()
        return JsonResponse({'message': 'Profile deleted successfully!'})
    except Profile.DoesNotExist:
        return JsonResponse({'error': 'Profile not found'}, status=404)

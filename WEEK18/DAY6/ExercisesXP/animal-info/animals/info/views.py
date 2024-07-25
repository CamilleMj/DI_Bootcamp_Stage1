from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.http import JsonResponse

# Create your views here.
def display_all_animals(request):
    template = loader.get_template('info/data.py')
    context = ("name", "legs", "weight", "height", "speed")
    return HttpResponse(template.render(context, request))

def display_all_families(request):
    template = loader.get_template('info/data.py')
    context = ("name")
    return HttpResponse(template.render(context, request))

def display_one_animal(request, animal_id):
    animal = next((a for a in animal if a.get("id") == animal_id), None)
    if animal:
        return JsonResponse(animal)
    else:
        return HttpResponse("Animal not found", status=404)
    
def display_animal_per_family(request, family_id):
    family_animals = [a for a in animal if a.get("family_id") == family_id]
    if family_animals:
        return JsonResponse({"animals": family_animals})
    else:
        return HttpResponse("No animals found for this family", status=404)
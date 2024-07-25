from django.shortcuts import render
from .models import person
from .models import people
from django.http import HttpResponse

# Create your views here.
def display_person(request):
    person = person.objects.get(pk=1)

    context = {
        'person': person,
    }
    return render(request, 'your_app/person_details.html', context)

def display_people(request):
    people = person.objects.order_by('name')
    formatted_people = [person.name.capitalize() for person in people]
    people_str = ', '.join(formatted_people)

    return HttpResponse(f"People: {people_str}")

def display_all_people(request):
    people = person.objects.all().order_by('age')
    people_info = "\n".join([f"{person.name}: {person.age} years old" for person in people])

    return HttpResponse(people_info)


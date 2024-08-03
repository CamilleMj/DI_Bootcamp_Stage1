from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import User, Card
import random
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CardSerializer, UserSerializer
from rest_framework import status

# Create your views here.
def user_list(request):
    users = User.objects.all()
    return JsonResponse({'users': list(users.values())})

def card_list(request):
    cards = Card.objects.all()
    return JsonResponse({'cards': list(cards.values())})

def card_detail(request, card_id):
    card = get_object_or_404(Card, pk=card_id)
    return JsonResponse({
        'id': card.id,
        'name_character': card.name_character,
        'species': card.species,
        'house': card.house,
        'image_url': card.image_url,
        'date_of_birth': card.date_of_birth,
        'patronus': card.patronus,
        'price': card.price,
        'xp_points': card.xp_points,
        'current_owner': card.current_owner.username if card.current_owner else None,
        'previous_owner': card.previous_owner.username if card.previous_owner else None,
    })

def create_user(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        if not username or not email:
            return JsonResponse({'error': 'Username and email are required'}, status=400)
        user = User.objects.create(username=username, email=email, amount_of_money=1000, points=0)
        return JsonResponse({'user': {'id': user.id, 'username': user.username, 'email': user.email}})
    return JsonResponse({'error': 'Invalid request method'}, status=405)

def create_card(request):
    if request.method == 'POST':
        name_character = request.POST.get('name_character')
        species = request.POST.get('species')
        house = request.POST.get('house')
        image_url = request.POST.get('image_url')
        date_of_birth = request.POST.get('date_of_birth')
        patronus = request.POST.get('patronus')
        price = random.randint(200, 2000)
        xp_points = random.randint(1, 10)
        card = Card.objects.create(
            name_character=name_character,
            species=species,
            house=house,
            image_url=image_url,
            date_of_birth=date_of_birth,
            patronus=patronus,
            price=price,
            xp_points=xp_points
        )
        return JsonResponse({'card': {'id': card.id, 'name_character': card.name_character}})
    return JsonResponse({'error': 'Invalid request method'}, status=405)

class CardListView(APIView):
    def get(self, request):
        cards = Card.objects.all()
        serializer = CardSerializer(cards, many=True)
        return Response(serializer.data)

class CardDetailView(APIView):
    def get(self, request, card_id):
        try:
            card = Card.objects.get(id=card_id)
            serializer = CardSerializer(card)
            return Response(serializer.data)
        except Card.DoesNotExist:
            return Response({'error': 'Card not found'}, status=status.HTTP_404_NOT_FOUND)

class UserProfileView(APIView):
    def get(self, request, user_id):
        try:
            user = User.objects.get(id=user_id)
            serializer = UserSerializer(user)
            return Response(serializer.data)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

class BuyCardView(APIView):
    def post(self, request, card_id, user_id):
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        try:
            card = Card.objects.get(id=card_id)
        except Card.DoesNotExist:
            return Response({'error': 'Card not found'}, status=status.HTTP_404_NOT_FOUND)

        if user.amount_of_money < card.price:
            return Response({'error': 'Insufficient funds'}, status=status.HTTP_400_BAD_REQUEST)

        user.amount_of_money -= card.price

        card.previous_owner = card.current_owner
        card.current_owner = user

        user.save()
        card.save()

        user_serializer = UserSerializer(user)
        card_serializer = CardSerializer(card)

        return Response({
            'user': user_serializer.data,
            'card': card_serializer.data
        }, status=status.HTTP_200_OK)

class SellCardView(APIView):
    def post(self, request, card_id, user_id):
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        try:
            card = Card.objects.get(id=card_id)
        except Card.DoesNotExist:
            return Response({'error': 'Card not found'}, status=status.HTTP_404_NOT_FOUND)

        if card.current_owner != user:
            return Response({'error': 'User does not own this card'}, status=status.HTTP_403_FORBIDDEN)

        user.amount_of_money += card.price

        card.previous_owner = card.current_owner
        card.current_owner = None

        user.save()
        card.save()

        user_serializer = UserSerializer(user)
        card_serializer = CardSerializer(card)

        return Response({
            'user': user_serializer.data,
            'card': card_serializer.data
        }, status=status.HTTP_200_OK)

from django.urls import path #path function
from . import views # . is shorthand for the current directory
from .views import CardListView, CardDetailView, UserProfileView, BuyCardView, SellCardView

urlpatterns = [
    path('users/', views.user_list, name='user_list'),
    path('cards/', views.card_list, name='card_list'),
    path('cards/<int:card_id>/', views.card_detail, name='card_detail'),
    path('create_user/', views.create_user, name='create_user'),
    path('create_card/', views.create_card, name='create_card'),
    path('api/cards/', CardListView.as_view(), name='card_list'),
    path('api/cards/<int:card_id>/', CardDetailView.as_view(), name='card_detail'),
    path('api/users/<int:user_id>/', UserProfileView.as_view(), name='user_profile'),
    path('api/buy_card/<int:card_id>/<int:user_id>/', BuyCardView.as_view(), name='buy_card'),
    path('api/sell_card/<int:card_id>/<int:user_id>/', SellCardView.as_view(), name='sell_card'),
]
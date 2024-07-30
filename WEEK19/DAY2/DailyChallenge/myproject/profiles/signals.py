from django.db.models.signals import post_save
from django.db.models.signals import pre_delete
from django.dispatch import receiver
from .models import Profile

@receiver(post_save, sender=Profile)
def notify_new_profile(sender, instance, created, **kwargs):
    if created:
        print(f"New profile created: Name - {instance.name}, Email - {instance.email}")

@receiver(pre_delete, sender=Profile)
def warn_before_deleting(sender, instance, **kwargs):
    if instance.is_active:
        print(f"Warning: Deleting an active profile - Name: {instance.name}, Email: {instance.email}")

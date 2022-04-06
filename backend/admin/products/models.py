from django.db import models

# Create your models here.
class Product(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    price = models.PositiveIntegerField()

class User(models.Model):
    pass
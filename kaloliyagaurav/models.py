from django.db import models

# Create your models here.

class Contact(models.Model):
    fullname = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phoneNumber = models.IntegerField()
    description = models.CharField(max_length=99999999)

    def __str__(self):
        return f"{self.id}"


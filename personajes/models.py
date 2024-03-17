from django.db import models

# Create your models here.

class Personajes(models.Model):
    nombre = models.CharField(max_length=200)
    especie = models.CharField(max_length=200)
    raza = models.CharField(max_length=200)
    ocupacion = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True)
    habilidades = models.JSONField(default=list)
    imagen_url = models.URLField(max_length=200, blank=True, null=True)
    disponible = models.BooleanField(default=True)

    def __str__(self):
        return self.nombre

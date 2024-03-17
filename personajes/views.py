
from rest_framework import viewsets
from .serializer import PersonajesSerializer
from .models import Personajes

# Create your views here.



# modelviewSet  --> post,delete,get,patch
class PersonajesView(viewsets.ModelViewSet):
    serializer_class = PersonajesSerializer
    queryset = Personajes.objects.all()
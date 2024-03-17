from rest_framework import serializers
from .models import Personajes

class PersonajesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personajes
        fields = '__all__'

    def to_internal_value(self, data):
        # llamamos al método original para obtener los valores deserializados
        ret = super().to_internal_value(data)
        
        # verificamos si el campo 'habilidades' está presente y no es una lista
        if 'habilidades' in data and not isinstance(data['habilidades'], list):
            # convertimos el valor en una lista
            ret['habilidades'] = [data['habilidades']]
        
        return ret
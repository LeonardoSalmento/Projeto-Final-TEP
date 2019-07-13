from rest_framework import serializers

from .models import *

class ProjetoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Projeto
        fields = '__all__'

class TarefaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tarefa
        fields = '__all__'


from django.shortcuts import render

from rest_framework import viewsets

from .models import *
from .serializers import *

class ProjetoViewSet(viewsets.ModelViewSet):

    serializer_class = ProjetoSerializer
    queryset = Projeto.objects.all()


class TarefaViewSet(viewsets.ModelViewSet):

    serializer_class = TarefaSerializer
    queryset = Tarefa.objects.all()

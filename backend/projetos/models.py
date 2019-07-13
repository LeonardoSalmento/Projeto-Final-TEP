from django.db import models

class Projeto(models.Model):
    nome = models.CharField(max_length=255, null=False)
    data_prazo = models.DateField(auto_now_add=False)
    hora_prazo = models.TimeField()
    status_projeto = models.CharField(max_length=255, null=False)

    def __str__(self):
        return self.nome


class Tarefa(models.Model):
    nome_tarefa = models.CharField(max_length=255, null=False)
    data_prazo = models.DateField(auto_now_add=False)
    hora_prazo = models.TimeField()
    status_tarefa = models.CharField(max_length=255, null=False)

    def __str__(self):
        return self.nome_tarefa
from django.shortcuts import render
from django.http import HttpRequest, HttpResponse

def index(request):
    return render(request, 'todo/index.html')
 
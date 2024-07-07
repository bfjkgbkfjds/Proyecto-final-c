# comic/views.py
from django.shortcuts import render
from .models import Comic

def comic_index(request):
    comics = Comic.objects.all()
    return render(request, 'comic/comic.html', {'comics': comics})

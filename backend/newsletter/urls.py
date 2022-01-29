from django.urls import path
from . import views
app_name = 'newsletter'
urlpatterns = [
    path('posts/',views.PostListView.as_view()),
]
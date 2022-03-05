from django.urls import path
from . import views
app_name = 'newsletter'
urlpatterns = [

    path('posts/',views.PostListView.as_view(),name='post_list'),
    path('posts/create/',views.PostCreateView.as_view(),name='post_create'),
    path('posts/<slug>/',views.PostDetailView.as_view(),name='post_detail')
    path('posts/<slug>/edit/',views.PostUpdateView.as_view(),name='post_edit'),
]
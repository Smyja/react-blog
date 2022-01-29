from rest_framework import generics
# Create your views here.
from rest_framework.permissions import AllowAny
from .models import Post
from .serializers import PostSerializer

class PostListView(generics.ListAPIView):
    queryset =Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [AllowAny]

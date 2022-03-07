from rest_framework import generics,permissions
# Create your views here.
from rest_framework.permissions import AllowAny
from .models import Post
from .serializers import PostSerializer,  PostCreateSerializer

class PostListView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset =Post.objects.all()
    serializer_class = PostSerializer


class PostDetailView(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'slug'



class PostCreateView(generics.CreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = PostCreateSerializer

    def perform_create(self, serializer):
        print(serializer.validated_data)
        serializer.save(user=self.request.user)

class PostUpdateView(generics.UpdateAPIView):
    permission_classes = [AllowAny]
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'slug'
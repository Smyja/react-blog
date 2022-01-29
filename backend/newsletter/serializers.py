from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=100)
    content = serializers.CharField(max_length=1000)
    date_posted = serializers.DateTimeField()
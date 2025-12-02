from rest_framework import serializers
from .models import Blog


class BlogSerializer(serializers.ModelSerializer):
    """博客序列化器"""
    class Meta:
        model = Blog
        fields = ['id', 'content', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']

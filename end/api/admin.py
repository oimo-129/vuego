from django.contrib import admin
from .models import Blog


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ['id', 'content', 'created_at', 'updated_at']
    list_filter = ['created_at']
    search_fields = ['content']
    readonly_fields = ['created_at', 'updated_at']

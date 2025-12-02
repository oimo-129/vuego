from django.db import models


class Blog(models.Model):
    """博客日志模型"""
    content = models.TextField(verbose_name='日志内容')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='更新时间')

    class Meta:
        db_table = 'blogs'
        verbose_name = '博客日志'
        verbose_name_plural = verbose_name
        ordering = ['-created_at']

    def __str__(self):
        return f"Blog {self.id} - {self.created_at}"

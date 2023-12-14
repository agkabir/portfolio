from django.contrib import admin
from .models import Project, CvUpload, Skill, Testimonial

# Register your models here.
admin.site.register(Project)
admin.site.register(CvUpload)
admin.site.register(Skill)
admin.site.register(Testimonial)
from django.db import models

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='pics')
    desc = models.TextField()
    techs = models.CharField(max_length=200)
    demo = models.CharField(max_length=250)
    source = models.CharField(max_length=250)
    data_science = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.title}"

class Experience(models.Model):
    title = models.CharField(max_length=100)
    company_name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    duration = models.CharField(max_length=100)
    icon_name = models.CharField(max_length=50)
    desc = models.TextField()

    def __str__(self):
        return f"{self.title} - {self.company_name}"

class CvUpload(models.Model):
    title=models.CharField(max_length=50)
    cvupload = models.FileField(upload_to='media')

    def __str__(self):
        return self.title

class Skill(models.Model):
    skill = models.CharField(max_length=30)

    def __str__(self):
        return f"{self.skill}"

class Testimonial(models.Model):
    name = models.CharField(max_length=30)
    designation = models.CharField(max_length=50)
    company = models.CharField(max_length=70)
    testimonial_text = models.TextField()

    def __str__(self):
        return f"{self.name} - {self.company}"
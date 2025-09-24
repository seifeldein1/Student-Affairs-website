from django.db import models

class student(models.Model):
    STATUS_CHOICES = (
        ('active', 'Active'),
        ('inactive', 'Inactive'),
    )
    GENDER_CHOICES = (
        ('male', 'Male'),
        ('female', 'Female'),
    )

    id = models.AutoField(primary_key=True , unique=True , null=False , blank=False , editable=False)
    name = models.CharField(max_length=50 , null=False , blank=False , editable=True , unique=False)
    date_of_birth = models.DateField(null=False , blank=False , editable=True , unique=False)
    GPA = models.FloatField(null=False , blank=False , editable=True , unique=False)
    gender = models.CharField(max_length=10 , null=False , blank=False , editable=True , unique=False, choices=GENDER_CHOICES)
    status = models.CharField(max_length=10 , null=False , blank=False , editable=True , unique=False , choices=STATUS_CHOICES , default='active')
    level = models.IntegerField(null=False , blank=False , editable=True , unique=False)
    department = models.CharField(max_length=100 , null=False , blank=False , editable=True , unique=False)
    email = models.EmailField(max_length=70 , null=False , blank=False , editable=True , unique=False)
    mobile = models.CharField(max_length=20 , null=False , blank=False , editable=True , unique=False)
    

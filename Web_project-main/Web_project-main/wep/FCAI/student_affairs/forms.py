from django import forms
from .models import student
from django.core.validators import MinValueValidator, MaxValueValidator

class StudentForm(forms.ModelForm):
    date_of_birth = forms.DateField(label='Date of Birth', widget=forms.DateInput(attrs={'type': 'date'}))
    level = forms.ChoiceField(label='Level', choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4')])
    department = forms.ChoiceField(label='Department', choices=[
        ('General', 'General'),
        ('AI', 'AI'),
        ('CS', 'CS'),
        ('IS', 'IS'),
        ('IT', 'IT'),
        ('DS', 'DS')
    ])
    GPA = forms.DecimalField(
        label='GPA',
        max_digits=3,
        decimal_places=1,
        validators=[MinValueValidator(0.0), MaxValueValidator(4.0)],
        widget=forms.NumberInput(attrs={'step': '0.1'}),
        error_messages={
            'min_value': 'GPA must be between 0.0 and 4.0.',
            'max_value': 'GPA must be between 0.0 and 4.0.',
        },
    )
    class Meta:
        model = student
        fields = '__all__'

'''class SearchForm(forms.Form):
    student_id = forms.CharField(label='Student ID', max_length=20, required = True)'''   



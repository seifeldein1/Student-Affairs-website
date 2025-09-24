from django.http import HttpResponse
from django.template import loader
from django.http import JsonResponse
from .models import student
from django.shortcuts import render , redirect
from .forms import StudentForm
#from .forms import SearchForm
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render, get_object_or_404, redirect




def main(request):
  template = loader.get_template('index1.html')
  return HttpResponse(template.render())

def index(request):
  template = loader.get_template('index.html')
  return HttpResponse(template.render())

def add(request):
  form = StudentForm()
  context = {
    'form': form,
  }
  return render(request, 'Add_student_page.html', context)

def update(request):
  students = student.objects.all()
  context = {
    'students': students,
  }
  return render(request, 'Update_student_page.html', context)

def status(request):
  template = loader.get_template('status.html')
  return HttpResponse(template.render())

def search(request):
  template = loader.get_template('search1.html')
  return HttpResponse(template.render())


def department(request):
    if request.method == 'POST':
        student_id = request.POST.get('student_id')
        department = request.POST.get('department')
        try:
            student = Student.objects.get(id=student_id)
            student.department = department
            student.save()
            messages.success(request, "Department assigned successfully.")
        except Student.DoesNotExist:
            messages.error(request, "Student with the provided ID does not exist.")
           


    return render(request, 'departement_assignment.html')

@csrf_exempt 
def add_student(request):
    if request.method == 'POST':
        form = StudentForm(request.POST)
        if form.is_valid():
            student = form.save()
            message = f"Student '{student.name}' added successfully!"
            #form = StudentForm()  
            return render(request, 'Add_student_page.html', {'form': form, 'message': message, 'alert_type': 'success'})
        else:
            message = "Error occurred while adding the student."
            return render(request, 'Add_student_page.html', {'form': form, 'message': message, 'alert_type': 'danger'})
    else:
        form = StudentForm()
    return render(request, 'Add_student_page.html', {'form': form})

#done search by name for actvie
def search(request):
    if request.method == 'GET':
        searchname = request.GET.get('name', '')
        results = []
        # Example search logic: Filter based on name
        if searchname:
            results = student.objects.filter(name__icontains=searchname,status="active")

        context = {
            'results': results,
            'searchname': searchname,
        }

        return render(request, 'search1.html', context)
    else:
        # Handle invalid request methods
        return JsonResponse({'error': 'Invalid request method'}, status=405)
    

#update student
def search_student(request):
    if request.method == 'GET':
        student_id = request.GET.get('id')
        try:
            xstudent = student.objects.get(id=student_id)
            context = {
                'student': xstudent
            }
            return render(request, 'update_student_page.html', context)
        except student.DoesNotExist:
            return render(request, 'update_student_page.html')
    else:
        return render(request, 'update_student_page.html')

def update_student(request, student_id):
    # Retrieve the student object from the database
    student_obj = get_object_or_404(student, id=student_id)

    if request.method == 'POST':
        # Update the student object with the submitted form data
        student_obj.name = request.POST.get('name')
        student_obj.date_of_birth = request.POST.get('dob')
        student_obj.GPA = request.POST.get('gpa')
        student_obj.gender = request.POST.get('gender')
        student_obj.level = request.POST.get('level')

        student_obj.save()
        return redirect('student_list')


def delete_student(request, student_id):
    if request.method == 'POST':
        xstudent = student.objects.get(id=student_id)
        xstudent.delete()
        return redirect('student_list')
    else:
        return HttpResponse('Invalid request method. Must be POST.')


def student_list(request):
    students = student.objects.all()
    return render(request, 'Update_student_page.html', {'students': students})


'''@csrf_exempt
def update_student(request):
    if request.method == 'POST':
        form = SearchForm(request.POST)
        if form.is_valid():
            student_id = form.cleaned_data['student_id']
            try:
                xstudent = student.objects.get(id=student_id)
                return render(request, 'Update_student_page.html', {'student': xstudent})
            except student.DoesNotExist:
                message = "Student not found."
                return render(request, 'Update_student_page.html', {'form': form, 'message': message, 'alert_type': 'danger'})
    else:
        form = SearchForm()
    
    return render(request, 'Update_student_page.html', {'form': form})'''

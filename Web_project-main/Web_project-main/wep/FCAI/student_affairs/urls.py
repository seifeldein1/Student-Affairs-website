from django.urls import path
from . import views
from .views import add_student
from .views import delete_student


urlpatterns = [
    path('', views.main, name='main'),
    path('index.html/', views.index, name='index'),
    path('index.html/Add_student_page.html', views.add, name='add'),
    path('index.html/Update_student_page.html', views.update, name='update'),
    path('index.html/Status.html', views.status, name='status'),
    path('index.html/search1.html', views.search, name='search'),
    path('index.html/departement_assignment.html', views.department, name='department'),
    path('index.html/index1.html', views.main, name='main'),
    path('add_student/', add_student, name='add_student'),
    #path('update_student/<int:student_id>/', views.update_student, name='update_student'),
    path('department/', views.department, name='department')

    #search1 urls
    path('search-student/', views.search, name='search_student'),


    #update_student urls
    path('search/', views.search_student, name='search_student'),
    path('update_student/<int:student_id>/', views.update_student, name='update_student'),
    path('delete-student/<int:student_id>/', delete_student, name='delete_student'),
    path('student-list/', views.student_list, name='student_list'),


]

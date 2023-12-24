from django.shortcuts import render, HttpResponse, redirect
from .models import Project, CvUpload, Testimonial, Skill, Experience
from django.http import JsonResponse
from django.core.mail import send_mail
from django.template.loader import render_to_string

# Create your views here.
def home(request):
    if request.method == 'POST':
        name = request.POST.get('yourName')
        email = request.POST.get('yourEmail')
        message = request.POST.get('yourMessage')
        if name and email and message:
            html = render_to_string('email.html',{
                'name':name,
                'email':email,
                'message':message,
            })
            send_mail('Mail through portfolio page',message,'sendportfolioemail@gmail.com',['ice_nsec@yahoo.com'],html_message=html)
            return redirect('home')
        else:
            return HttpResponse("Make sure all fields are entered and valid.")

    cv = CvUpload.objects.latest('id')
    skills = Skill.objects.all()
    testimonials = Testimonial.objects.all()
    experiences = Experience.objects.all()
    projects = Project.objects.all()[:4]
    total_projects = Project.objects.count()   
    for n, obj in enumerate(projects):
        obj.techs = obj.techs.split(',')
    return render(request,'home.html',{'projects':projects,'total_projects':total_projects,'cv':cv, 'skills':skills, 'experiences':experiences, 'testimonials':testimonials})

def download(request,path):
    file_path = os.path.join(settings.MEDIA_ROOT,path)
    if os.path.exists(file_path):
        with open(file_path,'rb') as fh:
            response = HttpResponse(fh.read(), content_type="application/cvupload")
            response['Content-Disposition']='inline;filename='+os.path.basename(file_path)
            return response
    raise Http404



def load_more(request):
    offset = int(request.GET.get('offset'))
    projects = Project.objects.all()[offset:offset+2]
    data = {'projects': []}

    for project in projects:
        data['projects'].append({
            'title': project.title,
            'image':project.image.url,
            'desc': project.desc,
            'techs': project.techs.split(','),
            'source': project.source,
            'demo': project.demo,
            'data_science': project.data_science,
        })
    return JsonResponse(data=data)

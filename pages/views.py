from django.shortcuts import render
from .models import Anketa, Member
from data.dicts import loc_det, edu_grade as edu_det, family_state as fam_det
from utils import random_code

# Create your views here.
def home(request):
    context = {'title': "Asosiy sahifa"}
    return render(request, 'index.html', context)


def service(request):
    context = {'title': "Xizmatlar"}
    return render(request, 'services.html', context)

def about(request):
    context = {'title': "Malumotlar"}
    return render(request, 'about.html', context)

def anketa(request):
    context = {'title': "Anketa"}
    return render(request, 'anketa.html', context)

def add_anket(request):
    member_info = {}

    if request.method == "POST":

        fname = request.POST['fname']
        lname = request.POST['lname']
        gender = request.POST['gender']
        birth_date = request.POST['birth_date']
        city = request.POST['city']
        district = request.POST['district']
        street = request.POST['street']
        pass_seria = request.POST['pass_seria']
        pass_num = request.POST['pass_num']
        pass_end_date = request.POST['pass_end_date']
        image = request.FILES.get('image')
        # image = request.POST.get('image')
        edu_grade = request.POST['edu_grade']
        family_state = request.POST['family_state']
        # code = random_code()
        phone = request.POST['phone']
        code = request.POST.get('code')
        print('Code is:',code)

        personal = str(request.POST['personal'])
        has_mer = str(request.POST['has_mer'])
        member_count = int(request.POST.get('member_count', 0))
        if not personal == 'True': 
            personal = False
            
            for i in range(member_count):
                i += 1
                print(i)
                member_info[f'member{i}'] = list(request.POST.getlist(f'member{i}'))
                member_info[f'member{i}'] += ['child', request.FILES.get(f'member{i}')]
        else:
            personal = True
        print('has_mer',has_mer)
        if has_mer == 'True':
            member_info['member_mer'] = list(request.POST.getlist('member_mer'))
            member_info['member_mer'] +=['merrige', request.FILES.get('member_mer')]
            personal = False
            has_mer = True
        else:
            has_mer = False
            
        if personal or not has_mer:
            personal = True
        else:
            personal = False

        print(fname, lname, gender, birth_date, city, district, street, pass_seria, pass_num, pass_end_date, image, edu_grade, family_state, code)
        # print(fname)
        # print(lname)
        # print(personal)
        # print(member_count)
        # print(has_mer)


        try:
        # if True:
            
            if gender == 'male':
                gender = True
            elif gender == 'female':
                gender = False
            
            p = Anketa()
            p.is_personal = personal
            p.fname = fname
            p.lname = lname
            p.gender = gender
            p.birth_date = birth_date
            p.address = f"{loc_det(city)} -- {loc_det(district)} -- {street}"
            p.pass_data = f"{pass_seria.upper()}:{pass_num}"
            p.pass_end_date = pass_end_date
            p.photo = image
            p.edu_grade = edu_det[edu_grade]
            p.fam_state = fam_det[family_state]
            p.code = code
            p.phone = phone
            p.payed = False


            p.save()
            print(member_info)
            memberList = []
            for x, member in member_info.items():
                memberList.append(member)
                print(member)
                # ['Jane', 'Doe', 'female', '2022-06-30', 'New Street 00', 'merr', <InMemoryUploadedFile: photo_2021-09-06_16-35-02.jpg (image/jpeg)>]
                m = Member()
                m.fam_anket = p
                m.name = member[5]
                m.fname = member[0]
                m.lname = member[1]
                if member[2] == 'female':
                    m.gender = False
                else:
                    m.gender = True
                m.birth_date = member[3]
                m.address = member[4]
                m.photo = member[-1]
                m.save()

            context = {
                'title': "Anketa muvaffaqiyatli saqlandi",
                'fname': fname,
                'lname': lname,
                'address': street,
                'members': memberList,
                'payed': False,
            }

            return render(request, 'success_submit.html', context)
            # print(p)
        except:
            memberList = None
            anketa = Anketa.objects.filter(pass_data=f"{pass_seria.upper()}:{pass_num}").values()[0]
            memberList = Member.objects.filter(fam_anket=anketa['id']).values()
            print(memberList)
            memberList2 = []
            i = 0
            for mem in memberList:
                memberList2.append([])
                for x, inf in mem.items():
                    memberList2[i].append(inf)
                i += 1
            
            
            fname = anketa['fname']
            lname = anketa['lname']
            street = anketa['address']


            context = {
                'title': "Avvalroq kiritilgan anketa",
                'fname': fname,
                'lname': lname,
                'address': street,
                'members': memberList2,
                'payed': False,
            }
            return render(request, 'err_submit.html', context)



# def test1(request):
#     context = {}
#     if request.method == 'POST':
#         member1 = request.POST.getlist(f'member1')
#         print(member1)
#         context['member1'] = member1
#     return render(request, 'success_submit.html', acontext)

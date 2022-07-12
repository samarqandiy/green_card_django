from django.shortcuts import render
from pages.models import Member, Anketa
from django.views.generic import DetailView, DeleteView
from django.urls import reverse_lazy


# Create your views here.
def anketaListView(request):
    anketa_limit = 10
    anketas = Anketa.objects.all().order_by('-fill_date')
    last_page = 1+len(anketas)//anketa_limit


    if request.method == 'GET':
        page_num = int(request.GET.get('page','1'))

        if page_num > 0:
            if page_num > last_page:
                page_num = last_page
            anketas = Anketa.objects.all().order_by('-fill_date')[(page_num-1)*anketa_limit:page_num*anketa_limit]
        else:
            page_num = 0

        q = request.GET.get('q', '')
        if not q == '':
            anketas = set()
            list1 = set()
            list2 = []
            query = q.split()
            print(query)
            for qy in query:

                list1.update(list(Anketa.objects.all().order_by('-fill_date').filter(fname__contains=qy)))
                list1.update(list(Anketa.objects.all().order_by('-fill_date').filter(lname__contains=qy)))
                list1.update(list(Anketa.objects.all().order_by('-fill_date').filter(address__contains=qy)))
                list2.extend(list1)
            for anket in list2:
                if len(query) == list2.count(anket):
                    anketas.add(anket)



    context = {
        'title_auth': "Hamma anketalar",
        'title_not_auth': 'Error user',
        'anketas': anketas,
        'page_num': page_num,
        'last_page': last_page,
        'q': q,
        }
    return render(request, 'controler/anketa_listview.html', context)

class AnketaDetailView(DetailView):
    model = Anketa
    template_name = 'controler/anketa_detail.html'


class AnketaDeleteView(DeleteView):
    model = Anketa
    template_name = 'controler/anketa_delete.html'
    success_url = reverse_lazy('anketa_list')

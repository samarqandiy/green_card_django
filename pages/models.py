from django.db import models


# Create your models here.
class Anketa(models.Model):
    is_personal = models.BooleanField('shaxsiymi?', default=True)
    fname = models.CharField('ism',max_length=200)
    lname = models.CharField('familiya',max_length=200)
    gender = models.BooleanField('erkakmi?')
    birth_date = models.DateField('Tugilgan sana')
    address = models.CharField('yashash manzili',max_length=500)
    pass_data = models.CharField('passport', max_length=11, unique=True)
    pass_end_date = models.DateField('passport amal qilish muddati')
    photo = models.FileField('Fotosurat', upload_to='media/anketa')
    edu_grade = models.CharField('talim daraja',max_length=300)
    fam_state = models.CharField('oilaviy xolat', max_length=300)
    code = models.CharField(max_length=100, unique=True)
    payed = models.BooleanField('Pullik:', default=False)
    phone = models.CharField('telefon raqam',max_length=13)
    fill_date = models.DateField(auto_now=True)

    def __str__(self) -> str:
        return self.fname+' | '+self.lname+' | '+self.address
        

class Member(models.Model):
    fam_anket = models.ForeignKey(Anketa, related_name='members', on_delete=models.CASCADE)
    name = models.CharField('Aloqadorlik', max_length=300)
    fname = models.CharField('ism',max_length=200)
    lname = models.CharField('familiya',max_length=200)
    gender = models.BooleanField('Jins')
    photo = models.FileField('Fotosurat', upload_to='media/anketa')
    birth_date = models.DateField('Tugilgan sana')
    address = models.CharField('yashash manzili',max_length=500)
    
    def __str__(self) -> str:
        return self.fname.title()+' | '+self.lname.title()+' | '+self.address
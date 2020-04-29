---
layout: Let's play with Django User model
date: 2020-04-29 10:10:09 +0000
title: Let's play with Django User model
image: ''
tags: []

---
একটা এপ্লিকেশন সেটা ছোট বা বড় হোক না কেন, সেই এপ্লিকেশন কেউ না কেউ কন্ট্রোল করে। যেমন ধরুন একটা ব্লগ সাইটের কথাই বিবেচনা করি। কেউ একজন আছে যে ব্লগের "কোন এক জায়গা" ব্যবহার করে  ব্লগের কন্টেন্ট পোষ্ট করে থাকেন। এই "কোন এক জায়গা" কে আমরা সাধারণত বলে থাকি এডমিন পোর্টাল।  ব্লগের এই এডমিন প্যানেলে তো আর যে কেউ চাইলেই ঢুকতে পারা উচিত না, কারণ যদি ঢুকতে পারে তাইলে মহা বিপদ!তাই না?

ব্লগের এডমিন প্যানেল যাতে তার ব্যবহারকারীদের ঠিকঠাক মত চিনতে পারে সেজন্য আমরা ওই এডমিন পোর্টালের সকল ব্যবহার কারীর তথ্য ব্লগের ডাটাবেজে রেখে দিতে পারি। সহজ একটা বুদ্ধি, ঠিক?  ডাটাবেজের যে টেবিলে ব্লগের ব্যবহারকারীর তথ্য জমা থাকবে মনে করি সেই টেবিলের নাম User । Django Framework বাই ডিফল্ট আমাদের একটা User model দিয়ে থাকে। যা দিয়ে আমরা খুব সুন্দর ভাবে ব্যবহারকারীদের তথ্য জমা রাখতে পারবো।

একটু বিস্তারিত ভাবে ব্যাপারটা দেখা যাক। তবে তার আগে একটা Django project তৈরী করে নেয়া যাকঃ

* blog নামে একটা ফোল্ডার তৈরী করুন এবং তার ভিতরে নিচের কাজ গুলো করুন
* create your virtual environment ( যদি না জানেন কিভাবে তৈরী করতে হয় কষ্ট করে গুগল করুন)
* run in terminal `pip3 install django`
* run in terminal `django-admin startproject blogsite`
* run in terminal `python3 manage.py createsuperuser`  ( username, email & password চাইবে। দিয়ে ফেলুন! )
* run in terminal `python3 manage.py startapp user`

উপরের কমান্ডগুলো দিয়ে আমরা একটা project তৈরী করলাম এবং ব্যবহারকারীর তথ্যের জন্য একটা আলাদা app বানালাম যার নাম দিয়েছি user।  খেয়াল করে দেখুন আপনি যখন উপরের কমান্ড গুলো দিচ্ছিলেন তখন আপনার কাছে আপনার username, email & password চাচ্ছিল। এই তথ্য গুলো নিয়ে রাখলো কোথায়? অবশ্যই ডাটাবেজে, কিন্তু কোন টেবিলে? উত্তর হচ্ছে Django দ্বারা তৈরিকৃত User নামের মডেলে। সেই মডেলে চেহারাটা দেখা উচিত! Django এর অফিশিয়াল গিটহাব রিপোজিটরির এই লিংকে [https://github.com/django/django/blob/master/django/contrib/auth/models.py](https://github.com/django/django/blob/master/django/contrib/auth/models.py "https://github.com/django/django/blob/master/django/contrib/auth/models.py") গেলে আমরা User,  AbstractUser সহ আরো অনেক ক্লাস দেখতে পারবো। আপাতত আমরা এই দুইটা ক্লাস নিয়ে কথা বলবো, বাকীগুলা নিয়েও আলাপ হবে।

খেয়াল করলে দেখা যাবে User class এর নিজের কোন property নেই এবং সে AbstractUser class কে inherit করে বসে আছে, যার মানে দাঁড়ালো, যদি আমি User class এর কোন অবজেক্ট তৈরী করি তাহলে সেই অবজেক্ট AbstractUser class থেকে property গুলো inherit করে নিবে। তাই তো? (OOP এর জ্ঞান!)। তাইলে এবার AbstractUser class এ চোখ বুলানো যাক। খেয়াল করলে দেখা যাবে User এর জন্য আমরা যা যা তথ্য দেই (যেমনঃ username, first_name, last_name, email ইত্যাদি) সব আসলে এই AbstractUser class এর peorperty। আরেকটু ভালো করে খেয়াল করলে দেখা যাবে AbstractUser class এর নিচে একটা Meta class আছে যাতে দেয়া আছে `abstract = True`। এই কথাটার অর্থ হচ্ছে কোন class যদি AbstractUser class কে inherit করে তবে সেই class, AbstractUser class এর সকল গুণাবলি (মানে সকল property) এর মালিক হয়ে যাবে, কিন্তু AbstractUser class এর কোন অবজেক্ট তৈরী হবে না। (আবারো OOP এর জ্ঞান!)। তো আমরা User class এর চেহারা দেখে ফেললাম। এবার আপনার হঠাত করে মনে হল ব্যবহারকারীদের তথ্যের সাথে মোবাইল নাম্বার এবং ঠিকানা সংযুক্ত করবেন। এই কাজটা দুইভাবে করা যায়। প্রথম Profile নামে একটা মডেল তৈরী করব যেখানে user এবং profile এর মধ্যে OneToOne relation থাকবে। দ্বিতীয় যদি কোন ভাবে User class এ mobile & address নামে দুইটা ফিল্ড তৈরী করা যায়। প্রথম কাজটা করলে আমাদের ডাটাবেজে আরেকটা টেবিল তৈরী হবে, দ্বিতীয় কাজটা করলে User table এ আরো দুইটা নতুন কলাম তৈরী হবে। কোনটা ভাল? এই জায়গায় সিদ্ধান্ত নিতে হয় প্রজেক্টের উপর ভিত্তি করে। যদি আলাদা খুব বেশি ফিল্ড তৈরী করার প্রয়োজন হয় তাহলে সেটা Profile class থাকলে ভালো আর ২-৩টার জন্য আমরা না হয় টেবিল নাই বানালাম। রাজি তো? দুই ভাবেই কাজটা করে ফেলা যাক। প্রথমে একটা Profile class তৈরি করে কাজটা করি।

    from django.db import models
    from django.contrib.auth.models import User
    
    class Profile(models.Model):
    	user = models.OneToOneField(User, verbose_name=_("User"), related_name="customer", on_delete=models.CASCADE)
        mobile = models.CharField(_("Mobile Number"), max_length=20)
        address = models.TextField(_("User Address"))
        
        def __str__(self):
        	return self.user.username

এবার `python3 manage.py makemigrations` এবং `python3 manage.py migrate` এই দুইটা কমান্ড টার্মিনালে চালালে ডাটাবেজে Profile নামে একটা টেবিল তৈরী হয়ে যাবে। এবার আসা যাক টেবিল না বানিয়ে কিভাবে User table এ কলাম বানানো যায়। আমরা দেখেছিলাম Django মূলত, AbstractUser class কে User class এ inherit করে। মজার ব্যাপার হচ্ছে Django আমাদেরকে ঠিক একই কাজটা করার স্বাধীনতা দিয়ে থাকে। এখানে পুরো ক্রেডিট Django এর একার না। OOP concept এ overriding বলে একটা ব্যাপার আছে আমরা জানি নিশ্চয়ই। সেই overriding এর টেকনিক এখানে এপ্লাই করা যাক। অর্থাৎ আমরা Django এর User class কে override করে নিজেদের মত একটা User class বানাবো। এই কাজটার জন্য Django যা যা করেছিলো আমরা ঠিক তাই করব। মানে হলো, আমরাও AbstractUser class কে inherit করে আমাদের User class বানাবো।

    from django.db import models
    from django.contrib.auth.models import AbstractUser
    
    class User(AbstractUser):
        mobile = models.CharField(_("Mobile Number"), max_length=20)
        address = models.TextField(_("User Address"))
        
        def __str__(self):
        	return self.username

লিখা হয়ে গেল আমাদের নিজের User class। এখন কথা হল আমরা যখন মাইগ্রেশন চালাবো তখন Django কিভাবে বুঝবে যে User এর জন্য আমরা আমাদের বানানো ক্লাস ব্যবহার করব? Django তো আর নিজে নিজে বুঝবে না, তাকে বুঝায়ে দিতে হবে। এই কাজটা করার জন্য আমরা blogsite folder এর ভিতর settings.py ফাইলটা ব্যবহার করব। settings.py ফাইলটা কোড এডিটরে খুলে আমরা তার মধ্যে লিখে রাখবো `AUTH_USER_MODEL = 'user.User'`, ব্যস Django এবার জেনে যাবে যে user app এর মধ্যে User নামের class'ই হবে Django এর User model। এবার আমরা মাইগ্রেশন কমান্ড চালাবো, তবে মাইগ্রেশন কমান্ড চালাবার আগে Profile class এর জন্য আমরা উপরের যে কোড লিখেছিলাম সেগুলো কমেন্ট করে রাখি, না হলে Django আমাদের error দিবে। Profile class এর কোড কমেন্ট করার পর টার্মিনালে নিচের দুইটা কমান্ড লিখবোঃ

* `python3 manage.py makemigrations`
* `python3 manage.py migrate`
  কোন error দিলে user app এর মধ্যে migrations folder এর মধ্যে **init**.py ফাইলটা ছাড়া বাকী সব ফাইল ডিলেট করে, প্রজেক্টের db.sqlite3 ডিলেট করে আবার উপরের দুইটা কমান্ড চালাই। পরে  `python3 manage.py createsuperuser` কমান্ড চালিয়ে সুপার ইউজার তৈরী করে নেই। এবার `http://localhost:8000/admin` এই url যেয়ে লগইন করে দেখি সব ঠিক আছে কিনা।
  ব্যস, আমরা নিজেদের কাস্টম User class বানিয়ে ফেললাম।

`http://localhost:8000/admin` এই url এ লগইন করার সময় বা টার্মিনালে সুপার ইউজার তৈরী করার সময় নিশ্চয়ই খেয়াল করেছেন যে Django আমাদের কাছে username চাচ্ছে। এই username কিন্তু ইউনিক, এবং বাই ডিফল্ট Django login করার জন্য username ব্যবহার করে। কিন্তু আমাদের মনে হল, username এর পরিবর্তে email দিয়ে login হবে এবং username নামে কিছুই থাকবে না। ইচ্ছা তো হতেই পারে, তাই না? একটু চিন্তা করলে আমরা বুঝতে পারবো "username নামে কিছুই থাকবে না" এই কথার অর্থ হচ্ছে আমাদের User table এ username নামে কোন কলামই থাকবে না এবং Django কে দেখায়ে দিতে হবে যে লগইন করার জন্য সে যাতে শুধুই email field ব্যবহার করে। আমরা User class override করার সময় দেখেছিলাম যে User class মূলত AbstractUser class এর সকল property ব্যবহার করে। আমরা যেহেতু চাচ্ছি username এই property থাকবেই না, তাহলে আমাদের কে AbstractUser class থেকে username field বাদ দিতে হবে। কিন্তু AbstractUser class তো একটা abstract class। তাইলে এখন উপায়? আবারো Django এর অফিশিয়াল গিটহাব রিপোজিটরির এই লিংকে [https://github.com/django/django/blob/master/django/contrib/auth/models.py](https://github.com/django/django/blob/master/django/contrib/auth/models.py "https://github.com/django/django/blob/master/django/contrib/auth/models.py") গেলে আমরা দেখবো AbstractUser class আবার `AbstractBaseUser` এবং `PermissionsMixin` নামের এই দুইটা ক্লাসকে inherit করে। এখন আমাদের মাথায় একটা বুদ্ধি আসলো। আমরা এতক্ষণ দেখলাম যে `AbstractBaseUser` এবং `PermissionsMixin` class কে inherit করে AbstractUser class আবার User class inherit করে AbstractUser class কে এবং User class এর সকল তথ্য আসে AbstractUser class থেকে। (কথাটা মাথার উপর দিয়ে গেলে এই লাইন আবার পড়ুন, ধীরে ধীরে)। তাইলে ছুপা রোস্তম এই AbstractUser class, কারণ AbstractUser class কে বাদ দিতে পারলে আমরা User class এ নিজেদের পছন্দমত property রাখতে পারবো। চলেন এই ছুপা রোস্তমকে সরিয়ে ফেলা যাক। তাইলে আমাদের উদ্দেশ্যয় হচ্ছে AbstractUser class কে সরিয়ে ফেলা এবং Use class থেকে username field বাদ দেয়া এবং email field কে ইউনিক রাখা, যেহেতু লগইন এর জন্য আমরা email field ব্যবহার করব।

    from django.db import models
    from django.utils.translation import ugettext_lazy as _
    from django.utils import timezone
    from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
    
    
    class UserManager(BaseUserManager):
        def _create_user(self, email, password, **extra_fields):
            if not email:
                raise ValueError('The Email must be set')
            email = self.normalize_email(email)
            user = self.model(email=email, **extra_fields)
            user.set_password(password)
            user.save()
            return user
        
        def create_user(self, email=None, password=None, **extra_fields):
            extra_fields.setdefault('is_staff', False)
            extra_fields.setdefault('is_superuser', False)
            return self._create_user(email, password, **extra_fields)
        
    
        def create_superuser(self, email, password, **extra_fields):
            extra_fields.setdefault('is_staff', True)
            extra_fields.setdefault('is_superuser', True)
            extra_fields.setdefault('is_active', True)
    
            if extra_fields.get('is_staff') is not True:
                raise ValueError('Superuser must have is_staff=True.')
            if extra_fields.get('is_superuser') is not True:
                raise ValueError('Superuser must have is_superuser=True.')
            return self._create_user(email, password, **extra_fields)
        
        
    
    class User(AbstractBaseUser, PermissionsMixin):
        first_name = models.CharField(_('first name'), max_length=150, blank=True)
        last_name = models.CharField(_('last name'), max_length=150, blank=True)
        email = models.EmailField(_('email address'), blank=True, unique=True)
        is_staff = models.BooleanField(
            _('staff status'),
            default=False,
            help_text=_('Designates whether the user can log into this admin site.'),
        )
        is_active = models.BooleanField(
            _('active'),
            default=True,
            help_text=_(
                'Designates whether this user should be treated as active. '
                'Unselect this instead of deleting accounts.'
            ),
        )
        date_joined = models.DateTimeField(_('date joined'), default=timezone.now)
        mobile = models.CharField(_("Mobile Number"), blank=True, max_length=20)
        address = models.TextField(_("User Address"), blank=True)
        
        
        EMAIL_FIELD = 'email'
        USERNAME_FIELD = 'email'
        
        objects = UserManager()
        
        
        class Meta:
            verbose_name = _('user')
            verbose_name_plural = _('users')
            
    
        def __str__(self):
            return self.email
        
        def clean(self):
            super().clean()
            self.email = self.__class__.objects.normalize_email(self.email)
    
        def get_full_name(self):
            full_name = '%s %s' % (self.first_name, self.last_name)
            return full_name.strip()

লিখে ফেললাম আমাদের নিজের মন মত property দিয়ে User class। লক্ষ করলে দেখা যাবে এখানে দুইটা class আছে, একটার নাম UserManager এবং অন্যটি User। User class এ আমরা কেবল মাত্র username বাদে বাকী সব ফিল্ড রেখে দিয়েছি। User class এর নিচের দিকে খেয়াল করলে দেখা যাবে লিখেছি USERNAME_FIELD = 'email' যার অর্থ হল Django username হিসাবে এখন email field কেই বেছে নিবে। অর্থাৎ এর মাধ্যমে আমরা Django কে বলে দিলাম কোন ইউনিক ফিল্ডের মাধ্যমে ইউজার লগইন হবে। এবার মাইগ্রেশনের পালা। আগের মত নিচের কমান্ড দুটি চালাই।

* `python3 manage.py makemigrations`
* `python3 manage.py migrate`
কোন ইরর দিলে user app এর মধ্যে migrations folder এর মধ্যে __init__.py ফাইলটা ছাড়া বাকী সব ফাইল ডিলেট করে, প্রজেক্টের db.sqlite3 ডিলেট করে আবার উপরের দুইটা কমান্ড চালাই।  `python3 manage.py createsuperuser` কমান্ড চালিয়ে সুপার ইউজার তৈরী করে নেই। এবার `http://localhost:8000/admin` এই url যেয়ে লগইন করে দেখি সব ঠিক আছে কিনা।

User class এর সাথে আমরা আরেকটি UserManager class লিখেছি যার মধ্যমে আমরা বলে দিয়েছি কিভাবে User class এর অবজেক্ট তৈরী হবে। UserManager class এর সাহায্যে আমরা খুব সহজেই সুপার ইউজার বা সাধারণ ইউজার তৈরী করতে পারবো। নিচের উদাহরণ দেখলে ব্যাপারটা পরিষ্কার হবে।

    Super User 
    email = abcd@gmail.com
    password = abdDjango**@09
    super_user = User.objects.create_superuser(email=email, password=password)
    
    Normal User:
    email = my_email@gmail.com
    password = hello*#world#08
    
    user = User.objects.create_user(email=email, password=password)

অর্থাৎ `UserManager` ব্যবহার করে আমরা প্রোগ্রাম্যাটিক্যালি super user বা normal user তৈরী করতে পারবো।

তো এতক্ষণ পর্যন্ত আমরা দেখলাম কিভাবে Django এর নিজস্ব User class override করা যায়, কিভাবে User class থেকে property বাদ দিয়ে নিজের মন মত custom User class বানানো যায়।
আজকে এই পর্যন্তই। সবাই ভাল থাকবেন, সুস্থ থাকবেন।
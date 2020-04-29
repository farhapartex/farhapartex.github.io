---
layout: Let's play with Django User model
date: 2020-04-29 10:10:09 +0000
title: Let's play with Django User model
image: ''
tags: []

---
একটা এপ্লিকেশন সেটা ছোট বা বড় হোক না কেন, সেই এপ্লিকেশন কেউ না কেউ কন্ট্রোল করে। যেমন ধরুন একটা ব্লগ সাইটের কথাই বিবেচনা করি। কেউ একজন আছে যে ব্লগের "কোন এক জায়গা" ব্যবহার করে  ব্লগের কন্টেন্ট পোষ্ট করে থাকেন। এই "কোন এক জায়গা" কে আমরা সাধারণত বলে থাকি এডমিন প্যানেল। ব্লগের এই এডমিন প্যানেলে তো আর যে কেউ চাইলেই ঢুকতে পারা উচিত না, কারণ যদি ঢুকতে পারে তাইলে মহা বিপদ! তাই না? ব্লগের এডমিন প্যানেল যাতে তার ব্যবহারকারীদের ঠিকঠাক মত চিনতে পারে সেজন্য আমরা ওই এডমিন প্যানেলের সকল ব্যবহার কারীর তথ্য ব্লগের ডাটাবেজে রেখে দিতে পারি। সহজ একটা বুদ্ধি, ঠিক?  ডাটাবেজের যে টেবিলে ব্লগের ব্যবহারকারীর তথ্য জমা থাকবে মনে করি সেই টেবিলের নাম User । Django Framework বাই ডিফল্ট আমাদের একটা User model দিয়ে থাকে। যা দিয়ে আমরা খুব সুন্দর ভাবে ব্যবহারকারীদের তথ্য জমা রাখতে পারবো।

একটু বিস্তারিত ভাবে ব্যাপারটা দেখা যাক। তবে তার আগে একটা Django project তৈরী করে নেয়া যাকঃ

* blog নামে একটা ফোল্ডার তৈরী করুন এবং তার ভিতরে নিচের কাজ গুলো করুন
* create your virtual environment ( যদি না জানেন কিভাবে তৈরী করতে হয় কষ্ট করে গুগল করেন)
* run `pip3 install django`
* run `django-admin startproject blogsite`
* run `python3 manage.py createsuperuser`  ( username, email & password চাইবে। দিয়ে ফেলুন! )
* run `python3 manage.py startapp user`

উপরের কমান্ডগুলো দিয়ে আমরা একটা project তৈরী করলাম এবং ব্যবহারকারীদের জন্য একটা আলাদা app বানালাম যার নাম দিয়েছি user।  খেয়াল করে দেখুন আপনি যখন উপরের কমান্ড গুলো দিচ্ছিলেন তখন আপনার কাছে আপনার username, email & password চাচ্ছিল। এই তথ্য গুলো নিয়ে রাখলো কোথায়? অবশ্যই ডাটাবেজে, কিন্তু কোন টেবিলে? উত্তর হচ্ছে Django দ্বারা তৈরিকৃত User নামের মডেলে। সেই মডেলে চেহারাটা দেখা উচিত! Django এর অফিশিয়াল গিটহাব রিপোজিটরির এই লিংকে [https://github.com/django/django/blob/master/django/contrib/auth/models.py](https://github.com/django/django/blob/master/django/contrib/auth/models.py "https://github.com/django/django/blob/master/django/contrib/auth/models.py") গেলে আমরা User,  AbstractUser সহ আরো অনেক ক্লাস দেখতে পারবো। আপাতত আমরা এই দুইটা ক্লাস নিয়ে কথা বলবো, বাকীগুলা নিয়েও আলাপ হবে।

খেয়াল করলে দেখা যাবে User class এর নিজের কোন property নাই এবং সে AbstractUser class কে inherit করে বসে আছে, যার মানে দাঁড়াইল যদি আমি User class এর কোন অবজেক্ট তৈরী করি তাহলে সেই অবজেক্ট AbstractUser class থেকে property গুলো inherit করে নিবে। তাই তো? (OOP এর জ্ঞান!)। তাইলে এবার AbstractUser class এ চোখ বুলানো যাক। খেয়াল করলে দেখা যাবে User এর জন্য আমরা যা যা তথ্য দেই (যেমনঃ username, first_name, last_name, email ইত্যাদি) সব আসলে এই AbstractUser class এর peorperty। আরেকটু ভালো করে খেয়াল করলে দেখা যাবে AbstractUser class এর নিচে একটা Meta class আছে যাতে দেয়া আছে `abstract = True`। এই কথাটার অর্থ হচ্ছে কোন class যদি AbstractUser class কে inherit করে তবে সেই class, AbstractUser class এর সকল গুণাবলি (মানে সকল property) এর মালিক হয়ে যাবে, কিন্তু AbstractUser class এর কোন অবজেক্ট তৈরী হবে না। (আবারো OOP এর জ্ঞান!)। তো আমরা User class এর চেহারা দেখে ফেললাম। এবার আপনার হঠাত করে মনে হল ব্যবহারকারীদের তথ্যের সাথে মোবাইল নাম্বার এবং ঠিকানা সংযুক্ত করবেন। এই কাজটা দুইভাবে করা যায়। প্রথম Profile নামে একটা মডেল তৈরী করব যেকানে user এবং profile এর মধ্যে OneToOne relation থাকবে। দ্বিতীয় যদি কোন ভাবে User class এ mobile & address নামে দুইটা ফিল্ড তৈরী করা যায়। প্রথম কাজটা করলে আমাদের ডাটাবেজে আরেকটা টেবিল তৈরী হবে, দ্বিতীয় কাজটা করলে User table এ আরো দুইটা নতুন কলাম তৈরী হবে। কোনটা ভাল? এই জায়গায় সিদ্ধান্ত নিতে হয় প্রজেক্টের উপর ভিত্তি করে। যদি আলাদা খুব বেশি ফিল্ড তৈরী করার প্রয়োজন হয় তাহলে সেটা Profile class থাকলে ভালো আর ২-৩টার জন্য আমরা না হয় টেবিল নাই বানালাম। রাজি তো? দুই ভাবেই কাজটা করে ফেলা যাক। 
প্রথমে একটা Profile class তৈরি করে কাজটা করি। 
```
from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
	user = models.OneToOneField(User, verbose_name=_("User"), related_name="customer", on_delete=models.CASCADE)
    mobile = models.CharField(_("Mobile Number"), max_length=20)
    address = models.TextField(_("User Address"))
    
    def __str__(self):
    	return self.user.username
```
এবার `python3 manage.py makemigrations` এবং `python3 manage.py migrate` এই দুইটা কমান্ড টার্মিনালে চালালে ডাটাবেজে Profile নামে একটা টেবিল তৈরী হয়ে যাবে। 
এবার আসা যাক টেবিল না বানিয়ে কিভাবে User table এ কলাম বানানো যায়। আমরা দেখেছিলাম Django মূলত, AbstractUser class কে User class এ inherit করে। মজার ব্যাপার হচ্ছে Django আমাদেরকে ঠিক একই কাজটা করার স্বাধীনতা দিয়ে থাকে। এখানে পুরো ক্রেডিট Django এর একার না। OOP concept এ overridding বলে একটা ব্যাপার আছে আমরা জানি নিশ্চয়ই। সেই overridding এর টেকনিক এখানে এপ্লাই করা যাক। অর্থাৎ আমরা Django এর User class কে override করে নিজেদের মত একটা User class বানাবো। এই কাজটার জন্য Django যা যা করেছিলো আমরা ঠিক তাই করব। মানে হলো, আমরাও AbstractUser class কে inherit করে আমাদের User class বানাবো।
```
from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    mobile = models.CharField(_("Mobile Number"), max_length=20)
    address = models.TextField(_("User Address"))
    
    def __str__(self):
    	return self.username
```
লিখা হয়ে গেল আমাদের নিজের User class। এখন কথা হল আমরা যখন মাইগ্রেশন চালাবো তখন Django কিভাবে বুঝবে যে User এর জন্য আমরা আমাদের বানানো ক্লাস ব্যবহার করব? Django তো আর নিজে নিজে বুঝবে না, তাকে বুঝায়ে দিতে হবে। এই কাজটা করার জন্য আমরা blogsite folder এর ভিতর settings.py ফাইলটা ব্যবহার করব। settings.py ফাইলটা কোড এডিটরে খুলে আমরা তার মধ্যে লিখে রাখবো `AUTH_USER_MODEL = 'user.User'`, ব্যস Django এবার জেনে যাবে যে user app এর মধ্যে User নামের class'ই হবে Django এর User model। এবার আমরা মাইগ্রেশন কমান্ড চালাবো, তবে মাইগ্রেশন কমান্ড চালাবার আগে Profile class এর জন্য আমরা উপরের যে কোড লিখেছিলাম সেগুলো কমেন্ট করে রাখি, না হলে Django আমাদের error দিবে। Profile class এর কোড কমেন্ট করার পর টার্মিনালে নিচের দুইটা কমান্ড লিখবোঃ 
* `python3 manage.py makemigrations`
* `python3 manage.py migrate`
কোন ইরর দিলে user app এর মধ্যে migrations folder এর মধ্যে __init__.py ফাইলটা ছাড়া বাকী সব ফাইল ডিলেট করে, প্রজেক্টের db.sqlite3 ডিলেট করে আবার উপরের দুইটা কমান্ড চালাই।  `python3 manage.py createsuperuser` কমান্ড চালিয়ে সুপার ইউজার তৈরী করে নেই। এবার `http://localhost:8000/admin` এই url যেয়ে লগইন করে দেখি সব ঠিক আছে কিনা। 
ব্যস, আমরা নিজেদের কাস্টম User class বানিয়ে ফেললাম।

`http://localhost:8000/admin` এই url এ লগইন করার সময় বা টার্মিনালে সুপার ইউজার তৈরী করার সময় নিশ্চয়ই খেয়াল করেছেন যে Django আমাদের কাছে username চাচ্ছে। এই username কিন্তু ইউনিক, এবং বাই ডিফল্ট Django login করার জনয় username ব্যবহার করে। কিন্তু আমাদের মনে হল, নাহ email দিয়ে login হবে এবং username নামে কিছুই থাকবে না। ইচ্ছা তো হতেই পারে, তাই না? একটু চিন্তা করলে আমরা বুঝতে পারবো "username নামে কিছুই থাকবে না" এই কথার অর্থ হচ্ছে আমাদের User table এ username নামে কোন কলামই থাকবে না এবং Django কে দেখায়ে দিতে হবে যে লগইন করার জন্য সে যাতে শুধুই email field ব্যবহার করে। আমরা User class override করার সময় দেখেছিলাম যে User class মূলত AbstractUser class এর সকল property ব্যবহার করে। আমরা যেহেতু চাচ্ছি username এই property থাকবেই না, তাহলে আমাদের কে AbstractUser class থেকে username field বাদ দিতে হবে। কিন্তু AbstractUser class তো একটা abstract class। তাইলে এখন উপায়? 
আবারো Django এর অফিশিয়াল গিটহাব রিপোজিটরির এই লিংকে [https://github.com/django/django/blob/master/django/contrib/auth/models.py](https://github.com/django/django/blob/master/django/contrib/auth/models.py "https://github.com/django/django/blob/master/django/contrib/auth/models.py") গেলে আমরা দেখবো AbstractUser class আবার `AbstractBaseUser` এবং `PermissionsMixin` নামের এই দুইটা ক্লাসকে inherit করে। এখন আমাদের মাথায় একটা বুদ্ধি আসলো। আমরা এতক্ষণ দেখলাম যে `AbstractBaseUser` এবং `PermissionsMixin` class কে inherit করে AbstractUser class আবার User class inherit কর AbstractUser class কে এবং User class এর সকল তথ্য আসে AbstractUser class থেকে। তাইলে ছুপা রোস্তম এই AbstractUser class। একে বাদ দিলে কেমন হয়?   


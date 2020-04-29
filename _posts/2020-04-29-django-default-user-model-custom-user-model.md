---
layout: Django default user model & custom user model
date: 2020-04-29 10:10:09 +0000
title: Django default user model & custom user model
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

খেয়াল করলে দেখা যাবে User class এর নিজের কোন property নাই এবং সে AbstractUser class কে inherit করে বসে আছে, যার মানে দাঁড়াইল যদি আমি User class এর কোন অবজেক্ট তৈরী করি তাহলে সেই অবজেক্ট AbstractUser class থেকে property গুলো inherit করে নিবে। তাই তো? (OOP এর জ্ঞান!)। তাইলে এবার AbstractUser class এ চোখ বুলানো যাক। খেয়াল করলে দেখা যাবে User এর জন্য আমরা যা যা তথ্য দেই (যেমনঃ username, first_name, last_name, email ইত্যাদি) সব আসলে এই AbstractUser class এর peorperty। আরেকটু ভালো করে খেয়াল করলে দেখা যাবে AbstractUser class এর নিচে একটা Meta class আছে যাতে দেয়া আছে `abstract = True`। এই কথাটার অর্থ হচ্ছে কোন class যদি AbstractUser class কে inherit করে তবে সেই class, AbstractUser class এর সকল গুণাবলি (মানে সকল property) এর মালিক হয়ে যাবে, কিন্তু AbstractUser class এর কোন অবজেক্ট তৈরী হবে না। (আবারো OOP এর জ্ঞান!)। তো আমরা User class এর চেহারা দেখে ফেললাম। এবার আপনার হঠাত করে মনে হল ব্যবহারকারীদের তথ্যের সাথে মোবাইল নাম্বার এবং ঠিকানা সংযুক্ত করবেন। এই কাজটা দুইভাবে করা যায়। প্রথম Profile নামে একটা মডেল তৈরী করব যেকানে user এবং profile এর মধ্যে OneToOne relation থাকবে। দ্বিতীয় যদি কোন ভাবে User class এ mobile & address নামে দুইটা ফিল্ড তৈরী করা যায়। প্রথম কাজটা করলে আমাদের ডাটাবেজে আরেকটা টেবিল তৈরী হবে, দ্বিতীয় কাজটা করলে User table এ আরো দুইটা নতুন কলাম তৈরী হবে। কোনটা ভাল? এই জায়গায় সিদ্ধান্ত নিতে হয় প্রজেক্টের উপর ভিত্তি করে। যদি আলাদা খুব বেশি ফিল্ড তৈরী করার প্রয়োজন হয় তাহলে সেটা Profile class থাকলে ভালো আর ২-৩টার জন্য আমরা না হয় টেবিল নাই বানালাম। রাজি তো?  
---
layout: post
date: 2019-06-27T11:32:52.000+00:00
title: Data Levels of Measurement
image: ''
tags:
- Data Science
- 'Statistics    '

---
আমরা সবাই মোটামুটি ভ্যারিয়েবল নামক শব্দটা চিনি। তো ভ্যারিয়েবল দিয়ে আসলে কি করে? ভ্যারিয়েবলে ভ্যালু জমা রাখা হয়। যেমন x = 5 বা x = 6 । ধরলাম এই x কারো উচ্চতা নির্দেশ করে। আবার ধরি x = আমেরিকান বা x = বাংলাদেশি। এখানে আবার এই ভ্যারিয়েবল কারো জাতীয়তা নির্দেশ করে। আবার ধরলাম x = প্রথম বা x = দ্বিতীয়।

এখানে ভ্যারিয়েবল কোন ক্রম নির্দেশ করে। তাহলে ব্যাপারটা কি দাঁড়ালো? ব্যাপারটা হইল যে একটা ভ্যারিয়েবল এক এক সময় এক এক ধাঁচের পরিমাপ নির্দেশ করতে পারে। হিসাব নিকাশের সময় এই ভ্যারিয়েবলের যে এত ভিন্ন ভিন্ন চেহারা একে বলা হয় Data level of measurement। এবার একটু বিস্তারিত জানা যাক।

এই Data level of measurement মূলত চার ধরণের। যেগুলাকে নাম দেয়া হয়েছে Nominal level of measurement, Ordinal level of measurement, Interval level of measurement এবং Ratio level of measurement। কত সুন্দর এই দুনিয়া, তাই না? একটা ভ্যারিয়েবল, তার আবার কত রূপ। আহা..!!

#### Nominal

জানার আগে চলেন একটু বংশ পরিচয় জানা যাক। এই Nominal শব্দটা আসলে একটা adjective যার মানে হচ্ছে কোন কিছুর একটা টাইটেল থাকা বা একটা নাম থাকা। অর্থাৎ কোন কিছুকে নাম দিয়ে তার ভাব প্রকাশকে nominal বলা যায়। যেমন কাউকে দেখিয়ে বললাম যে উনি CEO তাহলে যে কেউই বুঝবে উনি কোন কোম্পানির প্রধান। এবার আসি আসল আলোচনায়। ধরা যাক আমার কাছে কিছু সংখ্যক লোকের ডাটা আছে যাদেরকে তিনটা ভিন্ন ক্যাটাগরিতে ভাগ করা আছে৷ আমি একটা ভ্যারিয়েবল নিলাম x। এখন যখন কোন লোক হবে পুরুষ আমি বলব x = Male আবার যদি সেটা মহিলা হয় আমি বলব x= Female আর সেটা যদি তৃতীয় লিঙ্গ হয় তাহলে x= Transgender। এই যে নাম প্রদানের মাধ্যমে ডাটাকে আমি তিনটা ক্লাসে ভাগ করলাম এটাকেই বলে Nominal level of measurement। এখানে একটা গুরুত্বপূর্ণ ব্যাপার হচ্ছে Nominal হবার জন্য যে শুধু নামই দেয়া লাগবে তা না। সেক্ষেত্রে alpha numeric হতে পারে, শুধু মাত্র কোন একটা অক্ষর দিয়ে হতে পারে আবার একটা শব্দ ব্যবহার করেও হতে পারে৷ যেমন চুলের কালারের জন্য একটা ম্যাপ কল্পনা করি (১, বাদামী), (২, কালো), (৩,নীল)। এখন আমি যদি বলি কারো চুলের কালার ১ এর মানে তার চুলের কালার বাদামী। আবার কারো চুলের কালার বললাম ২ এর মানে তার চুলের কালার কালো। তাহলে এখানে সংখ্যা কোন মান প্রকাশ করে নি। একটা ক্যাটাগরির নাম নির্দেশ করেছে।

#### Ordinal

Ordinal এর বংশপরিচয় ঘাঁটলে দেখা যায় উনি একটা adjective এবং উনার কাজ হল কাউকে ক্রমানুসারে সাজানো। উদাহরণ এর মাধ্যমে দেখলে ব্যাপারটা অনেক পরিষ্কার হবে। আপনি আজকের দিনে কেমন ফিল করছেন তার একটা ডাটাসেট চিন্তা করি, যেখানে  
১. খুব খুশি  
২. খুশি  
৩. চলে একরকম  
৪. দুঃখী জীবন  
৫. খুবই দুঃখী জীবন

এই ক্রমানুসারে সাজানো ডাটা থেকে যেকোন একটা আপনার আজকের দিন কেমন তা প্রকাশ করতে পারে। মজার ব্যাপার খেয়াল করলে দেখবেন ৫ নাম্বার অপশন থেকে ৩ নাম্বার অপশনটা ভালো আবার ৩ নাম্বার অপশন থেকে ১ নাম্বার অপশনটা ভাল। অর্থাৎ কার থেকে কে ভাল তা ক্রমানুসারে বলা আছে। কিন্তুউউউউউ... কতটুকু ভাল তা কিন্তু বলা নেই। দারুণ না ব্যাপারটা? তাহলে সারমর্ম হিসাবে বলা যায় ordinal level of measurement আমাদের ডাটার ক্রম দিতে পারে যেখানে আমরা ডাটার কোয়ালিটি নিয়ে কথা বার্তা বলতে পারি কিন্তু কোয়ান্টিটি অর্থাৎ পরিমাণ বা দুইটা ডাটার পার্থক্য নিয়ে কোন আলাপ-সালাপ করতে পারি না।

#### Interval

এই শব্দটা চিনে না এমন মানুষ খুব কমই হয়ত আছেন। আহা ইন্টারে পড়ার সময় সেই Interval এর ম্যাথ গুলা। না পারার কারণে কত যে বকা!! আহা সেই দিনগুলো..

যাই হোক, একটা স্কুলে বয়স অনুযায়ী বাচ্চাদের সংখ্যার একটা ডাটাসেট দেখা যাক:  
\[৭-১০\] = ২০  
\[১১-১৪\] = ১৫  
\[১৫-১৮\] = ৩৫

নড়েচড়ে বসে এবার একটু খেয়াল করি। ডাটা গুলো একটা ক্রমানুসারে সাজানো আছে। দেখা যাচ্ছে ৭-১০ বছরের বাচ্চাদের সংখ্যা ২০, ১১-১৪ বছরের বাচ্চাদের সংখ্যা ১৫ এবং ১৫-১৮ বছরের বাচ্চাদের সংখ্যা ৩৫। Ordinal এ আমরা কোয়ান্টিটি জানতে পারি নাই, কিন্তু এখানে জানতে পারছি। দারুণ না ব্যাপারটা? অবশ্যই দারুণ!! আরো কিছু ব্যাপার। খেয়াল করে দেখুন যে উপরের তিনটা interval এ সংখ্যার গ্যাপ একই অর্থাৎ ৩। interval level এ গ্যাপ এর পরিমাণ সব সময় একই থাকবে। একটা ছোট্ট উদাহরণ দেয়া যাক। সেলসিয়াস স্কেলে কিছু তাপমাত্রার ডাটাসেট দেখিঃ  
\[-১০  -   -১\](নেগেটিভ তাপমাত্রা)  
\[০  -  ৯\]

প্রথম interval এ -১০ ডিগ্রি সেলসিয়াস থেকে -১ ডিগ্রি সেলসিয়াস নেয়া হয়েছে এবং পরেরটাতে ০ থেকে ৯ ডিগ্রি সেলসিয়াস নেয়া হয়েছে এবং দুই ক্ষেত্রেই তাপমাত্রার পার্থক্য ৯ ডিগ্রি সেলসিয়াস।

একটা মহা গুরুত্বপূর্ণ কথা!!  ধরা যাক Interval এ দুইটা তাপমাত্রার পার্থক্য আসলো ০। এখন আমরা কি তাহলে বলব সেখানে তাপমাত্রা অনুপস্থিত? অবশ্যই না। কারণ ০ ডিগ্রি তাপমাত্রার অস্তিত্ব আছে। একটা নতুন শব্দ বলি **_"true zero"_**। এর মানে হল যদি আপনার কাছে কোন কিছুর মান ০ হয় এর অর্থ হল তার কোন অস্তিত্ব নাই। আমরা দেখলাম তাপমাত্রার ক্ষেত্রে ০ ডিগ্রিও একটা তাপমাত্রা প্রকাশ করে। তাই interval level এ এই **_"true zero"_** খাটবে না। মনে রাখার মত আরেকটা ব্যাপার হল Interval এ দুইটা মানের মাঝে শুধু যোগ বা বিয়োগ করা যায়।  
ক্যালেন্ডারের বছর , ঘড়ির সময় Interval level of measurement এর উদাহরণ।

#### Ratio

ধরেন আপনার বয়স ২০ বছর এবং আপনার বাবার বয়স ৪০ বছর। অর্থাৎ আপনার বাবা বয়সে আপনার চেয়ে দ্বিগুণ বড়। তাহলে আপনাদের দুজনের বয়সের ratio ১/২। কিন্তু পরিসংখ্যানে এই Ratio level of measurement একটু ভিন্ন। একটা ভ্যারিয়েবলকে Ratio level of measurement বলতে পারব যদি সে

* order তৈরি করতে পারে ,
* ভ্যারিয়েবলের মানের মাঝে পার্থক্য বলতে পারে এবং
* যদি তার ক্ষেত্রে "true zero" সত্যি হয়, অর্থ্যাৎ ০ মানে কোন অস্তিত্ব নাই।

কিছু উদাহরণ দেখা যাক। ধরুন আমি আপনাকে জিজ্ঞাসা করলাম আপনার উচ্চতা কত। কিছু অপশন দিলাম

* ৫ ফুটের কম
* ৫ ফুট ৩ ইঞ্চি থেকে ৬ ফুট এর মাঝে
* ৬ ফুটের বেশি

খেয়াল করে দেখা যাবে ডাটাসেটে একটা ক্রম আছে এবং ডাটার মাঝের গ্যাপ টুকু বুঝা যায়। এবার প্রথম উদাহরণ টা বুঝার চেষ্টা করি।  
৫ ফুটের কম । এখানে উচ্চতা ০ হতে পারে। যদি কারো উচ্চতা ০ হয় এর মানে হল তার কোন অস্তিত্ব নাই। অর্থাৎ **_"true zero"_** এখানে সত্য।  
৫ ফুট ৩ ইঞ্চি থেকে ৬ ফুট এর মাঝে এই উদাহরণে দুইটা উচ্চতার মাঝের পার্থক্য হিসাব করা যায়।

এই ছিল চার ধরনের Data levels of measurement। এবার এদের সবাই কে দিয়ে কি কি করা যায় তার একটা তালিকা একসাথে দেখি।

| Features | Nominal | Ordinal | Interval | Ratio |
| --- | --- | --- | --- | --- |
| The sequence of variable is established | - | Yes | Yes | Yes |
| Mode | Yes | Yes | Yes | Yes |
| Median | - | Yes | Yes | Yes |
| Mean | - | - | Yes | Yes |
| Difference between variables can be evaluated | - | - | Yes | Yes |
| Addition & Subtraction of variables | - | - | Yes | Yes |
| Multiplication & Division of variables | - | - | - | Yes |
| Absolute Zero | - | - | - | Yes |

---
layout: post
date: 2019-08-06 08:10:45 +0000
title: K-Nearest Neighbors Algorithm
image: ''
tags:
- Data, Statistics, Data Science, Machine Learning

---
কম্পিউটার সাইন্সে বর্তমানে সবচেয়ে আলোচিত শব্দটি হল মেশিন লার্নিং। একটা মেশিনকে মূলত দুইভাবে শিখানো যায়। এক পদ্ধতির নাম সুপারভাইজড লার্নিং এবং অন্যটাকে বলা হয় আন-সুপারভাইজড লার্নিং। সুপারভাইজড লার্নিং আবার দুই রকমের হয়। একটাকে বলা হয় রিগ্রেশন এবং অন্যটাকে বলা হয় ক্লাসিফিকেশন।

ধরুন আপনার বাসায় একটা ছোট্ট বাচ্চা আছে, এই ৪-৫ বছরের। ধরুন প্রথম ১০ দিন তাকে বিড়ালের অনেক গুলো ছবি দেখিয়ে বললেন এর নাম বিড়াল। ১০ দিন পর ওই শিশুকে কিছু বিড়ালের ছবি, হাতির ছবি এবং বানরের ছবি দেখিয়ে পরে শুধু বিড়ালের ছবি দেখিয়ে যদি জিজ্ঞাসা করা হয় "এটা কি?" তাহলে শিশুটি বলতে পারবে যে "এটি একটি বিড়াল"। এখানে শিশুকে প্রথমে কিছু তথ্য জানানো হল, যে তথ্যে কিছু লেবেলিং করা ছিল। লেবেলিং বলতে বুঝাচ্ছি যে কোনটা কি জিনিস তা একদম বলে দেয়া। একটা মেশিনকে যদি এভাবে কিছু ডাটা দিয়ে ট্রেইন করা হয়, যে ডাটা লেবেলিং করা থাকে এবং ট্রেইন করার পর যদি মেশিন লেবেলিং করা ডাটা থেকে সঠিক তথ্য খুঁজে বের করতে পারে তাহলে মেশিনকে শিখানোর ওই পদ্ধতিকে বলা রিগ্রেশন। রিগ্রেশনে অনেক এলগোরিদম ব্যবহার করে একটা মেশিনকে শিখানো হয়। রিগ্রেশনের অনেক এলগোরিদমের মাঝে একদম বেসিক একটা এলগোরিদম হল `K-Nearest Neighbors Algorithm` । আজকের গল্পটা এই এলগোরিদম নিয়ে।

ইন্টারে পড়াকালে আমরা দেখেছি কিভাবে দুইটা বিন্দুর মধ্যবর্তী দূরত্ব বের করতে হয়। ধরি A(x1,y1) এবং B(x2,y2) দুটি বিন্দু। আমাদের এদের মধ্যাকার দূরত্ব বের করতে হবে। সূত্রটা মনে আছে নিশ্চয়ই। আরেকবার দেখে নেয়া যাকঃ

<center><img src="/uploads/distance-between-two-points.png" style=""></center>

উপরের এই সূত্র দ্বিমাত্রিক তলের জন্য প্রযোজ্য। কিন্তু যদি মাত্রার সংখ্যা n হয় , অর্থাৎ p(x1,x2,...,xn) এবং q(y1,y2,...,yn) যদি দুটি বিন্দু হয় তাহলের তাদের মধ্যাকার দূরত্ব বের করার সূত্র হলঃ

![](/uploads/RtnTY.jpg)

উপরের এই সূত্রকে বলা হয় Euclidean Distance। 
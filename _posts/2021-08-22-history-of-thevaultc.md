---
title: The History of theVaultC
titleshort: The History of theVaultC
author: Campbell
layout: blogpage
---

I've decided that it's probably a good idea for me to take a break from the rant-type articles and write something a little more fun. So here it is! The history of our project theVaultC, up through the day this article comes out.

### I. theVault (The C# One)

Before theVaultC, my equivalent project was theVault, which was written in C#. The only projects it had were GuessMyNumber, GraphicStuff, and helloWorld. GuessMyNumber and GraphicStuff in theVault are almost identical to the theVaultC versions. HelloWorld was not remade because I didn't think there was any reason to remake that, as it was written when I was actually new to C# console apps, and was actually a test. By the time I started on theVaultC, I was already past that point with C.

I finally decided to abandon theVault when I decided to slow down (so that I could eventually stop) my work on C# programs. I archived it on March 19, which was the same day I had set up a workflow on the theVaultC repo, getting it to the point where it was practical to have it as a full replacement. The programs in it at that point were equal to the ones in theVault.

### II. theVaultC

I decided to create theVaultC when I was learning C and wanted to create something to both test and show off my skill with C. I wanted to be able to replace theVault with it so I worked on creating versions of those programs in C. That is more or less all the history behind the program itself. In the next section I'm going to talk about the histories of each program in theVaultC.

### III. theVaultC's Programs

**GuessMyNumberC and GraphicStuffC**

I'm grouping these two together because they have the same history. As I've already mentioned, these were recreations of the theVault programs.

**PrintUnixTime**

PrintUnixTime was originally a quick test that I made when I was learning how to seed random numbers using `time(0)`. After learning how it worked, I constructed it to print the number of seconds since Unix time "began" (also known as the Unix Epoch\[1\]) on 1 January 1970. I made this example program that just read the value from `time(0)` and printed it as a cool way to check how many seconds it's currently at, and then decided to add to theVaultC.

**RNGTool**

RNGTool (also known as the theVaultC program that has a name that is way too cool for what it is) is a program that generates random numbers. It also lets you enter a maximum and minimum number that you'd like be generated. I only created it because I had been working on random number generation when optimizing GuessMyNumberC, and wanted to use it in another program just for fun.

**WordGenerator**

WordGenerator is a (from the outside) simple-seeming program, that was actually the hardest to make by far out of all the theVaultC programs. I needed quite a bit of help from [Garhoogin](https://github.com/Garhoogin) and [Jonatan6](https://github.com/Jonatan6), but in the end I got it done. It reads a list of words (conveniently located in a file named `words.txt`) and then picks a random selection of words from that list (the number of words it picks is random too!) and prints them. I don't quite remember when I first thought about this program, but it had been floating around for a while by the time that I finally got around to it.

I hope you found this little dive into the history of theVaultC interesting! Any questions? Feel free to [shoot us an email!](mailto:github@ncxprogramming.com)

- - -

**Sources**

1\. [Unix time](https://en.wikipedia.org/wiki/Unix_time) Wikipedia, retrieved on August 22, 2021
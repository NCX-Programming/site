---
title: Unsupported Mac Adventures
titleshort: Mac Adventures
author: Campbell
layout: blogpage
---

So as a fun way to document my work on my MacBooks, I thought I'd make a blog article out of them. Blog articles that are actually about our software will be coming soon.

### Part 1: My First Macbook

The first old Mac I had to work on was my parents old 2010 White Unibody MacBook (Model identifier `MacBook7,2`) with 4GB of RAM, a 500GB HDD and a 2.4GHz Core 2 Duo CPU. The title of this part has a double meaning of sorts. It was indeed the first MacBook I experimented with, but it was also the first MacBook I ever used (and also the first computer I really used) and is what really got me interested in computers, so it's pretty cool that I've now come back to it.

When I first pulled it out, all I knew about was [dosdude1's Mojave patcher](http://dosdude1.com/mojave/), so my intention was just to install Mojave and then tinker with that. The installation was relatively uneventful, other than the minor stress I had from doing a BootROM update (since an interruption could brick your Mac!). I only had to do that update because this Mac was still running the macOS (or more accurately, Mac OS X) version that it came with, 10.6 Snow Leopard, and so it never got the APFS support update that I needed for Mojave updates to work, otherwise I would have avoided it.

After a while, I wanted some programs (mostly just Xcode) that needed Catalina, so I decided to check the compatibility list for [dosdude1's Catalina patcher](http://dosdude1.com/catalina/)... Lo and behold, my Mac was on the list! So I immediately went and downloaded the patcher and began preparing my USB, making sure to get a backup first (I learned my lesson after one of my laptops' HDD failed). Attempting to upgrade failed, but luckily one fresh install and a restore later and I had Catalina up and running with all my files, and that was enough for me.. For about a month.

Mostly by chance, I went to check on the MacRumours [macOS 11 Big Sur on Unsupported Macs](https://forums.macrumors.com/threads/macos-11-big-sur-on-unsupported-macs-thread.2242172/) thread, and discovered that someone going by ASentientBot had added Graphical Acceleration back to older, non-metal GPUs, and mine was one of the ones it supported! So, like before, I made a backup and got to work getting my USB all set up. This time I was using [OpenCore Legacy Patcher](https://github.com/dortania/OpenCore-Legacy-Patcher) instead of an OS patcher like dosdude1's, which allowed system updates without having to re-patch the system (possibly excluding the GPU Acceleration patches, I never got a chance to test that). This process was a lot more of a headache than for Mojave and Catalina. My biggest issue was that once I had Big Sur installed, it would lock up on boot when the progress bar was about 1/3 of the way across. I eventually figured out that the NVRAM needed to be reset, and since then that Mac has been running Big Sur about as smoothly (or likely more so) than you'd expect for an 11 year old Mac. It's honestly quite impressive that such an old Mac can still run the latest macOS version without too much trouble.

So for now, that's all. At some point in the future (might be the next article, might not be) I'll continue this and will talk about my new(ish) MacBook Pro and the adventures I've had getting Big Sur running on that one.

Also, here's a fun fact: almost every article on this blog was written on that 2010 White MacBook!
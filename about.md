---
layout: page
title: About
permalink: /about/
---

15 and im a Goober and just do random stuff with code on this page since
<script>
    function updateTime2() {
    const now = new Date();
    const targetDate = new Date("2023-04-13T20:32:22");
    const diff1 = now.getTime() - targetDate.getTime();
    const days1 = Math.floor(diff1 / (1000 * 60 * 60 * 24));
    const hours1 = Math.floor((diff1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes1 = Math.floor((diff1 % (1000 * 60 * 60)) / (1000 * 60));
    const seconds1 = Math.floor((diff1 % (1000 * 60)) / 1000);
    document.getElementById("time2").textContent = `${days1} days, ${hours1} hours, ${minutes1} minutes, and ${seconds1} seconds.`;
    }
    setInterval(updateTime2, 1000);
</script>

### Contact me

[grapejellyjamandpenutbuter@gmail.com](grapejellyjamandpenutbuter@gmail.com)

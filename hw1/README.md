# HW1 Report
## Introduction
In this study, I measured the network latency to various locations (Istanbul, Ankara, Greece, Italy, France, UK, China, Japan, USA, Australia) for three days (Tuesday, Friday, and Saturday) at three different times (09:00, 15:00, 21:00). 

The goal was to see how the network latency changes over time and day. And also, to see if there is a pattern in the network latency.

## Methodology
For more accurate results, `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder` command was executed before each measurement to avoid any caching issues.

The requests are sent to the homepages of the universities in the determined locations. The response time is measured in milliseconds.

## Results
Charts below is showing the response time in milliseconds for each location at different times.

### 2024-10-08 Tuesday

```mermaid
xychart-beta
    title "2024-10-08 Tuesday 09.00 (UTC+3)"
    x-axis [Istanbul, Ankara, Greece, Italy, France, UK, China, Japan, USA, Australia]
    y-axis "Response Time (in ms)" 0 --> 1000
    bar [370, 78, 239, 150, 242, 152, 371, 220, 322, 549]
```
```mermaid
xychart-beta
    title "2024-10-08 Tuesday 15.00 (UTC+3)"
    x-axis [Istanbul, Ankara, Greece, Italy, France, UK, China, Japan, USA, Australia]
    y-axis "Response Time (in ms)" 0 --> 1000
    bar [78, 94, 134, 141, 108, 137, 901, 90, 109, 372]
```
```mermaid
xychart-beta
    title "2024-10-08 Tuesday 21.00 (UTC+3)"
    x-axis [Istanbul, Ankara, Greece, Italy, France, UK, China, Japan, USA, Australia]
    y-axis "Response Time (in ms)" 0 --> 1000
    bar [85, 75, 192, 438, 102, 170, 971, 655, 125, 347]
```

### 2024-10-09 Friday

```mermaid
xychart-beta
    title "2024-10-08 Friday 09.00 (UTC+3)"
    x-axis [Istanbul, Ankara, Greece, Italy, France, UK, China, Japan, USA, Australia]
    y-axis "Response Time (in ms)" 0 --> 1000
    bar [75, 41, 391, 389, 146, 189, 964, 386, 270, 785]
```
```mermaid
xychart-beta
    title "2024-10-08 Friday 15.00 (UTC+3)"
    x-axis [Istanbul, Ankara, Greece, Italy, France, UK, China, Japan, USA, Australia]
    y-axis "Response Time (in ms)" 0 --> 1000
    bar [77, 38, 120, 84, 71, 87, 383, 29, 34, 661]
```
```mermaid
xychart-beta
    title "2024-10-08 Friday 21.00 (UTC+3)"
    x-axis [Istanbul, Ankara, Greece, Italy, France, UK, China, Japan, USA, Australia]
    y-axis "Response Time (in ms)" 0 --> 1000
    bar [110, 55, 126, 223, 42, 221, 812, 309, 45, 707]
```

### 2024-10-09 Saturday

```mermaid
xychart-beta
    title "2024-10-08 Saturday 09.00 (UTC+3)"
    x-axis [Istanbul, Ankara, Greece, Italy, France, UK, China, Japan, USA, Australia]
    y-axis "Response Time (in ms)" 0 --> 1000
    bar [33, 25, 283, 72, 122, 73, 303, 18, 22, 305]
```
```mermaid
xychart-beta
    title "2024-10-08 Saturday 15.00 (UTC+3)"
    x-axis [Istanbul, Ankara, Greece, Italy, France, UK, China, Japan, USA, Australia]
    y-axis "Response Time (in ms)" 0 --> 1000
    bar [28, 45, 110, 527, 22, 67, 668, 541, 24, 297]
```
```mermaid
xychart-beta
    title "2024-10-08 Saturday 21.00 (UTC+3)"
    x-axis [Istanbul, Ankara, Greece, Italy, France, UK, China, Japan, USA, Australia]
    y-axis "Response Time (in ms)" 0 --> 1000
    bar [42, 38, 145, 189, 87, 112, 723, 298, 76, 415]
```

## Analysis

### Locations
- Local locations (Istanbul and Ankara) have the lowest response time.
- European locations (Greece, Italy, France, UK) have a moderate response time.
- Asian locations (China, Japan) have a high response time.
- Interestingly, the USA has a lower response time considering the distance.

### Times
- 09:00: Response times are generally lower, likely due to lower internet traffic in the morning.
- 15:00: Response times increase, possibly reflecting higher internet usage during work and school hours.
- 21:00: The highest response times are observed, likely due to peak internet usage in the evening for activities like streaming or gaming.

### Days
- Weekdays have a lower response time compared to weekends. This is expected since there is less traffic on weekdays.

## Conclusion
The study shows that network latency is affected by both distance and the time of day. Local destinations tend to have lower latency, while global destinations (especially those in Asia-Pacific) have significantly higher response times. Evening hours see higher latency due to peak internet usage.

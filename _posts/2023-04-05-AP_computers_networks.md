---
toc: true
comments: true
layout: post
title: Computers and Networks (Unit 4)
description: Add Definitions from Unit 4 Computer Systems and Networks
image: /images/apcsp.png
categories: []
type: ap
week: 29
---

## Requirements
> Work through College Board Unit 4... blog, add definitions, and pictures.  Be creative, for instance make a story of Computing and Networks that is related to your PBL experiences this year.

### How a Computer Works
> As we have learned, a computer needs aa program to do something smart.  The sequence of a program initiates a series of actions with the computers Central Processing Unit (CPU). This component is essentially a binary machine focussing on program instructions provided.  The CPU retrieives and stores the data it acts upon in Random Access Memory (RAM). Between the CPU, RAM, and Storage Devices a computer can work with many programs and large amounts of data.

List specification of your Computer, or Computers if working as Pair/Trio
- Processor GHz: 2.2 GHz
- Memory in GB: 16 GB
- Storage in GB: 251 GB
- OS: macOS Catalina

Define or describe usage of Computer using Computer Programs. Pictures are preferred over a lot of text.  Use your experience.
- Input devices
- Output devices
- Program File
- Program Code
- Processes
- Ports
- Data File
- Inspect Running Code
- Inspect Variables


![Computer Hardware]({{site.baseurl}}/images/cpu.jpeg)
![input devices](https://cdn.discordapp.com/attachments/1010052426490982461/1093277908660916274/input_device.jpg)
![output devices](https://cdn.discordapp.com/attachments/1010052426490982461/1093277908983873616/output-devices-icon-set-vector-260nw-1285103905.webp)



### The Internet
> Watch/review College Board Daily Video for 4.1.1

- Essential Knowledge
    - A computing device is a physical artifact that can run a program. Some examples include computers, tablets, servers, routers, and smart sensors.
    - A computing system is a group of computing devices and programs working together for a common purpose.
    - A computer network is a group of interconnected computing devices capable of sending or receiving data.
    - A computer network is a type of computing system. 
    - A path between two computing devices on a computer network (a sender and a receiver) is a sequence of directly connected computing devices that begins at the sender and ends at the receiver.
    - Routing is the process of finding a path from sender to receiver.
    - The bandwidth of a computer network is the maximum amount of data that can be sent in a fixed amount of time.
    - Bandwidth is usually measured in bits per second

- Complete Vocabulary Matching Activity.  Incorporate this into your learnings from year.  To analyze measure path and latency use `traceroute` and `ping` commands from Linux Terminal.  
    - Path 
    - Route
    - Computer System
    - Computer Device
    - Bandwidth
    - Computer Network

> Watch/review College Board Daily Video 4.1.2

- Essential Knowledge
    - The internet is a computer network consisting of interconnected networks that use standardized, open (nonproprierary) communication protocols.
    - Access to the internet depends on the ability to connect a computing device to an internet connected device.
    - A protocol is an agreed-upon set of rules that specify the behavior of a system.
    - The protocols used in the internet are open, which allows users to easily connect additional computing devices to the internet.
    - Routing on the internet is usually dynamic; it is not specified in advance
    - The scalability of a system is the capacity for the system to change in size and scale to meet new demands.
    - The internet was designed to be scalable
    - Information is passed through the internet as a data stream. Data streams contain chunks of data, which are encapsulated in packets. 
    - Packets contain a chunk of data and metadata used for routing the packet between the origin and the destination on the internet, as well as for data reassembly.
    - Packets may arrive at the destination in order, out of order, or not at all
    - IP, TCP and UDP are common protocols used on the internet.
    - The world wide web is a system of linked pages, programs, and files.
    - HTTP is a protocol used by the world wide web
    - The world wide web uses the internet

- Draw a diagram showing the internet and its many levels. A preferred diagram would use your knowledge of frontend, backend, deployment (GitHub Page, AWS, EC2, Docker, Nginx, Certbot, DNS, APIs).

- Complete True of False Questions

### Fault Tolerance
> Watch both Daily videos for 4.2

- Complete the network activity, summarize your understanding of fault tolerance.

#### My Attempt 

![myfaulttolerance](https://cdn.discordapp.com/attachments/1010052426490982461/1093317152196538468/IMG_1555.jpg)
### Parallel and Distributed Computing
> Review previous lecture on Parallel Computing and watch Daily vidoe 4.3.  Think of ways to make something in you team project to utilize Cores more effectively.  Here are some thoughts to add to your story of Computers and Networks...

- What is naturally Distributed in Frontend/Backend archeticture? 

The distribution of responsibilities is naturally divided between the frontend and backend. The frontend consists of the user interface, which includes the visual elements of the application that the user interacts with. The backend consists of the server-side components of the application, like the database, APIs, and business logic and manages and processes data. This distribution allows for the frontend and backend simplify development and improve maintainability. It  allows for flexibility in technologies used for each piece, as the frontend and backend can be developed independently and communicate through well-defined interfaces.

- Analyze this command in Docker: ```ENV GUNICORN_CMD_ARGS="--workers=1 --bind=0.0.0.0:8086"```.   Determine if there is options are options in this command for parallel computing within the server that runs python/gunicorn.  Here is an [article](https://medium.com/building-the-system/gunicorn-3-means-of-concurrency-efbb547674b7)


> Last week we discussed parallel computing on local machine.  There are many options.  Here is something to get parallel computing work with a tool called Ray.
- Review this [article](https://www.anyscale.com/blog/writing-your-first-distributed-python-application-with-ray)...  Can you get parallel code on images to work more effectively?  I have not tried Ray.

- Code example from ChatGPT using squares.  This might be more interesting if nums we generated to be a lot bigger.

```python
import ray

# define a simple function that takes a number and returns its square
def square(x):
    return x * x

# initialize Ray
ray.init()

# create a remote function that squares a list of numbers in parallel
@ray.remote
def square_list(nums):
    return [square(num) for num in nums]

# define a list of numbers to square
nums = [1, 2, 3, 4, 5]

# split the list into two parts
split_idx = len(nums) // 2
part1, part2 = nums[:split_idx], nums[split_idx:]

# call the remote function in parallel on the two parts
part1_result = square_list.remote(part1)
part2_result = square_list.remote(part2)

# get the results and combine them
result = ray.get(part1_result) + ray.get(part2_result)

# print the result
print(result)

```
## Completed Hacks 

### 4.1 Daily Video 1 
#### Notes
-  computers are capable of sending and receiving data 
- packet: small amount of data sent over a network. each packet also includes the source and the destination information
- computer system isa group of computing devices and programs working together for a joint purpose 
- computer network is a group of interconnected computing devices capable of sending or receiving data 
- packet switching: message (file) is backed into packets and sent in any order, packets are reassembled by the recipient’s device
- routing process of finding a path from sender to receiver 
- bandwidth: max amount of data that can be sent in a fixed amount of time on a computer network 
- measured by bits per second 
- path: sequence of directly connected computing devices that begins at the sender and ends at the receiver 
- route: process of finding a path from sender to receiver 
- computer network is a type of computing system
#### Vocabulary Matching Activity 
1. Path = A
2. Route = E
3. Computer System = B
4. Computer Device = C
5. Bandwidth = D
6. Computer Network = F

### 4.1 Daily Video 2
#### Notes
- protocol: agreed-upon set of rules that specify the behavior of a system 
- OSI: open systems interconnect, the layers you have to go through communicate seven groups of protocols 
- network access: data link, fiber, MAC, ethernet, NIC, wire 
- routers are special purpose computer with a MAC address 
- packets contain data that is being transmitted as well as metadata containing information used for routing information 
- internet was designer to be scalable able to change in size and scale to meet new demands 
- internet engineering task force (IEFT): 
#### True or False Questions 

<mark>T</mark> Open standards and protocols enable different manufacturers and develops to build hardware and software that can communicate with hardwire and software on the rest of the internet

<mark>F</mark> IETF is a task force used to enforce laws to keep manufacturers out of the internet 

<mark>F</mark> Routes are determined in advanced and are not flexible 

<mark>T</mark> A protocol is an agreed-upon set of rules that specify the behavior of a system. 

<mark>F</mark> UDP guarantees transfers and is faster. 

<mark>F</mark> The World Wide Web is the internet.

<mark>T</mark> HTTP is a protocol used by the World Wide Web. 

### 4.2 Daily Video 1
#### Notes
- My understanding of fault tolerance is that the internet has been engineered to be fault tolerant with abstractions for routing and transmitting data. Redundancy is inclusions of extra components that can used to mitigate failure of a system if other components fail. A way to accomplish network redundancy is by having one path between any 2 connected devices. Redundancy helps keep our interest reliable and accessible to thousands of people in the world. More connections can make the network better, but having one connection minimum is necessary. 

### Internet and Its Many Levels Diagram 

![diagram](https://cdn.discordapp.com/attachments/1010052426490982461/1095619808260804608/Screen_Shot_2023-04-12_at_12.55.44_AM.png)
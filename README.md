# 🚀 **Next.js CI Pipeline & Manual Deployment on AWS EC2 (Jenkins + Nginx)**

## 📌 Project Overview
### This project demonstrates an end-to-end CI pipeline and manual deployment workflow for a Next.js frontend application using Jenkins, AWS EC2, Nginx, and PM2.

## 🏗️ Architecture Flow
Local Development
        ↓
GitHub Repository
        ↓
Jenkins CI Pipeline
        ↓
Production Build (npm run build)
        ↓
Manual Deployment
        ↓
AWS EC2 (Nginx + PM2)



### 🚀 Features od Application
🎯 Hero Section with gradient text and responsive layout.

🧰 AI Tools Grid (Campaign Generator, Copy Creator, Analytics, etc.)

🎬 Interactive Product Demo section

💰 Pricing plans with responsive cards

📣 Call-To-Action (CTA) Banner

💬 FAQ section with Accordion

⭐ Testimonials

📞 **Footer with navigation links**


## The goal of this project is to showcase:

Real-world CI vs Production build practices

Secure manual deployment (not continuous deployment)

Cloud server provisioning and configuration

Production-ready frontend hosting

⚠️ Continuous Deployment is intentionally not enabled for security reasons.

## 🧰 Tech Stack & Tools
### 🔹 Frontend

Next.js – React-based frontend framework

Node.js – JavaScript runtime

### 🔹 CI/CD

**Jenkins** – Continuous Integration tool

npm audit – Dependency vulnerability scanning

### 🔹 Cloud & Server

**AWS EC2** Virtual Machine(Ubuntu 22.04, ap-south-1)

**Nginx** – Web server / Reverse proxy

**PM2** – Process manager for Node.js apps

🧠 Key Concepts (Definitions)
🔹 Jenkins

Jenkins is a CI tool used to automate:

Code checkout

Dependency installation

Security scanning

Production builds

🔹 Nginx

Nginx is a high-performance web server used to:

Serve static files

Act as a reverse proxy

Expose the application on port 80

🔹 PM2

### PM2 is a production-grade Node.js process manager used to: Keep the app running in the background Restart the app automatically if it crashes. Manage logs and application status

### Part1:- 🖥️ Local Development Setup
1️⃣ Clone the Repository
git clone (https://github.com/bhanuprakash515/ADmyBRAND-assignment.git)
cd ADmyBRAND-assignment

### 2️⃣ Install Dependencies
npm install

### 3️⃣ Run in Development Mode
npm run dev

### 🏗️ Production Build (Important)
npm run build
Creates a production-optimized build

Performs strict checks (imports, CSS paths, envs)

Used in Jenkins and production

### 🔄 Jenkins CI Pipeline (Manual Trigger)
Pipeline Stages

Checkout Code

Install Dependencies

Vulnerability Scan (npm audit)

Production Build (npm run build)

<img width="715" height="173" alt="image" src="https://github.com/user-attachments/assets/6ac5a766-bc03-47e7-8eb3-baa508608884" />

##🔹 Part 2: Jenkins CI Pipeline Setup

### 1️⃣ Jenkins Tools Configuration

Install NodeJS plugin

Configure Node.js 18.x in:

Manage Jenkins → Tools → NodeJS

 ## Build PipeLine
 
 The Jenkinsfile configured in repo
 
 Output:-
 
 <img width="1846" height="478" alt="image" src="https://github.com/user-attachments/assets/ed053838-aa54-437e-ba47-66655e32e69d" />


##🔹 Part 3: Manual Deploynment on AWS EC2 Instance on free Tier

1️⃣ Create EC2 Instance

Region: ap-south-1 (Mumbai)

AMI: Ubuntu 22.04 LTS

Instance Type: t2.micro (Free Tier)

Security Group:

SSH (22) → My IP

HTTP (80) → 0.0.0.0/0

<img width="841" height="181" alt="image" src="https://github.com/user-attachments/assets/dc88aa21-e6f2-4647-b994-45641be105e0" />

### 🔐 Connect to EC2 using Mobaxterm using pem file and the default name is ubuntu
### 🌐 Install & Configure Nginx
sudo apt update

sudo apt install nginx -y

sudo systemctl start nginx

sudo systemctl enable nginx

Verify in browser:

http://<EC2_PUBLIC_IP>

📂 Prepare Deployment Directory
sudo rm -rf /var/www/html/*
sudo chown -R ubuntu:ubuntu /var/www/html

### 📦 Deploy Next.js Application (Manual)

Clone the Reop using Git clone on Ec2 Server 

git clone (https://github.com/bhanuprakash515/ADmyBRAND-assignment.git)

cd ADmyBRAND-assignment

<img width="908" height="165" alt="image" src="https://github.com/user-attachments/assets/872670e1-c10c-42a7-bdcc-23d5909f9a65" />

Install the Dependencies and Build the Application using **npm run build**

** ⚙️ Install PM2 on EC2

sudo npm install -g pm2

<img width="683" height="567" alt="image" src="https://github.com/user-attachments/assets/e316e5ce-684e-4d67-86e7-acf9d25cd74a" />

## NOTE;- Pm2 is in **running state**

If the app is running 

### Configure the nginx to the listen on AWS public IP

<img width="726" height="650" alt="image" src="https://github.com/user-attachments/assets/f64cc6a3-80bd-4e11-990f-9582cc09e451" />

## After Configure Restart Nginx

<img width="643" height="434" alt="image" src="https://github.com/user-attachments/assets/1874000d-078f-4fdf-8071-d57a500c444c" />


# Project Output:-

<img width="1919" height="1037" alt="image" src="https://github.com/user-attachments/assets/5e482f78-928d-4bd2-81da-4b2a668f899e" />


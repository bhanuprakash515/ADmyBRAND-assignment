# 🚀 **Next.js CI Pipeline & Manual Deployment on AWS EC2 (Jenkins + Nginx)**

## 📌 Project Overview
### This project demonstrates an end-to-end CI pipeline and manual deployment workflow for a Next.js frontend application using Jenkins, AWS EC2, Nginx, and PM2.


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

PM2 is a production-grade Node.js process manager used to:

Keep the app running in the background

Restart the app automatically if it crashes

Manage logs and application status

🖥️ Local Development Setup
1️⃣ Clone the Repository
git clone <your-repo-url>
cd <project-folder>

2️⃣ Install Dependencies
npm install

3️⃣ Run in Development Mode
npm run dev


Used only for local development (hot reload, debugging)



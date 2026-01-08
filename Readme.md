# AWS Flask & Express Deployment Project

## 📌 Overview
This project demonstrates three different AWS deployment strategies for a Flask backend and Express frontend application.

## 🚀 Deployment Scenarios
1. Single EC2 Instance Deployment
2. Multi EC2 Instance Deployment
3. Containerized Deployment using Docker, ECR, ECS & ALB

## 🛠 Tech Stack
- Flask (Python)
- Express (Node.js)
- Docker
- AWS EC2
- AWS ECS (Fargate)
- AWS ECR
- Application Load Balancer
- VPC & Security Groups

## 🌐 Live URLs (Stopped after submission)
- ALB API Endpoint: `/api/data`

## 📂 Repository Structure
backend/
frontend/
docker/

css
Copy code

Live URLs (Before Stopping Instances)
## 🔗 Deployed Application URLs (Stopped after submission to avoid AWS cost)

- Task 1 (Single EC2): http://13.203.197.253:3000
- Task 2 (Separate EC2s):
  - Frontend: http://65.0.122.128:3000
  - Backend API: http://13.127.121.43:5000/api/data
- Task 3 (ECS + ALB):
  - Application Load Balancer URL:
    http://frontend-alb-935599827.ap-south-1.elb.amazonaws.com
  - API Endpoint:
    http://frontend-alb-935599827.ap-south-1.elb.amazonaws.com/api/data

    > Note: All AWS resources were stopped after successful verification to avoid additional AWS costs.




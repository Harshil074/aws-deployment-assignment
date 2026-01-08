# AWS Flask & Express Deployment Project

## 📌 Overview
This project demonstrates three different AWS deployment strategies for a Flask backend and Express frontend application.

## 🚀 Deployment Scenarios
1. Single EC2 Instance Deployment
2. Multi EC2 Instance Deployment
3. Containerized Deployment using Docker, ECR, ECS & ALB

---

## Task 1: Single EC2 Deployment
- Flask backend and Express frontend deployed on a single EC2 instance
- Nginx used as reverse proxy
- Backend runs on port 5000
- Frontend runs on port 3000

🔗 Deployed URL: http://13.203.197.253:3000

---

## Task 2: Separate EC2 Deployment
- Flask backend deployed on one EC2 instance
- Express frontend deployed on another EC2 instance
- Frontend communicates with backend using public IP

🔗 Frontend URL: http://65.0.122.128:3000 
🔗 Backend API: http://13.127.121.43:5000/api/data

---

## Task 3: Docker + ECS Deployment
- Flask backend and Express frontend containerized using Docker
- Images pushed to AWS ECR
- Deployed using ECS (awsvpc mode)
- Application Load Balancer with path-based routing
  - `/api/*` → Flask backend
  - `/` → Express frontend

🔗 ALB URL:  http://frontend-alb-935599827.ap-south-1.elb.amazonaws.com

🔗 API Endpoint:  http://frontend-alb-935599827.ap-south-1.elb.amazonaws.com/api/data

---

## AWS Services Used
- EC2
- Docker
- ECR
- ECS
- Application Load Balancer
- VPC
- Security Groups
- IAM

---

## Note
All EC2 instances and ECS services have been stopped after deployment to avoid unnecessary AWS costs.


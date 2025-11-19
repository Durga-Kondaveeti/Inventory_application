# 🧾 Inventory Application

The **Inventory Application** is designed to streamline stock management and pricing visibility while protecting sensitive business information. It provides on-demand access to stock quantities, retail prices, and net prices — while ensuring that confidential wholesale data is accessible only to authorized administrators.

---

## 📘 Overview

### The Problem
Currently, when customers call to inquire about an item, it is difficult to provide **accurate pricing and stock availability** in real time. Management relies heavily on a single person (Jagadesh) who holds critical data such as wholesale prices. This dependency creates bottlenecks and exposes sensitive business information to employees.

### The Goal
Build a secure, scalable system to:
- Display real-time **stock quantity, MSRP, net price, and wholesale price**
- **Restrict access** to sensitive information (e.g., wholesale cost)
- Enable quick, synchronized updates across all devices

---

## 💡 Proposed Solutions

### 1. Google Sheets (Temporary Solution)
- **Structure:** Two separate sheets  
  - **Admin Sheet:** Includes wholesale price and metadata  
  - **Employee Sheet:** Contains stock location, availability, and MSRP  
- **Pros:** Quick to deploy, easily synced across devices  
- **Cons:** Poor mobile interface and limited scalability

### 2. Web/Mobile Application (Permanent Solution)
- **Features:** Centralized backend providing real-time updates and security controls  
- **Pros:** Scalable, secure, allows future improvements and analytics  
- **Cons:** Requires backend development and hosting costs

---

## 🏗️ Application Design

### Access Levels
- **Admin Access**
  - Add new stock items  
  - Set prices and metadata  
- **Employee Access**
  - View available stock and sale prices  
  - (Pending decision) Edit stock quantity or location

### Backend Architecture
Hosted on **AWS**, the backend includes both server and database components.

**Server Options**
- AWS Lambda  
- AWS EC2  

**Database Options**
- Amazon RDS  
- DynamoDB (DDB)

> _Final selections for backend components are pending discussion._

---

## 🚀 Future Extensions

- **Sales History & Analytics**
  - Track purchases, sale prices, and timestamps
  - Generate total sales and performance reports
- **Customer Database**
  - Maintain records of buyers and their purchase history
- **Reusable Codebase**
  - Generalize application logic to sell as a product for similar business use cases

---

## 🧰 Tech Stack (Planned)
| Component | Technology |
|------------|-------------|
| Backend | AWS Lambda / EC2 |
| Database | RDS / DynamoDB |
| Frontend | React / React Native (planned) |
| Authentication | AWS Cognito / Firebase Auth |
| Hosting | AWS S3 / Amplify |
| Temporary Data Layer | Google Sheets |

---

## 🧑‍💻 Contributors
- **Durga** – Application Development  
- **Bala** – Backend Integration 

---

## 📅 Project Status
- ✅ Requirement Analysis Completed  
- 🔧 Backend Design Under Discussion  
- 📲 Google Sheets Solution Live (temporary)  
- 🚀 Web/Mobile App In Development  

---

## 📄 License
*(To be added later — MIT, Apache 2.0, etc.)*

---

## 🗂️ Next Steps
- Finalize backend stack (Lambda vs EC2, RDS vs DDB)  
- Define employee permissions  
- Implement secure data model for pricing  
- Migrate from Google Sheets to production-ready app  

---

> _This document will be updated as development progresses. Additional sections (e.g., setup instructions, API documentation, and deployment guide) will be added later._

# 🏟️ PMBet Clone - Full-Stack Sports Betting Platform

A high-performance, mobile-first online betting application inspired by **PMBet**. This project demonstrates a modern approach to sportsbooks, featuring real-time odds selection, dynamic bet slips, and secure wallet management.

## 🌟 Key Features
* **Dynamic Betting Engine:** Real-time stake and potential payout calculations.
* **Interactive Bet Slip:** Seamlessly add/remove odds with a persistent user state.
* **Secure Wallet System:** Full balance lifecycle—deposits, stakes, and automated winnings.
* **Modern Auth:** Robust user authentication using **JWT** and session management.
* **Mobile-First UI:** A sleek, dark-themed interface optimized for high-traffic mobile users using **Tailwind CSS**.

## 🛠 Tech Stack
| Layer | Technology |
| :--- | :--- |
| **Frontend** | [Next.js (App Router)](https://nextjs.org/), Tailwind CSS, Lucide Icons |
| **Backend** | [Node.js](https://nodejs.org/), Express, TypeScript |
| **Database** | [PostgreSQL](https://www.postgresql.org/) with Prisma ORM |
| **Authentication** | JSON Web Tokens (JWT) |

---

## 📂 Project Structure
* **`/client`**: Next.js frontend application (UI & State Management).
* **`/server`**: Express backend API (Business logic & Database queries).
* **`/shared`**: Shared TypeScript interfaces and utility constants.

## ⚙️ Quick Start

### 1. Database & Backend
```bash
cd server
npm install
# Update DATABASE_URL in .env
npx prisma migrate dev --name init
npx prisma db seed
npm run dev
```

### 2. Frontend
```bash
cd client
npm install
npm run dev
```

---

### 🛡️ Prerequisites
* **Node.js** (v18+)
* **PostgreSQL** instance (local or hosted)

> **Disclaimer:** This project is for educational purposes only. It is a functional clone designed to demonstrate full-stack development capabilities and does not involve real-world gambling transactions.

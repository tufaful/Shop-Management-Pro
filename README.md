# Shop Management Pro

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://tufaful.github.io/Shop-Management-Pro/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**Shop Management Pro** is a high-performance, offline-first, all-in-one Business Management and Point of Sale (POS) solution. Designed for maximum efficiency, speed, and reliability, it operates as a single standalone HTML web application powered by browser storage (IndexedDB), ensuring your business data remains 100% private, local, and fully accessible even without an active internet connection.

---

## 📑 Table of Contents
- [🚀 Live Demo](#-live-demo)
- [✨ Key Features](#-key-features)
- [🎯 Target Businesses](#-target-businesses)
- [🛠 Technical Stack & Architecture](#-technical-stack--architecture)
- [📥 Installation & Deployment](#-installation--deployment)
- [📱 Mobile App Support (APK & PWA)](#-mobile-app-support-apk--pwa)
- [📖 Keyboard Shortcuts](#-keyboard-shortcuts)
- [🤝 Contributing & Support](#-contributing--support)
- [🛠 Emergency Account Recovery](#-emergency-account-recovery)
- [🛡 License](#-license)

---

## 🚀 Live Demo
Launch and test the full application directly in any modern desktop or mobile browser:  
🔗 **[Launch Shop Management Pro](https://tufaful.github.io/Shop-Management-Pro/)**

---

## ✨ Key Features

### 🛒 Point of Sale (POS) & Fast Billing
- **Lightning Checkout:** Rapid product addition via barcode scanning or real-time search.
- **Product Filtering & Categories:** Instant category tabs and visual product grids.
- **Dedicated Hotkeys:** Streamlined cashier workflow with keyboard shortcuts (`F2`, `F4`, `F8`).
- **Flexible Split Payments:** Accept Cash, Bank Transfer, Mobile Financial Services (bKash, Nagad, Rocket), and partial/credit due.
- **Multi-Format Receipt Printing:** Professional thermal receipts (80mm, 58mm) as well as A4/A5 standard invoices with instant WhatsApp sharing.
- **Held Carts (Suspended Sales):** Put active customer carts on hold and resume them at any time.

### 📦 Inventory & Stock Control
- **Real-Time Tracking:** Instant automatic stock decrements and increment handling upon sales, purchases, or returns.
- **Low Stock Alerts:** Visual warning badges and filtered views for depleted items.
- **Product Variations & Units:** Full support for categories, brands, barcode numbers, and flexible measurement units (pcs, kg, liter, etc.).
- **Profit & Margin Analysis:** Track purchase costs versus selling prices with live gross profit calculations.

### 💰 Finance, Accounting & Multi-Account Banking
- **Multi-Account Ledgers:** Seamlessly link and monitor Cash Drawer, Bank Accounts, and Mobile Financial Service (MFS) wallets.
- **Automated Bookkeeping:** Instant dual-entry journal logs for all sales, purchases, supplier payments, customer collections, and operational expenses.
- **Financial Statements:** Daily cash closing reports, net profit/loss analysis, revenue breakdown, and date-range transaction ledgers.

### 👥 CRM & Customer / Supplier Ledgers
- **Customer Due & Credit Tracking:** Full history of purchases, payment collections, outstanding balances, and credit limits.
- **Supplier Procurement:** Track purchase orders, invoices, purchase returns, and supplier dues.
- **Money Receipts:** Print dedicated collection vouchers and supplier payment slips.

### 🔒 Security, Privacy & Data Preservation
- **100% Offline-First:** Operates independently without cloud dependencies; your data never leaves your device unless you export it.
- **Granular Access Control:** Protect sensitive financial data with Owner/Staff roles, PIN code, Pattern unlock, and Time-based Two-Factor Authentication (2FA).
- **Flexible Vault Backups:** Export plain JSON, modular selective backups, or military-grade AES encrypted snapshot files.
- **Emergency Account Recovery:** Challenge-response rescue protocol using the companion recovery tool to restore administrative access safely.

---

## 🎯 Target Businesses
Shop Management Pro is crafted to empower small, medium, and growing retail enterprises:
- **Grocery & Supermarkets:** High-volume barcode checkout and quick daily cash closing.
- **Pharmacies & Drugstores:** Medicine inventory, batch tracking, and fast prescription billing.
- **Electronics & Hardware Stores:** Brand categorization, serial/barcode management, and warranty memos.
- **Fashion, Clothing & Footwear:** Organized category layouts, sizes, and customer credit ledgers.
- **Departmental & Stationery Stores:** Extensive SKU handling with real-time stock alert thresholds.
- **Restaurants & Cafes:** Counter billing with held carts and split tender payment options.

---

## 🛠 Technical Stack & Architecture
- **Frontend Core:** Pure Vanilla TypeScript / JavaScript with reactive DOM state management.
- **Styling & Design System:** Tailwind CSS utility styling with comprehensive Dark & Light theme support.
- **Vector Icons:** Lucide SVG icon set embedded for standalone offline rendering.
- **Local Persistence Layer:** Browser-native IndexedDB engine with indexed query cursors.
- **Print Engine:** CSS print stylesheets optimized for standard printers and ESC/POS thermal printers (80mm / 58mm).
- **Distribution Model:** 100% self-contained Single Page Application (`index.html`).

---

## 📥 Installation & Deployment

Because Shop Management Pro is bundled as a standalone single-file application, no complicated server setup, database provisioning, or package installation is required.

### 1. Local Offline Usage
1. Download the `index.html` file from the repository.
2. Double-click to open it in any modern browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari, Brave, or Opera).
3. The app is ready to use immediately—no internet connection required.

### 2. Web Hosting & Deployment
- **GitHub Pages:** Fork or push the repository to GitHub, enable **GitHub Pages** under repository settings, and your POS is live globally in seconds.
- **Netlify / Vercel:** Simply drag and drop the project folder or point the build to `index.html`.
- **Local Area Network (LAN):** Host on an in-store server (using XAMPP, Nginx, Apache, or a lightweight Node.js server) to allow multiple staff devices/tablets on the local Wi-Fi network to connect.

---

## 📱 Mobile App Support (APK & PWA)

Shop Management Pro is fully responsive and touch-optimized for tablets, iPads, and smartphones:
- **Progressive Web App (PWA):** Open the application in mobile Chrome or Safari, tap **"Add to Home Screen"**, and launch it just like a native mobile app with full-screen viewport support.
- **Android APK Conversion:** Wrap the hosted link or local `index.html` file using tools such as **WebToApp**, **Website 2 APK Builder**, or **Capacitor** to compile a standalone installable Android APK file.

---

## 📖 Keyboard Shortcuts

Speed up daily counter billing and navigation with integrated hotkeys:

| Shortcut | Action | Description |
| :--- | :--- | :--- |
| **`F2`** | Product Search | Focus product catalog search input in POS |
| **`F4`** | Customer Selector | Open customer lookup and selection combobox |
| **`F8`** | Complete Sale | Trigger quick checkout / payment completion dialog |
| **`Ctrl + /`** | Global Search | Open unified global navigation and record finder |
| **`ESC`** | Close Modal | Dismiss any active dialog, popup, or preview sheet |

---

## 🤝 Contributing & Support
Contributions, feedback, and feature suggestions are warmly welcomed!
- Found a bug or need an improvement? Open an issue on the **[GitHub Issues](https://github.com/tufaful/Shop-Management-Pro/issues)** page.
- Have a feature branch ready? Submit a **Pull Request**.

---

## 🛠 Emergency Account Recovery

If the shop administrator ever forgets the PIN or loses access to their 2FA credentials, account access can be recovered securely without losing business records:

1. **Generate Challenge Code:** On the application lock screen, tap **Developer Rescue**. A unique random challenge code will be generated (e.g., `CHL-XXXX-XXXX`).
2. **Contact Support:** Send this challenge code to the software author via [Email](mailto:ambia.inbox@gmail.com) or [WhatsApp](https://wa.me/tufaful).
3. **Token Generation:** The author uses the companion **Developer Recovery Tool (`developer_recovery.html`)** to generate a single-use cryptographic **Rescue Token**.
4. **Regain Access:** Enter the received token into the prompt to reset your master credentials and restore your account immediately.

---

## 🛡 License
This project is open-source and distributed under the terms of the **[MIT License](LICENSE)**.

```
Copyright (c) 2026 Tufaful Ambia
```

---

Developed with ❤️ by **Tufaful Ambia**.

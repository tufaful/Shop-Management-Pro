# Shop Management Pro

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://tufaful.github.io/Shop-Management-Pro/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Offline-First](https://img.shields.io/badge/Offline--First-100%25-blue?style=for-the-badge)](#-technical-stack--architecture)
[![Bilingual](https://img.shields.io/badge/Bilingual-English%20%7C%20Bengali-orange?style=for-the-badge)](#-bilingual-localization-engine-english--bengali)

**Shop Management Pro** is a high-performance, offline-first, all-in-one Business Management and Point of Sale (POS) solution. Designed for maximum speed, operational efficiency, and strict data privacy, it runs as a 100% standalone single-file HTML web application powered by client-side browser storage (IndexedDB). Your business operations, product inventory, billing transactions, customer records, and financial accounting remain completely local, private, and fully functional without requiring an active internet connection.

---

## 📑 Table of Contents
- [🚀 Live Demo](#-live-demo)
- [✨ Key Features & Modules](#-key-features--modules)
  - [🛒 Point of Sale (POS) & Fast Billing](#-point-of-sale-pos--fast-billing)
  - [📷 Barcode & QR Code Engine](#-barcode--qr-code-engine)
  - [📦 Inventory, Stock & Batch Management](#-inventory-stock--batch-management)
  - [🚚 Challan Hub & Delivery Management](#-challan-hub--delivery-management)
  - [💰 Multi-Account Banking, Cash Ledger & Expenses](#-multi-account-banking-cash-ledger--expenses)
  - [👥 CRM, Customer Due Ledgers & Supplier Procurement](#-crm-customer-due-ledgers--supplier-procurement)
  - [💬 Instant WhatsApp Digital Receipts](#-instant-whatsapp-digital-receipts)
  - [♻️ Smart Recycle Bin & Data Recovery](#️-smart-recycle-bin--data-recovery)
  - [🔒 Security, Multi-Role Access & Vault Backup](#-security-multi-role-access--vault-backup)
  - [🌐 Bilingual Localization Engine (English & Bengali)](#-bilingual-localization-engine-english--bengali)
- [📋 Complete Module Directory (33+ Modules)](#-complete-module-directory-33-modules)
- [🎯 Target Industries & Retailers](#-target-industries--retailers)
- [🛠 Technical Stack & Architecture](#-technical-stack--architecture)
- [📥 Installation & Deployment](#-installation--deployment)
  - [1. Local Offline Usage](#1-local-offline-usage)
  - [2. Web Hosting & Cloud Deployment](#2-web-hosting--cloud-deployment)
  - [3. Local Area Network (LAN) Multi-Device Mode](#3-local-area-network-lan-multi-device-mode)
  - [4. Firebase Cloud Integration with Google AI Studio](#4-firebase-cloud-integration-with-google-ai-studio)
- [📱 Mobile App Support (APK & PWA)](#-mobile-app-support-apk--pwa)
- [📖 Keyboard Shortcuts Guide](#-keyboard-shortcuts-guide)
- [🛠 Emergency Account Recovery Protocol](#-emergency-account-recovery-protocol)
- [🤝 Contributing & Support](#-contributing--support)
- [🛡 License](#-license)

---

## 🚀 Live Demo
Launch and test the full application immediately in any modern desktop, tablet, or smartphone browser:  
🔗 **[Launch Shop Management Pro Live](https://tufaful.github.io/Shop-Management-Pro/)**

---

## ✨ Key Features & Modules

### 🛒 Point of Sale (POS) & Fast Billing
- **Lightning-Fast Checkout:** Rapid product addition via barcode scanning or real-time catalog search.
- **Visual Product Grid & Filter Tabs:** Filter items instantly by category with clear stock level indicators.
- **Cashier Hotkeys:** Seamless keyboard-driven counter operations (`F2`, `F4`, `F8`).
- **Flexible Split Payments:** Split tender across Cash, Bank Transfer, Mobile Financial Services (bKash, Nagad, Rocket), and partial/credit due.
- **Multi-Format Receipt Printing:** 
  - ESC/POS Thermal 80mm & 58mm receipts with auto-cutter alignment.
  - Standard A4 and A5 printable invoices and cash memos.
  - Customizable store logos, invoice headers, tax details, and embedded QR verification codes.
- **Held Carts (Suspended Sales):** Park active customer carts with custom notes and resume them at any time without losing selected items.
- **Sales Return & Refund Processing:** Process return vouchers that automatically restore stock counts and adjust financial accounts.

### 📷 Barcode & QR Code Engine
- **In-App Camera Scanner:** Integrated camera scanner powered by HTML5-QRCode with camera swap, torchlight toggle, and zoom slider support.
- **Hardware Scanner Compatibility:** 100% plug-and-play with all physical USB, Bluetooth, and 2.4G wireless laser barcode readers (instant input capture and auto-submission).
- **Barcode Sticker Generator:** Design and print custom barcode sheets and price tags with selectable grid layouts, shop branding, and prices on standard paper or thermal sticker rolls.

### 📦 Inventory, Stock & Batch Management
- **Real-Time Stock Auditing:** Automatic stock decrement upon sale and increment upon purchase or return.
- **Low Stock & Out-of-Stock Alerts:** Visual threshold badges and one-click filtering for depleted merchandise.
- **Expiry Date Tracking:** Proactive alert system highlighting expiring and expired batches, essential for pharmacies, grocery, and cosmetics shops.
- **Batches & Measurement Units:** Multi-unit support (Pieces, KG, Liter, Box, Packet, Dozen, etc.) with batch procurement costs.
- **Stock Movement Log:** Detailed chronological audit trail for adjustments, sales, purchases, and write-offs.

### 🚚 Challan Hub & Delivery Management
- **Official Delivery Challans:** Issue professional delivery notes linked directly to sales or procurement orders.
- **Gate Pass & Shipping Notes:** Print transport slips featuring driver names, vehicle numbers, itemized quantities, and recipient acknowledgment signature lines.
- **Challan Status Filtering:** Filter delivery notes by date range, payment method, customer, and fulfillment status.

### 💰 Multi-Account Banking, Cash Ledger & Expenses
- **Unified Multi-Account Engine:** Consolidate Cash Drawer, Bank Accounts, and Mobile Financial Service (MFS) balances in one intuitive screen.
- **Automated Dual-Entry Bookkeeping:** Real-time general ledger journals for revenues, payables, receivables, and overhead.
- **Daily Cash Closing:** Shift and evening cash drawer reconciliation with physical currency denomination counting, discrepancy calculation, and printable closing reports.
- **Capital Fund & Profit/Loss:** Track capital deposits/withdrawals, gross revenue, net margin, and comprehensive financial statements.
- **VAT & Tax Register:** Dedicated sales VAT tracking with exportable tax logs.

### 👥 CRM, Customer Due Ledgers & Supplier Procurement
- **Customer Due Ledger (Receivables):** Full transaction history, outstanding balances, credit limits, and collection slips.
- **Supplier Procurement & Payables:** Manage vendor directories, purchase invoices, payment vouchers, and return credits.
- **Collection & Payment Receipts:** Print dedicated money receipts with official signatures and terms.

### 💬 Instant WhatsApp Digital Receipts
- **1-Click Digital Receipts:** Format and send digital receipts and invoice links to customers via WhatsApp Web or mobile app without printing paper.
- **Account Statements via WhatsApp:** Send customer due summaries and payment vouchers directly to clients with a single click.

### ♻️ Smart Recycle Bin & Data Recovery
- **Accidental Deletion Protection:** Soft-delete engine that sends deleted products, customers, suppliers, invoices, and vouchers to the Recycle Bin.
- **One-Click Instant Restore:** Restore accidentally deleted records back into active operational stores with complete relational integrity.
- **Permanent Purge Option:** Permanently delete selected items or empty the entire bin when confirmed.

### 🔒 Security, Multi-Role Access & Vault Backup
- **Comprehensive Authentication:** Protect sensitive finances and settings with Master PIN, Gesture Pattern unlock, or Time-based Two-Factor Authentication (TOTP 2FA).
- **Multi-Role Privileges:** Granular permissions separating Owner and Staff access rights.
- **Vault Snapshot System:** Create instantaneous local state checkpoints to test bulk changes and rollback with zero risk.
- **Triple-Format Backup:** 
  1. Plain JSON Backup for manual audit.
  2. Modular Selective Export (export only Products, Sales, or Accounts).
  3. AES-256 Military-Grade Encrypted Backup protected by your custom passphrase.

### 🌐 Bilingual Localization Engine (English & Bengali)
- **Complete Bilingual Parity:** Every UI label, placeholder, report header, invoice template, and notification is fully localized in both **English 🇬🇧** and **Bengali (বাংলা) 🇧🇩**.
- **Instant Hotkey Switching:** Switch between English and Bengali instantly using the header button or the keyboard shortcut `Alt + L` without refreshing the page.

---

## 📋 Complete Module Directory (33+ Modules)

| Category | Included Modules |
| :--- | :--- |
| **Sales & Billing** | 🛒 POS Terminal · 🧾 Sales Invoices · ↩️ Sales Returns · 🚚 Challan Hub · ⏳ Held Carts |
| **Inventory & Stock** | 📦 Products Catalog · 📜 Stock History · 🏷️ Barcode Stickers · ⏰ Expiry Alerts · 📦 Batch Management · ⚖️ Measurement Units · 🗂️ Categories |
| **Procurement & Supply** | 📥 Purchases · 📤 Purchase Returns · 🏢 Supplier Directory · 📑 Supplier Ledgers |
| **Customers & Receivables** | 👥 Customer Directory · 📒 Customer Due Ledger · 💳 Due Collection Slips |
| **Accounts & Finance** | 💵 Cash Book · 🏦 Bank Accounts & Ledgers · 📉 Daily Cash Closing · 💸 Operational Expenses · 📈 Other Income · 🏛️ Capital Fund · 📊 VAT Ledger |
| **Intelligence & Reports** | 📈 Profit & Loss Statement · 📊 Inventory Valuation · 📋 Sales Trends & Financial Summaries · 🔍 Global Record Finder |
| **System & Administration** | 🛡️ Security & 2FA · ♻️ Recycle Bin · 💾 Backup & Encrypted Vault · ⚙️ System Settings |

---

## 🎯 Target Industries & Retailers
Shop Management Pro is engineered for small, medium, and growing retail enterprises:
- **Grocery & Supermarkets:** High-speed barcode checkout, weight-based selling, and fast daily cash closing.
- **Pharmacies & Drugstores:** Medicine inventory, batch tracking, expiry date alerts, and instant prescription billing.
- **Electronics & Hardware Stores:** Brand categorization, serial number tracking, and warranty receipts.
- **Fashion, Clothing & Footwear:** Organized category layouts, sizes, and customer credit management.
- **Departmental & Stationery Stores:** Extensive SKU catalogs with real-time stock alert thresholds.
- **Restaurants, Bakeries & Cafes:** Counter billing with held carts, table memos, and split payment methods.

---

## 🛠 Technical Stack & Architecture
- **Frontend Core:** Pure Vanilla TypeScript / JavaScript with reactive DOM state management.
- **Styling & Design System:** Modern utility styling with comprehensive Dark & Light theme support.
- **Vector Icons:** Embedded Lucide SVG vector icon set for standalone offline rendering.
- **Local Persistence Layer:** Browser-native IndexedDB engine with indexed query cursors.
- **Print Engine:** CSS print stylesheets optimized for standard laser/inkjet printers and ESC/POS thermal printers (80mm / 58mm).
- **Distribution Model:** 100% self-contained Single Page Application (`index.html`).

---

## 📥 Installation & Deployment

Because Shop Management Pro is bundled as a standalone single-file application, no complicated server configuration, database provisioning, or package installation is required.

### 1. Local Offline Usage
1. Download the `index.html` file from the repository.
2. Double-click to open it in any modern browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari, Brave, or Opera).
3. The app is ready to use immediately—no internet connection required.

### 2. Web Hosting & Cloud Deployment
- **GitHub Pages:** Fork or push the repository to GitHub, enable **GitHub Pages** under repository settings, and your POS is live globally in seconds.
- **Netlify / Vercel:** Simply drag and drop the project folder or point the build to `index.html`.

### 3. Local Area Network (LAN) Multi-Device Mode
Host `index.html` on a primary in-store desktop (using XAMPP, Nginx, Apache, or a lightweight Node.js/Python server) to allow multiple cash counters, tablets, and mobile devices connected to the store's local Wi-Fi router to access the system simultaneously.

### 4. Firebase Cloud Integration with Google AI Studio
If your business operates across multiple branches or requires real-time cloud synchronization, multi-device central databases, and cloud authentication, **Firebase (Firestore and Firebase Authentication)** can be easily integrated into this application.

- **Key Capabilities & Benefits:**
  - 🔄 **Real-Time Multi-Device Sync:** Instantly synchronize sales, purchases, and stock updates across multiple cash registers, branches, and warehouses.
  - 🌐 **Remote Central Management:** View live sales reports, inventory valuations, and cash balances from home or on the go.
  - 🛡️ **Automated Cloud Backup:** Safeguard your business records against hardware damage, loss, or disk failure with automated cloud persistence.
  - 👥 **Centralized Multi-User Access:** Secure cloud authentication with defined staff and manager roles.
- **Seamless Integration via Google AI Studio:**
  - Leveraging **Google AI Studio**, you can effortlessly provision Firebase Firestore databases, configure security rules, and wire authentication into the codebase without manual configuration hassles.

---

## 📱 Mobile App Support (APK & PWA)

Shop Management Pro is fully responsive and touch-optimized for tablets, iPads, and smartphones:
- **Progressive Web App (PWA):** Open the application in mobile Chrome or Safari, tap **"Add to Home Screen"**, and launch it just like a native mobile app with full-screen viewport support.
- **Android APK Conversion:** Wrap the hosted link or local `index.html` file using tools such as **WebToApp**, **Website 2 APK Builder**, or **Capacitor** to compile a standalone installable Android APK file.

---

## 📖 Keyboard Shortcuts Guide

Speed up daily counter billing and navigation with integrated hotkeys:

| Shortcut | Action | Description |
| :--- | :--- | :--- |
| **`F2`** | Product Search | Focus product catalog search input in POS |
| **`F4`** | Customer Selector | Open customer lookup and selection combobox |
| **`F8`** | Complete Sale | Trigger quick checkout / payment completion dialog |
| **`Alt + M`** | All Features | Open navigation drawer with all 33+ modules |
| **`Alt + L`** | Toggle Language | Switch instantly between English 🇬🇧 and Bengali 🇧🇩 |
| **`Ctrl + /`** | Global Search | Open unified global navigation and record finder |
| **`ESC`** | Close Modal | Dismiss any active dialog, popup, or preview sheet |

---

## 🛠 Emergency Account Recovery Protocol

If the shop administrator ever forgets the PIN or loses access to their 2FA credentials, account access can be recovered securely without losing business records:

1. **Generate Challenge Code:** On the application lock screen, tap **Developer Rescue**. A unique random challenge code will be generated (e.g., `CHL-XXXX-XXXX`).
2. **Contact Support:** Send this challenge code to the software author via [Email](mailto:ambia.inbox@gmail.com) or [WhatsApp](https://wa.me/tufaful).
3. **Token Generation:** The author uses the companion **Developer Recovery Tool (`developer_recovery.html`)** to generate a single-use cryptographic **Rescue Token**.
4. **Regain Access:** Enter the received token into the prompt to reset your master credentials and restore your account immediately.

---

## 🤝 Contributing & Support
Contributions, feedback, and feature suggestions are warmly welcomed!
- Found a bug or need an improvement? Open an issue on the **[GitHub Issues](https://github.com/tufaful/Shop-Management-Pro/issues)** page.
- Have a feature branch ready? Submit a **Pull Request**.

---

## 🛡 License
This project is open-source and distributed under the terms of the **[MIT License](LICENSE)**.

```
Copyright (c) 2026 Tufaful Ambia
```

---

Developed with ❤️ by **Tufaful Ambia**.

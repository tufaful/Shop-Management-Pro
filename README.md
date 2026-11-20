# Shop Management Pro 🛍️

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Netlify-00C7B7?style=for-the-badge&logo=netlify)](https://shopmanagementpro.netlify.app/)
[![GitHub Profile](https://img.shields.io/badge/Developer-Tufaful%20Ambia-blue?style=for-the-badge&logo=github)](https://github.com/tufaful)
[![Repository](https://img.shields.io/badge/GitHub-shop--management--pro-181717?style=for-the-badge&logo=github)](https://github.com/tufaful/shop-management-pro)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Offline-First](https://img.shields.io/badge/Offline--First-100%25-brightgreen?style=for-the-badge)](#-technical-stack--architecture)
[![Bilingual](https://img.shields.io/badge/Bilingual-English%20%7C%20Bengali-orange?style=for-the-badge)](#-technical-stack--architecture)

---

## 🌐 Live Web App

Experience the full-featured, offline-ready application directly in your browser:  
👉 **[https://shopmanagementpro.netlify.app/](https://shopmanagementpro.netlify.app/)**

---

## 📖 Introduction & Executive Overview

**Shop Management Pro** is a modern, enterprise-grade business management suite, Point of Sale (POS), and retail ERP engineered specifically for fast-paced retail counters, commercial trading houses, and growing enterprises.

Unlike conventional cloud-based point-of-sale software that charges recurring monthly subscriptions, requires constant high-speed internet connectivity, and stores sensitive customer and sales records on third-party servers, **Shop Management Pro runs 100% offline and locally inside your web browser**. Delivered as a **standalone, zero-dependency single-file web application (`index.html`)**, you can launch it instantly by double-clicking the file on any desktop, laptop, tablet, or smartphone.

### 🌟 Why Choose Shop Management Pro?

1. **Complete Data Sovereignty & 100% Privacy:**
   All your business records—sales history, purchase costs, profit margins, customer credit ledgers, and employee payroll—remain strictly inside your device’s local browser database (IndexedDB). No data is ever transmitted to external servers.

2. **Zero Recurring Fees or Subscriptions:**
   Own your software outright with zero ongoing licensing fees, no per-transaction charges, and no user limits.

3. **Lightning-Fast Counter Performance:**
   Engineered with in-memory store caching and tokenized search indexing, product lookups, barcode scans, and view switches execute in less than a millisecond with zero lag or buffering.

4. **Resilient Offline Architecture:**
   Operates seamlessly during internet outages, network blackouts, or remote counter setups. Never miss a customer checkout due to a server failure.

5. **Built-in Bilingual Support:**
   Full native support for both **English 🇬🇧** and **Bengali (বাংলা) 🇧🇩** with one-click real-time language toggling.

### 🎯 Who is it Built For?

Shop Management Pro is designed to handle the daily operations of diverse business formats:

- **Supermarkets & Grocery Stores:** High-speed barcode scanning, batch expiry tracking, and instant weigh-scale pricing.
- **Pharmacies & Healthcare Retail:** Drug batch numbers, near-expiry alerts, and supplier procurement tracking.
- **Fashion & Apparel Boutiques:** Multi-unit inventory, barcode sticker printing, customer loyalty points, and combo packs.
- **Electronics & Hardware Stores:** Serialized warranty claim tracking, repair center stages, and EMI installment billing.
- **Wholesale & Distribution Traders:** Multi-account banking (Bank/Cash/MFS), customer credit ledgers, and delivery partner COD reconciliation.

---

## 📑 Table of Contents

- [🌐 Live Web App](#-live-web-app)
- [📖 Introduction & Executive Overview](#-introduction--executive-overview)
- [🚀 Quick Links](#-quick-links)
- [✨ Core Enterprise Highlights](#-core-enterprise-highlights)
  - [🛒 Point of Sale (POS) & Billing](#-point-of-sale-pos--billing)
  - [📊 Enterprise Reports Hub (12 Sub-Tabs)](#-enterprise-reports-hub-12-sub-tabs)
  - [📦 Advanced Inventory, Batches & Expiry](#-advanced-inventory-batches--expiry)
  - [🚚 Courier Partners & COD Reconciliation](#-courier-partners--cod-reconciliation)
  - [🏦 Multi-Account Financial Ledger (Bank, Cash & MFS)](#-multi-account-financial-ledger-bank-cash--mfs)
  - [👔 HR, Staff Payroll & Leave Register](#-hr-staff-payroll--leave-register)
  - [🛡️ Warranty Claims & Repair Center](#️-warranty-claims--repair-center)
  - [🎁 Combo Product Bundles & Loyalty Points](#-combo-product-bundles--loyalty-points)
  - [⚠️ Damage & Inventory Loss Write-Offs](#️-damage--inventory-loss-write-offs)
  - [🏢 Fixed Assets & Net Book Valuation](#-fixed-assets--net-book-valuation)
  - [🏛️ Govt Sales Tax & VAT Ledger](#️-govt-sales-tax--vat-ledger)
  - [🔒 Security, Master PIN & Encrypted Vault](#-security-master-pin--encrypted-vault)
- [📋 Complete Module Directory (35+ Modules)](#-complete-module-directory-35-modules)
- [🛠 Technical Stack & Architecture](#-technical-stack--architecture)
- [🖨️ Multi-Format Thermal & Invoice Print Engine](#️-multi-format-thermal--invoice-print-engine)
- [📥 Installation & Deployment](#-installation--deployment)
- [📱 Mobile App Support (PWA & Android APK)](#-mobile-app-support-pwa--android-apk)
- [⌨️ Keyboard Shortcuts Guide](#️-keyboard-shortcuts-guide)
- [🤝 Developer Contact & Support](#-developer-contact--support)
- [🛡 License](#-license)

---

## 🚀 Quick Links

| Resource | URL |
| :--- | :--- |
| **Live Web App** | [https://shopmanagementpro.netlify.app/](https://shopmanagementpro.netlify.app/) |
| **GitHub Repository** | [https://github.com/tufaful/shop-management-pro](https://github.com/tufaful/shop-management-pro) |
| **Developer Profile** | [https://github.com/tufaful](https://github.com/tufaful) |
| **Support Email** | [tufaful.inbox@gmail.com](mailto:tufaful.inbox@gmail.com) |
| **WhatsApp Support** | [https://wa.me/tufaful](https://wa.me/tufaful) |

---

## ✨ Core Enterprise Highlights

### 🛒 Point of Sale (POS) & Billing
- **Ultra-Fast Checkout:** Instant lookup via hardware barcode scanner, built-in device camera scanner, or fuzzy in-memory search.
- **Dynamic Category Bar:** Filter items by category with visual stock indicators, low-stock warnings, and out-of-stock guards.
- **Cashier Hotkeys:** Keyboard-driven sales workflow (`F2` search, `F4` customer lookup, `F8` checkout modal, `ESC` close).
- **Split Tenders & Flexible Payment:** Accept Cash, Bank Transfer, Mobile Banking (bKash, Nagad, Rocket, Upay), or Partial/Credit Due.
- **Held Carts (Suspended Sales):** Park multiple customer carts with custom timestamps and notes; resume or discard them anytime with one click.
- **Live Customer Combobox Sync:** Automatically calculates customer outstanding balance, overdue alerts, and lifetime purchasing history during checkout.
- **EMI & Installment Configurator:** Configure flexible installment plans for high-value sales with custom down-payments and monthly installments.

### 📊 Enterprise Reports Hub (12 Sub-Tabs)
1. **Overview & Executive P&L:** Real-time Gross Sales Revenue, COGS, Operating Expenses, Net Profit, and Gross Margin %.
2. **Sales Invoices Report:** Filter sales invoices by date range, cashier, payment method, or fulfillment status.
3. **Purchases & Vendor Ledger:** Track procurement invoices, supplier payment histories, and outstanding accounts payable.
4. **Operating Expenses & Other Income:** Log store operational overheads (rent, utilities, packaging) and secondary income streams.
5. **Customer Dues & Receivables:** Track outstanding balances with a 1-click automated WhatsApp payment reminder generator.
6. **Product Performance Analytics:** Analyze sales volume, gross profit per SKU, and stock turnover velocity.
7. **Category & Brand Breakdown:** Comparative revenue and margin performance across product categories and brands.
8. **Courier & COD Analytics:** Monitor shipment volume, delivered parcels, collected COD funds, and courier shipping fees.
9. **Fixed Assets Valuation:** Real-time asset register, initial purchase costs, depreciation schedules, and net book valuations.
10. **Damage & Loss Write-Offs:** Incident logs, damaged inventory write-offs, and total financial losses.
11. **HR, Staff Payroll & Leaves:** Monthly staff base salary allocations, payout vouchers, and employee leave records.
12. **Govt Sales Tax & VAT Ledger:** Sales tax collections, input VAT credits, and official treasury deposit challans.
- **Date Filters & CSV Export:** Filter by predefined ranges (Today, Yesterday, Last 7 Days, This Month, Last Month, This Year, Custom) and export clean CSV reports with 1-click.

### 📦 Advanced Inventory, Batches & Expiry
- **Multi-Unit SKU Management:** Track products with customized measurement units (Pcs, Kg, Ltr, Box, Pack, Dozen, etc.).
- **Batch Numbers & Expiry Alerts:** Manage inventory batches, track expiry dates, receive near-expiry warning alerts, and enforce low-stock thresholds.
- **Barcode Sticker Print Studio:** Generate and print custom barcode sticky labels in multi-column grid layouts with prices, barcodes, and shop names.
- **Smart Stock Reorder:** Automatically calculates suggested reorder quantities based on historical sales velocity.

### 🚚 Courier Partners & COD Reconciliation
- **Courier Directory:** Pre-configured for major delivery partners (Steadfast, Pathao, RedX, Paperfly, Sundarban, SA Paribahan, etc.).
- **Parcel Shipment Tracking:** Link sales invoices to tracking numbers and parcel delivery states (Pending, In-Transit, Delivered, Returned).
- **COD Fund Reconciliation:** Track Cash-On-Delivery collected funds against pending courier disbursements and return shipping adjustments.

### 🏦 Multi-Account Financial Ledger (Bank, Cash & MFS)
- **Triple-Tender Cash Flow:** Manage Physical Cash Drawer, Commercial Bank Accounts, and Mobile Financial Services (bKash, Nagad, Rocket, Upay).
- **Deposits, Withdrawals & Transfers:** Record inter-account fund transfers, bank deposits, cash withdrawals, and MFS fee deductions.
- **Daily Cash Closing Register:** Record opening balance, actual counted cash, system expected cash, variance, and closing audit remarks.

### 👔 HR, Staff Payroll & Leave Register
- **Employee Directory:** Manage staff profiles, designations, base salaries, contact details, and joining dates.
- **Salary Disbursement Engine:** Process monthly payroll payments with printable salary vouchers and automated cash book entries.
- **Staff Leave Register:** Record casual, sick, and annual leave requests with approval status tracking.

### 🛡️ Warranty Claims & Repair Center
- **Warranty Ticket System:** Log customer warranty claims with serial numbers, issue descriptions, and claim dates.
- **Lifecycle Tracking:** Track repair stages (Received, Under Inspection, Sent to Vendor, Repaired, Replaced, Delivered).
- **Automated Customer Alerts:** Generate SMS and WhatsApp notification templates for warranty claim status updates.

### 🎁 Combo Product Bundles & Loyalty Points
- **Combo Product Kits:** Create bundled product packages (e.g., Grocery Combo, Gift Pack) that automatically deduct individual component inventory upon sale.
- **Customer Loyalty Points:** Award reward points based on purchase amounts, track balances, and redeem points for instant discounts during checkout.

### ⚠️ Damage & Inventory Loss Write-Offs
- **Inventory Write-Off Log:** Record broken, expired, or spoiled merchandise with reason codes and cost assessments.
- **Automated Stock Deduction:** Instantly deducts damaged quantities from live stock while recording net financial losses in the P&L statement.

### 🏢 Fixed Assets & Net Book Valuation
- **Asset Registration:** Record store machinery, computers, barcode scanners, POS hardware, electricals, and furniture.
- **Depreciation Schedules:** Track initial acquisition costs, accumulated depreciation, and real-time net book values.

### 🏛️ Govt Sales Tax & VAT Ledger
- **Automated VAT Sync:** Synchronizes invoice sales tax and calculates net tax payable.
- **Treasury Deposit Vouchers:** Log government tax authority treasury deposits with challan numbers and dates.

### 🔒 Security, Master PIN & Encrypted Vault
- **Master PIN Security:** Restrict access to administrative configurations, financial reports, settings, and deletion operations with a master PIN.
- **Financial Lock Date:** Prevent historical transaction tampering, editing, or deletion prior to a set accounting lock date.
- **Triple Backup Vault:**
  1. **Plain JSON Backup:** Human-readable full database backup.
  2. **Encrypted AES-256 Vault:** Password-protected encrypted snapshot for secure offsite archival.
  3. **Modular CSV Exports:** Export individual database tables (Products, Sales, Customers, Expenses) to spreadsheet format.
- **Recycle Bin & Data Recovery:** Soft-delete safeguard allowing easy restoration of accidentally deleted records.

---

## 📋 Complete Module Directory (35+ Modules)

| Category | Included Features & Pages |
| :--- | :--- |
| **Sales & POS** | 🛒 POS Terminal · 🧾 Sales Invoices · ↩️ Sales Returns · 📑 Quotations / Proforma Invoices · 🚚 Delivery Hub · ⏳ Held Carts · 📅 EMI Installments |
| **Inventory & Stock** | 📦 Product Catalog · 📜 Stock History · 🏷️ Barcode Sticky Labels · ⏰ Expiry Alerts · ⚖️ Measurement Units · 📂 Categories & Brands · 📦 Batches & Expiry · 🔄 Smart Reorder |
| **Procurement** | 📥 Purchase Orders & Invoices · 📤 Purchase Returns · 🏢 Supplier Directory · 📑 Supplier Ledgers |
| **Customers & Dues** | 👥 Customer Directory · 📒 Customer Due Ledgers · 💬 1-Click WhatsApp Reminders · 💳 Collection Slips · 🌟 Loyalty Points |
| **Finance & Accounts** | 💵 Cash Book · 🏦 Bank & MFS Accounts (bKash/Nagad/Rocket/Upay) · 📉 Daily Cash Closing · 💸 Overhead Expenses · 💰 Other Income · 🏛️ VAT Ledger · 💼 Capital Account · 🔁 Recurring Payments |
| **Enterprise Ops** | 🚚 Courier & COD Tracking · 🏢 Fixed Assets Valuation · ⚠️ Damage Write-offs · 👔 HR & Payroll · 🏖️ Staff Leaves · 🛡️ Warranty Center · 🎁 Combo Packs |
| **Reports & Analytics** | 📊 12-Subtab Reports Hub · 📈 Profit & Loss Statement · 🏷️ Inventory Valuation · 🔍 Stock Audit & Reconciliation |
| **Security & System** | 🔒 Master PIN Lock · 🔒 Financial Lock Date · ♻️ Recycle Bin · 💾 Encrypted Vault Backup & Restore · ⚙️ Shop Settings & Printer Config |

---

## 🛠 Technical Stack & Architecture

- **Runtime Architecture:** Pure Vanilla TypeScript / JavaScript with reactive DOM rendering (Zero external frontend frameworks).
- **Styling Engine:** Responsive utility styling with built-in Dark & Light themes, mobile touch optimization, and fluid viewport scaling.
- **Persistence Layer:** Client-side IndexedDB database engine providing sub-millisecond offline read/write operations with LocalStorage safety fallback.
- **Data Caching & Indexing:** In-memory store cache with write-through mutation sync and tokenized search indexing for instant 0ms barcode and text lookups.
- **Localization Engine:** Native English 🇬🇧 and Bengali (বাংলা) 🇧🇩 translation switcher with real-time UI re-rendering.
- **Distribution Model:** Standalone Single-File Application (`index.html`). No Node.js runtime or backend server required for end users.

---

## 🖨️ Multi-Format Thermal & Invoice Print Engine

Shop Management Pro features a built-in multi-format print engine with live print preview:

- **ESC/POS Thermal Receipts:** Optimized for 80mm and 58mm thermal receipt printers with receipt auto-cutter alignment.
- **Standard Commercial Invoices:** Printable A4 and A5 invoice layouts for formal commercial billing.
- **Barcode Sticker Sheets:** Customizable multi-column printable barcode stickers.
- **Ledger & Closing Reports:** Dedicated print sheets for Customer Ledgers, Supplier Ledgers, Daily Cash Closings, and Bank Statements.

---

## 📥 Installation & Deployment

### 1. Live Web Version (Instant Access)
Open the deployed web application at **[https://shopmanagementpro.netlify.app/](https://shopmanagementpro.netlify.app/)** in any modern desktop or mobile browser.

### 2. Direct Local Offline Usage (Easiest)
1. Download or clone `index.html` from this repository.
2. Double-click `index.html` to open it in any web browser (Chrome, Edge, Firefox, Safari, Brave).
3. The application is immediately ready for offline business operations—no internet or local server needed.

### 3. Static Web Hosting
Deploy `index.html` to any static web hosting provider:
- **Netlify:** Drag and drop the directory containing `index.html` into Netlify (as configured on [shopmanagementpro.netlify.app](https://shopmanagementpro.netlify.app/)).
- **GitHub Pages:** Enable GitHub Pages in repository settings pointing to the root branch containing `index.html`.
- **Vercel:** Connect the repository or run `vercel deploy` for instant edge hosting.

---

## 📱 Mobile App Support (PWA & Android APK)

- **Progressive Web App (PWA):** Open [https://shopmanagementpro.netlify.app/](https://shopmanagementpro.netlify.app/) in a mobile browser (Chrome/Safari) and tap **"Add to Home Screen"** to install it as a standalone app with offline icon launching.
- **Android APK:** Wrap `index.html` using Capacitor, WebView, or WebToApp builder to build an installable Android `.apk` file for touch POS terminals and handheld devices.

---

## ⌨️ Keyboard Shortcuts Guide

| Shortcut | Action | Operational Description |
| :--- | :--- | :--- |
| **`F2`** | POS Search | Focus product search box in POS terminal |
| **`F4`** | Customer Lookup | Focus customer selector combobox |
| **`F8`** | Quick Checkout | Trigger POS checkout modal |
| **`Alt + M`** | Navigation Menu | Open feature navigation drawer |
| **`Alt + L`** | Toggle Language | Switch between English 🇬🇧 and Bengali (বাংলা) 🇧🇩 |
| **`ESC`** | Close Modal | Dismiss any active modal dialog or print preview |

---

## 🤝 Developer Contact & Support

- **Developer:** Tufaful Ambia
- **Live Demo:** [https://shopmanagementpro.netlify.app/](https://shopmanagementpro.netlify.app/)
- **GitHub Profile:** [https://github.com/tufaful](https://github.com/tufaful)
- **Repository:** [https://github.com/tufaful/shop-management-pro](https://github.com/tufaful/shop-management-pro)
- **Support Email:** [tufaful.inbox@gmail.com](mailto:tufaful.inbox@gmail.com)
- **WhatsApp Support:** [https://wa.me/tufaful](https://wa.me/tufaful)

---

## 🛡 License

Distributed under the **[MIT License](LICENSE)**.

```text
Copyright (c) 2026 Tufaful Ambia
```

Developed with ❤️ by **Tufaful Ambia**.

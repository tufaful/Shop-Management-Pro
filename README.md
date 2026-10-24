# Shop Management Pro (শপ ম্যানেজমেন্ট প্রো)

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://tufaful.github.io/Shop-Management-Pro/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**Shop Management Pro** is a professional, offline-first, all-in-one Business Management and POS solution. Designed for efficiency and reliability, it operates as a single standalone HTML file using browser storage (IndexedDB), ensuring your data stays local and accessible even without internet.

---

## 📑 Table of Contents
- [🚀 Live Demo](#-live-demo)
- [✨ Key Features](#-key-features)
- [🎯 Target Businesses](#-target-businesses)
- [🛠 Technical Stack](#-technical-stack)
- [📥 Installation Guide](#-installation-guide)
- [📖 Usage & Shortcuts](#-usage--shortcuts)
- [🤝 Contributing & Support](#-contributing--support)
- [🛠 Account Recovery](#-lost-pin-or-2fa-account-recovery)
- [🛡 License](#-license)

---

## 🚀 Live Demo
Access the full application directly in your browser:  
🔗 **[Launch Shop Management Pro](https://tufaful.github.io/Shop-Management-Pro/)**

## ✨ Key Features

### 🛒 Point of Sale (POS) & Billing
- **Fast Checkout:** Optimized billing interface with barcode scanning support.
- **Hotkeys:** Specialized keys for quick actions (F2, F4, F8).
- **Flexible Payments:** Support for Cash, Bank, MFS (bKash/Nagad), and Split payments.
- **Thermal Printing:** Professional receipts in 80mm, 58mm, A4, and A5 formats.

### 📦 Inventory & Stock
- **Smart Tracking:** Real-time stock updates with automated low-stock alerts.
- **Categorization:** Organize products by category and brand.
- **Profit Analysis:** Track purchase vs. sales prices for margin calculation.

### 💰 Finance & CRM
- **Multi-Account:** Manage Cash, Bank, and Mobile Wallets in one place.
- **Auto-Ledgers:** Automated logs for every sale, purchase, and expense.
- **CRM:** Customer and Supplier ledgers with due tracking and credit limits.

### 🔒 Security & Data
- **Offline-First:** All data stored locally in IndexedDB.
- **Safe Backups:** Export data as JSON, encrypted files, or modular snapshots.
- **Access Control:** Secure with PIN, Pattern locks, and 2FA.
- **Emergency Account Recovery:** Never get locked out of your data with our built-in challenge-response mechanism.

## 🎯 Target Businesses
This software is designed to cater to various retail and service-based industries:
- **Grocery & Super Shops:** Fast POS for high-volume daily sales.
- **Pharmacies:** Manage medicine inventory and billing.
- **Electronics & Hardware:** Track specific brands and stock variations.
- **Fashion & Boutiques:** Organize by style and category.
- **Restaurants & Cafes:** Simple billing for small to medium food joints.
- **Any Retail Store:** Perfect for any business needing a reliable, offline-first system.

## 🛠 Technical Stack
- **Frontend:** Vanilla TypeScript, Tailwind CSS (Styling).
- **Icons:** Lucide Icons (SVG).
- **Database:** IndexedDB (Local persistence).
- **Architecture:** Single-file standalone application (SPA).
- **Print Engine:** Custom CSS-based thermal/document generator.

## 📥 Installation Guide
Since this is a standalone project, no complex installation is required.
1. Download the `index.html` file from the latest release.
2. Open it in any modern browser (Chrome, Edge, Firefox).
3. **Hosting & Deployment:**
   - **GitHub Pages:** Free and highly recommended for hosting this standalone tool.
   - **Netlify / Vercel:** Easy "drag-and-drop" deployment for immediate use.
   - **Local Web Server:** Can be hosted on local networks using XAMPP, WAMP, or simple Node.js servers.
4. **Mobile App Support (APK):**
   - You can convert this web application into an Android APK using tools like **WebToApp**, **Website 2 APK Builder**, or by using browser **PWA** (Install to Home Screen) features for a native app-like experience.

## 📖 Usage & Shortcuts
| Key | Action |
| :--- | :--- |
| **F2** | Product Search |
| **F4** | Customer Search |
| **F8** | Complete Sale |
| **Ctrl + /** | Global Search |
| **ESC** | Close Modal |

## 🤝 Contributing & Support
Contributions are welcome! If you find a bug or have a feature request:
1. Open an **[Issue](https://github.com/tufaful/Shop-Management-Pro/issues)**.
2. Fork the repository and submit a **Pull Request**.
3. Join the discussion for new features.

### 🛠 Lost PIN or 2FA? (Account Recovery)
If you are locked out of your account, follow these simple steps:

1.  **Generate Challenge:** On the app's lock screen, click on **Developer Rescue**. You will see a unique **Challenge Code** (e.g., `CHL-XXXX-XXXX`).
2.  **Contact Support:** Send this code to the developer via [Email](mailto:ambia.inbox@gmail.com) or [WhatsApp](https://wa.me/tufaful).
3.  **Token Generation:** The developer will use the official **Developer Recovery Tool (`developer_recovery.html`)** to generate a secure **Rescue Token** for you.
4.  **Regain Access:** Enter the provided token into your app to reset your security credentials and log in instantly.


## 🛡 License
Distributed under the **MIT License**. See `LICENSE` for more information.

---
---

# শপ ম্যানেজমেন্ট প্রো (বাংলা)

**শপ ম্যানেজমেন্ট প্রো** একটি পেশাদার, অফলাইন-ফার্স্ট এবং অল-ইন-ওয়ান বিজনেস ম্যানেজমেন্ট ও পিওএস (POS) সলিউশন। এটি একটি স্ট্যান্ডঅ্যালোন এইচটিএমএল (HTML) ফাইল হিসেবে কাজ করে এবং ব্রাউজার স্টোরেজ (IndexedDB) ব্যবহার করে আপনার তথ্য নিরাপদ রাখে।

---

## 📑 সূচিপত্র
- [🚀 লাইভ ডেমো](#-লাইভ-ডেমো)
- [✨ মূল বৈশিষ্ট্যসমূহ](#-মূল-বৈশিষ্ট্যসমূহ)
- [🎯 উপযোগী ব্যবসা](#-উপযোগী-ব্যবসা)
- [🛠 টেকনিক্যাল স্ট্যাক](#-টেকনিক্যাল-স্ট্যাক)
- [📥 ইনস্টলেশন গাইড](#-ইনস্টলেশন-গাইড)
- [📖 শর্টকাট সমূহ](#-শর্টকাট-সমূহ)
- [🤝 কন্ট্রিবিউশন ও সাপোর্ট](#-কন্ট্রিবিউশন-ও-সাপোর্ট)
- [🛠 অ্যাকাউন্ট রিকভারি](#-পিন-বা-২এফএ-2fa-ভুলে-গেছেন-অ্যাকাউন্ট-রিকভারি)
- [🛡 লাইসেন্স](#-লাইসেন্স)

---

## 🚀 লাইভ ডেমো
সরাসরি ব্রাউজারে অ্যাপটি ব্যবহার করতে নিচের লিংকে ক্লিক করুন:  
🔗 **[শপ ম্যানেজমেন্ট প্রো ওপেন করুন](https://tufaful.github.io/Shop-Management-Pro/)**

## ✨ মূল বৈশিষ্ট্যসমূহ

### 🛒 পয়েন্ট অফ সেল (POS) এবং বিলিং
- **দ্রুত চেকআউট:** বারকোড স্ক্যানিং সাপোর্ট সহ অপ্টিমাইজড বিলিং ইন্টারফেস।
- **শর্টকাট কী:** দ্রুত কাজের জন্য বিশেষ শর্টকাট (F2, F4, F8)।
- **ফ্লেক্সিবল পেমেন্ট:** নগদ, ব্যাংক, বিকাশ/নগদ এবং স্প্লিট পেমেন্ট সাপোর্ট।
- **থার্মাল প্রিন্টিং:** ৮০মিমি, ৫৮মিমি, A4 এবং A5 ফরম্যাটে রশিদ প্রিন্ট।

### 📦 ইনভেন্টরি এবং স্টক
- **স্মার্ট ট্র্যাকিং:** অটোমেটেড লো-স্টক অ্যালার্ট সহ রিয়েল-টাইম স্টক আপডেট।
- **ক্যাটাগরি:** ক্যাটাগরি এবং ব্র্যান্ড অনুযায়ী প্রোডাক্ট সাজানো।
- **লাভ বিশ্লেষণ:** নির্ভুল মার্জিন গণনার জন্য ক্রয় মূল্য বনাম বিক্রয় মূল্য ট্র্যাক করা।

### 💰 ফিন্যান্স এবং সিআরএম (CRM)
- **মাল্টি-অ্যাকাউন্ট:** নগদ, ব্যাংক এবং মোবাইল ওয়ালেট এক জায়গায় ম্যানেজ করুন।
- **অটো-লেজার:** প্রতিটি লেনদেনের জন্য অটোমেটেড ট্রানজ্যাকশন লগ।
- **CRM:** কাস্টমার এবং সাপ্লায়ার লেজার সহ বকেয়া ট্র্যাকিং।

### 🔒 সিকিউরিটি এবং ডাটা
- **অফলাইন-ফার্স্ট:** সমস্ত ডাটা ব্রাউজারের IndexedDB-তে জমা থাকে।
- **নিরাপদ ব্যাকআপ:** JSON, এনক্রিপ্টেড ফাইল বা স্ন্যাপশট হিসেবে ডাটা এক্সপোর্ট।
- **অ্যাক্সেস কন্ট্রোল:** পিন (PIN), প্যাটার্ন লক এবং ২এফএ (2FA) সিকিউরিটি।
- **ইমার্জেন্সি অ্যাকাউন্ট রিকভারি:** চ্যালেঞ্জ-রেসপন্স মেকানিজমের মাধ্যমে আপনার ডাটা সব সময় সুরক্ষিত এবং পুনরুদ্ধারযোগ্য।

## 🎯 উপযোগী ব্যবসা
এই সফটওয়্যারটি নিচের ব্যবসাগুলোর কথা মাথায় রেখে তৈরি করা হয়েছে:
- **মুদি ও সুপার শপ:** প্রতিদিনের প্রচুর বিক্রি দ্রুত বিল করার জন্য আদর্শ।
- **ফার্মেসী:** ওষুধের ইনভেন্টরি এবং বিলিং ম্যানেজমেন্ট।
- **ইলেকট্রনিক্স ও হার্ডওয়্যার:** নির্দিষ্ট ব্র্যান্ড ও স্টকের হিসাব রাখা।
- **ফ্যাশন ও গার্মেন্টস:** ক্যাটাগরি অনুযায়ী প্রোডাক্ট সাজানো।
- **রেস্টুরেন্ট ও ক্যাফে:** ছোট ও মাঝারি খাবারের দোকানের বিলিং সলিউশন।
- **যেকোনো খুচরা দোকান:** যেখানেই নির্ভুল এবং অফলাইন সিস্টেম প্রয়োজন।

## 🛠 টেকনিক্যাল স্ট্যাক
- **ফ্রন্টএন্ড:** ভ্যানিলা টাইপস্ক্রিপ্ট, টেলউইন্ড সিএসএস।
- **আইকন:** লুসাইড আইকন (SVG)।
- **ডাটাবেজ:** ইনডেক্সড-ডিবি (IndexedDB)।
- **আর্কিটেকচার:** স্ট্যান্ডঅ্যালোন সিঙ্গেল-ফাইল অ্যাপ্লিকেশন (SPA)।
- **প্রিন্ট ইঞ্জিন:** কাস্টম সিএসএস-ভিত্তিক ডকুমেন্ট জেনারেটর।

## 📥 ইনস্টলেশন গাইড
১. লেটেস্ট রিলিজ থেকে `index.html` ফাইলটি ডাউনলোড করুন।
২. যেকোনো মডার্ন ব্রাউজারে (Chrome, Edge, Firefox) ফাইলটি ওপেন করুন।
৩. **হোস্টিং ও ডেপ্লয়মেন্ট:**
   - **GitHub Pages:** এটি ফ্রিতে হোস্ট করার জন্য সবচেয়ে জনপ্রিয় মাধ্যম।
   - **Netlify / Vercel:** খুব সহজেই ফাইল আপলোড করে অনলাইনে লাইভ করা যায়।
   - **লোকাল সার্ভার:** XAMPP বা লোকাল আইপি ব্যবহার করে দোকানের ভেতরে নেটওয়ার্ক তৈরি করা সম্ভব।
৪. **মোবাইল অ্যাপ সাপোর্ট (APK):**
   - আপনি **WebToApp**, **Website 2 APK Builder** বা এই ধরণের টুল ব্যবহার করে এই ওয়েবসাইটটিকে একটি অ্যান্ড্রয়েড অ্যাপ (APK) হিসেবে ব্যবহার করতে পারবেন। এছাড়া ব্রাউজারের **PWA** (Add to Home Screen) ফিচার ব্যবহার করেও এটি অ্যাপের মতো চালানো যায়।

## 📖 শর্টকাট সমূহ
| শর্টকাট | কাজ |
| :--- | :--- |
| **F2** | প্রোডাক্ট সার্চ |
| **F4** | কাস্টমার সার্চ |
| **F8** | বিক্রয় সম্পন্ন করুন |
| **Ctrl + /** | গ্লোবাল সার্চ |
| **ESC** | উইন্ডো বন্ধ করুন |

## 🤝 কন্ট্রিবিউশন ও সাপোর্ট
যেকোনো ধরনের বাগ রিপোর্ট বা ফিচারের জন্য:
১. একটি **[Issue](https://github.com/tufaful/Shop-Management-Pro/issues)** খুলুন।
২. রিপোজিটরি ফর্ক করুন এবং **Pull Request** পাঠান।

### 🛠 পিন বা ২এফএ (2FA) ভুলে গেছেন? (অ্যাকাউন্ট রিকভারি)
আপনি যদি আপনার অ্যাকাউন্টে প্রবেশ করতে না পারেন, তবে নিচের সহজ ধাপগুলো অনুসরণ করুন:

১. **চ্যালেঞ্জ কোড তৈরি:** অ্যাপের লক স্ক্রিনে গিয়ে **'ডেভেলপার রেসকিউ'** বাটনে ক্লিক করুন। আপনি একটি ইউনিক **চ্যালেঞ্জ কোড** দেখতে পাবেন (যেমন: `CHL-XXXX-XXXX`) ।
২. **যোগাযোগ করুন:** এই কোডটি ডেভেলপারকে [ইমেইল](mailto:ambia.inbox@gmail.com) বা [হোয়াটসঅ্যাপের](https://wa.me/tufaful) মাধ্যমে পাঠান।
৩. **টোকেন তৈরি:** ডেভেলপার তার অফিশিয়াল **ডেভেলপার রিকভারি টুল (`developer_recovery.html`)** ব্যবহার করে আপনার জন্য একটি ওয়ান-টাইম **রেসকিউ টোকেন** তৈরি করবেন।
৪. **অ্যাক্সেস পুনরুদ্ধার:** প্রাপ্ত টোকেনটি আপনার অ্যাপে দিলেই সিকিউরিটি রিসেট হয়ে যাবে এবং আপনি সাথে সাথে অ্যাকাউন্টে প্রবেশ করতে পারবেন।


## 🛡 লাইসেন্স
এটি **MIT লাইসেন্স** এর অধীনে প্রকাশিত।

---

Developed with ❤️ by **Tufaful**.  
তৈরি করেছেন **তুফাফুল**।

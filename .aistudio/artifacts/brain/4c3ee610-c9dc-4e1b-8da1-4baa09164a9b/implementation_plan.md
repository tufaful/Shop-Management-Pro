# Prevent Direct Stock Tampering in Product Edit & Enforce Inventory Audit Trail

This plan resolves the inventory accounting loophole where editing a product allows direct stock modifications without recording transaction entries, ledger trails, or stock movement logs.

### User Review & Critical Decisions

> [!IMPORTANT]
> The following user preferences were confirmed during clarification:
> - **Edit Mode Display**: In the Edit Product modal, the current stock field will be **read-only** with a clear locked indicator and an inline button to open the official **Stock Adjustment (স্টক সমন্বয়)** voucher.
> - **New Product Creation**: When adding a new product, users can still input the initial opening stock, which is automatically recorded in the stock ledger with an `Opening Stock` movement log.
> - **Backend Data Integrity**: The save handler will strictly preserve the existing stock balance from the database during edits, completely ignoring any forged or modified form stock values.

---

### 1. Overview & Core Concept

- **What It Does**: Locks the "Current Stock" input during product editing, preventing arbitrary changes that bypass purchase, sale, damage, or adjustment vouchers. Provides a one-click shortcut directly into the official `Stock Adjustment` modal for legitimate manual corrections.
- **Target Audience**: Store owners, retail managers, and inventory operators who require airtight accounting integrity and audit trails.
- **Key Value**: Guarantees that every single unit added or deducted from product inventory is accounted for by an auditable transaction (Purchase, Sale, Return, Damage, or Stock Adjustment Voucher).

---

### 2. User Experience & Visual Design

#### A. Edit Product Modal (`App.openAddProductModal(productId)`)
- **Current Stock Field (Read-Only Mode)**:
  - Input attribute: `readonly` with subtle locked background (`background: var(--bg-surface-alt); cursor: not-allowed; opacity: 0.95;`).
  - Field label: Displays a lock icon `🔒` alongside the label `${isBn ? 'বর্তমান মজুদ (লকড):' : 'Current Stock (Locked):'}`.
  - Quick Action & Explanatory Banner:
    ```html
    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:5px; font-size:11.5px;">
      <span style="color:var(--text-muted);">
        ${isBn ? 'স্টক পরিবর্তন করতে স্টক সমন্বয় ব্যবহার করুন' : 'Use Stock Adjustment to change quantity'}
      </span>
      <button type="button" class="btn btn-xs btn-outline" onclick="App.openStockAdjustmentModal('${p.id}')" style="font-weight:700;">
        ⚖️ ${isBn ? 'স্টক সমন্বয়' : 'Adjust Stock'}
      </button>
    </div>
    ```

#### B. Add New Product Modal (`App.openAddProductModal()`)
- **Initial Stock Field (Active Mode)**:
  - Input attribute: Editable number input.
  - Field label: `${isBn ? 'প্রাথমিক মজুদ (Opening Stock):' : 'Initial Stock (Opening Stock):'}`.
  - Helper note: Explains that this initial quantity will be registered into the ledger as the opening stock balance with automatic movement logging.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Preserve Database Stock during Edit in `saveProductForm`**:
  - *Chosen Approach*: When updating an existing product (`existingId` exists), set `product.currentStock = existingProd ? (existingProd.currentStock ?? 0) : 0`.
  - *Why*: Even if someone inspects the DOM or attempts to inject values into the form, the database stock cannot be altered through product editing.
  - *Alternatives Considered*: Allowing admins to override. Rejected because direct database edits without a voucher destroy ledger reconciliation.

- **Decision 2: Direct Transition to Stock Adjustment Modal**:
  - *Chosen Approach*: Provide a clean button next to the locked stock input that immediately opens `App.openStockAdjustmentModal(productId)`.
  - *Why*: Delivers an effortless, guided workflow without requiring the user to navigate out to Inventory/Settings or locate the product in a separate screen.

---

### 4. Technical Architecture & Data Strategy

```
┌──────────────────────────────────────────────────────────────┐
│                    Product Modal Flow                        │
└──────────────────────────────────────────────────────────────┘
                               │
               Is existingId present?
              /                      \
            YES                      NO
            /                          \
   [Edit Product Mode]            [Add Product Mode]
   • Current Stock is READ-ONLY   • Initial Stock is EDITABLE
   • Shows 🔒 Lock badge          • Saves product to DB
   • Shows [⚖️ Stock Adjustment]   • Calls recordStockMovement(
     shortcut button                'Opening Stock', qty, ...)
   • Preserves existing stock
     in saveProductForm()
```

#### Affected Functions in `/index.html`:
1. `openAddProductModal(productId = null)`:
   - Branch UI based on `p ? ... : ...`.
   - Set `readonly` on `#prodStock` when `p` exists.
   - Attach bilingual guidance and `App.openStockAdjustmentModal('${p.id}')` button.
2. `saveProductForm(existingId)`:
   - When `existingId` is present, retrieve `existingProd` and lock `product.currentStock = existingProd.currentStock`.
   - Retain existing opening stock logging behavior for new products (`!existingId`).

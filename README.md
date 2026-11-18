# LUMI — Less, but Luxurious.
### Fine Minimalist Jewellery E-Commerce Experience

LUMI is a full-featured, luxury minimalist jewellery e-commerce platform built with **React**, **Vite**, **Tailwind CSS**, and **Lucide React**. Designed to embody quiet luxury, intentional restraint, and international atelier standards.

---

## Brand Aesthetic & Philosophy
- **Brand Tagline**: *Less, but Luxurious.*
- **Palette**: Ivory (`#FFFDF9`), warm cream (`#FAF8F5`, `#F5F2EB`), champagne gold (`#C5A880`, `#D4BA88`, `#B89758`), and rich espresso brown (`#2D241E`).
- **Typography**: Editorial serif headings (*Cormorant Garamond* / *Playfair Display*) paired with crisp modern sans-serif body text (*Plus Jakarta Sans*).
- **Aesthetic Direction**: High-end Scandinavian and French atelier influence, micro-transitions, generous white space, and editorial photography.

---

## Features & Functionality

### 1. Sticky Navigation & Header
- LUMI logo with atelier subtitle.
- Direct category routing: **Home**, **Shop**, **Rings**, **Necklaces**, **Bracelets**, **Earrings**, and **About**.
- Interactive **Live Search Modal** with dynamic keyword filtering.
- **Wishlist Drawer** with real-time badge count.
- **Shopping Bag Slide-Over Drawer** with quantity controls, free shipping meter, and promo code engine.
- Responsive mobile drawer menu.

### 2. Homepage (8 Curated Editorial Sections)
1. **Hero Banner**: "Elegance in Every Detail." with "Explore Collection" & "Shop Now" CTAs.
2. **Shop by Category**: 4 visual cards for Rings, Necklaces & Chains, Bracelets, and Earrings.
3. **New Arrivals**: The latest releases with quick add and wishlist toggle.
4. **Best Sellers**: Verified patron favorites with review metrics.
5. **Trending Jewellery**: Editorial lookbook showcasing seasonal pairings.
6. **Our Story**: The atelier manifesto on 100% recycled metals and ethical gemstones.
7. **Customer Reviews**: Verified customer feedback, star ratings, and trust badges.
8. **Newsletter Subscription**: Interactive sign-up revealing promo code `LUMI10` with confetti celebration.
9. **Instagram Gallery**: `@lumi.atelier` shoppable lifestyle gallery.

### 3. Complete 40-Piece Jewellery Catalogue (in INR ₹)
All 40 distinct jewellery pieces across 4 categories:
- **Rings (10)**: Minimal Gold Ring, Silver Band Ring, Pearl Ring, Adjustable Ring, Heart Ring, Stackable Ring, Twist Ring, Diamond-inspired Ring, Open Ring, Floral Ring.
- **Necklaces & Chains (10)**: Classic Gold Chain, Pearl Necklace, Heart Pendant Necklace, Layered Necklace, Minimal Pendant, Butterfly Necklace, Snake Chain, Initial Necklace, Clover Necklace, Dainty Gold Chain.
- **Bracelets (10)**: Gold Chain Bracelet, Pearl Bracelet, Tennis Bracelet, Charm Bracelet, Minimal Cuff, Heart Bracelet, Silver Bracelet, Adjustable Bracelet, Beaded Bracelet, Layered Bracelet.
- **Earrings (10)**: Gold Hoop Earrings, Pearl Studs, Minimal Stud Earrings, Drop Earrings, Heart Earrings, Butterfly Earrings, Huggie Earrings, Floral Earrings, Gold Dangle Earrings, Silver Hoops.

### 4. Interactive Shopping Bag (Cart)
- Add to bag with custom size selection.
- Increment/decrement quantity or remove items.
- Dynamic subtotal, GST, and shipping fee calculation.
- **Free Insured Shipping Progress Bar** (unlocked above ₹2,999).
- Promo code validation (`LUMI10` for 10% off, `FIRSTLUX` for ₹500 off).
- **LocalStorage Persistence**: Bag contents persist across sessions.
- Illustrated empty bag state.

### 5. Wishlist
- Heart-toggle on every product card, quick view, and details page.
- Slide-over drawer to review saved treasures.
- One-click **"Move to Bag"** function.
- **LocalStorage Persistence**: Wishlist persists across sessions.

### 6. Dynamic Live Search
- Search by product name, category, or material (e.g., "Pearl", "Moissanite", "18K Gold").
- Instant dynamic results as you type.
- Category filter chips and friendly no-results suggestion state.

### 7. Product Detail Page
- High-resolution gallery with thumbnail switcher.
- Pricing in INR, original price, and savings badge.
- Detailed material specifications (metal, weight, dimensions, hypoallergenic assurance).
- Ring size & chain length selector.
- Quantity selector & Add to Bag animation.
- Atelier Care & Preservation Guide.
- Related products recommendation row.

### 8. Demo Checkout Experience
- Clearly marked **DEMO CHECKOUT / TEST MODE**.
- Customer contact form, address, city, state dropdown, PIN code.
- Courier method selection (Standard Insured vs Priority Express).
- Demo payment selection (UPI, Credit/Debit Card, Net Banking, Cash on Delivery).
- Order summary with item thumbnails.
- Order confirmation screen with generated order number (e.g. `#LUMI-849201`), delivery estimate, and printable receipt.

---

## Tech Stack
- **React 18** (Functional components, custom hooks, Context API)
- **Vite 6** (Blazing fast build and HMR)
- **Tailwind CSS 3** (Custom luxury color tokens, typography, and shadow systems)
- **Lucide React** (Consistent minimal icon set)
- **Canvas-Confetti** (Order celebration micro-interactions)
- **LocalStorage API** (Persistent state for Cart and Wishlist)

---

## Running the Application
```bash
# Start Development Server
npm run dev

# Build for Production
npm run build
```
The server is currently running at `http://localhost:5173/`.

---
sidebar_position: 2
title: User Flow
---

# User Flow

The flow below maps the full journey, from opening the app to placing an order.

## Flow at a Glance

```text
Splash
  └── Login or Sign up
        ├── Mobile number ──► OTP Verification ──┐
        ├── Email icon ─────► Email Login ───────┤
        └── Google icon ────► Google Account ────┘
                                                 ▼
                                               Home
                          ┌──────────────────────┼──────────────────────┐
                          ▼                      ▼                      ▼
                   Product Detail            Wishlist                Profile
                    │         │                  │
             Add to bag    Buy Now          Move to Bag
                    ▼         │                  ▼
                   Bag ───────┼─────────────────► Bag
                    │         │
                    └─ Place order ─► Checkout ◄─┘
                                         ▼
                                   Order Placed
```

## Screen-to-Screen Transitions

| From | Action | To |
|---|---|---|
| Splash | Automatic | Login or Sign up |
| Login or Sign up | Enter mobile number and tap Continue | OTP Verification |
| Login or Sign up | Tap Email icon | Email Login |
| Login or Sign up | Tap Google icon | Google Account Chooser |
| OTP, Email Login or Google | Verify, Login or Continue | Home |
| Home | Tap a product | Product Detail |
| Product Detail | Add to bag | Bag |
| Product Detail | Buy Now | Checkout |
| Wishlist | Move to Bag | Bag |
| Bag | Place order | Checkout |
| Checkout | Place order | Order Placed |

## Flow Explanation

1. **Entry:** The splash screen leads to the Login screen.
2. **Authentication:** Users can sign in with a mobile OTP, email and password, or a Google account.
3. **Discovery:** The Home screen offers search, categories and curated sections to find products quickly.
4. **Decision:** The Product Detail screen supports size, color and delivery checks. Users can add the item to the bag or buy immediately.
5. **Save for later:** Items in the Wishlist can be moved to the bag at any time.
6. **Purchase:** The Bag leads to Checkout, where the user selects a payment method and places the order.

## Navigation

A four-tab bottom navigation (**Home, Wishlist, Bag and Profile**) lets users reach any primary screen in a single tap.


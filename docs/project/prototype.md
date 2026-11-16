---
sidebar_position: 6
title: Prototype
---

# Interactive Prototype

A clickable prototype of the e-commerce mobile app, built in Figma. It connects all screens with real interactions so the full user journey can be tested.

[Open Figma File](https://www.figma.com/design/GF4jfDlW3p7lztv7w1uAwm/figma-learning?node-id=559-5482&t=FvQpJZToJu4PSSmN-1)

## Live Prototype

[▶ Open Interactive Prototype](PROTO_LINK)

## Screens Covered

1. Login (mobile number)
2. OTP verification
3. Email login
4. Google account chooser
5. Home
6. Wishlist
7. Product detail
8. Bag
9. Profile

## Interactions

| From | Action | To |
|---|---|---|
| Login | Tap Continue | OTP |
| Login | Tap Google icon | Google Login |
| Login | Tap Email icon | Email Login |
| OTP / Email Login / Google Login | Verify / Login / Continue | Home |
| Home | Tap product card | Product Detail |
| Wishlist | Tap product card or Move to Bag | Product Detail / Bag |
| Product Detail | Add to bag / Buy Now | Bag |
| Bag | Place order | Order Success (to be added) |
| Bottom nav | Tap tab | Home / Wishlist / Bag / Profile |
| Profile | Logout | Login |
| Any back arrow | Tap | Previous screen |

## Prototype Settings

- Device: mobile, 390 × 844
- Transition: Smart animate, 300 ms, ease-out
- Starting point: Login
- Back arrow: Navigate back
- Bottom navigation: reusable component with active-state variants

## Design Decisions

- A single orange-brown primary colour for all main actions keeps the interface consistent.
- Three login options (mobile OTP, Google, email) reduce sign-up friction.
- A persistent bottom navigation gives quick access to Home, Wishlist, Bag and Profile.
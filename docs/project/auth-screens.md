---
sidebar_position: 3
title: Authentication Screens
---

# Authentication Screens (01–05)

The login experience is designed to be **fast and low-friction**. Users can sign in with a mobile OTP, an email account or Google.

## 01 · Splash Screen

| Wireframe | Final UI |
|---|---|
| <img src="/img/wireframes/01-splash.png" width="250" /> |<img src="/img/wireframes/01-splash.png" width="250" /> |

**Purpose:** Present the brand while the app loads.
**Key elements:** Centered logo on a clean background.
**Design rationale:** A minimal splash loads quickly and keeps attention on the brand.

---

## 02 · Login or Sign up

| Wireframe | Final UI |
|---|---|
| <img src="/img/wireframes/02-login.png" width="250" /> | <img src="/img/final-ui/02-login.png" width="250" /> |

**Purpose:** Let users sign in or register with a mobile number.

**Key elements:**
- Mobile number field with the `+91` country code
- Terms and Privacy Policy consent line
- Continue button, disabled until a valid number is entered
- Social sign-in options for Google, Facebook and Email
- Need Help link

**Design rationale:** OTP login is the most familiar pattern for Indian users. The disabled button prevents invalid submissions, and the social options give an alternative path without competing with the primary action.

---

## 03 · OTP Verification

| Wireframe | Final UI |
|---|---|
| <img src="/img/wireframes/03-otp.png" width="250" /> | <img src="/img/final-ui/03-otp.png" width="250" /> |

**Purpose:** Verify the user's mobile number.

**Key elements:**
- Confirmation message showing the number, with an **Edit** option
- Six separate OTP input boxes
- Resend code countdown timer
- Verify and continue button

**Design rationale:** Separate boxes make a six-digit code easy to read and enter. The Edit link allows quick correction of a wrong number, and the timer sets clear expectations about resending.

---

## 04 · Email Login

| Wireframe | Final UI |
|---|---|
| <img src="/img/wireframes/04-email-login.png" width="250" /> | <img src="/img/final-ui/04-email-login.png" width="250" /> |

**Purpose:** Allow sign-in with an email address and password.

**Key elements:** Email and password fields, Forgot Password link, Login button, "Create account" link and Need Help.

**Design rationale:** Only essential fields are shown. New users can move directly to account creation, and returning users can recover their password without leaving the screen.

---

## 05 · Google Account Chooser

| Wireframe | Final UI |
|---|---|
| <img src="/img/wireframes/05-google-login.png" width="250" /> | <img src="/img/final-ui/05-google-login.png" width="250" /> |

**Purpose:** Enable one-tap sign-in with an existing Google account.

**Key elements:** List of accounts with radio selection, a pre-selected default account, a **Continue as** button and a Skip for now option.

**Design rationale:** Pre-selecting the first account reduces sign-in to a single tap, while the Skip option avoids forcing a decision.

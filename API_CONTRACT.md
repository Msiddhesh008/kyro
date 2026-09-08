# Kyro API contract (from mock UI)

These TypeScript request/response shapes in `src/types/` are the source of truth for the NestJS backend. Mock forms already build these payloads.

## Auth

| Method | Path | Body type | Response |
|--------|------|-----------|----------|
| POST | `/auth/register` | `RegisterRequest` | `AuthResponse` |
| POST | `/auth/login` | `LoginRequest` | `AuthResponse` |
| GET | `/auth/me` | — | `User` |

Files: `src/types/auth.ts`

## Campaigns

| Method | Path | Body / notes | Response |
|--------|------|--------------|----------|
| GET | `/campaigns` | `?category=&q=` | `CampaignDetail[]` |
| GET | `/campaigns/:id` | — | `CampaignDetail` |
| POST | `/campaigns` | `CreateCampaignRequest` | `CampaignDetail` (status `pending_review`) |
| PATCH | `/campaigns/:id` | partial create fields | `CampaignDetail` |
| POST | `/campaigns/:id/publish` | admin/owner | `CampaignDetail` |

Files: `src/types/campaign.ts`, `src/types/campaignApi.ts`

## Donations / payments

| Method | Path | Body | Response |
|--------|------|------|----------|
| POST | `/campaigns/:id/donations` | `CreateDonationRequest` | `{ donation, razorpayOrder }` |
| POST | `/payments/razorpay/webhook` | gateway payload | ack |

Files: `src/types/donation.ts`

## NGO applications

| Method | Path | Body | Response |
|--------|------|------|----------|
| POST | `/ngo/applications` | `NgoApplicationRequest` | `NgoApplication` |
| GET | `/admin/ngo-applications` | admin | `NgoApplication[]` |
| PATCH | `/admin/ngo-applications/:id` | `{ status }` | `NgoApplication` |

Files: `src/types/ngo.ts`

## Mock UI routes → API

| UI route | Defines |
|----------|---------|
| `/login`, `/signup` | Auth |
| `/campaigns`, `/campaigns/:id` | Campaign read |
| `/campaigns/new` | Campaign create |
| Donate modal | Donations |
| `/ngo/apply` | NGO onboarding |

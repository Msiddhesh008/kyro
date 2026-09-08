import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'

import { API_BASE_URL } from '../constants'
import { clearCredentials } from '../store/authSlice'
import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  User,
} from '../types/auth'
import type {
  CampaignDetail,
  CreateCampaignRequest,
} from '../types/campaignApi'
import type { CreateDonationRequest, Donation } from '../types/donation'
import type { NgoApplication, NgoApplicationRequest } from '../types/ngo'

interface HealthResponse {
  status: string
}

interface AuthSliceState {
  auth: { accessToken: string | null }
}

interface DonationResponse {
  donation: Donation
  razorpayOrder: {
    id: string
    amount: number
    currency: string
    key: string
  }
}

const rawBaseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as AuthSliceState).auth.accessToken
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await rawBaseQuery(args, api, extraOptions)
  if (result.error?.status === 401) {
    api.dispatch(clearCredentials())
  }
  return result
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithAuth,
  tagTypes: ['Campaign', 'Auth', 'Ngo'],
  endpoints: (builder) => ({
    getHealth: builder.query<HealthResponse, void>({
      query: () => '/health',
    }),
    register: builder.mutation<AuthResponse, RegisterRequest>({
      query: (body) => ({ url: '/auth/register', method: 'POST', body }),
    }),
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (body) => ({ url: '/auth/login', method: 'POST', body }),
    }),
    getMe: builder.query<User, void>({
      query: () => '/auth/me',
      providesTags: ['Auth'],
    }),
    getCampaigns: builder.query<
      CampaignDetail[],
      { category?: string; q?: string } | void
    >({
      query: (params) => {
        const search = new URLSearchParams()
        if (params?.category && params.category !== 'All') {
          search.set('category', params.category)
        }
        if (params?.q?.trim()) {
          search.set('q', params.q.trim())
        }
        const qs = search.toString()
        return qs ? `/campaigns?${qs}` : '/campaigns'
      },
      providesTags: ['Campaign'],
    }),
    getCampaign: builder.query<CampaignDetail, string>({
      query: (id) => `/campaigns/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Campaign', id }],
    }),
    createCampaign: builder.mutation<CampaignDetail, CreateCampaignRequest>({
      query: (body) => ({ url: '/campaigns', method: 'POST', body }),
      invalidatesTags: ['Campaign'],
    }),
    publishCampaign: builder.mutation<CampaignDetail, string>({
      query: (id) => ({ url: `/campaigns/${id}/publish`, method: 'POST' }),
      invalidatesTags: ['Campaign'],
    }),
    createDonation: builder.mutation<
      DonationResponse,
      CreateDonationRequest & { campaignId: string }
    >({
      query: ({ campaignId, ...body }) => ({
        url: `/campaigns/${campaignId}/donations`,
        method: 'POST',
        body,
      }),
      invalidatesTags: (_r, _e, arg) => [
        { type: 'Campaign', id: arg.campaignId },
      ],
    }),
    submitNgoApplication: builder.mutation<
      NgoApplication,
      NgoApplicationRequest
    >({
      query: (body) => ({ url: '/ngo/applications', method: 'POST', body }),
      invalidatesTags: ['Ngo'],
    }),
  }),
})

export const {
  useGetHealthQuery,
  useRegisterMutation,
  useLoginMutation,
  useGetMeQuery,
  useGetCampaignsQuery,
  useGetCampaignQuery,
  useCreateCampaignMutation,
  usePublishCampaignMutation,
  useCreateDonationMutation,
  useSubmitNgoApplicationMutation,
} = api

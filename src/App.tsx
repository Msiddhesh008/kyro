import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { RequireAuth } from './components/auth/RequireAuth'
import { AppShell } from './components/AppShell'
import { ScrollToTop } from './components/ScrollToTop'
import { AboutPage } from './pages/AboutPage'
import { AdminNgoPage } from './pages/AdminNgoPage'
import { CampaignDetailPage } from './pages/CampaignDetailPage'
import { CampaignsPage } from './pages/CampaignsPage'
import { CreateCampaignPage } from './pages/CreateCampaignPage'
import { HelpPage } from './pages/HelpPage'
import { LandingPage } from './pages/LandingPage'
import { LoginPage } from './pages/LoginPage'
import { MonthlyGivingPage } from './pages/MonthlyGivingPage'
import { MyCampaignsPage } from './pages/MyCampaignsPage'
import { NgoApplicationPage } from './pages/NgoApplicationPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { SignupPage } from './pages/SignupPage'
import { SuccessStoriesPage } from './pages/SuccessStoriesPage'
import { TermsPage } from './pages/TermsPage'
import { TrustSafetyPage } from './pages/TrustSafetyPage'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<LandingPage />} />
          <Route path="monthly" element={<MonthlyGivingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="trust-safety" element={<TrustSafetyPage />} />
          <Route path="success-stories" element={<SuccessStoriesPage />} />
          <Route path="help" element={<HelpPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="campaigns" element={<CampaignsPage />} />
          <Route
            path="campaigns/new"
            element={
              <RequireAuth>
                <CreateCampaignPage />
              </RequireAuth>
            }
          />
          <Route
            path="my-campaigns"
            element={
              <RequireAuth>
                <MyCampaignsPage />
              </RequireAuth>
            }
          />
          <Route path="campaigns/:id" element={<CampaignDetailPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route
            path="ngo/apply"
            element={
              <RequireAuth>
                <NgoApplicationPage />
              </RequireAuth>
            }
          />
          <Route
            path="admin/ngo"
            element={
              <RequireAuth>
                <AdminNgoPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

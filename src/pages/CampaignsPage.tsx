import { useState } from 'react'

import { CampaignListItem } from '../components/campaigns/CampaignListItem'
import { MonthlyGivingBanner } from '../components/campaigns/MonthlyGivingBanner'
import {
  CAMPAIGN_CATEGORIES,
  CAMPAIGN_LOCATIONS,
  USE_MOCK,
  type CampaignCategory,
  type CampaignSort,
} from '../constants'
import { useMockCampaigns } from '../hooks/useMockCampaigns'
import { useGetCampaignsQuery } from '../services/api'
import styles from './CampaignsPage.module.css'

type CategoryFilter = CampaignCategory | 'All'
type LocationFilter = (typeof CAMPAIGN_LOCATIONS)[number] | 'All'

const CATEGORY_OPTIONS: CategoryFilter[] = ['All', ...CAMPAIGN_CATEGORIES]

const SORT_OPTIONS: { value: CampaignSort; label: string }[] = [
  { value: 'trending', label: 'Trending' },
  { value: 'funded', label: 'Most funded' },
  { value: 'newest', label: 'Newest' },
]

export function CampaignsPage() {
  const [category, setCategory] = useState<CategoryFilter>('All')
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState<LocationFilter>('All')
  const [sort, setSort] = useState<CampaignSort>('trending')

  const mockCampaigns = useMockCampaigns({ category, query, location, sort })
  const apiQuery = useGetCampaignsQuery(
    { category, q: query },
    { skip: USE_MOCK },
  )

  const campaigns = USE_MOCK ? mockCampaigns : (apiQuery.data ?? [])
  const isLoading = !USE_MOCK && apiQuery.isLoading
  const isError = !USE_MOCK && apiQuery.isError

  const resetFilters = () => {
    setCategory('All')
    setQuery('')
    setLocation('All')
    setSort('trending')
  }

  return (
    <div className={styles.page}>
      <div className={`container ${styles.layout}`}>
        <aside className={styles.sidebar} aria-label="Categories">
          <p className={styles.sidebarTitle}>Categories</p>
          <nav className={styles.categoryNav}>
            {CATEGORY_OPTIONS.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`${styles.categoryLink} ${
                  category === filter ? styles.categoryActive : ''
                }`}
                onClick={() => {
                  setCategory(filter)
                }}
              >
                {filter === 'All' ? 'All Categories' : filter}
              </button>
            ))}
          </nav>
        </aside>

        <div className={styles.main}>
          <header className={styles.header}>
            <h1 className={styles.title}>Browse campaigns</h1>
            <p className={styles.lead}>
              Discover medical, education, emergency, and animal fundraisers
              that need support.
            </p>
          </header>

          <div className={styles.toolbar}>
            <label className="visually-hidden" htmlFor="campaign-search">
              Search for fundraiser
            </label>
            <input
              id="campaign-search"
              className={styles.search}
              type="search"
              placeholder="Search for fundraiser"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value)
              }}
            />

            <div className={styles.filterRow}>
              <p className={styles.filterSentence}>
                Showing fundraisers for{' '}
                <label className={styles.pill}>
                  <span className="visually-hidden">Category</span>
                  <select
                    value={category}
                    onChange={(event) => {
                      setCategory(event.target.value as CategoryFilter)
                    }}
                  >
                    {CATEGORY_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option === 'All' ? 'All Categories' : option}
                      </option>
                    ))}
                  </select>
                </label>{' '}
                under{' '}
                <label className={styles.pill}>
                  <span className="visually-hidden">Sort</span>
                  <select
                    value={sort}
                    onChange={(event) => {
                      setSort(event.target.value as CampaignSort)
                    }}
                  >
                    {SORT_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>{' '}
                from{' '}
                <label className={styles.pill}>
                  <span className="visually-hidden">Location</span>
                  <select
                    value={location}
                    onChange={(event) => {
                      setLocation(event.target.value as LocationFilter)
                    }}
                  >
                    <option value="All">All Locations</option>
                    {CAMPAIGN_LOCATIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </p>
              <button
                type="button"
                className={styles.reset}
                onClick={resetFilters}
              >
                Reset filters
              </button>
            </div>
          </div>

          <div className={styles.mobileCategories} role="group" aria-label="Categories">
            {CATEGORY_OPTIONS.map((filter) => (
              <button
                key={`m-${filter}`}
                type="button"
                className={`${styles.chip} ${
                  category === filter ? styles.chipActive : ''
                }`}
                onClick={() => {
                  setCategory(filter)
                }}
              >
                {filter === 'All' ? 'All' : filter}
              </button>
            ))}
          </div>

          {isLoading ? <p className={styles.count}>Loading campaigns…</p> : null}
          {isError ? (
            <p className={styles.empty}>
              Could not load campaigns. Is the API running on port 3000?
            </p>
          ) : null}

          {!isLoading && !isError ? (
            <p className={styles.count}>
              {campaigns.length} campaign{campaigns.length === 1 ? '' : 's'}
            </p>
          ) : null}

          {!isLoading && !isError && campaigns.length === 0 ? (
            <p className={styles.empty}>No campaigns match your filters.</p>
          ) : null}

          <div className={styles.list}>
            {campaigns.map((campaign) => (
              <CampaignListItem key={campaign.id} campaign={campaign} />
            ))}
          </div>

          <MonthlyGivingBanner />
        </div>
      </div>
    </div>
  )
}

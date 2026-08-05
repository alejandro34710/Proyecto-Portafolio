import { create } from 'zustand'

interface ConfigState {
  isLoading: boolean
  hasSeenIntro: boolean
  setLoading: (isLoading: boolean) => void
  setHasSeenIntro: (hasSeenIntro: boolean) => void
}

export const useConfigStore = create<ConfigState>((set) => ({
  isLoading: false,
  hasSeenIntro: false,
  setLoading: (isLoading) => set({ isLoading }),
  setHasSeenIntro: (hasSeenIntro) => set({ hasSeenIntro }),
}))

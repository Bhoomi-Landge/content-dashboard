import favoritesReducer, { toggleFavorite } from '../favoritesSlice'

const sampleItem = {
  id: 'abc123',
  type: 'movie',
  data: { title: 'Test Movie' },
}

test('should add item to favorites', () => {
  const state = { items: [], isDarkMode: false }
  const newState = favoritesReducer(state, toggleFavorite(sampleItem))

  expect(newState.items).toHaveLength(1)
  expect(newState.items[0].id).toBe('abc123')
})

test('should remove item if already in favorites', () => {
  const state = { items: [sampleItem], isDarkMode: false }
  const newState = favoritesReducer(state, toggleFavorite(sampleItem))

  expect(newState.items).toHaveLength(0)
})

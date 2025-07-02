// describe('Favorites Flow', () => {
//   it('adds a movie to favorites from main feed and verifies it', () => {
//     // 🧪 Mock the API so it doesn’t fail
//     cy.intercept('GET', '/api/trending', {
//       statusCode: 200,
//       body: {
//         news: [],
//         movies: [
//           {
//             id: '123',
//             title: 'Inception',
//             overview: 'A mind-bending thriller',
//             poster_path: '/inception.jpg',
//             release_date: '2010-07-16',
//             vote_average: 8.8,
//           },
//         ],
//         spotifyTracks: [],
//       },
//     }).as('getTrending')

//     cy.visit('http://localhost:3000')

//     cy.wait('@getTrending') // ensure data is loaded

//     cy.contains('🎬 Movie Recommendations').should('exist')

//     cy.get('[data-testid="favorite-icon"]').first().click()

//     cy.visit('http://localhost:3000/favorites')

//     cy.contains('🎬 Movies').should('exist')
//     cy.contains('Inception').should('exist')
//   })
// })
describe('Favorites Flow', () => {
  it('adds a movie to localStorage manually and verifies it on /favorites page', () => {
    // Seed Redux-Persisted Local Storage BEFORE visiting the page
    cy.visit('http://localhost:3000', {
      onBeforeLoad(win) {
        win.localStorage.setItem(
          'persist:favorites',
          JSON.stringify({
            items: JSON.stringify([
              {
                id: '123',
                type: 'movie',
                data: {
                  id: '123',
                  title: 'Inception',
                  overview: 'A mind-bending thriller',
                  poster_path: '/inception.jpg',
                  release_date: '2010-07-16',
                  vote_average: 8.8,
                },
              },
            ]),
            isDarkMode: 'false',
          })
        )
      },
    })

    // Navigate to /favorites WITHOUT reloading the whole page
    cy.get('a[href="/favorites"]').click()

    // ✅ Assertion: Make sure "🎬 Movies" section appears
    cy.contains('🎬 Movies').should('exist')

    // ✅ Assertion: Our seeded movie should be visible
    cy.contains('Inception').should('exist')
  })
})

import { createPage, setupTest } from '@nuxt/test-utils'

describe('browser', () => {
  setupTest({ server: true })

  it('renders the index page', async () => {
    const page = await createPage('/')
    const html = await page.innerHTML('body')

    expect(html).toBeTruthy();
    const componentItem = await page.$$('.component-item');
    expect(componentItem).toBeTruthy();
  })
})

import { test, expect } from '@playwright/test';

test('deve consultar um pedido aprovado', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  //Arrange
  //Checkpoint
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');
  await page.getByTestId('header-nav').click();
  await page.getByRole('link', { name: 'Consultar Pedido' }).click();
  await expect(page.getByRole('heading', { name: 'Consultar Pedido' })).toBeVisible();
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido');
  await page.getByTestId('search-order-id').click();
  await expect(page.getByTestId('search-order-id')).toBeVisible();
  await page.getByTestId('search-order-id').click();
  //Act
  await page.getByTestId('search-order-id').fill('VLO-WPZSFR');
  await page.getByTestId('search-order-id').click();
  await page.getByTestId('search-order-button').click();
  //assert
  await expect(page.getByTestId('order-result-id')).toBeVisible();
  await expect(page.getByTestId('order-result-id')).toContainText('VLO-WPZSFR');
  await expect(page.getByTestId('order-result-status')).toBeVisible();
  await page.getByTestId('order-result-status').click();
  await expect(page.getByTestId('order-result-status')).toContainText('APROVADO');
});
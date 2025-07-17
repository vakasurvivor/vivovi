export const getBaseUrl = () => {
  const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const previewUrl = process.env.VERCEL_URL;

  if (process.env.VERCEL_ENV === 'production' && productionUrl) {
    return `https://${productionUrl}`;
  }

  if (process.env.VERCEL_ENV === 'preview' && previewUrl) {
    return `https://${previewUrl}`;
  }

  // ローカル開発環境
  return `http://localhost:${process.env.PORT || 3000}`;
};

export const getBaseURL = (options?: { useCommitURL?: boolean }) => {
  const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';
  const url = isProduction
    ? process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
    : options?.useCommitURL
      ? process.env.NEXT_PUBLIC_VERCEL_URL
      : process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL;

  return url
    ? `https://${url}`
    : `http://localhost:${process.env.PORT || 3000}`;
};

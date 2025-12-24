export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const KETO_PLAN_URL =
  import.meta.env.VITE_KETO_PLAN_URL ||
  "https://pub-a7352293629341aba0c417463676ed63.r2.dev/keto-pdf/7-day-keto-plan.pdf";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};

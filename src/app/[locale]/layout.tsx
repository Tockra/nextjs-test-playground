import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ReactNode } from "react";
import StyledMuiRegistry from "@/styling";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <AppRouterCacheProvider>
          <StyledMuiRegistry>
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </StyledMuiRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

import {useTranslations} from 'next-intl';


export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  return (
    <h1 title={t('title')}>
      <p className="max-w-[460px]">{t('description')}</p>
    </h1>
  );
}

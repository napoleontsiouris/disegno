import Link from 'next/link';
import { useRouter } from 'next/router'
import { useTranslation } from "next-i18next";

const LanguageSwitcher = () => {
    const router = useRouter()
    const { t } = useTranslation()
   
    return (
        <div className="languages">
            <Link
              href={router.asPath}
              locale='el'
            >
            <button className={router.locale=== 'el'? 'is-active': ''}>
              {t('El')}
            </button>
            </Link>
            <Link
              href={router.asPath}
              locale='sq'
            >
            <button className={router.locale=== 'sq'? 'is-active': ''}>
              {t('Sq')}
            </button>
            </Link>
        </div>
    )
}

export default LanguageSwitcher;
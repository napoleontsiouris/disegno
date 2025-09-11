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
              locale='sq'
            >
              <button className={`${router.locale=== 'sq'? 'is-active': ''} lang`}>
                {t('SQ')}
              </button>
            </Link>
            <Link
              href={router.asPath}
              locale='el'
            >
              <button className={`${router.locale=== 'el'? 'is-active': ''} lang`}>
                {t('EL')}
              </button>
            </Link>
            
           
        </div>
    )
}

export default LanguageSwitcher;
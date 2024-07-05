import './App.scss';
import { Button } from './stories/components/atoms/Button/Button.tsx';
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
  const { t, i18n } = useTranslation();
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' },
  ];
  return (
    <>
      <Button type='primary' state='disabled'>
        Btn
      </Button>
      <h1>{t('footerTitle')}</h1>

      {languages.map((language) => (
        <Button type='secondary' onClick={() => i18n.changeLanguage(language.code)} key={language.code}>
          {language.name}
        </Button>
      ))}
    </>
  );
}

export default App;

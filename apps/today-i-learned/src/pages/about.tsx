import {
  AnalyticsIDs,
  AppName,
  initializeAnalytics,
} from '@learn-grow/user-analytics';
import { useEffect } from 'react';

function About() {
  const analytics = initializeAnalytics(
    AppName.TODAY_I_LEARNED_STAGING,
    AnalyticsIDs.TODAY_I_LEARNED_STAGING,
  );
  useEffect(() => {
    analytics.getPage();
    analytics.identifyUser('ME', { name: 'gb' });
    analytics.trackEvent('createNote', { apple: 'x' });
  }, [analytics]);

  return <div>About Me</div>;
}

export default About;

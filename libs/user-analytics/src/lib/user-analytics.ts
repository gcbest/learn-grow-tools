import Analytics from 'analytics';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import googleAnalytics from '@analytics/google-analytics';
import {
  AnalyticsIDs,
  AppName,
  IDailyMastermindEventMap,
  ITodayILearnedEventMap,
  ITypeSafeAnalyticsInstance,
} from './types';

export class UserAnalytics {
  analytics: ITypeSafeAnalyticsInstance;
  appName: AppName;

  /* Initialize analytics & load plugins */
  constructor(appName: AppName, measurementIds: AnalyticsIDs) {
    this.appName = appName;
    this.analytics = this.createTypeSafeAnalytics(appName, measurementIds);
  }

  createTypeSafeAnalytics(
    appName: AppName,
    measurementIds: AnalyticsIDs
  ): ITypeSafeAnalyticsInstance {
    const analytics = Analytics({
      app: appName,
      debug: true,
      plugins: [
        googleAnalytics({
          measurementIds,
        }),
      ],
    });

    switch (appName) {
      case AppName.TODAY_I_LEARNED_STAGING:
        (analytics as ITypeSafeAnalyticsInstance).trackEvent =
          this.trackTodayILearnedEvents;
        break;
      case AppName.DAILY_MASTERMIND_STAGING:
        (analytics as ITypeSafeAnalyticsInstance).trackEvent =
          this.trackDailyMastermindEvents;
        break;

      default:
        (analytics as ITypeSafeAnalyticsInstance).trackEvent =
          this.trackTodayILearnedEvents;
    }

    return analytics as ITypeSafeAnalyticsInstance;
  }

  trackDailyMastermindEvents<Key extends keyof IDailyMastermindEventMap>(
    eventName: Key,
    eventProps: IDailyMastermindEventMap[Key]
  ) {
    this.analytics.track(eventName, eventProps);
  }

  trackTodayILearnedEvents<Key extends keyof ITodayILearnedEventMap>(
    eventName: Key,
    eventProps: ITodayILearnedEventMap[Key]
  ) {
    this.analytics.track(eventName, eventProps);
  }
}

export * from './types';

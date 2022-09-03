import { AnalyticsInstance } from 'analytics';

export enum AnalyticsIDs {
  TODAY_I_LEARNED_STAGING = '328122732',
}

export enum AppName {
  TODAY_I_LEARNED_STAGING = 'TODAY_I_LEARNED_STAGING',
  DAILY_MASTERMIND_STAGING = 'DAILY_MASTERMIND_STAGING',
}

/// Today I Learned ///
interface ICreateNoteEventProps {
  userId: string;
  title: string;
  content: string;
  isPublic: boolean;
  comments: string[];
  upVotes: number;
  downVotes: number;
}

export interface ITodayILearnedEventMap {
  createNote: ICreateNoteEventProps;
}

/// Daily Mastermind ///
interface ICreateTaskEventProps {
  title: string;
  details: string;
}

export interface IDailyMastermindEventMap {
  createTask: ICreateTaskEventProps;
}

// NOTE: any new apps event maps will need to be added to this union
type TAllAppEventMaps = ITodayILearnedEventMap | IDailyMastermindEventMap;

export interface ITypeSafeAnalyticsInstance extends AnalyticsInstance {
  trackEvent: <Key extends keyof TAllAppEventMaps>(
    eventName: Key,
    eventProps: TAllAppEventMaps[Key]
  ) => void;
}

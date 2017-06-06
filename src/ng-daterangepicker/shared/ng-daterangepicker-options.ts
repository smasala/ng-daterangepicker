export interface NgDateRangePickerOptions {
  theme?: 'default' | 'green' | 'teal' | 'cyan' | 'grape' | 'red' | 'gray';
  range?: 'tm' | 'lm' | 'lw' | 'tw' | 'ty' | 'ly';
  dayNames?: string[];
  presetNames?: string[];
  dateFormat?: string;
  outputFormat?: string;
  startOfWeek?: number;
  showTime?: boolean;
  timeFormat?: 'HH:mm:ss' | 'HH:mm';
  container?: false | string;
  // needed for: Element implicitly has an 'any' type because type has no index signature
  [key: string]: any;
}

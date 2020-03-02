const PATHS = {
  HOME: '/',
  // PERCEIVABLE
  URI_PERCEIVABLE: '/perceivable',
  URI_PERCEIVABLE_TEXTALT: '/perceivable/1_1',
  URI_PERCEIVABLE_TEXTALT_ALT: '/perceivable/1_1/1_1_1/h1',
  URI_PERCEIVABLE_TEXTALT_GROUPING: '/perceivable/1_1/1_1_1/h2',
  URI_PERCEIVABLE_TEXTALT_URI_PERCEIVABLE_TEXTALT_BUTTONS:
    '/perceivable/1_1/1_1_1/h3',
  URI_PERCEIVABLE_TEXTALT_ASCII: '/perceivable/1_1/1_1_1/h4',

  URI_PERCEIVABLE_TIMEBASE: '/perceivable/1_2',
  URI_PERCEIVABLE_ADAPTABLE: '/perceivable/1_3',
  URI_PERCEIVABLE_DISTINGUISHABLE: '/perceivable/1_4',

  // OPERABLE
  URI_OPERABLE: '/operable',
  URI_OPERABLE_KEYBOARD: 'operable/2_1',
  URI_OPERABLE_TIME: 'operable/2_2',
  URI_OPERABLE_SEIZURE: 'operable/2_3',
  URI_OPERABLE_NAVIGABLE: 'operable/2_4',

  // UNDERSTANDABLE
  URI_UNDERSTANDABLE: '/understandable',
  URI_UNDERSTANDABLE_READABLE: 'understandable/3_1',
  URI_UNDERSTANDABLE_PREDICTABLE: 'understandable/3_2',
  URI_UNDERSTANDABLE_INPUT: 'understandable/3_3',

  // ROBUST
  URI_ROBUST: '/robust',
  URI_ROBUST_COMPATIBLE: 'robust/4_1',
};

export default {
  ...PATHS,
};

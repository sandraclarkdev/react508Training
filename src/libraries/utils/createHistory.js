import 'core-js/es/map';
import { createBrowserHistory } from 'history';
import { wrapHistory } from 'oaf-react-router';

// Global state cache
let history;

/**
 * Defines the configuration settings for `oaf-react-router`.
 * see: https://github.com/oaf-project/oaf-react-router#advanced-usage
 *
 * @type {object}
 */
const oafReactRouterSettings = {
  documentTitle: () => document.title,
  primaryFocusTarget: '#virtual-cursor-top',
  announcePageNavigation: false,
  setPageTitle: false,
};

export default function createHistory() {
  if (!history) {
    history = createBrowserHistory({
      basename: '',
    });

    // Apply the `oaf-react-router` wrapper.
    wrapHistory(history, oafReactRouterSettings);
  }

  return history;
}

/**
 * Public options for the PageVisibilityTracker.
 * @typedef {{
 *   sessionTimeout: (number),
 *   timeZone: (string|undefined),
 *   visibleMetricIndex: (number|undefined),
 *   fieldsObj: (!Object),
 *   hitFilter: (Function|undefined),
 * }}
 */
var PageVisibilityTrackerOpts;


/**
 * PageVisibilityTracker change store data schema.
 * @typedef {{
 *   time: (number|undefined),
 *   state: (string|undefined),
 *   pageId: (string|undefined),
 * }}
 */
var PageVisibilityStoreData;


/**
 * @interface
 */
class PageVisibilityTrackerPublicInterface {
  remove() {}
}

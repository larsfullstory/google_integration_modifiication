window["_dlo_rules_google_em"] = [
  {
    "id": "fs-ga-event",
    "source": "dataLayer",
    "operators": [
      { "name": "query", "select": "$[?(event!^gtm)]" },
      { "name": "query", "select": "$[?(event!=optimize.domChange)]" },
      { "name": "query", "select": "$[!(ecommerce,gtm.uniqueEventId,email,first_name)]" },
      { "name": "insert", "select": "event" }
    ],
    "destination": "FS.event"
  }
];

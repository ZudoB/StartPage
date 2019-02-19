const TWITTER_HANDLE_REGEX = /^@([a-zA-Z0-9_]+)$/;
const IG_HANDLE_REGEX = /^@([a-zA-Z0-9_.]+)$/;
const SUBREDDIT_REGEX = /^\/?r\/([a-zA-Z0-9_]+)$/;
const GH_REPO_REGEX = /^([a-zA-Z0-9_-]{2,})\/([a-zA-Z0-9_-]{2,})$/;

/*
 * Define new search providers here.
 * Each provider represents a different type of search that can be done.
 * Results will be displayed in the order they are defined in.
 *
 * Results will only be displayed if the display() method returns true, where the first parameter is the whole search query.
 * The description() method returns the description for the result, where the first parameter is the whole search query.
 * The handler() method returns the URL that we should redirect to, where the first parameter is the whole search query.
 */

const providers = [
    {
        "name": "GitHub",
        "colour": "#333",
        "display": function (query) {
            return !!GH_REPO_REGEX.exec(query);
        },
        "description": function (query) {
            const owner = GH_REPO_REGEX.exec(query)[1];
            const repo = GH_REPO_REGEX.exec(query)[2];
            return "View " + owner + "/" + repo;
        },
        "handler": function (query) {
            const owner = GH_REPO_REGEX.exec(query)[1];
            const repo = GH_REPO_REGEX.exec(query)[2];
            return "https://github.com/" + owner + "/" + repo;
        }
    },
    {
        "name": "Reddit",
        "colour": "#ff4500",
        "display": function (query) {
            return !!SUBREDDIT_REGEX.exec(query);
        },
        "description": function (query) {
            const sub = SUBREDDIT_REGEX.exec(query)[1];
            return "Browse r/" + sub;
        },
        "handler": function (query) {
            const sub = SUBREDDIT_REGEX.exec(query)[1];
            return "https://reddit.com/r/" + sub;
        }
    },
    {
        "name": "Twitter",
        "colour": "#1da1f2",
        "display": function (query) {
            return !!TWITTER_HANDLE_REGEX.exec(query);
        },
        "description": function (query) {
            const handle = TWITTER_HANDLE_REGEX.exec(query)[1];
            return "View @" + handle;
        },
        "handler": function (query) {
            const handle = TWITTER_HANDLE_REGEX.exec(query)[1];
            return "https://twitter.com/" + handle;
        }
    },
    {
        "name": "Instagram",
        "colour": "#c13584",
        "display": function (query) {
            return !!IG_HANDLE_REGEX.exec(query);
        },
        "description": function (query) {
            const handle = IG_HANDLE_REGEX.exec(query)[1];
            return "View @" + handle;
        },
        "handler": function (query) {
            const handle = IG_HANDLE_REGEX.exec(query)[1];
            return "https://instagram.com/" + handle;
        }
    },
    {
        "name": "DuckDuckGo",
        "colour": "#de5833",
        "display": function () {
            return true;
        },
        "description": function (query) {
            return "Search for \"" + query + "\"";
        },
        "handler": function (query) {
            return "https://duckduckgo.com/?q=" + encodeURIComponent(query);
        }
    },
    {
        "name": "Google",
        "colour": "#4285f4",
        "display": function () {
            return true;
        },
        "description": function (query) {
            return "Search for \"" + query + "\"";
        },
        "handler": function (query) {
            return "https://google.com/search?q=" + encodeURIComponent(query);
        }
    },
    {
        "name": "YouTube",
        "colour": "#ff0000",
        "display": function () {
            return true;
        },
        "description": function (query) {
            return "Search for \"" + query + "\"";
        },
        "handler": function (query) {
            return "https://youtube.com/results?search_query=" + encodeURIComponent(query);
        }
    }
    ,
    {
        "name": "NPM",
        "colour": "#cb3837",
        "display": function () {
            return true;
        },
        "description": function (query) {
            return "Search for \"" + query + "\"";
        },
        "handler": function (query) {
            return "https://www.npmjs.com/search?q=" + encodeURIComponent(query);
        }
    }
];
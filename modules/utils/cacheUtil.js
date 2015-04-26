/**
 * No Cache
 * @param req
 * @param resp
 * @param next
 */
function noCache(req, resp, next) {
    resp.setHeader('Cache-Control', 'no-cache, no-store, max-age=0');
    next();
}

/**
 * Caches for 5 minutes
 * @param req
 * @param resp
 * @param next
 */
function shortCache(req, resp, next) {
    resp.setHeader('Cache-Control', 'public, max-age=300');
    next();
}

exports.noCache = noCache;
exports.shortCache = shortCache;

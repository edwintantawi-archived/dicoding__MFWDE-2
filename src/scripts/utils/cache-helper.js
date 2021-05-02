import CONFIG from '../globals/config';

const CacheHelper = {
  async cachingAppShell(request) {
    const cache = await this._openCache();
    cache.addAll(request);
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((cacheName) => cacheName !== CONFIG.CACHE_NAME)
      .map((filteredCache) => caches.delete(filteredCache));
  },

  async revalidateCache(request) {
    const response = await caches.match(request);
    if (response) {
      this._fetchRequst(request);
      return response;
    }
    return this._fetchRequst(request);
  },

  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },

  async _addCache(request) {
    const cache = await this._openCache();
    cache.add(request);
  },

  async _fetchRequst(request) {
    const response = await fetch(request);
    if (!response || response.status !== 200) {
      return response;
    }
    await this._addCache(request);
    return response;
  },
};

export default CacheHelper;

const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSpliter(url);
    return this._urlCombiner(splitedUrl);
  },
  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSpliter(url);
  },
  _urlSpliter(url) {
    const urlSplit = url.split('/');
    return {
      resource: urlSplit[1] || null,
      id: urlSplit[2] || null,
      verb: urlSplit[3] || null,
    };
  },
  _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
      + (splitedUrl.id ? '/:id' : '')
      + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
  },
};

export default UrlParser;

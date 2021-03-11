const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  // TODO: Implement this function.
  const getArnieQuote = async(url) => {
    const resp = await httpGet(url);
    try {
      const body = JSON.parse(resp.body);
      if(resp.status === 200){
        return {
          'Arnie Quote': body?.message,
        };
      } 
      return {
        FAILURE: body?.message,
      };
    } catch(e) {
      return {
        FAILURE: e.message,
      };
    }
  }
  const getQuoteCalls = urls.map(url => getArnieQuote(url));
  return Promise.all(getQuoteCalls);
};

module.exports = {
  getArnieQuotes,
};

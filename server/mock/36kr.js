import fetch from "isomorphic-fetch"

const Mock = {
  fetchFlash(id, page = 10) {
    return fetch(`https://36kr.com/api/newsflash?per_page=${page}&b_id=${id}`);
  },
  fetchColumn(page = 1) {
    return fetch(`https://36kr.com/api/search-column/23?per_page=10&page=${page}`);
  },
  fetchDetail() {
    return new Promise(resolve => resolve({ detail: 123 }));
  }
};

export default Mock

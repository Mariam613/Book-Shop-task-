const api = "http://gutendex.com";
export const getAll = (pagination?: string) =>
  fetch(`${api}/books/?${pagination ? pagination : ""}`).then((res) =>
    res.json()
  );

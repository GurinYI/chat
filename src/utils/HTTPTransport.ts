interface Options {
  headers: {
    [key: string]: string;
  };
  data: {
    [key: string]: string;
  };
  method: "GET" | "PUT" | "POST" | "DELETE";
}

const METHODS: Record<string, "GET" | "PUT" | "POST" | "DELETE"> = {
  GET: "GET",
  PUT: "PUT",
  POST: "POST",
  DELETE: "DELETE",
};

type StringKeyObject = {
  [key: string]: string | StringKeyObject;
};
function queryStringify(data: StringKeyObject) {
  if (typeof data !== "object") {
    throw new Error("Data must be object");
  }

  // Здесь достаточно и [object Object] для объекта
  const keys = Object.keys(data);
  return keys.reduce(
    (result, key, index) =>
      `${result}${key}=${data[key]}${index < keys.length - 1 ? "&" : ""}`,
    "?",
  );
}

class HTTPTransport {
  get = (url: string, options: Options) => {
    let query = url;
    if (options.data) {
      query += queryStringify(options.data);
    }
    if (METHODS.GET) {
      return this.request(`${url}?${query}`, {
        ...options,
        method: METHODS.GET,
      });
    }
  };

  put = (url: string, options: Options) => {
    if (METHODS.PUT) {
      this.request(url, { ...options, method: METHODS.PUT });
    }
  };
  post = (url: string, options: Options) => {
    if (METHODS.POST) {
      this.request(url, { ...options, method: METHODS.POST });
    }
  };
  delete = (url: string, options: Options) => {
    if (METHODS.DELETE) {
      this.request(url, { ...options, method: METHODS.DELETE });
    }
  };

  request = (url: string, options: Options) =>
    new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open(options.method, url);

      if (options.headers) {
        for (const header in options.headers) {
          if (Object.prototype.hasOwnProperty.call(options.headers, header)) {
            xhr.setRequestHeader(header, options.headers[header] || '');
          }
        }
      }

      xhr.onload = function () {
        resolve(xhr);
      };

      if (options.method === METHODS.GET || options.method === METHODS.DELETE) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(options.data));
      }
    });
}

export { HTTPTransport };

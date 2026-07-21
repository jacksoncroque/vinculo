const apiUrl = import.meta.env.VITE_API_URL;

export const tokenName = 'vinculo:token';

const getAuthToken = () => {
  try {
    const token = sessionStorage.getItem(tokenName);

    const tokenFormated = JSON.parse(token);

    return tokenFormated.token ?? '';
  } catch (error) {
    return '';
  }
};

export const api = {
  get: async (endpoint) => {
    try {
      const fetchUrl = `${apiUrl}/${endpoint}`;

      const token = getAuthToken();

      const response = await fetch(fetchUrl, {
        method: 'GET',
        headers: {
          ...(token !== '' && {
            Authorization: `Bearer ${token}`,
          }),
        },
      });

      const { success, data, error } = await response.json();

      return {
        success: success,
        data: data ?? null,
        error: error?.message ?? null,
        details: error?.details ?? [],
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        error: error?.message ?? 'Erro interno',
        details: [],
      };
    }
  },

  post: async (endpoint, payload) => {
    try {
      const fetchUrl = `${apiUrl}/${endpoint}`;

      const token = getAuthToken();

      const response = await fetch(fetchUrl, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          accept: 'aplication/json',
          'Content-Type': 'application/json',
          ...(token !== '' && {
            Authorization: `Bearer ${token}`,
          }),
        },
      });

      const { success, data, error } = await response.json();

      return {
        success: success,
        data: data ?? null,
        error: error?.message ?? null,
        details: error?.details ?? [],
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        error: error?.message ?? 'Erro interno',
        details: [],
      };
    }
  },

  put: async (endpoint, payload) => {
    try {
      const fetchUrl = `${apiUrl}/${endpoint}`;

      const token = getAuthToken();

      const response = await fetch(fetchUrl, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          ...(token !== '' && {
            Authorization: `Bearer ${token}`,
          }),
        },
      });

      const { success, data, error } = await response.JSON();

      return {
        success: success,
        data: data ?? null,
        error: error?.message ?? null,
        details: error?.details ?? [],
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        error: error?.message ?? 'Erro interno',
        details: [],
      };
    }
  },

  delete: async (endpoint) => {
    try {
      const fetchUrl = `${apiUrl}/${endpoint}`;

      const token = getAuthToken();

      const response = await fetch(fetchUrl, {
        method: 'PUT',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          ...(token !== '' && {
            Authorization: `Bearer ${token}`,
          }),
        },
      });

      const { success, data, error } = await response.JSON();

      return {
        success: success,
        data: data ?? null,
        error: error?.message ?? null,
        details: error?.details ?? [],
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        error: error?.message ?? 'Erro interno',
        details: [],
      };
    }
  },
};

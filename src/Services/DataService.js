import http from "../http-common";

const DataService = {
  getAll: async function (y) {
    try {
      const { data } = await http.get(`/search`);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },

  getById: async function (id) {
    try {
      const { data } = await http.get(`/search/${id}`);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },

  post: async function (data) {
    try {
      const { data } = await http.post(`/save/${id}`, data);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },

  update: async function (data) {
    try {
      const { data } = await http.put(`/update/${data.id}`, data);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },

  remove: async function (id) {
    try {
      const { data } = await http.delete(`/delete/${id}`);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export { DataService };

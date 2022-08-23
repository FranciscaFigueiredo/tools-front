import api from './apiUrl';

export async function getToolInformation() {
  const response = await api.get(`/ferramentas_search.json`);

  return response.data;
}

import API from "@/services/api";

export const fetchDataPieChart = async (token: string) => {
  try {
    const response = await API.get('/graphics/ethnicity', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
    throw error;
  }
};

export const fetchAgeData = async (token: string) => {
  try {
    const response = await API.get('/graphics/age', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
    throw error;
  }
};

export const fetchParticipationData = async (token: string) => {
  try {
    const response = await API.get('/graphics/participation', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
    throw error;
  }
};

export const fetchComplainceData = async (token: string) => {
  try {
    const response = await API.get('/graphics/compliance', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
    throw error;
  }
};


export const fetchRatingData = async (token: string) => {
  try {
    const response = await API.get('/graphics/rating', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
    throw error;
  }
};

export const fetchPresentData = async (token: string) => {
  try {
    const response = await API.get('/graphics/present', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
    throw error;
  }
};

export const fetchReportData = async (token: string, page: number) => {
  try {
    const response = await API.get(`/admin/report?page=${page}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
    throw error;
  }
};

export const handleDownload = async (endpoint: string, filename: string, token: string | undefined) => {
  try {
      const response = await API.get(endpoint, {
          responseType: 'blob',
          headers: {
              Authorization: `Bearer ${token}`,
          },
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
  } catch (error) {
      console.error('Erro ao baixar o arquivo:', error);
  }
};
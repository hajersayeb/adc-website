import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8080/api/test/';
class CondidatService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }
  getCondidatBoard() {
    return axios.get(API_URL + 'condidat', { headers: authHeader() });
  }
  getEmployeurBoard() {
    return axios.get(API_URL + 'employeur', { headers: authHeader() });
  }
  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}
export default new CondidatService();

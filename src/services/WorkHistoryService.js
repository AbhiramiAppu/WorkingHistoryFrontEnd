import http from "../http-common";

class WorkHistoryService {
    getAllEmployeesWorkHistory() {
    return http.get("/work/workhistory");
  }

  getEmployeeWorkHistoryById(id) {
    return http.get(`/work/workhistory/${id}`);
  }

  createEmployeeWorkHistory(data) {
    return http.post("/work/workhistory", data);
  }

  updateEmployeeWorkHistory(id, data) {
    return http.put(`/work/workhistory/${id}`, data);
  }

  deleteEmployeeWorkHistoryById(id) {
    return http.delete(`/work/workhistory/${id}`);
  }
}

export default new WorkHistoryService();
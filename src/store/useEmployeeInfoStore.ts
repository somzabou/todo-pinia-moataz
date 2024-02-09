import { defineStore } from "pinia";

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  password: string;
}

export const useEmployeeInfoStore = defineStore("employeeInfo", {
  state: () => ({
    employees: [] as Employee[],
    id: 0,
  }),
  actions: {
    addEmployee(name: string, position: string, department: string) {
      this.employees.push({
        id: this.id++,
        name,
        position,
        department,
        email: "",
        password: "",
      });
    },
    deleteEmployee(employeeId: number) {
      this.employees = this.employees.filter(
        (employee) => employee.id !== employeeId
      );
    },
    updateEmployee(
      employeeId: number,
      name: string,
      position: string,
      department: string
    ) {
      const employee = this.employees.find(
        (employee) => employee.id === employeeId
      );
      if (employee) {
        employee.name = name;
        employee.position = position;
        employee.department = department;
      }
    },
    registerEmployee(
      name: string,
      email: string,
      password: string,
      position: string,
      department: string
    ) {
      this.employees.push({
        id: this.id++,
        name,
        position,
        department,
        email,
        password,
      });
    },
  },
});

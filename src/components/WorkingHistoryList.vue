<template>
  <div class="main-content">
	<div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="card">
                <div class="card-body">
                    <div class="icon icon-warning float-left">
                        <span class="material-icons" style="font-size: 48px;">person</span>
                    </div>
                    <div class="float-right text-center">
                        <h5 class="card-title">Total Employees</h5>
                        <p class="card-text">{{employees.length}}</p>
                    </div>
                </div>
                <div class="card-footer mt-5">
                    <i class="material-icons text-info">info</i>
                    <a href="#">See detailed list below</a>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div v-if="message" class="alert alert-danger mt-5">
                {{message}}
            </div>
        </div>
    </div>

	<div class="row">
        <div class="col-lg-12 col-md-12">
            <div class="card" style="min-height: 485px">
                <div class="card-header card-header-text">
                    <a href="/addEmployee"><button class="btn btn-success float-right">
                        <span class="material-icons">
                            person_add
                        </span>
                        <span style="padding-left: 5px;">
                            Add Employee
                        </span>
                    </button></a>
                    <h4 class="card-title">Employees</h4>
                    </div><br>
                    <hr>
                    <div v-if="employees.length == 0" class="text-danger text-center mt-5">
                        <h5>No Employees found !!</h5>
                    </div>
                    <div class="card-content table-responsive" v-if="employees.length > 0">
                        <table class="table table-hover table-bordered">
                            <thead class="text-success">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Date of Birth</th>
                                    <th>Phone</th>
                                    <th>Type</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                           
                            <tbody>
                                <tr v-for="employee in employees" v-bind:key="employee.employeeIdNumber">
                                    <td>{{employee.employeeIdNumber}}</td>
                                    <td>{{employee.firstName}} {{employee.lastName}}</td>
                                    <td>{{employee.dayOfBirth}}/{{employee.monthOfBirth}}/{{employee.yearOfBirth}} </td>
                                    <td>{{employee.cellularPhone}}</td>
                                    <td>{{employee.typeOfEmployee}}</td>
                                    <td>
                                        <a v-bind:href="'/employees/'+employee.employeeIdNumber"><span class="material-icons" style="color:blue;cursor:pointer">visibility</span></a>
                                        <span class="material-icons" style="color:red;cursor:pointer;padding-left:50px" v-on:click="deleteEmployee(employee.employeeIdNumber)">delete</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
</div>
</template>
<script>
import EmployeeService from "@/services/EmployeeService";

export default {
  name: "employees-list",
  data() {
    return {
      employees: [],
      message:""
    };
  },
  methods: {
    retrieveEmployees() {
      EmployeeService.getAllEmployees()
        .then(response => {
          this.employees = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteEmployee(id) {
            if(confirm("Are you sure? Do you want to delete this employee?")){
            EmployeeService.deleteEmployee(id).then(response => {
                console.log(response.data)
                this.message = "Deleted the employee successfully !!";
                this.retrieveEmployees();
            });
            }
        },
        getEmployeeById(id){
            EmployeeService.getEmployeeById(id).then(response =>{
                //empId = response.data.employeeIdNumber;
                console.log(response)
            });
        },
  },
  mounted() {
    this.retrieveEmployees();
  }
};
</script>

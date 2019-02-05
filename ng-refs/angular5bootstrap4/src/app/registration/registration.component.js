"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Registration = /** @class */ (function () {
    function Registration(firstName, lastName, dob, email, password, country) {
        if (firstName === void 0) { firstName = ''; }
        if (lastName === void 0) { lastName = ''; }
        if (dob === void 0) { dob = null; }
        if (email === void 0) { email = ''; }
        if (password === void 0) { password = ''; }
        if (country === void 0) { country = 'Select country'; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.email = email;
        this.password = password;
        this.country = country;
    }
    return Registration;
}());
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
        // It maintains list of Registrations
        this.registrations = [];
        // It maintains registration form display status. By default it will be false.
        this.showNew = false;
        // It will be either 'Save' or 'Update' based on operation.
        this.submitType = 'Save';
        // It maintains Array of countries.
        this.countries = ['US', 'UK', 'India', 'UAE'];
        // Add default registration data.
        this.registrations.push(new Registration('Johan', 'Peter', { year: 1980, month: 5, day: 12 }, 'johan@gmail.com', 'johan123', 'UK'));
        this.registrations.push(new Registration('Mohamed', 'Tariq', { year: 1975, month: 12, day: 3 }, 'tariq@gmail.com', 'tariq123', 'UAE'));
        this.registrations.push(new Registration('Nirmal', 'Kumar', { year: 1970, month: 7, day: 25 }, 'nirmal@gmail.com', 'nirmal123', 'India'));
    }
    RegistrationComponent.prototype.ngOnInit = function () { };
    // This method associate to New Button.
    RegistrationComponent.prototype.onNew = function () {
        // Initiate new registration.
        this.regModel = new Registration();
        // Change submitType to 'Save'.
        this.submitType = 'Save';
        // display registration entry section.
        this.showNew = true;
    };
    // This method associate to Save Button.
    RegistrationComponent.prototype.onSave = function () {
        if (this.submitType === 'Save') {
            // Push registration model object into registration list.
            this.registrations.push(this.regModel);
        }
        else {
            // Update the existing properties values based on model.
            this.registrations[this.selectedRow].firstName = this.regModel.firstName;
            this.registrations[this.selectedRow].lastName = this.regModel.lastName;
            this.registrations[this.selectedRow].dob = this.regModel.dob;
            this.registrations[this.selectedRow].email = this.regModel.email;
            this.registrations[this.selectedRow].password = this.regModel.password;
            this.registrations[this.selectedRow].country = this.regModel.country;
        }
        // Hide registration entry section.
        this.showNew = false;
    };
    // This method associate to Edit Button.
    RegistrationComponent.prototype.onEdit = function (index) {
        // Assign selected table row index.
        this.selectedRow = index;
        // Initiate new registration.
        this.regModel = new Registration();
        // Retrieve selected registration from list and assign to model.
        this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
        // Change submitType to Update.
        this.submitType = 'Update';
        // Display registration entry section.
        this.showNew = true;
    };
    // This method associate to Delete Button.
    RegistrationComponent.prototype.onDelete = function (index) {
        // Delete the corresponding registration entry from the list.
        this.registrations.splice(index, 1);
    };
    // This method associate toCancel Button.
    RegistrationComponent.prototype.onCancel = function () {
        // Hide registration entry section.
        this.showNew = false;
    };
    // This method associate to Bootstrap dropdown selection change.
    RegistrationComponent.prototype.onChangeCountry = function (country) {
        // Assign corresponding selected country to model.
        this.regModel.country = country;
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'app-registration',
            templateUrl: './registration.component.html',
            styleUrls: ['./registration.component.css']
        })
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;

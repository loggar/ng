"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var graphql_tag_1 = require("graphql-tag");
require("rxjs/add/operator/map");
var Registration = /** @class */ (function () {
    function Registration(firstName, lastName, dob, email, password, country) {
        if (firstName === void 0) { firstName = ""; }
        if (lastName === void 0) { lastName = ""; }
        if (dob === void 0) { dob = null; }
        if (email === void 0) { email = ""; }
        if (password === void 0) { password = ""; }
        if (country === void 0) { country = "Select country"; }
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
    function RegistrationComponent(apollo) {
        this.apollo = apollo;
        // It maintains list of Registrations
        this.registrations = [];
        // It maintains registration form display status. By default it will be false.
        this.showNew = false;
        // It will be either 'Save' or 'Update' based on operation.
        this.submitType = "Save";
        // It maintains Array of countries.
        this.countries = ["US", "UK", "India", "UAE"];
        this.registrationList = []; // List of Users
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.displayRegistrations();
    };
    // Get all registrations
    RegistrationComponent.prototype.displayRegistrations = function () {
        var _this = this;
        var getRegistrations = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      {\n        Registrations {\n          id\n          firstName\n          lastName\n          dob\n          email\n          country\n        }\n      }\n    "], ["\n      {\n        Registrations {\n          id\n          firstName\n          lastName\n          dob\n          email\n          country\n        }\n      }\n    "])));
        this.apollo
            .watchQuery({
            query: getRegistrations,
            fetchPolicy: "network-only"
        })
            .valueChanges.map(function (result) { return result.data.Registrations; })
            .subscribe(function (data) {
            _this.registrations = data;
        });
    };
    // This method associate to New Button.
    RegistrationComponent.prototype.onNew = function () {
        // Initiate new registration.
        this.regModel = new Registration();
        // Change submitType to 'Save'.
        this.submitType = "Save";
        // display registration entry section.
        this.showNew = true;
    };
    // This method associate to Save Button.
    RegistrationComponent.prototype.onSave = function () {
        var _this = this;
        var dateVal = this.regModel.dob.year.toString() +
            "-" +
            this.regModel.dob.month.toString() +
            "-" +
            this.regModel.dob.day.toString();
        if (this.submitType === "Save") {
            var saveRegistration = graphql_tag_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        mutation createRegistration(\n          $firstName: String!\n          $lastName: String!\n          $dob: GQDate!\n          $email: String!\n          $password: String!\n          $country: String!\n        ) {\n          createRegistration(\n            firstName: $firstName\n            lastName: $lastName\n            dob: $dob\n            email: $email\n            password: $password\n            country: $country\n          ) {\n            id\n            dob\n          }\n        }\n      "], ["\n        mutation createRegistration(\n          $firstName: String!\n          $lastName: String!\n          $dob: GQDate!\n          $email: String!\n          $password: String!\n          $country: String!\n        ) {\n          createRegistration(\n            firstName: $firstName\n            lastName: $lastName\n            dob: $dob\n            email: $email\n            password: $password\n            country: $country\n          ) {\n            id\n            dob\n          }\n        }\n      "])));
            this.apollo
                .mutate({
                mutation: saveRegistration,
                variables: {
                    firstName: this.regModel.firstName,
                    lastName: this.regModel.lastName,
                    dob: new Date(dateVal),
                    email: this.regModel.email,
                    password: this.regModel.password,
                    country: this.regModel.country
                }
            })
                .subscribe(function (_a) {
                var data = _a.data;
                _this.displayRegistrations();
            }, function (error) {
                console.log("there was an error sending the query", error);
            });
            // Push registration model object into registration list.
            // this.registrations.push(this.regModel);
        }
        else {
            var updateRegistration = graphql_tag_1.default(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        mutation updateRegistration(\n          $id: ID!\n          $firstName: String!\n          $lastName: String!\n          $dob: GQDate!\n          $email: String!\n          $password: String!\n          $country: String!\n        ) {\n          updateRegistration(\n            id: $id\n            firstName: $firstName\n            lastName: $lastName\n            dob: $dob\n            email: $email\n            password: $password\n            country: $country\n          ) {\n            id\n            country\n          }\n        }\n      "], ["\n        mutation updateRegistration(\n          $id: ID!\n          $firstName: String!\n          $lastName: String!\n          $dob: GQDate!\n          $email: String!\n          $password: String!\n          $country: String!\n        ) {\n          updateRegistration(\n            id: $id\n            firstName: $firstName\n            lastName: $lastName\n            dob: $dob\n            email: $email\n            password: $password\n            country: $country\n          ) {\n            id\n            country\n          }\n        }\n      "])));
            this.apollo
                .mutate({
                mutation: updateRegistration,
                variables: {
                    id: this.selectedRow + 1,
                    firstName: this.regModel.firstName,
                    lastName: this.regModel.lastName,
                    dob: new Date(dateVal),
                    email: this.regModel.email,
                    password: this.regModel.password,
                    country: this.regModel.country
                }
            })
                .subscribe(function (_a) {
                var data = _a.data;
                console.log("got editdata", data);
                _this.displayRegistrations();
            }, function (error) {
                console.log("there was an error sending the query", error);
            });
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
        var dob = new Date(this.registrations[this.selectedRow].dob);
        this.regModel.dob = {
            day: dob.getDate(),
            month: dob.getMonth() + 1,
            year: dob.getFullYear()
        };
        // Change submitType to Update.
        this.submitType = "Update";
        // Display registration entry section.
        this.showNew = true;
    };
    // This method associate to Delete Button.
    RegistrationComponent.prototype.onDelete = function (index) {
        var _this = this;
        var deleteRegistration = graphql_tag_1.default(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      mutation deleteRegistration($id: ID!) {\n        deleteRegistration(id: $id) {\n          id\n        }\n      }\n    "], ["\n      mutation deleteRegistration($id: ID!) {\n        deleteRegistration(id: $id) {\n          id\n        }\n      }\n    "])));
        this.apollo
            .mutate({
            mutation: deleteRegistration,
            variables: {
                id: index + 1
            }
        })
            .subscribe(function (_a) {
            var data = _a.data;
            console.log("got editdata", data);
            _this.displayRegistrations();
        }, function (error) {
            console.log("there was an error sending the query", error);
        });
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
            selector: "app-registration",
            templateUrl: "./registration.component.html",
            styleUrls: ["./registration.component.css"]
        })
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { RouteAnimationBuilder } from "./route-animation-builder/route-animation.builder";

export const slideInAnimation = new RouteAnimationBuilder()
                                  .name('routeAnimations')
                                  .build();

  // export const slideInAnimation: AnimationTriggerMetadata =
  // trigger('routeAnimations', [
  //   transition('* <=> *', [
  //     group([
  //       query(':enter', [
  //         style({transform: 'translateX({{offsetEnter}}%)'}),
  //         animate('1.4s ease-in-out', style({transform: 'translateX(0%)'}))
  //       ], {optional: true}),
  //       query(':leave', [
  //         style({transform: 'translateX(0%)'}),
  //         animate('1.4s ease-in-out', style({transform: 'translateX({{offsetLeave}}%)'}))
  //       ], {optional: true}),
  //     ])
  //   ]),
  // ]);

// Define the employee interface
interface Employee {
  name: string;
}

// Define the department interface
interface Department {
  name: string;
  employees: Employee[];
}

// Employee builder
class EmployeeBuilder {
  protected employee: Employee;

  constructor(private readonly builder: DepartmentBuilder) {
    this.employee = { name: '' };
  }

  name(name: string): DepartmentBuilder {
    this.employee.name = name;
    return this.builder;
  }

  build(): Employee {
    return this.employee;
  }
}

// Department builder
class DepartmentBuilder {
  protected department: Department;
  protected employeeBuilders: EmployeeBuilder[] = [];

  constructor() {
    this.department = { name: '', employees: [] };
  }

  name(name: string): this {
    this.department.name = name;
    return this;
  }

  employee(): EmployeeBuilder {
    const employeeBuilder = new EmployeeBuilder(this);
    this.employeeBuilders.push(employeeBuilder);
    return employeeBuilder;
  }

  build(): Department {
    this.department.employees = this.employeeBuilders.map(builder => builder.build());
    return this.department;
  }
}

// Example usage
const department = new DepartmentBuilder()
  .name('Finance')
  .employee()
    .name('John')
  .employee()
    .name('Sarah')
  .build();

console.log(department);

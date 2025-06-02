import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [];
  position: string[] = [];

  condition = false;

  keys:any;

  dataSource: any = [
    { name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { name: 'Helium', weight: 4.0026, symbol: 'He' },
    { name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { name: 'Boron', weight: 10.811, symbol: 'B' },
    { name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

  users: any[] = [
    { name: "name", label: "Name" },
    { name: "weight", label: "Weight" },
    { name: "symbol", label: "Symbol" }
  ];

  list: any[] = [
    [
      { name: "name", label: "Name" },
      { name: "weight", label: "Weight" },
      { name: "symbol", label: "Symbol" }
    ],
    [
      { name: "weight", label: "Weight" },
      { name: "name", label: "Name" }
    ],
    [
      { name: "symbol", label: "Symbol" }
    ],
    [
      { name: "symbol", label: "Symbol" }
    ]
  ]

  cardViewFields: any = {
    "line1": [
      { name: "name", label: "Name" },
      { name: "weight", label: "Weight" },
      { name: "symbol", label: "Symbol" }
    ],
    "line2": [
      { name: "weight", label: "Weight" },
      { name: "name", label: "Name" }
    ],
    "line3": [
      { name: "symbol", label: "Symbol" }
    ],
    "line4": [
      { name: "weight", label: "Weight" },
      { name: "name", label: "Name" }
    ]
  }


  ngOnInit(): void {
    this.addRow();

    let group: any = [];

    // for (let val in this.list) {
    //   for (let data of this.list[val]) {
    //     const key = data.name;
    //     for (let i in this.dataSource) {
    //       console.log(this.dataSource[i][key])
    //     }
    //   }
    // }

    // this.keys = Object.keys(this.cardViewFields);

    for (let data of this.dataSource) {
      for (let i in this.cardViewFields) {
        // console.log(i);
        for (let val of this.cardViewFields[i]) {
          console.log(data[val.name]);
        }
      }
    }


    // for (let val of this.cardViewFields) {
    //   console.log(val[0].name)
    // }

    // for (let data of this.dataSource) {
    //   for (let i in this.list) {
    //     for (let val of this.list[i]) {
    //       console.log(data[val.name]);
    //     }
    //   }
    // }

    for (let i in this.dataSource) {
      console.log(i)
    }

    console.log(this.dataSource.name)
  }

  onClick() {
    this.condition = !this.condition;
  }

  addRow() {
    const array = this.users.map((column: any) => column.name);
    const pos = this.dataSource.map((column: any) => column.position);
    this.position = pos;
    this.displayedColumns = array;
    console.log(this.displayedColumns)
  }
}

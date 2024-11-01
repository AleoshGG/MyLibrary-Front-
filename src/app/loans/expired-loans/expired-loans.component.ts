import { Component, OnInit } from '@angular/core';
import { LoansService } from '../service/loans.service';
import { iExpired } from '../models/iExpired';
import { iStatus } from '../models/iStatus';

@Component({
  selector: 'expired-loans',
  templateUrl: './expired-loans.component.html',
  styleUrl: './expired-loans.component.css',
})
export class ExpiredLoansComponent implements OnInit {
  listExpiredLoans: iExpired[] = [];

  constructor(private service: LoansService) {}

  ngOnInit(): void {
    this.service.getLoansExpired().subscribe({
      next: (response) => {
        this.listExpiredLoans = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  suspendetAccount(id_reader: number): void {
    const stasus: iStatus = {
      id_reader: id_reader,
      status: 'suspended',
    };

    this.service.setStatus(stasus).subscribe({
      next(value) {
        console.log(value);
        alert('Cuenta suspendida');
      },
      error(err) {
        console.error(err);
      },
    });
  }

  deleteAccount(id_reader: number): void {
    this.service.deleteAccount(id_reader).subscribe({
      next(value) {
        console.log(value);
      },
      error(err) {
        console.error(err);
      },
    });
  }
}

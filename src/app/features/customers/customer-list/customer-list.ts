import { Component, ChangeDetectionStrategy, inject, signal,computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CustomerApi } from '../../../core/customer-api';
import { Customer } from '../../../models/customer.model';
import { httpResource } from '@angular/common/http';

@Component({
  selector: 'app-customer-list',
  imports: [RouterLink, DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.scss',
})
export class CustomerList {
  private readonly api = inject(CustomerApi);

  protected readonly customersResource =
  httpResource<Customer[]>(() => '/api/customers');

protected readonly searchTerm = signal('');

protected readonly filteredCustomers = computed(() => {
  const customers = this.customersResource.value() ?? [];
  const term = this.searchTerm().toLowerCase();

  if (!term) {
    return customers;
  }

  return customers.filter(c =>
    c.customerName.toLowerCase().includes(term) ||
    c.customerCode.toLowerCase().includes(term)
  );
});
  

 

 protected remove(customer: Customer): void {
  if (!confirm(`Delete ${customer.customerName}?`)) {
    return;
  }

  this.api.remove(customer.customerId).subscribe({
    next: () => this.customersResource.reload(),
    error: () => alert('Delete failed.')
  });
}
}
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent, SelectConfig } from '@krai-tech/kit/select';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'kri-multiple-reactive-form',
  standalone: true,
  imports: [CommonModule, SelectComponent, ReactiveFormsModule],
  templateUrl: './multiple-reactive-form.component.html',
  styleUrl: './multiple-reactive-form.component.scss',
})
export class MultipleReactiveFormComponent {
  fb = inject(FormBuilder);

  @Input() multiple = true;

  @Input() config: SelectConfig = {
    search: true,
  };

  form = this.fb.group({
    select: [
      [
        {
          _id: '5a66d6c31d5e4e36c7711b7a',
          index: 0,
          balance: '$2,806.37',
          picture: 'http://placehold.it/32x32',
          name: 'Burns Dalton',
          disabled: true,
        }
      ],
      Validators.required,
    ],
  });

  options = [
    {
      _id: '5a66d6c31d5e4e36c7711b7a',
      index: 0,
      balance: '$2,806.37',
      picture: 'http://placehold.it/32x32',
      name: 'Burns Dalton',
      disabled: true,
    },
    {
      _id: '5a66d6c3657e60c6073a2d22',
      index: 1,
      balance: '$2,984.98',
      picture: 'http://placehold.it/32x32',
      name: 'Mcintyre Lawson',
    },
    {
      _id: '5a66d6c376be165a5a7fae33',
      index: 2,
      balance: '$2,794.16',
      picture: 'http://placehold.it/32x32',
      name: 'Amie Franklin',
    },
    {
      _id: '5a66d6c3f7854b6b4d96333b',
      index: 3,
      balance: '$2,537.14',
      picture: 'http://placehold.it/32x32',
      name: 'Jocelyn Horton',
    },
    {
      _id: '5a66d6c31f967d4f3e9d84e9',
      index: 4,
      balance: '$2,141.42',
      picture: 'http://placehold.it/32x32',
      name: 'Fischer Erickson',
    },
    {
      _id: '5a66d6c34cfa8cddefb31602',
      index: 5,
      balance: '$1,398.60',
      picture: 'http://placehold.it/32x32',
      name: 'Medina Underwood',
    },
    {
      _id: '5a66d6c3d727c450794226de',
      index: 6,
      balance: '$3,915.65',
      picture: 'http://placehold.it/32x32',
      name: 'Goldie Barber',
    },
  ];

  onSelectChange(event: any) {
    console.log(event);
  }

  onSelectSearchChange(event: any) {
    console.log(event);
  }
}

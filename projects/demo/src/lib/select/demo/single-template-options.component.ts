import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@krai-tech/kit/icon';
import { SelectComponent } from '@krai-tech/kit/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'kri-single-template-options',
  standalone: true,
  imports : [CommonModule, IconComponent, SelectComponent, FormsModule],
  templateUrl: './single-template-options.component.html',
  styleUrl: './single-template-options.component.scss',
})
export class SingleTemplateOptionsComponent {
  vm = [
    {
      _id: '5a66d6c3657e60c6073a2d22',
      index: 1,
      balance: '$2,984.98',
      picture: 'http://placehold.it/32x32',
      name: 'Mcintyre Lawson',
    },
  ];

  options = [
    {
      _id: '5a66d6c31d5e4e36c7711b7a',
      index: 0,
      balance: '$2,806.37',
      picture: 'http://placehold.it/32x32',
      name: 'Burns Dalton',
      disabled: false,
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
}

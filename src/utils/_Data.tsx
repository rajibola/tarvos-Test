import React from 'react';
import Arrow from '../assets/icons/double-arrow.svg';
import Shield from '../assets/icons/shield.svg';
import Smile from '../assets/icons/smile.svg';
import Sun from '../assets/icons/sun.svg';
import {mask} from '../assets/images';
import {colors} from '../components';
import {CartProps} from '../types/types.d';
import {wp} from './layout';

export const ListData = [
  {
    title: 'Anti-pollution, anti-dust',
    icon: <Shield height={wp(20)} width={wp(20)} fill={colors.black} />,
  },
  {
    title: 'Reusable',
    icon: <Arrow height={wp(20)} width={wp(20)} fill={colors.black} />,
  },
  {
    title: 'Pleated at sides for extra comfort',
    icon: <Smile height={wp(20)} width={wp(20)} fill={colors.black} />,
  },
  {
    title: 'Wider face coverage for maximum protection',
    icon: <Sun height={wp(20)} width={wp(20)} fill={colors.black} />,
  },
];

export const Data: CartProps[] = [
  {
    id: 1,
    name: 'UNEO',
    price: 199,
    amount: 2,
    image: mask.one,
    color: '#C3E5E4',
    size: 'M',
    total: 0,
  },
  {
    id: 2,
    name: 'US Polo',
    price: 299,
    amount: 3,
    image: mask.two,
    color: '#E6E6E6',
    size: 'M',
    total: 0,
  },
  {
    id: 3,
    name: 'HERO',
    price: 199,
    amount: 2,
    image: mask.three,
    color: '#D1D4D8',
    size: 'M',
    total: 0,
  },
  {
    id: 4,
    name: 'UNEO',
    price: 199,
    amount: 2,
    image: mask.four,
    color: '#F7F0E4',
    size: 'M',
    total: 0,
  },
  {
    id: 5,
    name: 'Wild Craft',
    price: 150,
    amount: 3,
    image: mask.five,
    color: '#FCEAF2',
    size: 'M',
    total: 0,
  },
];

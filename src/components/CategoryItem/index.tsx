import React from 'react';

import {
  CategoryContainer,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  RedCircle,
  Info,
} from './styles';

import data from '../CategoryList/data';

interface ItemProps {
  item: typeof data[0];
}

const CategoryItem: React.FC<ItemProps> = ({ item }) => (
  <CategoryContainer>
    <CategoryImage source={item.source} />
    <CategoryName numberOfLines={1}>{item.name}</CategoryName>
    <CategoryStatus>
      <RedCircle />
      <Info>51.9K</Info>
    </CategoryStatus>
  </CategoryContainer>
);

export default CategoryItem;

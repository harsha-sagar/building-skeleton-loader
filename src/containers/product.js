import React, { useState, useEffect } from 'react';
import '../style.css';
import ProductComponent from '../components/product';
import SkeletonLoader from '../components/SkeletonLoader';

export default function Product() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});

  const skeletonBlueprint = [
    {
      elemCategory: 'text',
      width: '100%',
      height: '10px'
    },
    {
      elemCategory: 'collection',
      arrangeDirection: 'row',
      children: [
        {
          elemCategory: 'circle',
          width: '80px',
          height: '100px'
        },
        {
          elemCategory: 'collection',
          arrangeDirection: 'column',
          children: [
            {
              elemCategory: 'text',
              width: '150px',
              height: '10px',
              repeat: 3
            }
          ]
        }
      ]
    },
    {
      elemCategory: 'text',
      width: '100%',
      height: '10px',
      repeat: 8
    }
  ];

  useEffect(() => {
    // explicit deplay introduced to observe & highlight loading effect
    setTimeout(() => {
      fetch('https://fakestoreapi.com/products/2')
        .then(res => res.json())
        .then(product => {
          setLoading(false);
          setProduct(product);
        });
    }, 2000);
  }, []);

  return (
    <SkeletonLoader loading={loading} skeletonBlueprint={skeletonBlueprint}>
      <ProductComponent productData={product} />
    </SkeletonLoader>
  );
}

import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    { id: 1, name: 'Product A', price: 29.99, image: '/product-a.jpg' },
    { id: 2, name: 'Product B', price: 49.99, image: '/product-b.jpg' },
    { id: 3, name: 'Product C', price: 39.99, image: '/product-c.jpg' },
  ];
  return NextResponse.json(products);
}

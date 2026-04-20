import FoodCard from "./FoodCard";

export default function FoodList({ products }) {
  return (
    <div>
      {products.map((item) => (
        <FoodCard key={item.code} product={item} />
      ))}
    </div>
  );
}
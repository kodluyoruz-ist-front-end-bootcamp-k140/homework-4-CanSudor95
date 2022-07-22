import { Link, useParams } from "react-router-dom";
import products from "../data";
const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);

  //product.image ve product.name yerine sadece name ve image yazmayı sağlıyor
  const { image, name } = product;
  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to="/products">Back to Products Page</Link>
    </section>
  );
};

export default SingleProduct;

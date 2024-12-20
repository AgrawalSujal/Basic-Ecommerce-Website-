import { Button, Card, Image, Text } from "@chakra-ui/react";
import { useDispatch, useNavigate } from "react-redux";
const demo = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addProduct = (product) => {
    dispatch(addCart(product));
    // toast.success(`${product.title} added to cart!`);
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const products = await response.json();
        setData(products);
        setFilter(products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const filterProduct = (category) => {
    const filteredProducts = data.filter((item) => item.category === category);
    setFilter(filteredProducts);
  };

  const Loading = () => {
    return (
      <div className="row justify-content-center">
        <div className=" flex-direction:column justify-content-center container py-5 text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
          <div className="text">
            <i>
              <h4>Please Waiting Loading Items...</h4>
            </i>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="buttons text-center py-3 text-white bg-gray-600 font-bold">
        <button
          className="btn btn-outline-dark btn-sm m-2"
          onClick={() => setFilter(data)}
        >
          All Products
        </button>
        <button
          className="btn btn-outline-dark btn-sm m-2"
          onClick={() => filterProduct("men's clothing")}
        >
          Men's Clothing
        </button>
        <button
          className="btn btn-outline-dark btn-sm m-2"
          onClick={() => filterProduct("women's clothing")}
        >
          Women's Clothing
        </button>
        <button
          className="btn btn-outline-dark btn-sm m-2"
          onClick={() => filterProduct("jewelery")}
        >
          Jewelery
        </button>
        <button
          className="btn btn-outline-dark btn-sm m-2"
          onClick={() => filterProduct("electronics")}
        >
          Electronics
        </button>
      </div>
      {filter.map((product) => (
        <div key={product.id} className="id">
          <Card.Root maxW="sm" overflow="hidden">
            <Image
              src={product.image}
              alt="Green double couch with wooden legs"
            />
            <Card.Body gap="2">
              <Card.Title>{product.title}</Card.Title>
              <Card.Description>{product.description}</Card.Description>
              <Text
                textStyle="2xl"
                fontWeight="medium"
                letterSpacing="tight"
                mt="2"
              >
                {product.price}
              </Text>
            </Card.Body>
            <Card.Footer gap="2">
              <Button variant="solid">Buy now</Button>
              <Button variant="ghost">Add to cart</Button>
            </Card.Footer>
          </Card.Root>
        </div>
      ))}
    </>
  );
};

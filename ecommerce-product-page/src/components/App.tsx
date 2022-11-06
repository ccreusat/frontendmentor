import { useState, useEffect, Fragment } from "react";
import { Header } from "./Header";
import { Product } from "./Product";
import { Logo } from "./Logo";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState<boolean>(false);
  const [updatedProduct, setUpdatedProduct] = useState<any>({});

  useEffect(() => {
    let value = 5000;
    const timer = setInterval(() => {
      setIsLoading(false);
    }, value);
    return () => clearInterval(timer);
  }, [isLoading])

  useEffect(() => {
    const abortController = new AbortController();
     
    async function fetchProduct() {
      const response = await fetch("https://api.jsonbin.io/v3/b/62f66248a1610e6386faa33c", {signal: abortController.signal});
      const responseJSON = await response.json();
      const data = responseJSON.record;

      setProduct(data);
      setLoaded(true);
    }
    fetchProduct();

    return () => abortController.abort();
  },[]);

  return (
      <Fragment>
        { isLoading ? (
            <div className="flex place-center vh">
              <div>
                <Logo />
                <div className="progress-bar"></div>
              </div>
            </div>
          ) : (
            <Fragment>
              <Header updatedProduct={updatedProduct} />
              <main className="container">
                {loaded && <Product product={product} updatedProduct={setUpdatedProduct} />}
              </main>
            </Fragment>
          )
        }
      </Fragment>
  )
}

export default App

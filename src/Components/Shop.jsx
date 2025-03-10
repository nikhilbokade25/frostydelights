import './Shop.css';
import productImg1 from "../Assets/product1.jpg";
import productImg2 from "../Assets/product2.jpg";
import productImg3 from "../Assets/product3.jpg";
import productImg4 from "../Assets/product4.jpg";

export default function Shop() {
    return (
        <div className="shop_container">
            <h1>Scoop in Some Sweetness</h1>
            <div className='shop_products'>
                
                <div className='products'>
                    <img src={productImg1} alt='product 1' />
                </div>

                <div className='products'>
                <img src={productImg2} alt='product 1' />
                </div>

                <div className='products'>
                <img src={productImg3} alt='product 1' />
                </div>

                <div className='products'>
                <img src={productImg4} alt='product 1' />
                </div>
            </div>
        </div>
    );
}


import Product from '../Product'
import Dialog from '../Dialog'
import { Books } from '../../data/books';
export default function Shop() {
    return (
        <>
            <Dialog></Dialog>
            {
                Books.map(product => <Product key={product.id} product={product}/>)
            }
        </>
    );
}
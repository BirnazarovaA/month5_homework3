import {Link} from "react-router-dom";

export default function Product({cap}) {
    return(
        <div>
            <h3><Link to={`/products/${cap.id}/`}>{cap.name} {cap.price}сом</Link></h3>
        </div>
    )


}

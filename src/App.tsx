import { useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  return (
    <div>
      <Navbar cartItemsCount={cartItems.length} />
      <Cart
        cartItems={cartItems}
        onClear={() => console.log(setCartItems([]))}
      />
      <ExpandableText maxChars={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quod
        temporibus laudantium. Minima architecto consequatur delectus, nobis
        iusto laborum minus magnam nisi, in quibusdam repellendus quidem atque
        officia, voluptatem nesciunt. Deserunt ullam asperiores ipsa ipsam dolor
        aliquam itaque harum? Corrupti excepturi ab, aliquam nulla velit,
        laudantium non harum tempore soluta commodi dolor ratione laboriosam?
        Commodi nisi nulla, vero repudiandae sunt ab tempora exercitationem
        numquam distinctio beatae voluptate iste delectus nesciunt harum quam,
        qui tempore deleniti quibusdam. Qui numquam distinctio, voluptate nemo
        vero, alias veniam non facere repudiandae, optio quam voluptas odit?
        Vero veniam repellendus quaerat eum? Praesentium ea expedita odio.
      </ExpandableText>
    </div>
  );
}

export default App;

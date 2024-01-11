import { Route, Routes } from "react-router-dom";
import Home from "Routes/Home";
import Layout from "Layout";
import Order from "Routes/Order";

function Router() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default Router;

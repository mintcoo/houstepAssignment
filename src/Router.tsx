import { Route, Routes } from "react-router-dom";
import Home from "Routes/Home";
import Layout from "Layout";
import Order from "Routes/Order";
import Complete from "Routes/Complete";
import Error from "Routes/Error";

function Router() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/error" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default Router;

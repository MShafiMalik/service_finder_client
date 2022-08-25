import Layout from "./modules/Layout";
import BasePage from "./BasePage";
import { useDispatch } from "react-redux";
import { me } from "./helpers/auth";
import { useEffect, useState } from "react";
import { isMeAuth } from "./reducers/authSlice";
import { ToastContainer } from "react-toastify";

export function WebRoutes() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      me().then((response) => {
        if (response?.status === 200) {
          const user = response.data.data;
          dispatch(isMeAuth({ user }));
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
    } catch (error) {
      setLoading(false);
    }
  }, [dispatch]);

  if (loading === true) {
    return (
      <>
        <div>Loading..</div>
      </>
    );
  }

  return (
    <Layout>
      <ToastContainer />
      <BasePage />
    </Layout>
  );
}

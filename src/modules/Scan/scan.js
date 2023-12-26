import { Fragment, useEffect } from "react";
import Header from "../../components/header/header";
import { useState } from "react";
import Loading from "../../components/cards/loading/loading";
import ErrorButton from "../../components/cards/errorNotification/errorButton";

const Scan = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState({ hasError: false, message: "" });
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("localhost:8000/scan")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError({ hasError: true, message: error.message });
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading />;
  }

  if (error.hasError) {
    return (
      <ErrorButton
        error={error.hasError}
        message={error.message}
        setError={setError}
      />
    );
  }
  if (data) {
    return (
      <Fragment>
        <Header />
      </Fragment>
    );
  }
};
export default Scan;

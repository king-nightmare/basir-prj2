import { Fragment, useState } from 'react';
import Header from '../../components/header/header';
import Loading from '../../components/cards/loading/loading';
import ErrorButton from '../../components/cards/errorNotification/errorButton';

const Scan = () => {
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState({ hasError: false, message: '' });
  const [loading, setLoading] = useState(false); // Start with loading true

  const Scanner =() => {
    setLoading(true);
    const imageUrl = `https://picsum.photos/200/300?random=${Date.now()}`; // Append a unique timestamp
  
     fetch(imageUrl, { cache: "no-store" }) // Suggest to the browser not to store the cache
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.blob(); // Handle image as a Blob
      })
      .then((blob) => {
        // Create a local URL for the blob object
        const imageUrl = URL.createObjectURL(blob);
        setImageData(imageUrl);
        setLoading(false);
      })
      .catch((error) => {
        setError({ hasError: true, message: error.message });
        setLoading(false);
      });
  
    // Clean up the blob URL when the component unmounts
    return () => {
      if (imageData) URL.revokeObjectURL(imageData);}}
    

  if (loading) {
    return <Loading />;
  }

  if (error.hasError) {
    return <ErrorButton error={error.hasError} message={error.message} setError={setError} />;
  }

  // When data is available and there's no loading or error
  return (
    <Fragment>
      <Header />
      <button onClick={Scanner}>Scan</button>
      {imageData && <img src={imageData} alt="Scanned" />}
    </Fragment>
  );
};

export default Scan;
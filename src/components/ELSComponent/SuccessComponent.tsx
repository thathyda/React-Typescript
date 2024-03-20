import { Alert } from 'flowbite-react';
import { useState, useEffect } from 'react';

export default function SuccessComponent() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {visible && (
        <div className="fixed bottom-2 left-2">
          <Alert color="success" onDismiss={() => setVisible(false)}>
            <span className="font-medium">Success</span> Your product has been added into our server!!
          </Alert>
        </div>
      )}
    </>
  );
}

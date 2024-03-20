
'use client';

import { HiInformationCircle } from 'react-icons/hi';
import { Alert } from 'flowbite-react';
import { useState,useEffect } from 'react';

export default function ErrorComponent() {
  return (
    <>
    <Alert color="failure" icon={HiInformationCircle}>
      <span className="font-medium">Error</span> Please reloading page again it might be some error connection, please contact to the developer Seu he will check and try to ask ChatGPT and fix the application as fast as he can!!
    </Alert>
    <br/>
    </>
  );
}

export function ErrorCreate() {
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
        <div className="fixed bottom-2 left-2 ">
          <Alert color="failure" icon={HiInformationCircle} onDismiss={() => setVisible(false)}>
            <span className="font-medium">Error</span> Create Failed
          </Alert>
        </div>
      )}
    </>
  );
}

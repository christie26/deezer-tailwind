import React from "react";
import Alert from "./Alert";

/*
Alert Palette components to show various type of Alert.

Props: none
States: none

Way to appoarch : Try to mimic chakra's palette to show various types of components.

*/

const AlertPalette: React.FC = () => {
  return (
    <div className="mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl text-gray-900 font-semibold text-center mb-6">
        Alert Palette
      </h2>
      {/* Alert Deezer */}
      <div className="mb-6">
        <h3 className="text-xl mb-4 text-gray-900	font-semibold">
          Alert Deezer
        </h3>
        <div className="flex flex-col justify-center items-center gap-4">
          <Alert status="error" title="Erreur" colorPalette="deezer">
            Tes identifiants sont incorrects. Réessaye.
          </Alert>
          <Alert status="info" title="New Album" colorPalette="deezer">
            New song from G-DRAGON! HOME SWEET HOME
          </Alert>
        </div>
      </div>

      {/* Alert Status */}
      <div className="mb-6">
        <h3 className="text-xl mb-4 text-gray-900	font-semibold">
          Alert Status
        </h3>
        <div className="flex flex-col justify-center items-center gap-4">
          <Alert
            status="error"
            title="There was an error processing your request"
          />
          <Alert
            status="info"
            title="Chakra is going live on August 30th. Get ready!"
          />
          <Alert
            status="warning"
            title="Seems your account is about expire, upgrade now"
          />
          <Alert
            status="success"
            title="Data uploaded to the server. Fire on!"
          />
          <Alert
            status="neutral"
            title="Data uploaded to the server. Fire on!"
          />
        </div>
      </div>

      {/* Alert Variant */}
      <div className="mb-6">
        <h3 className="text-xl mb-4 text-gray-900	font-semibold">
          Alert Variant
        </h3>
        <div className="flex flex-col justify-center items-center gap-4">
          <Alert
            status="success"
            variant="subtle"
            title="Data uploaded to the server. Fire on!"
          />
          <Alert
            status="success"
            variant="solid"
            title="Data uploaded to the server. Fire on!"
          />
          <Alert
            status="success"
            variant="surface"
            title="Data uploaded to the server. Fire on!"
          />
        </div>
      </div>
      
      {/* Alert Description */}
      <div className="mb-6">
        <h3 className="text-xl mb-4 text-gray-900	font-semibold">
          Alert with desciption
        </h3>
        <Alert status="error" title="Invalid Fields">
          Your form has some errors. Please fix them and try again.
        </Alert>
      </div>
    </div>
  );
};

export default AlertPalette;

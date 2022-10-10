import React, { useState } from 'react'
import { Alert} from 'react-bootstrap'
import { FaShippingFast } from "react-icons/fa";

const AlertMsg = () => {
    const [show, setShow] = useState(true);
    
    if (show) {
        return (
          <Alert variant="info"  onClose={() => setShow(false)} dismissible>
            Solo por hoy envios gratis!! <FaShippingFast/>
          </Alert>
        );
      }
  
}

export default AlertMsg
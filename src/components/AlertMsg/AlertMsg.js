import React, { useState } from 'react'
import { Alert} from 'react-bootstrap'
import { FaShippingFast } from "react-icons/fa";

const AlertMsg = () => {
    const [show, setShow] = useState(true);
    
    if (show) {
        return (
          <Alert variant="primary" style={{backgroundColor:"purple", color:"white"}} onClose={() => setShow(false)} dismissible>
            Solo por hoy envios gratis!! <FaShippingFast/>
          </Alert>
        );
      }
  
}

export default AlertMsg
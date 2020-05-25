import "bootstrap/dist/css/bootstrap.min.css";
import "./request.scss";

import React from "react";
import EditRequestModal from "../../modals/edit-request-modal";

const Request = ({
  _id,
  pickupLocation,
  deliveryLocation,
  pickupDate,
  deliveryDate,
}) => {
  return (
    <div className="request">
      <section className="request-main">
        <article>
          <h3 className="request-heading">Място за взимане:</h3>
          <span className="request-content">{pickupLocation}</span>
        </article>
        <article>
          <h3 className="request-heading">Място за доставяне:</h3>
          <span className="request-content">{deliveryLocation}</span>
        </article>
        <article>
          <h3 className="request-heading">Дата за взимане:</h3>
          <span className="request-content">{pickupDate}</span>
        </article>
        <article>
          <h3 className="request-heading">Дата за доставяне:</h3>
          <span className="request-content">{deliveryDate}</span>
        </article>
      </section>
      <EditRequestModal requestId={_id} />
    </div>
  );
};

export default Request;
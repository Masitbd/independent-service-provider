import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const serviceid = useParams();
  console.log(serviceid);
  return (
    <div>
      <h2>service detaile page</h2>
    </div>
  );
};

export default ServiceDetail;

import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import DefaultRedirect from "../helpers/defaultRedirect";


//Component for each item on menu structure, passes in an items group
function Item({ items }) {
  const { id } = useParams();

  let item = items.find(item => item.id === id);
  if (!item) {
    alert('Item not found');
    return <DefaultRedirect/>
  }

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Item;

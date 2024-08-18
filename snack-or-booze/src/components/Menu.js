import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SnackOrBoozeApi from "../helpers/Api";
import {
  Card,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";


// Menu that will be displayed on the home page
function Menu() {
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Fetch snacks data and update the state
      const snacksData = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacksData);

      const drinksData = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinksData);
    }
    fetchData();
  }, []);

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Food Menu
          </CardTitle>
          <CardText>Take a look at our New and improved menu!</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            <Link to="/drinks">({drinks.length})Drinks</Link>
          </CardTitle>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            <Link to="/snacks">({snacks.length})Snacks</Link>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;

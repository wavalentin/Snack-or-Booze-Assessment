import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

// Form to add a new item to the menu
function AddItemForm({ addItem }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    group: "",
    name: "",
    description: "",
    recipe: "",
    serve: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(formData);
    history.push("/");
  };

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Add a New Item
          </CardTitle>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="group">Select Group</Label>
              <Input
                type="select"
                name="group"
                id="group"
                value={formData.group}
                onChange={handleChange}
                required
              >
                <option value="">Select Group</option>
                <option value="snacks">Snacks</option>
                <option value="drinks">Drinks</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="text"
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="recipe">Recipe</Label>
              <Input
                type="text"
                name="recipe"
                id="recipe"
                value={formData.recipe}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="serve">Serve</Label>
              <Input
                type="text"
                name="serve"
                id="serve"
                value={formData.serve}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <Button type="submit" color="primary">
              Add Item
            </Button>
          </Form>
        </CardBody>
      </Card>
    </section>
  );
}

export default AddItemForm;

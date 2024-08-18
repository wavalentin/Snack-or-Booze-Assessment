import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

class SnackOrBoozeApi {
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  static async addNewItem(formData) {
    try {
      // Extract the group from the formData
      const { group, name, description, recipe, serve } = formData;

      // Make sure the group is either "snacks" or "drinks"
      if (group !== "snacks" && group !== "drinks") {
        throw new Error("Invalid group. Please select snacks or drinks.");
      }

      // Create the new item object based on the provided data
      const newItem = {
        id: name.toLowerCase().replace(/\s+/g, "-"), // Convert to lowercase and replace spaces with dashes
        name,
        description,
        recipe,
        serve,
      };

      // Make the API call to add the new item
      const response = await axios.post(`${BASE_API_URL}/${group}`, newItem);
      return response.data;
    } catch (error) {
      console.error("Error adding new item:", error);
      throw error;
    }
  }
}

export default SnackOrBoozeApi;

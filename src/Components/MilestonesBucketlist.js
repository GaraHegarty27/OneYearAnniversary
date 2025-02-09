import React, { useState, useEffect } from "react";
import "../Css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Table } from "react-bootstrap";
import "../Css/MilestonesBucketlist.css";

function MilestonesBucketlist() {
  const [completedItems, setCompletedItems] = useState([]);

  // Load the state from local storage when the component mounts
  useEffect(() => {
    const storedCompletedItems = localStorage.getItem("completedItems");
    if (storedCompletedItems) {
      try {
        setCompletedItems(JSON.parse(storedCompletedItems));
      } catch (error) {
        console.error("Error loading from localStorage", error);
      }
    }
  }, []);

  // Save the state to local storage whenever it changes
  useEffect(() => {
    if (completedItems.length) { // Prevent saving empty arrays unnecessarily
      try {
        localStorage.setItem("completedItems", JSON.stringify(completedItems));
      } catch (error) {
        console.error("Error saving to localStorage", error);
      }
    }
  }, [completedItems]);

  const handleItemClick = (index) => {
    setCompletedItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const items = [
    "Start a family",
    "Manya graduate",
    "Manya become a surgeon",
    "Gara graduate",
    "Go to India together",
    "Go to Iceland (Glass igloo and northern Lights) together",
    "Go to Japan together (Cherry Blossom season)",
    "Visit the 7 wonders of the world together",
    "Visit 6 continents together (Antarctica too cold)",
    "Interrailing",
    "Go on a safari together",
    "Explore Ireland together (Route 66 of the Wild Atlantic Way)",
    "Go to Achill Island together",
    "Explore India together",
    "Go to a concert together",
    "Go to a Coldplay concert together",
    "Go see an Anuv Jain concert together",
    "Go see Arsenal play at the Emirates together",
    "Go see India play in a cricket match together",
    "Go to an Indian World Cup match together",
    "Go to an Ireland match together",
    "Go to an Ireland World Cup/Euros match together",
    "Go see Donegal play together",
    "Go see Donegal play in an All-Ireland final together",
    "Skydive together",
    "Run a marathon together",
    "Get 2 dogs",
    "Manya drive a car with Gara passenger princess",
    "Go to a theme park together",
    "Go to a Michelin Star Restaurant together",
    "Buy a house together",
    "Get engaged",
    "Get married",
  ];

  return (
    <Card className="milestones-card">
      <Card.Header className="milestones-header">
        <h3 className="milestones-header-h3">
          <strong>
            <u>Milestones and Bucket List</u>
          </strong>
        </h3>
      </Card.Header>

      <Card.Body>
        <Table className="milestones-table">
          <tbody>
            {items.map((item, index) => (
              <tr
                key={index}
                className={completedItems.includes(index) ? "completed" : ""}
                onClick={() => handleItemClick(index)}
              >
                <td colSpan="2">{item}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default MilestonesBucketlist;

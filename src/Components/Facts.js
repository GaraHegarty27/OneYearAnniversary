import React from "react";
import "../Css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, Table} from "react-bootstrap";
import { differenceInDays } from "date-fns";
import "../Css/Facts.css";


function Facts() {

    const currentDate = new Date();
    
      // Function to calculate days ago
      const calculateDaysAgo = (date) => {
        const pastDate = new Date(date);
        return differenceInDays(currentDate, pastDate);
      };
    
      // Example usage
      const firstDateDate = "2024-02-04";
      const firstDateDaysAgo = calculateDaysAgo(firstDateDate);
    
      const relationshipDate = "2024-03-03";
      const relationshipDateDaysAgo = calculateDaysAgo(relationshipDate);

   return (

       <Card className="facts-card">
           <Card.Header className="facts-header">
               <h3 className="facts-header-h3">
                   <strong><u>Facts about Manya and Gara</u></strong>
               </h3>
           </Card.Header>

           <Card.Body>
        <Table className="facts-table">
        <tbody>
            <tr>
              <td colSpan="2" style={{ color: "#333333", backgroundColor: "#F5DEB3", padding: "15px", border: "2.5px solid #333333"}}>
                Gara is 202 days older than Manya.
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ color: "#333333", backgroundColor: "#F5DEB3", padding: "15px", border: "2.5px solid #333333"}}>
                We went on our first date on the 4th of February 2024 which was {firstDateDaysAgo} days ago in which Manya wouldn't book Orto so we had to go to Nandos (Silly Bitch).
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ color: "#333333", backgroundColor: "#F5DEB3", padding: "15px", border: "2.5px solid #333333"}}>
                We have been officially together since the 3rd of March 2024 which was {relationshipDateDaysAgo} days ago.
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ color: "#333333", backgroundColor: "#F5DEB3", padding: "15px", border: "2.5px solid #333333"}}>
                We were born 4,363 miles apart.
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ color: "#333333", backgroundColor: "#F5DEB3", padding: "15px", border: "2.5px solid #333333"}}>
                We grew up exactly 4437.212 miles apart (from building to building).
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ color: "#333333", backgroundColor: "#F5DEB3", padding: "15px", border: "2.5px solid #333333"}}>
                Dino, Manyapoo, Small Bean, Missus, Darling and Gorgeous = Manya.
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ color: "#333333", backgroundColor: "#F5DEB3", padding: "15px", border: "2.5px solid #333333"}}>
                As of writing this at 3:42 pm on the 17th of January 2025 we have told eachother we love eachother 5448 times on Whatsapp .
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ color: "#333333", backgroundColor: "#F5DEB3", padding: "15px", border: "2.5px solid #333333"}}>
                We have been officially together since the 3rd of March 2024 which was {relationshipDateDaysAgo} days ago.
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
   );

}

export default Facts;
import React from 'react';
import {Card} from 'react-bootstrap';




  const CustomCard = ({val}) => {

    const renderProjectCard = (project, index) => {
      return (
          <Card key = {index}>
            <Card.Header><img className="card-image" src={require(`../assets/img/${project.src}/image.jpg`)} alt=""/></Card.Header>
            <Card.Body>
              <Card.Title className="customizedTitle">{project.name}</Card.Title>
              <Card.Text>
                {project.text}
              </Card.Text>
            </Card.Body>
          </Card>
      )
    }

    return (
      <>
        {renderProjectCard(val)}
      </>

    )
  }
export default CustomCard;
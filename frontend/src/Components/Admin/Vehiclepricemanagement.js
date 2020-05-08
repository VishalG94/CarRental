import React, { Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './manageusers.css';
import { Card, CardBody, CardHeader, CardText, CardTitle, Container,CardImg } from 'reactstrap';
import axios from 'axios';
import Constants from '../../Utils/Constants'
import Grid from '@material-ui/core/Grid';
import logo1 from './cartoy.jpg'



class Vehiclepricemanagement extends Component {
  constructor() {
    super();
    this.state = {
        username: "",
        allProjCards: [],
        category:"",
        hourlyfee:"",
        latefee:"",
    }

}

categoryhandler = (e) => {
  this.setState({
      category: e.target.value
  });
}
hourlyfeehandler = (e) => {
  this.setState({
      hourlyfee: e.target.value
  });
}
latefeehandler = (e) => {
  this.setState({
      latefee: e.target.value
  });
}

componentDidMount() {
      
  axios.get(`${Constants.BACKEND_SERVER.URL}/categories`).then((response) => {
  
    if (response.data != null) {
     var obj=(response.data)
      console.log(obj.categories)
      var projectCards = [],
        item,logo
      //for (var index in obj.vehicles) {
         Object.keys(obj.categories).map((index) =>
           {
            
             
        item=obj.categories[index]
       
        

        
        projectCards.push(
          
              
            <Card className="card">
           <CardImg top width="100%" src={logo1} alt="Card image cap" />
              <CardHeader><b>Category Name: </b>{item['CATEGORY_NAME']}</CardHeader>
              <CardBody>
              
                <CardTitle><b>Hourly Fee:</b> {item['HOURLY_FEE']}</CardTitle>
                <CardText><b>Late Fee:</b> {item['LATE_FEE']}</CardText>
              </CardBody>
              <Button href={`/admin/vehiclepricemanagement/view/${item['_id']}`}>View </Button>
            </Card>
           
            
        )
      })

      this.setState({
        allProjCards: projectCards
      })
    }
  })
            
      
        .catch((error) => { 
            console.log(error)
            this.setState({
                errMsg: "Error occured",
                successMsg: ""
            })
       })
}


addcategoryhandler = () => {
  if (this.state.category === "" || this.state.hourlyfee === "" || this.state.latefee === "")
        {
            this.setState({
                errMsg: "Required fields are empty",
                successMsg: ""
            })
        }
        else 
        {
          const data={
            CATEGORY_NAME: this.state.category,
            HOURLY_FEE: this.state.hourlyfee,
            LATE_FEE:this.state.latefee,
          }
          axios.post(`${Constants.BACKEND_SERVER.URL}/category`, data)
            
            .then((response) => {
                console.log(response.data._id)
                
                    this.setState({
                        errMsg: "",
                        vehilceid:response.data._id,
                        successMsg: "Successfully Added"
            
                    })
                    
                    

                })
                .catch((error) => { 
                    console.log(error)
                    this.setState({
                        errMsg: "Error occured",
                        successMsg: ""
                    })
               })
 
        }

}


  render() {
    return (
      <div className="manageusers">
        <h1>Set Up New Vehicle Pricing</h1>
        
        <Grid>
        <Row form >
                    <Col  >
                        <FormGroup>
                            <Label for="carname" >Enter Category Name</Label>
                            <Input type="text" font-size="20px" name="carname" onChange={this.categoryhandler} id="carname" placeholder="Ex: TUV" value={ this.state.category } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <Col  >
                        <FormGroup>
                            <Label for="carname" >Enter Hourly fees</Label>
                            <Input type="text" font-size="20px" name="carname" onChange={this.hourlyfeehandler} id="carname" placeholder="Ex: 30" value={ this.state.hourlyfee } style={{ width: "350px" }}/>
                        </FormGroup>
                    </Col>
                    <Col  >
                        <FormGroup>
                            <Label for="carname" >Enter Late Fees</Label>
                            <Input type="text" font-size="20px" name="carname" onChange={this.latefeehandler} id="carname" placeholder="Ex: 20" value={ this.state.latefee } style={{ width: "350px" }}/>
                        </FormGroup>
                        <Button onClick={this.addcategoryhandler} style={{ width: "350px" }}> Add Category </Button>
                    </Col>
                    <p className="text-danger text-center">{ this.state.errMsg }</p>
                    <p className="text-success text-center">{ this.state.successMsg }</p> 

                    
                <h3>AVailable Categories</h3>
                <Container>
								{ this.state.allProjCards }
							</Container>
                </Row>
                </Grid>
      </div>
    );
  }
}

export default Vehiclepricemanagement;

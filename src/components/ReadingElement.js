import React, { Component } from "react";
import { Card, CardContent, Typography, CardActions, Fab, Grid } from "@material-ui/core";
import DeleteIcon  from "@material-ui/icons/Delete";

export default class ReadingElement extends Component {
  render() {
    return (
      <Card variant="outlined" color="primary" style={{padding:20, margin:15, fontFamily: 'Raleway',}}>
        <CardContent>
          <Typography color="textSecondary">SN Number</Typography>
          {this.props.snNumber}
          <Typography color="textSecondary">Meter_No</Typography>
          {this.props.meterNumber}
          <Typography color="textSecondary">Meter_No On Field</Typography>
          {this.props.meterNumberOnField}
          <Typography color="textSecondary">AcctNo</Typography>
          {this.props.accountNumber}
          <Typography color="textSecondary">NameOfCustomer</Typography>
          {this.props.nameOfCustomer}
          <Typography color="textSecondary">District</Typography>
          {this.props.district}
          <Typography color="textSecondary">Reading Date</Typography>
          {this.props.readingDate}
          <Typography color="textSecondary">KWH(Reading)</Typography>
          {this.props.readingKWH}
          <Typography color="textSecondary">Status</Typography>
          {this.props.status}
          <Typography color="textSecondary">Remarks</Typography>
          {this.props.remarks}
        </CardContent>
        <Grid container direction="row" justify="center">
          <Grid>
            <Fab color="secondary" size="small" onClick={this.props.delete} delete={this.delete}>
              <DeleteIcon color="white"/>
            </Fab>
          </Grid>
        </Grid>
      </Card>
    );
  }
}

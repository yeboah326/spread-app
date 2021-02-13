import React, { Component } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
} from "@material-ui/core";

export default class ReadingElementForm extends Component {
  render() {
    return (
      <Card
        variant="outlined"
        color="primary"
        style={{ padding: 20, margin: 15, fontFamily: "Raleway" }}
      >
        <CardContent>
          <Typography color="textSecondary">Page Title</Typography>
          <TextField
            onBlur={this.props.set}
            set={this.set}
            id="pageTitle"
          ></TextField>
          <Typography color="textSecondary">SN Number</Typography>
          <TextField
            onBlur={this.props.set}
            set={this.set}
            id="snNumber"
          ></TextField>
          <Typography color="textSecondary">Meter_No</Typography>
          <TextField
            onBlur={this.props.set}
            set={this.set}
            id="meterNumber"
          ></TextField>
          <Typography color="textSecondary">Meter_No On Field</Typography>
          <TextField
            onBlur={this.props.set}
            set={this.set}
            id="meterNumberOnField"
          ></TextField>
          <Typography color="textSecondary">AcctNo</Typography>
          <TextField
            onBlur={this.props.set}
            set={this.set}
            id="accountNumber"
          ></TextField>
          <Typography color="textSecondary">NameOfCustomer</Typography>
          <TextField
            onBlur={this.props.set}
            set={this.set}
            id="nameOfCustomer"
          ></TextField>
          <Typography color="textSecondary">District</Typography>
          <TextField
            onBlur={this.props.set}
            set={this.set}
            id="district"
          ></TextField>
          <Typography color="textSecondary">Reading Date</Typography>
          <TextField
            onBlur={this.props.set}
            set={this.set}
            id="readingDate"
            type="date"
          ></TextField>
          <Typography color="textSecondary">KWH(Reading)</Typography>
          <TextField
            onBlur={this.props.set}
            set={this.set}
            id="readingKWH"
          ></TextField>
          <Typography color="textSecondary">Status</Typography>
          <TextField
            onBlur={this.props.set}
            set={this.set}
            id="status"
            type="date"
          ></TextField>
          <Typography color="textSecondary">Remarks</Typography>
          <TextField
            onBlur={this.props.set}
            set={this.set}
            id="remarks"
          ></TextField>
        </CardContent>
      </Card>
    );
  }
}

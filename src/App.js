import React, { Component } from "react";
import "@material-ui/core";
import "@material-ui/icons";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
// Custom
import ReadingElement from "./components/ReadingElement";
import ReadingElementForm from "./components/ReadingElementForm";
// Core
import {
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Card,
  CardContent,
  Typography,
  Fab,
  Container,
} from "@material-ui/core";
// Icons
import AddIcon from "@material-ui/icons/Add";
import GetAppIcon from "@material-ui/icons/GetApp";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      snNumber: "",
      meterNumber: "",
      meterNumberOnField: "",
      accountNumber: "",
      nameOfCustomer: "",
      district: "",
      readingDate: "",
      readingKWH: "",
      status: "",
      remarks: "",
      pageTitle: "",
      readings: [],
    };

    const initialReadings = [
      {
        snNumber: "1",
        meterNumber: "14330484",
        meterNumberOnField: "14330484",
        accountNumber: "204544191-4",
        nameOfCustomer: "GLO KUM044_KWADASO NSUOM",
        district: "ABUAKWA",
        readingDate: new Date(),
        readingKWH: "29967",
        status: new Date(),
        remarks: "Change site name",
      },
    ];
  }

  deleteReading = (index) => {
    const copyReadings = Object.assign([], this.state.readings);
    copyReadings.splice(index, 1);
    this.setState({
      readings: copyReadings,
    });
  };

  setReading = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    this.setState({ [key]: value });
  };

  addReading = () => {
    const copyReadings = Object.assign([], this.state.readings);
    copyReadings.push({
      snNumber: this.state.snNumber,
      meterNumber: this.state.meterNumber,
      meterNumberOnField: this.state.meterNumberOnField,
      accountNumber: this.state.accountNumber,
      nameOfCustomer: this.state.nameOfCustomer,
      district: this.state.district,
      readingDate: this.state.readingDate,
      readingKWH: this.state.readingKWH,
      status: this.state.status,
      remarks: this.state.remarks,
    });
    this.setState({
      readings: copyReadings,
    });
  };

  // Converting to PDF
  savePDF = () => {
    const pdf = new jsPDF("landscape", "mm", "a4");
    const dummyText = this.state.pageTitle;
    // Centering the heading in the pdf
    var textWidth =
      (pdf.getStringUnitWidth(dummyText) * pdf.internal.getFontSize()) /
      pdf.internal.scaleFactor;
    var textOffset = (pdf.internal.pageSize.width - textWidth) / 2;
    pdf.text(textOffset, 10, dummyText);
    pdf.autoTable({
      head: [
        [
          "S_No",
          "Meter_No",
          "Meter_No_On_Field",
          "AcctNo",
          "Name_Of_Customer",
          "District",
          "Reading_Date",
          "KWH(Reading)",
          "Status",
          "Remarks",
        ],
      ],
      body: this.state.readings.map((reading) => {
        return [
          reading.snNumber,
          reading.meterNumber,
          reading.meterNumberOnField,
          reading.accountNumber,
          reading.nameOfCustomer,
          reading.district,
          reading.readingDate,
          reading.readingKWH,
          reading.status,
          reading.remarks,
        ];
      }),
    });
    pdf.save();
  };

  render() {
    return (
      <Container>
        <Grid item>
          <Typography align="center" style={{ fontSize: 20 }}>
            Spread
          </Typography>
        </Grid>
        <Grid container direction="column" alignItems="center">
          <Grid container item direction="row" justify="center" sm={6} xs={12}>
            <ReadingElementForm set={this.setReading} />
          </Grid>
          {this.state.readings.map((reading, index) => {
            return (
              <Grid
                container
                item
                direction="row"
                justify="center"
                sm={6}
                xs={12}
              >
                <ReadingElement
                  snNumber={reading.snNumber}
                  meterNumber={reading.meterNumber}
                  meterNumberOnField={reading.meterNumberOnField}
                  accountNumber={reading.accountNumber}
                  nameOfCustomer={reading.nameOfCustomer}
                  district={reading.district}
                  readingDate={reading.readingDate}
                  readingKWH={reading.readingKWH}
                  status={reading.status}
                  remarks={reading.nameOfCustomer}
                  delete={this.deleteReading.bind(this, index)}
                />
              </Grid>
            );
          })}
          <div style={{ marginTop: 50 }}></div>
          <Grid
            container
            direction="row"
            justify="center"
            style={{ position: "fixed", bottom: 0 }}
          >
            <Grid
              container
              item
              direction="row"
              justify="space-between"
              md={4}
              sm={4}
              xs={6}
              style={{ margin: 15 }}
            >
              <Fab color="primary" onClick={this.addReading}>
                <AddIcon />
              </Fab>
              <Fab color="primary" onClick={this.savePDF}>
                <GetAppIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

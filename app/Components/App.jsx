var React = require('react');
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import Divider from 'material-ui/Divider';
import Country1 from './Country1.jsx';
import Country2 from './Country2.jsx';
import CountryCode from './CountryCode.jsx';
import Nationality from './Nationality.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import {lightBlue800,blue100,grey600,red500,grey300,grey900} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import axios from 'axios';
import { ValidatorForm, TextValidator, SelectValidator, DateValidator} from 'react-material-ui-form-validator';


const theme = getMuiTheme({
palette:{
  accent1Color:lightBlue800,
},
appBar: {
  color: lightBlue800,
},
raisedButton: {
  textAlign: 'center',
}
});

const style = {
  container:{margin:30},
  floating:{color:grey600},
  paper: { borderRadius:20, margin:0,padding: 20},
};


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      fname:'',mname:'',lname:'',gender:'',date:'',age:'',category:'',mstatus:'',mobile:'',areac:'',phone:'',
      add1c:'',add2c:'',cityc:'',statec:'',pinc:'',add1p:'',add2p:'',cityp:'',statep:'',pinp:'',nationality:'',count_code:'',
      countryc:'',countryp:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeNationality = this.changeNationality.bind(this);
    this.changeCountryCode = this.changeCountryCode.bind(this);
    this.changeCountry1 = this.changeCountry1.bind(this);
    this.changeCountry2 = this.changeCountry2.bind(this);
  }

changeCountry1(value){
  this.setState({countryc:value});
}
changeCountry2(value){
  this.setState({countryp:value});
}
changeNationality(value){
  this.setState({nationality:value});
}

changeCountryCode(value){
  this.setState({count_code:value});
}

  handleSubmit() {
    axios.post('http://localhost:8081/api/insert',{firstname:this.state.fname,middlename:this.state.mname,
                lastname:this.state.lname,
                gender:this.state.gender,
                nationality:this.state.nationality,
                dob:this.state.date,
                age:this.state.age,
                category:this.state.category,
                marital_status:this.state.mstatus,
                country_code:this.state.count_code,
                mobile:this.state.mobile, area_code:this.state.areac,
                phone:this.state.phone,
                address1_C:this.state.add1c, address2_C:this.state.add2c,
                city_C:this.state.cityc, state_C:this.state.statec, pin_C:this.state.pinc,
                country_C:this.state.countryc,
                address1_P:this.state.add1p, address2_P:this.state.add2p, city_P:this.state.cityp,
                state_P:this.state.statep, pin_P:this.state.pinp,
                country_P:this.state.countryp})
      .then(function(res){console.log(res);})
      .catch(function(e){console.log(e);});
  }



 render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
       <div className = "container" style={style.container}>



        <AppBar zDepth={1}
          title="Personal Details"
          showMenuIconButton={false}
          style={style.appBar}
        />
        <div className="container2" style={style.container}>
        <Paper style={style.paper} zDepth={1}>

        <ValidatorForm ref="form" onSubmit={this.handleSubmit} instantValidate={true}>


        <TextValidator
          floatingLabelStyle={style.floating}
          underlineShow={false}
          name="fname"
          value={this.state.fname}
          floatingLabelText="First Name"
          onChange={(event,value)=>this.setState({fname:value})}
          validators={['required']}
          errorMessages={['This field is required']} />
        <TextField
          floatingLabelStyle={style.floating}
          underlineShow={false}
          value={this.state.mname}
          floatingLabelText="Middle Name"
          onChange={(event,value)=>this.setState({mname:value})} />
        <TextField
          floatingLabelStyle={style.floating}
          underlineShow={false}
          value={this.state.lname}
          floatingLabelText="Last Name"
          onChange={(event,value)=>this.setState({lname:value})} /> <br/>

        <SelectValidator name="gender" validators={['required']} errorMessages={['This field is required']}
                      floatingLabelStyle={style.floating} underlineShow={false} floatingLabelText="Gender"
                     value={this.state.gender} onChange={(event,index,value)=>this.setState({gender: value})}>
          <MenuItem value='female' primaryText="Female" />
          <MenuItem value='male' primaryText="Male" />
          <MenuItem value='other' primaryText="Other" />
        </SelectValidator>

        <Nationality callback={this.changeNationality} nation={this.state.nationality}/>

        <DatePicker floatingLabelStyle={style.floating} onChange={(event,value)=>this.setState({date:value})}
                    autoOk={true} underlineShow={false}
                       container="inline" mode="landscape" floatingLabelText="Date Of Birth" />

        <TextValidator
          name="age"
          floatingLabelStyle={style.floating}
          underlineShow={false}
          value={this.state.age}
          validators={['required','isNumber','isPositive']} errorMessages={['This field is required','Invalid','Invalid']}
          floatingLabelText="Age"
          type="number" min="18"
          onChange={(event,value)=>this.setState({age:value})} /><br/>

        <SelectValidator floatingLabelStyle={style.floating} underlineShow={false} name="category"
                         floatingLabelText="Category" value={this.state.category}
                         validators={['required']} errorMessages={['This field is required']}
                        onChange={(event,index,value)=>this.setState({category:value})}>
          <MenuItem value='General' primaryText="General"/>
          <MenuItem value='OBC Delhi' primaryText="OBC Delhi"/>
          <MenuItem value='OBC Delhi+PWD(OH)' primaryText="OBC Delhi+PWD(OH)"/>
          <MenuItem value='OBC Delhi+PWD(VH)' primaryText="OBC Delhi+PWD(VH)"/>
          <MenuItem value='SC' primaryText="SC"/>
          <MenuItem value='SC+PWD(OH)' primaryText="SC+PWD(OH)"/>
          <MenuItem value='SC+PWD(VH)' primaryText="SC+PWD(VH)"/>
          <MenuItem value='ST' primaryText="ST"/>
          <MenuItem value='ST+PWD(OH)' primaryText="ST+PWD(OH)"/>
          <MenuItem value='ST+PWD(VH)' primaryText="ST+PWD(VH)"/>
          <MenuItem value='PWD(OH)' primaryText="PWD(OH)"/>
          <MenuItem value='PWD(VH)' primaryText="PWD(VH)" />
        </SelectValidator>
        <SelectValidator floatingLabelStyle={style.floating} underlineShow={false} name="mstatus"
                     floatingLabelText="Marital Status" value={this.state.mstatus}
                     validators={['required']} errorMessages={['This field is required']}
                     onChange={(event,index,value)=>this.setState({mstatus:value})}>
          <MenuItem value='Married' primaryText="Married" />
          <MenuItem value='Single' primaryText="Single" />
        </SelectValidator>


        <CountryCode callback={this.changeCountryCode} cc={this.state.count_code}/>

        <TextValidator name="mobile" validators={['required','isNumber']} errorMessages={['This field is required','Invalid']}
                                  floatingLabelStyle={style.floating} underlineShow={false} value={this.state.mobile}
                                  onChange={(event,value)=>this.setState({mobile:value})} floatingLabelText="Mobile No." />
        <TextValidator name="areac" validators={['isNumber']} errorMessages={['Invalid']}
                                  floatingLabelStyle={style.floating} underlineShow={false} value={this.state.areac}
                                  onChange={(event,value)=>this.setState({areac:value})} floatingLabelText="Area Code" />
        <TextValidator name="phone" validators={['isNumber']} errorMessages={['Invalid']}
                              floatingLabelStyle={style.floating} underlineShow={false} value={this.state.phone}
                              onChange={(event,value)=>this.setState({phone:value})} floatingLabelText="Phone No." /><br/> <br />
        <Divider />
        <TextValidator name="add1c" validators={['required']} errorMessages={['This field is required']}
                              floatingLabelStyle={style.floating} underlineShow={false} value={this.state.add1c}
                              onChange={(event,value)=>this.setState({add1c:value})} floatingLabelText="Address Line 1" height="20" />
        <TextValidator name="add2c" validators={['required']} errorMessages={['This field is required']}
                              floatingLabelStyle={style.floating} underlineShow={false} value={this.state.add2c}
                              onChange={(event,value)=>this.setState({add2c:value})} floatingLabelText="Address Line 2" />
        <TextValidator name="cityc" validators={['required']} errorMessages={['This field is required']}
                              floatingLabelStyle={style.floating} underlineShow={false} value={this.state.cityc}
                              onChange={(event,value)=>this.setState({cityc:value})} floatingLabelText="City/Village/Place" />
        <TextValidator name="statec" validators={['required']} errorMessages={['This field is required']}
                              floatingLabelStyle={style.floating} underlineShow={false} value={this.state.statec}
                              onChange={(event,value)=>this.setState({statec:value})} floatingLabelText="State" />
        <TextValidator name="pinc" validators={['required','isNumber']} errorMessages={['This field is required','Invalid']}
                              floatingLabelStyle={style.floating} underlineShow={false} value={this.state.pinc}
                              onChange={(event,value)=>this.setState({pinc:value})} floatingLabelText="Pin" />

        <Country1 callback={this.changeCountry1} c1={this.state.countryc}/>

        <Divider/>
        <TextValidator name="add1p" validators={['required']} errorMessages={['This field is required']}
                       floatingLabelStyle={style.floating} underlineShow={false} value={this.state.add1p}
                       onChange={(event,value)=>this.setState({add1p:value})} floatingLabelText="Address Line 1" height="20" />
        <TextValidator name="add2p" validators={['required']} errorMessages={['This field is required']}
                       floatingLabelStyle={style.floating} underlineShow={false} value={this.state.add2p}
                       onChange={(event,value)=>this.setState({add2p:value})} floatingLabelText="Address Line 2" />
        <TextValidator name="cityp" validators={['required']} errorMessages={['This field is required']}
                       floatingLabelStyle={style.floating} underlineShow={false} value={this.state.cityp}
                       onChange={(event,value)=>this.setState({cityp:value})} floatingLabelText="City/Village/Place" />
        <TextValidator name="statep" validators={['required']} errorMessages={['This field is required']}
                       floatingLabelStyle={style.floating} underlineShow={false} value={this.state.statep}
                       onChange={(event,value)=>this.setState({statep:value})} floatingLabelText="State" />
        <TextValidator name="pinp" validators={['required','isNumber']} errorMessages={['This field is required','Invalid']}
                       floatingLabelStyle={style.floating} underlineShow={false} value={this.state.pinp}
                       onChange={(event,value)=>this.setState({pinp:value})} floatingLabelText="Pin" />

        <Country2 callback={this.changeCountry2} c2={this.state.countryp}/>
        <RaisedButton type="submit" label="Submit" primary={true}/>
        </ValidatorForm>
        </Paper>

        </div>
       </div>
       </MuiThemeProvider>
      );
 }
}
export default App;

import React, { Component } from "react";
import {
  TouchableOpacity,
  DatePickerIOS,
  TextInput,
  AppRegistry,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Image
} from "react-native";
import PropTypes from 'prop-types';
import ModalDropdown from 'react-native-modal-dropdown';
import DatePicker from 'react-native-datepicker'
import CustomMultiPicker from "react-native-multiple-select-list";
import InputForm from '../../containers/inputForm';
import { connect } from "react-redux";
import BlankPage2 from "../blankPage2";
import { DrawerNavigator, NavigationActions } from "react-navigation";
import {
  Container,
  Header,
  View,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import { Grid, Row } from "react-native-easy-grid";
import { setIndex } from "../../actions/list";
import styles from "./styles";
import widgits from "../../reducers";

const DEMO_OPTIONS_1 = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7', 'option 8', 'option 9'];
const userList = {
  "123":"Tom",
  "124":"Michael",
  "125":"Christin"
};

class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {  text1: 'Please Describe',
                    text2: 'Please Describe',
                    dropdownSelection: '-- Choose --',
                    date: new Date()
                  };
    this.baseState = this.state;
    this.resetForm = this.resetForm.bind(this);
  }

  getState() {
        return {
            number: 0
        }
    }


  static navigationOptions = {
    header: null
  }



resetForm() {
    console.log("reset form function");
    console.log("STATE");
    console.log(this.state);
    console.log(this.baseState);
    console.log("PROPS");
    console.log(this.props);
  }


  render() {
    return (
      <Container>
        <View style={styles.container}>
         <Header>
          <Left>

            <Button
              transparent
              onPress={() => {
                DrawerNav.dispatch(
                  NavigationActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: "Home" })]
                  })
                );
                DrawerNav.goBack();
              }}
            >
              <Icon active name="power" />
            </Button>
          </Left>

          <Body>
            <Title>Home</Title>
          </Body>

          <Right>
            <Button
              transparent
              onPress={() => DrawerNav.navigate("DrawerOpen")}
            >
              <Icon active name="menu" />
            </Button>
          </Right>
        </Header>
          <Content>
            <View style={styles.bg}>

                  <Text>Student</Text>

                  <ModalDropdown ref={el => this._dropdown_3 = el}
                    style={styles.dropdown_3}
                    options={DEMO_OPTIONS_1}
                    dropdownTextStyle={styles.dropdown_3_dropdownTextStyle}
                    dropdownTextHighlightStyle={styles.dropdown_3_dropdownTextHighlightStyle}/>

                  <Text>Rotation</Text>

                  <ModalDropdown ref={el => this._dropdown_3 = el}
                  style={styles.dropdown_3}
                  options={DEMO_OPTIONS_1}
                  dropdownTextStyle={styles.dropdown_3_dropdownTextStyle}
                  dropdownTextHighlightStyle={styles.dropdown_3_dropdownTextHighlightStyle}/>

                  {/*<InputForm />*/}


                  <Text>Date</Text>

                  <DatePicker
                  style={{width: 200}}
                  date={this.state.date}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate="2016-05-01"
                  maxDate="2016-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0
                    },
                    dateInput: {
                      marginLeft: 36
                    }
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}/>

                  <Text>Procedure Group</Text>

                  <ModalDropdown ref={el => this._dropdown_3 = el}
                  style={styles.dropdown_3}
                  options={DEMO_OPTIONS_1}
                  dropdownTextStyle={styles.dropdown_3_dropdownTextStyle}
                  dropdownTextHighlightStyle={styles.dropdown_3_dropdownTextHighlightStyle}/>

                  <Text>Diagnosis</Text>

                  <CustomMultiPicker
                  options={userList}
                  search={true} // should show search bar?
                  multiple={true} //
                  placeholder={"Search"}
                  placeholderTextColor={'#757575'}
                  returnValue={"label"} // label or value
                  callback={(res)=>{ console.log(res) }} // callback, array of selected items
                  rowBackgroundColor={"#eee"}
                  rowHeight={40}
                  rowRadius={5}
                  iconColor={"#00a2dd"}
                  iconSize={30}
                  selectedIconName={"ios-checkmark-circle-outline"}
                  unselectedIconName={"ios-radio-button-off-outline"}
                  scrollViewHeight={130}
                  selected={[1,2]} />

                  <Text>Case Location</Text>

                  <ModalDropdown ref={el => this._dropdown_3 = el}
                  style={styles.dropdown_3}
                  options={DEMO_OPTIONS_1}
                  dropdownTextStyle={styles.dropdown_3_dropdownTextStyle}
                  dropdownTextHighlightStyle={styles.dropdown_3_dropdownTextHighlightStyle}/>

                  <Text>Role in Case</Text>

                  <ModalDropdown ref={el => this._dropdown_3 = el}
                  style={styles.dropdown_3}
                  options={DEMO_OPTIONS_1}
                  dropdownTextStyle={styles.dropdown_3_dropdownTextStyle}
                  dropdownTextHighlightStyle={styles.dropdown_3_dropdownTextHighlightStyle}/>

                  <Text>Supervisor</Text>

                  <ModalDropdown ref={el => this._dropdown_3 = el}
                  style={styles.dropdown_3}
                  options={DEMO_OPTIONS_1}
                  dropdownTextStyle={styles.dropdown_3_dropdownTextStyle}
                  dropdownTextHighlightStyle={styles.dropdown_3_dropdownTextHighlightStyle}/>

                  <Text>Patient Type</Text>

                  <ModalDropdown ref={el => this._dropdown_3 = el}
                  style={styles.dropdown_3}
                  options={DEMO_OPTIONS_1}
                  dropdownTextStyle={styles.dropdown_3_dropdownTextStyle}
                  dropdownTextHighlightStyle={styles.dropdown_3_dropdownTextHighlightStyle}/>

                  <Text>Student Comments</Text>

                  <TextInput
                  style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={(text1) => this.setState({text1})}
                  value={this.state.text1}/>

                  <Text>Alternate Experience</Text>

                  <ModalDropdown ref={el => this._dropdown_3 = el}
                  style={styles.dropdown_3}
                  options={DEMO_OPTIONS_1}
                  dropdownTextStyle={styles.dropdown_3_dropdownTextStyle}
                  dropdownTextHighlightStyle={styles.dropdown_3_dropdownTextHighlightStyle}/>

                  <Text>Description of Alternate Experience</Text>

                  <TextInput
                  style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={(text2) => this.setState({text2})}
                  value={this.state.text2}/>


              <Button
                style={styles.btn}
                onPress={() => this.props.navigation.navigate("SubmitSurvey")}>
                      <Text>Submit</Text>
               </Button>
              <Button
                style={styles.btn}
                onPress={this.resetForm}>
                      <Text>Clear</Text>
               </Button>
               <Button
                style={styles.btn}
                onPress={() => this.props.navigation.navigate("Home")}>
                      <Text>Cancel</Text>
               </Button>





             </View>
          </Content>
        </View>
      </Container>

    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index))
  };
}
//This const creates the list for the items...
const mapStateToProps = state => ({
  name: state.user.name,
  text1: state.text1
});

const SurveySwagger = connect(mapStateToProps, bindAction)(Survey);
const DrawNav = DrawerNavigator(
  {
    Survey: { screen: SurveySwagger },
    BlankPage2: { screen: BlankPage2 }
  }
);
const DrawerNav = null;
DrawNav.navigationOptions = ({ navigation }) => {
  DrawerNav = navigation;
  return {
    header: null
  };
};
export default DrawNav;

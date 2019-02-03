import { StyleSheet } from "react-native";

export default StyleSheet.create({
  bodyRoot:{
    width: "100%",
    height: 95 ,
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "column"
  },
  LabalForm:{
    backgroundColor: "#fff",
    width: "100%",
    height: 20 ,
    paddingLeft:20
  },
  inputContainerStyle:{
    backfaceVisibility:"hidden",
    borderStyle:"solid",
    backgroundColor:"#F2F3F4",
    
    // borderColor: "gray",
    // borderLeftColor:"gray",
    // borderRightColor:"gray",
    // borderBottomColor:"gray",
    // borderStartColor:"gray",
    // borderTopColor:"gray",

    // borderBottomEndRadius: 0,
    // borderBottomLeftRadius: 15,
    // borderBottomRightRadius: 15,
    // borderBottomStartRadius: 0,
    borderRadius: 20,

    // borderWidth:2,
    // borderRightWidth:2 ,
    // borderLeftWidth : 2 ,
    borderBottomWidth : 0 ,

  },
  inputStyle:{
    color:"#626567"
  },
  Icon:{
    paddingRight:10
  },
  Picker:{
  }

});
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    width:"100%",
  },
  form: {
    position: "absolute",
    width: "100%",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    bottom: 0,
    height:"80%",
    paddingHorizontal:50,
    paddingVertical:45,
  },
  titleForm:{
    fontSize:25,
    fontWeight:"bold",
    marginBottom:40,
    textAlign:"center",
  },
  logo:{
    width:57,
    height:57,
    objectFit:"cover",
    borderRadius:10,
    marginBottom:40,
    marginLeft: 143,
    
  },
  inputField:{
    width:"100%",
    backgroundColor:"#f7f7f7",
    marginBottom:30,
    fontSize:16,
    paddingVertical:10,
    paddingHorizontal:15,
    borderRadius:10,
    color:"#000000",
    fontWeight:"regular",
    position:"relative",
  },
  btnViewPasswoord:{
    position:"absolute",
    right:12,
    top:11,
    fontSize:16,
  },
  btnLoginContainer:{
    width:"100%",
    alignItems:"center",
    marginTop:10,
  },
  btnLogin:{
    backgroundColor:"#033428",
    color:"#ffffff",
    fontSize:16,
    fontWeight:"bold",
    paddingVertical:5,
    paddingHorizontal:15,
    borderRadius:10,
    textAlign:"center",
  },
  errorMessage:{
    textAlign:"center",
    fontSize:16,
    fontWeight:"bold",
    marginTop:60,
  }
})

export default styles
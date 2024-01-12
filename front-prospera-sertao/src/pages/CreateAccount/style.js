import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  containerPage:{
    width:"100%",
    height:"100%",
  },
  containerBtn: {
  width: "100%",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  backgroundColor: "#033428",
  paddingRight: 10,
},
btn: {
  backgroundColor: "#F4D69C",
  borderRadius: 10,
},
btnText:{
  color: "#033428",
  fontSize: 16,
  fontWeight: "bold",
  padding: 12,
},
  formContainer: {
    width:"100%",
    height:"100%",
    backgroundColor:"#033428"
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
  btnCreateContainer:{
    width:"100%",
    alignItems:"center",
    marginTop:10,
  },
  btnCreate:{
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
    color:"red",
  }
})

export default styles
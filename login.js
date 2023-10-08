import {styleSheet, SafeAreaView, view, image, text,TextInput,TouchableOpacity} from "react-native" ;

export default function Login(){
    return(
        <SafeAreaView style={styleSheet.container}>
            <view styles={styles.firstSection}>
                </view>
	
                <view styles={styles.secondSection}>
		<view>
	 	 <text style={styles.label}> Email address</text>
		 <textInput
			style={styles.textInput}
			underlinecolorAndroid="pink"
			placeholder="ejemplo@ejemplo.com"
			keyboardType= "email-address"
			returnKeytype="next"
		/>
		</view>
		<view style={styles.spacing}>
		 <text style={styles.label}> Password</text>
		 <textInput
			style={styles.textInput}
			underlinecolorAndroid="pink"
			placeholder="***************"
			secureTextEnttry={true}
		/>
		</view>
		<view style={styles.spacing}>
		<text style={styles.forgotPassword}>Forgot password</text>
		</view>
		<view style={styles.spacing}>
		<TouchableOpacity style={styles.button}>
		  <text style={styles.buttonText}>Login</text> 
		</TouchableOpacity>
		</view>
		</view>

	</SafeAreaView>
);
}


export const styles = styleSheet.create({
   contianer:{
   flex: 1,
   backgroundcolor: "#FFF",
   alignItems: "center",
   justifycontent: "center",
},
firstSection: {
   flex: 1,
   alignItems: "center",
   justfycontent: "center",
   backgroundcolor: "green",
   width: "100%",
},
secondSection: {
   flex: 2,
   backgroundcolor: "#FFF",
   width: "100%",
   borderTopRightRadius: 25,
   borderTopLeftRadius: 25,
   padding: 20,
   justifycontent: "space-between",
},
title:{
   fontSize: "48",
   color: "white",
},
label:{
   color: "#CCC",
},
textInput:{
   color: "#000",
   padding: "8",
},
forgotPassword:{
  color: "#000",
textAlign: "right",
},
button: {
  backgroundcolor: "pink",
  padding: 15,
  borderRadius: 30,
  alignItems: "center",
},
buttonText:{
  color: "white",
  fontWeight: "bold",
},
spacing:{
  marginTop: "10",
},
row:{
  flexDirection: "row",
  justifycontent: "center",
}
})



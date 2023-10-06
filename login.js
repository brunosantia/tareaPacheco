import {styleSheet, SafeAreaView, view, image, text,TextInput,TouchableOpacity, Button } from "react-native" ;

export default function Login(){
    return(
        <SafeAreaView styl={styleSheet.container}>
            <View styles={styles.firstSection}>
                <image 
                source={{
                    url: "assets/FontFaceSetLoadEvent.jpg",
                }}
                style={{width: "100%",height: "120%", resizeMode: "cover"}}
                />
                <view 
                style={{
                    position:"absolute",
                }}
                >
                <text style={style.title}>Revelo</text>
            </view>

            </View>
            <View styles={styles.secondSection}>
                <view style={styles.spacing}>
                <text styles={styles.label}>email address</text>
                <TextInput
                style={style.TextInput}
                underlinecolorAndroid="pink "
                placeholder="ejemplo@ejemplo.com"
                keyyboardType="email-address"
                returnKeyType="next"
                />
                </view>
            </View>
            <View styles={styles.secondSection}>
                <text styles={styles.label}>password</text>
                <TextInput
                style={style.TextInput}
                underlinecolorAndroid="pink"
                placeholder="*********"
                secureTextEntry={true}

                />
                <text style={style.forgotPassword}>forgot password</text>
                <button
                title="Login"
                styles={{
                    backgroundcolor: "pink",
                    padding: 8,
                    borderRadius: 8,
                    marginTop: 5,
                }}
                />

            </View>
        </SafeAreaView>
    );
}
export const styles = styleSheet.create({
    container: {
        flex: 1,
        backgroundcolor: "#FFF",
        alignItems: "center",
        justifycontent: "center",

    },
    firstSetion: {
        flex: 1,
        backgroundcolor: "green",
        alignItems: "center",
        justifycontent: "center",
        width:"100%",
    },
    secondSection: {
        flex: 2,
        backgroundcolor: "purple",
        alignItems: "center",
        justifycontent: "center",
        width: "100%",
        bordertopRightRadius: 25,
        bordertopLeftRadius: 25,
        padding: 20,
    },
    title:{
        Fontsize: 48,
        fntweight: "bold",
        color: "white",
    },
    label:{
        color: "#ccc",
    },
    TextInput: {
        color: "black",

    },
    forgotPassword: {
        color: "black",
        textAling: "right",
    }
})
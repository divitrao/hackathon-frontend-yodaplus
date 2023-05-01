import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({

    heading_style:{
        fontSize:21,color:"#000000",fontWeight:"600",
        marginVertical:5
    },

    text_input:{
        height:40,
        width:"100%",
        borderWidth:1,
        borderRadius:5,
        borderColor:"#7ab8fa",
        marginVertical:5,
        fontSize:18
    },

    submit_button:{
        width:"80%",
        height:"10%",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        marginTop:10,
        backgroundColor:"orange",
        borderRadius:10
    },

    submit_text:{
        fontSize:15,
        color:"#ffffff",
        fontWeight:"700"
    },

    error_text:{
        color:"red",
        fontSize:15,
        fontWeight:"900"
    }

});

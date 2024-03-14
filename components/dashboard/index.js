import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const DashboardPage = () => {
  return (
    <View>
      <ScrollView>
        <View style={{backgroundColor:"#50C2C9"}}>
          <Image source={require("../../assets/shape white.png")} />
          <View style={{ alignItems: "center" }}> 
            <Image source={require("../../assets/Ellipse 3.png")} />
          </View>
          <Text style={{textAlign:"center", fontSize:18, fontWeight:"bold",color:"#fff", marginVertical:20}}>Welcome To Mr. Emran</Text>
        </View>

        {/* Clock Section */}
        <View style={{marginVertical:20}}>
            <Text style={{textAlign:"right",padding:10,fontWeight:"bold"}}>Good Afternoon</Text>
            <View style={{ alignItems: "center" }}> 
            <Image source={require("../../assets/clockTime.png")} />
          </View>
          <Text style={{textAlign:"left",padding:10,fontWeight:"bold"}}>Task list</Text>
        </View>
        {/* Daily Task Section */}
        <View style={{marginHorizontal:10,marginVertical:20, padding:10,borderRadius:10,shadowRadius:20, backgroundColor:"#fff"}}>
            <Text>Daily Task</Text>
            <Text style={{fontSize:30, textAlign:"right",padding:10,fontWeight:"bold",color:"#50C2C9"}}>+</Text>
<View>
    <Text style={{fontWeight:"600",fontSize:12,marginVertical:2}}>Learning Programming by 12PM</Text>
    <Text style={{fontWeight:"600",fontSize:12,marginVertical:2}}>Learn how to cook by 1PM</Text>
    <Text style={{fontWeight:"600",fontSize:12,marginVertical:2}}>Learn how to play at 2PM</Text>
    <Text style={{fontWeight:"600",fontSize:12,marginVertical:2}}>Have lunch at 4PM</Text>
    <Text style={{fontWeight:"600",fontSize:12,marginVertical:2}}>Going to travel 6PM</Text>
</View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardPage;

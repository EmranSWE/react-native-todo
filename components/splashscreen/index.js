import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, Image, Text, TouchableOpacity, View, ScrollView } from "react-native";

const SplashScreenPage = () => {
    const navigation=useNavigation()
    const [start, setStart] = useState(false);

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={{ flex: 1 }}>
                <Image source={require("../../assets/shape.png")} />
                <View style={{ marginTop: 40, alignItems: "center", justifyContent: "center" }}>
                    <Image source={require("../../assets/undraw_done_user.png")} />
                </View>
                <View style={{ alignItems: "center", marginTop: 60 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18, color: "black" }}>Gets things with TODs</Text>
                    <Text style={{ fontSize: 13, marginTop: 15 }}>
                        Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod. Consequat urna quam felis
                        interdum quisque. Malesuada adipiscing tristique ut eget sed.
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Registration') }}
                    style={{
                        backgroundColor: "#50C2C9",
                        alignItems: "center",
                        padding: 20,
                        margin: 20,
                        borderRadius: 10,
                        
                    }}>
                    <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default SplashScreenPage;
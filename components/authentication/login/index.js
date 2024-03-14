import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginPage() {
  const navigation = useNavigation();

  // State for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle login button press
  const handleLogin = () => {
    console.log(email,password)
    if (email === "test@gmail.com" && password === "123456") {
      // Navigate to the dashboard page if credentials are correct
      navigation.navigate("Dashboard");
    } else {
      // Show an error message to the user (replace this with your actual error handling logic)
      console.log("Invalid email or password");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Image source={require("../../../assets/shape.png")} />
        </View>
        <View style={{ alignItems: "center",  }}>
          <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 15 }}>
            Welcome Back
          </Text>
          <View>
            <Image source={require("../../../assets/school.png")} />
          </View>
        </View>
        {/* Input Fields */}
        <View style={{ marginTop: 20 }}>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            placeholder="Enter your Email"
            value={email}
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            placeholder="Enter Password"
            secureTextEntry={true}
            value={password}
          />
          <Text style={{ textAlign: "center", color: "#50C2C9" }}>Forget Password ?</Text>
          <TouchableOpacity
            onPress={handleLogin} // Call the handleLogin function on button press
            style={styles.button}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        {/* Footer Of Login Page */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don't have an account ? {" "}
            <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
              <Text style={styles.footerLink}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = {
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#50C2C9",
    alignItems: "center",
    padding: 10,
    margin: 20,
    borderRadius: 10,
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    fontWeight: "600",
    fontSize: 12,
    marginBottom: 10,
    textAlign: "center",
  },
  footerLink: {
    fontWeight: "600",
    fontSize: 12,
    color: "#50C2C9",
  },
};
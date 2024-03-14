// RegistrationPage.js
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function RegistrationPage() {
  const navigation = useNavigation();
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Image source={require("../../../assets/shape.png")} />
        </View>
        <View style={{ alignItems: "center", marginTop: 60 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 15 }}>
            Welcome to Onboard!
          </Text>
          <Text>Let’s help to meet up your tasks.</Text>
        </View>
        {/* Input Fields */}
        <View style={{ marginTop: 20 }}>
          <TextInput
            style={styles.input}
            onChangeText={setFullName}
            placeholder="Enter your full name"
            value={fullName}
          />
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
          <TextInput
            style={styles.input}
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={confirmPassword}
          />
          <TouchableOpacity
            onPress={() => {
              // Your registration logic here
              navigation.navigate("Login");
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
        {/* Footer Of Registration Page */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Already have an account ? {" "}
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.footerLink}>
                Sign In
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
    marginHorizontal: 12,
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#fff",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#50C2C9",
    alignItems: "center",
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
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
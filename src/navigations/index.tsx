import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginNavigation from "./login.navigation";
import StackNavigation from "./stack.navigation"
import { useAuth } from '../hook/auth'

export default function Navigation() {

  const { access_token } = useAuth();

  return (
  
    <NavigationContainer>
      {access_token ? <StackNavigation /> : <LoginNavigation />}
    </NavigationContainer>

  )}
import React, { Component } from 'react'
import {Image, Text, View } from 'react-native'

const About = () => {
  
    return (
      <View>
        <br />
        <Text style={{ margin: "auto", fontSize: 50, color: "black" }}>
          {" "}
          Siksha वर्धन
        </Text>
        <Image
          style={{ width: 250, height: 250, margin: "auto", marginTop: 20 }}
          source={require("../assets/1-removebg-preview.png")}
        />
        <br />
        <Text style={{ margin: 25, fontSize: 20, color: "black" }}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet
          non curabitur gravida arcu ac tortor. Eget egestas purus viverra
          accumsan in nisl nisi. Convallis tellus id interdum velit laoreet id
          donec ultrices. Varius vel pharetra vel turpis nunc. Venenatis cras
          sed felis eget velit aliquet sagittis id consectetur. Mauris rhoncus
          aenean vel elit scelerisque mauris. Dui ut ornare lectus sit amet.
          Tincidunt dui ut ornare lectus sit amet est. Nulla facilisi etiam
          dignissim diam quis. Scelerisque viverra mauris in aliquam sem
          fringilla ut morbi. Fermentum leo vel orci porta non. Vitae auctor eu
          augue ut lectus. Velit scelerisque in dictum non consectetur a erat
          nam. Quam adipiscing vitae proin sagittis nisl. Posuere urna nec
          tincidunt praesent semper. Aliquam id diam maecenas ultricies.
        </Text>
        <br />
        <Text style={{ margin: 25, fontSize: 30, color: "black" }}>
          {" "}
          Version : 1.0
        </Text>
        <br />
        <Text style={{ margin: 25, fontSize: 25, color: "black" }}>
          {" "}
          Contributed By : Ambuj Raj
        </Text>
      </View>
    );
  }

export default About;

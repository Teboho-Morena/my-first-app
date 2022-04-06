import react from 'react';
import { StyleSheet, Text, Image,ScrollView, SafeAreaView, View, TextInput } from 'react-native';

export default function App() {
  return (
    <>
  
    <SafeAreaView style={styles.container}>
    <Image style={styles.avatar} 
    source={{ uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.2s7VxdmHEoDKji3gO_i-5QHaHa%26pid%3DApi&f=1"}}/>
  
    <ScrollView>
    <Text style={styles.name}>Student Name: Teboho Morena</Text>
    <Text style={styles.ID}>Student Number: 901013577</Text>
    <Text style={styles.semester}>Semester: Y2S2</Text>
    <Text style={styles.header1}>Semester 1</Text>
    <Text style={styles.firstmodule1}>Calculus 2: B</Text>
    <Text style={styles.secondmodule1}>C++ Programming 1: C+</Text>
    <Text style={styles.thirdmodule1}>Web Design: A</Text>
    <Text style={styles.fouthmodule1}>Data Communication: C</Text>
    <Text style={styles.fifthmodule1}>F.O.I.T: C+</Text>
    <Text style={styles.header2}>Semester 2</Text>
    <Text style={styles.firstmodule2}>C++ Programming 2: C</Text>
    <Text style={styles.secondmodule2}>Database Systems: B</Text>
    <Text style={styles.thirdmodule2}>Java Programming 1: B+</Text>
    <Text style={styles.fouthmodule2}>Probability and Statistics: C+</Text>
    <Text style={styles.fifthmodule2}>Software Modelling: C+</Text>
    </ScrollView>
  
   </SafeAreaView>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',//black
  },
  avatar: {
    width:100,
    height: 100,
    borderRadius: 100,
    marginTop: 20,
    marginBottom: 15,
    marginLeft: 5,
  },
  name: {
    fontSize: 20,
    color: '#ffffff',//white
  },
  ID: {
    fontSize: 20,
    color: '#ffffff',
  },
  semester: {
    fontSize: 20,
    color: '#ffffff',
  },
  header1: {
    fontSize: 30,
    color: '#ffffff',
    marginTop: 20,
  },
  firstmodule1: {
    fontSize: 20,
    color: '#ffffff',
  },
  secondmodule1: {
    fontSize: 20,
    color: '#ffffff',  
  },
  thirdmodule1: {
    fontSize: 20,
    color: '#ffffff', 
  },
  fouthmodule1:{
    fontSize: 20,
    color: '#ffffff', 
  },
  fifthmodule1: {
    fontSize: 20,
    color: '#ffffff', 
  },
  header2: {
    fontSize: 30,
    color: '#ffffff',
    marginTop: 20,
  },
  firstmodule2: {
    fontSize: 20,
    color: '#ffffff',
  },
  secondmodule2: {
    fontSize: 20,
    color: '#ffffff',
  },
  thirdmodule2: {
    fontSize: 20,
    color: '#ffffff',
  },
  fouthmodule2: {
    fontSize: 20,
    color: '#ffffff',
  },
  fifthmodule2: {
    fontSize: 20,
    color: '#ffffff',
  }



});

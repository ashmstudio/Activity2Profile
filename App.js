import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";

const name = "Aisah Muso";
const course = "BS Computer Science";
const year = "3rd Year";

const student = {
  age: 21,
  school: "NorthWest Samar State University",
  status: "Active"
};

const skills = [
  "JavaScript",
  "Python",
  "React Native"
];

const hobbies = [
  "Music",
  "Technology",
  "Watching Tiktok"
];

const subjects = [
  "Programming Languages",
  "Mobile Programming",
  "Software Engineering"
];

// Simple class
class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    return `Hello, I am ${this.name}.`;
  }
}

// Inheritance
class Student extends Person {
  constructor(name, course) {
    super(name);
    this.course = course;
  }
}

const myStudent = new Student(name, course);

// Arrow function
const sayHello = (name) => {
  return `Welcome, ${name}!`;
};

// Destructuring
const { age, school, status } = student;

// Spread operator
const newStudent = {
  ...student,
  status: "Currently Studying"
};

// Conditional
let message;

if (year === "3rd Year") {
  message = "Keep doing your best!";
} else {
  message = "Keep studying!";
}

// Map
const skillList = skills.map((skill) => skill);

// Filter
const longSubjects = subjects.filter(
  (subject) => subject.length > 10
);

export default function App() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.top}>
        <Text style={styles.title}>My Profile ✨</Text>
        <Text style={styles.subtitle}>A little about me</Text>
      </View>

      <View style={styles.profileCard}>

        <View style={styles.circle}>
          <Text style={styles.letter}>A</Text>
        </View>

        <Text style={styles.name}>{name}</Text>
        <Text style={styles.course}>{course}</Text>

        <View style={styles.yearTag}>
          <Text style={styles.yearText}>{year}</Text>
        </View>

      </View>

      <View style={styles.box}>
        <View style={styles.headingRow}>
          <Text style={styles.emoji}>👋</Text>
          <Text style={styles.heading}>About Me</Text>
        </View>

        <Text style={styles.welcome}>
          {sayHello(name)}
        </Text>

        <Text style={styles.text}>
          I am a 3rd year college student, who's very
          cooked in every subject.
        </Text>
      </View>

      <View style={styles.box}>
        <View style={styles.headingRow}>
          <Text style={styles.emoji}>📌</Text>
          <Text style={styles.heading}>
            Personal Information
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>AGE</Text>
          <Text style={styles.infoText}>{age} years old</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>SCHOOL</Text>
          <Text style={styles.infoText}>{school}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>STATUS</Text>
          <Text style={styles.infoText}>
            {newStudent.status}
          </Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.headingRow}>
          <Text style={styles.emoji}>💻</Text>
          <Text style={styles.heading}>My Skills</Text>
        </View>

        <View style={styles.tags}>
          {skillList.map((skill, index) => (
            <View style={styles.tag} key={index}>
              <Text style={styles.tagText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.headingRow}>
          <Text style={styles.emoji}>🎵</Text>
          <Text style={styles.heading}>My Hobbies</Text>
        </View>

        {hobbies.map((hobby, index) => (
          <View style={styles.listRow} key={index}>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.list}>{hobby}</Text>
          </View>
        ))}
      </View>

      <View style={styles.box}>
        <View style={styles.headingRow}>
          <Text style={styles.emoji}>📚</Text>
          <Text style={styles.heading}>My Subjects</Text>
        </View>

        {subjects.map((subject, index) => (
          <View style={styles.subject} key={index}>
            <Text style={styles.number}>{index + 1}</Text>
            <Text style={styles.subjectText}>{subject}</Text>
          </View>
        ))}
      </View>

      <View style={styles.messageBox}>
        <Text style={styles.message}>💜 {message}</Text>

        <Text style={styles.smallText}>
          {myStudent.name} - {myStudent.course}
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Made with React Native
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f0fa",
    padding: 18
  },

  top: {
    backgroundColor: "#7048a8",
    marginHorizontal: -18,
    marginTop: -18,
    paddingTop: 45,
    paddingBottom: 35,
    paddingHorizontal: 25,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },

  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold"
  },

  subtitle: {
    color: "#e8dcf5",
    fontSize: 15,
    marginTop: 5
  },

  profileCard: {
    backgroundColor: "white",
    alignItems: "center",
    padding: 22,
    marginTop: -18,
    marginBottom: 18,
    borderRadius: 18,
    elevation: 3
  },

  circle: {
    width: 85,
    height: 85,
    borderRadius: 43,
    backgroundColor: "#9b70cf",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#e7d9f5"
  },

  letter: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold"
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10
  },

  course: {
    color: "#666",
    marginTop: 4
  },

  yearTag: {
    backgroundColor: "#eee4f8",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 10
  },

  yearText: {
    color: "#7048a8",
    fontWeight: "bold"
  },

  box: {
    backgroundColor: "white",
    padding: 18,
    marginBottom: 15,
    borderRadius: 16,
    elevation: 2
  },

  headingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12
  },

  emoji: {
    fontSize: 21,
    marginRight: 8
  },

  heading: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#222"
  },

  welcome: {
    color: "#7048a8",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 7
  },

  text: {
    color: "#555",
    lineHeight: 21
  },

  info: {
    backgroundColor: "#f7f3fa",
    padding: 11,
    borderRadius: 10,
    marginBottom: 8
  },

  label: {
    color: "#8a64ad",
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 3
  },

  infoText: {
    color: "#444",
    fontSize: 15
  },

  tags: {
    flexDirection: "row",
    flexWrap: "wrap"
  },

  tag: {
    backgroundColor: "#eee4f8",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 7,
    marginBottom: 7
  },

  tagText: {
    color: "#7048a8",
    fontWeight: "bold"
  },

  listRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9
  },

  dot: {
    color: "#7048a8",
    fontSize: 20,
    marginRight: 8
  },

  list: {
    color: "#555",
    fontSize: 16
  },

  subject: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f7f3fa",
    padding: 10,
    borderRadius: 10,
    marginBottom: 8
  },

  number: {
    backgroundColor: "#7048a8",
    color: "white",
    width: 25,
    height: 25,
    borderRadius: 13,
    textAlign: "center",
    paddingTop: 3,
    marginRight: 10,
    fontWeight: "bold"
  },

  subjectText: {
    color: "#555",
    flex: 1
  },

  messageBox: {
    backgroundColor: "#7048a8",
    padding: 18,
    borderRadius: 16,
    marginBottom: 15
  },

  message: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold"
  },

  smallText: {
    color: "#e8dcf5",
    marginTop: 7
  },

  button: {
    backgroundColor: "#9b70cf",
    padding: 14,
    borderRadius: 12,
    alignItems: "center"
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },

  footer: {
    textAlign: "center",
    color: "#999",
    marginTop: 20,
    marginBottom: 30
  }
});
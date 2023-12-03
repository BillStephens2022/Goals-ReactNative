import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ id, text, onDeleteItem }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={onDeleteItem.bind(this, id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#7044aa",
    color: "white",
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    padding: 8,
    color: "#ffffff",
  },
});

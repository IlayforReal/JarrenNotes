import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
      <View style={styles.box2} />
      <View style={styles.roundedBoxContainer}>
        <View style={styles.roundedBox}>
          {/* Inner Box for the task title */}
          <View style={styles.innerTextBox}>
            <Text style={styles.taskTitleText} numberOfLines={2} adjustsFontSizeToFit>
             Washing Dishes

            </Text>
          </View>

          {/* Icons outside the inner box */}
          <TouchableOpacity style={styles.pencilIconContainer} onPress={() => console.log('Pencil icon pressed')}>
            <Image
              source={require('./assets/pencil.png')}
              style={styles.pencilIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.trashIconContainer} onPress={() => console.log('Trash icon pressed')}>
            <Image
              source={require('./assets/trash.png')}
              style={styles.trashIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.doneIconContainer} onPress={() => console.log('Done icon pressed')}>
            <Image
              source={require('./assets/done.png')}
              style={styles.doneIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.circleButton} onPress={() => console.log('Button pressed')}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.calendarIconContainer} onPress={() => console.log('Calendar icon pressed')}>
        <Image
          source={require('./assets/calendar.png')}
          style={styles.calendarIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.burgerIconContainer} onPress={() => console.log('Burger icon pressed')}>
        <Image
          source={require('./assets/burger-bar.png')}
          style={styles.burgerIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.completedIconContainer} onPress={() => console.log('Checked icon pressed')}>
        <Image
          source={require('./assets/checked.png')}
          style={styles.completedIcon}
        />
      </TouchableOpacity>

      <Text style={styles.titleText}>JarrenNotes</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3B7EE',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  box: {
    width: '100%',
    height: 100,
    backgroundColor: '#9395D3',
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 0,
  },
  box2: {
    width: '100%',
    height: 100,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    left: 0,
    margin: 0,
  },
  roundedBoxContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '18%',
    left: '40%',
    transform: [{ translateX: -150 }, { translateY: -25 }],
  },
  roundedBox: {
    width: 365,
    height: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  // Inner box for the task title
  innerTextBox: {
    width: 220,
    height: 50,
    right: 60,
    backgroundColor: '#B3B7EE',
    borderRadius: 10,
    justifyContent: 'center',
    padding: 10, // Padding to prevent text from touching edges
  },
  taskTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center', // Align text to center
    flexWrap: 'wrap', // Allow text to wrap to a new line
    numberOfLines: 2, // Set maximum number of lines to 2
    adjustsFontSizeToFit: true, // Adjust font size to fit the box
  },
  pencilIconContainer: {
    position: 'absolute',
    right: 90,
    top: 35,
  },
  pencilIcon: {
    width: 30,
    height: 30,
  },
  trashIconContainer: {
    position: 'absolute',
    right: 51,
    top: 35,
  },
  trashIcon: {
    width: 25,
    height: 26,
  },
  doneIconContainer: {
    position: 'absolute',
    right: 10,
    top: 35,
  },
  doneIcon: {
    width: 25,
    height: 25,
  },
  circleButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#9395D3',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 150,
    right: 20,
  },
  buttonText: {
    fontSize: 30,
    color: '#FFFFFF',
  },
  calendarIconContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  calendarIcon: {
    width: 40,
    height: 40,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    position: 'absolute',
    top: 50,
    left: 20,
  },
  burgerIconContainer: {
    position: 'absolute',
    bottom: 20,
    left: 60,
  },
  burgerIcon: {
    width: 70,
    height: 50,
  },
  completedIconContainer: {
    position: 'absolute',
    bottom: 30,
    right: 90,
  },
  completedIcon: {
    width: 30,
    height: 30,
  },
});

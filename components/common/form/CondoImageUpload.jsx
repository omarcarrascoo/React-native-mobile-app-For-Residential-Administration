// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { COLORS, SIZES } from '../../../constants/theme';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import CondoText from '../titles/CondoText';
// import CondoSmallText from '../titles/CondoSmallText';
// import CondoMainBtn from '../buttons/CondoMainBtn';
// import imgs from '../../../constants/images';

// function CondoImageUpload({ label, placeholder, stylish }) {
//   const [images, setImages] = useState([]);

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setImages([...images, result.uri]);
//     }
//   };

//   const takePhoto = async () => {
//     let result = await ImagePicker.launchCameraAsync({
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setImages([...images, result.uri]);
//     }
//   };

//   const deleteImage = (uri) => {
//     setImages(images.filter(image => image !== uri));
//   };

//   return (
//     <View style={[styles.container, stylish]}>
//       <Text style={styles.label}>{label}</Text>
//       <TouchableOpacity style={styles.input} onPress={pickImage}>
//         <Icon name='file-image-o' size={30} color={COLORS.gray} />
//         <CondoSmallText text={"Seleccionar una imagen"} />
//       </TouchableOpacity>
//       <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', marginBottom: SIZES.medium,  }}>
//         <View style={styles.line} /><CondoText text={"O"} /><View style={styles.line} />
//       </View>
//       <CondoMainBtn text={"Tomar una foto"} onPress={takePhoto} />
//         <View style={{borderWidth:.2, borderColor:COLORS.gray, alignItems:'center', marginTop: SIZES.medium}}>
//             {images.map((image, index) => (
//             <View key={index} style={styles.imageContainer}>
                
//                 <View style={{flexDirection:'row', gap:10, alignItems:'center'}}>
//                     <Image source={imgs.test1} style={styles.image} />
//                     <View>
//                       <CondoText styles={{fontWeight: 500}} text={"Image name"}/>
//                       <CondoSmallText text={"3mb"}/>
//                     </View>

//                 </View>
//                 <TouchableOpacity style={styles.deleteButton} onPress={() => deleteImage(image)}>
//                   <Icon name="times-circle" size={24} color={COLORS.gray} />
//                 </TouchableOpacity>
//             </View>
//             ))}
//         </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   label: {
//     fontSize: SIZES.medium,
//     marginBottom: 8,
//     color: COLORS.MainText,
//   },
//   input: {
//     height: 120,
//     borderColor: 'gray',
//     borderWidth: 1,
//     paddingLeft: 8,
//     marginBottom: 16,
//     borderRadius: 10,
//     padding: SIZES.medium,
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: 10,
//   },
//   line: {
//     width: "45%",
//     backgroundColor: COLORS.gray2,
//     height: 1,
//   },
//   imageContainer: {
//     width:"98%",
//     flexDirection:"row",
//     justifyContent:"space-between",
//     alignItems:'center',
//     borderBottomColor: COLORS.gray,
//     borderBottomWidth:.5,
//     padding: 20

    
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//   },
//   deleteButton: {
//     borderRadius: 12,
//   },
// });

// export default CondoImageUpload;






import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import CondoText from '../titles/CondoText';
import CondoSmallText from '../titles/CondoSmallText';
import CondoMainBtn from '../buttons/CondoMainBtn';
import { COLORS, SIZES } from '../../../constants/theme';

function CondoImageUpload({ label, placeholder, stylish }) {
  const [images, setImages] = useState([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const { uri, fileName, fileSize } = result.assets[0];
      setImages([...images, { uri, fileName, fileSize }]);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const { uri, fileName, fileSize } = result.assets[0];
      setImages([...images, { uri, fileName, fileSize }]);
    }
  };

  const deleteImage = (uri) => {
    setImages(images.filter(image => image.uri !== uri));
  };

  return (
    <View style={[styles.container, stylish]}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.input} onPress={pickImage}>
        <Icon name='file-image-o' size={30} color={COLORS.gray} />
        <CondoSmallText text={"Seleccionar una imagen"} />
      </TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', marginBottom: SIZES.medium }}>
        <View style={styles.line} /><CondoText text={"O"} /><View style={styles.line} />
      </View>
      <View style={{paddingHorizontal:SIZES.large}}>
        <CondoMainBtn text={"Tomar una foto"} onPress={takePhoto} />
      </View>
      <View style={{ borderWidth: 0.2, borderColor: COLORS.gray, alignItems: 'center', marginTop: SIZES.medium }}>
        {images.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
              <Image source={{ uri: image.uri }} style={styles.image} />
              <View>
                <CondoText styles={{ fontWeight: 500 }} text={image.fileName || "Unnamed"} />
                <CondoSmallText text={`${(image.fileSize / (1024 * 1024)).toFixed(2)} MB`} />
              </View>
            </View>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteImage(image.uri)}>
              <Icon name="times-circle" size={24} color={COLORS.gray} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // Add your container styles if needed
  },
  label: {
    fontSize: SIZES.medium,
    marginBottom: 8,
    color: COLORS.MainText,
  },
  input: {
    height: 120,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 16,
    borderRadius: 10,
    padding: SIZES.medium,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  line: {
    width: "45%",
    backgroundColor: COLORS.gray2,
    height: 1,
  },
  imageContainer: {
    width: "98%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 0.5,
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  deleteButton: {
    borderRadius: 12,
  },
});

export default CondoImageUpload;

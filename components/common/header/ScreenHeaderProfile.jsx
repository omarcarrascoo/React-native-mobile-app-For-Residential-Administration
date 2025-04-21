import { Image, TouchableOpacity } from "react-native";

import styles from "./screenheader.style";
import { BASE_URL2 } from "../../../redux/requestMethods.redux";

const ScreenHeaderProfile = ({ imageUrl, headerTokenD, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.profileContainer} onPress={handlePress}>
      <Image
        // source={{uri:imageUrl}}
        source={{ uri: `${BASE_URL2}${imageUrl}`, headers: {Authorization: `Zoho-oauthtoken ${headerTokenD}`}}}
        resizeMode='cover'
        style={styles.profileImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderProfile;

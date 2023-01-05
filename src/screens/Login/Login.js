import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { login, TYPES } from "@/actions/UserActions";
import { Button, ErrorView, ScreenWrapper, TextField } from "@/components";
import { strings } from "@/localization";
import { styles } from "@/screens/Login/Login.styles";
import { errorsSelector } from "@/selectors/ErrorSelectors";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { ShadowStyles } from "@/theme";

export function Login() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.LOGIN], state)
  );

  const errors = useSelector(
    (state) => errorsSelector([TYPES.LOGIN], state),
    shallowEqual
  );

  const handleSubmit = () => {
    dispatch(login(username, password));
  };

  return (
    <ScreenWrapper style={styles.container}>
      <View
        style={[
          styles.formContainer,
          ShadowStyles.shadow,
          { backgroundColor: colors.primary },
        ]}
      >
        <TextField
          autoCapitalize="none"
          accessibilityHint={strings.login.usernameHint}
          accessibilityLabel={strings.login.username}
          onChangeText={setUsername}
          placeholder={strings.login.username}
          value={username}
        />
        <TextField
          secureTextEntry
          accessibilityHint={strings.login.passwordHint}
          accessibilityLabel={strings.login.password}
          autoCapitalize="none"
          onChangeText={setPassword}
          placeholder={strings.login.password}
          textContentType="password"
          value={password}
        />
        <ErrorView errors={errors} />
        <Button
          onPress={handleSubmit}
          style={styles.submitButton}
          title={isLoading ? strings.common.loading : strings.login.button}
        />
      </View>
    </ScreenWrapper>
  );
}

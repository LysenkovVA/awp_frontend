// Since the current page uses sub-components,
// the use of sub-components in non-client components
// is not currently supported in the app router mode of next.js.
// So we need to add "use client";
// Markers. If the component you use in your page does not contain sub-components such as Select.Option,
// you do not need to add this tag to the page.
// More about without sub-components example see: src/app/page.tsx
"use client";

import { Button, Flex, Input, Typography } from "antd";
import { useMutation } from "@apollo/client";
import { SIGN_IN } from "@/app/auth";
import { useCallback, useEffect, useState } from "react";
import { redirect, RedirectType } from "next/navigation";

const { Text } = Typography;

export default function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [signIn, { loading, error, data }] = useMutation(SIGN_IN);

  const onLogin = useCallback(async () => {
    const res = await signIn({
      variables: {
        signInInput: {
          login,
          password
        }
      }
    });

  }, [login, password, signIn]);

  useEffect(() => {
    if (data) {
      redirect("/tasks", RedirectType.replace);
    }
  }, [data]);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;


  return (
    <Flex vertical align={"center"} justify={"center"} gap={8}>
      <Input placeholder={"Логин"} value={login} onChange={(e) => setLogin(e.target.value)}></Input>
      <Input placeholder={"Пароль"} value={password} onChange={(e) => setPassword(e.target.value)}></Input>
      <Button onClick={onLogin}><Text type={"success"}>Войти</Text></Button>
    </Flex>
  );
}
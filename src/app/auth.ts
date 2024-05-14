import { gql } from "@/graphql/__generated__";

export const SIGN_IN = gql(`
  mutation SignIn($signInInput: SignInInput!){
  signIn(signInInput: $signInInput) {
  user{ login },
    accessToken,
    refreshToken
  }
}
`);
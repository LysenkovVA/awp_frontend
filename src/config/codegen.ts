import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:5001/graphql",
  //documents: ["src/**/*.gql"], // Из схемы на бэке, можно заменить на .ts
  documents: ["./src/**/*.ts"], // Из схемы на бэке, можно заменить на .ts
  generates: {
    "./src/graphql/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql"
      }
    }
  }
  //ignoreNoDocuments: true,
};

export default config;
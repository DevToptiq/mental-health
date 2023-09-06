import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: `${process.env.NEXT_PUBLIC_HOST_URL}/graphql`,
  documents: "src/graphql/**/*.graphql",
  generates: {
    "src/gql/generated.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-urql"],
      config: { withHooks: true },
    },
  },
}

export default config

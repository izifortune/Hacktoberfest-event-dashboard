exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@octokit\/rest/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

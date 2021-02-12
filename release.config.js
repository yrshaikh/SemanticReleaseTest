module.exports = {
    branches: ['main'],
    "verifyConditions": ["@semantic-release/github"],
    "prepare": 
    [
        {
            "path": "@semantic-release/exec",
            "cmd": "dotnet build --configuration Release -p:Version=${nextRelease.version}"
        },
        {
            "path": "@semantic-release/exec",
            "cmd": "dotnet pack --configuration Release --output ./artifacts -p:PackageVersion=${nextRelease.version}"
        }
    ],
    "publish": [
        "@semantic-release/github",
        {
            "path": "@semantic-release/exec",
            "cmd": "dotnet nuget push ./artifacts/*.nupkg --api-key ${ process.env.NUGET_API_KEY } --source https://api.nuget.org/v3/index.json"
        }
    ],
}

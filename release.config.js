module.exports = {
    branches: ['main'],
    "verifyConditions": ["@semantic-release/github"],
    "prepare": 
    [
        {
            "path": "@semantic-release/exec",
            "cmd": "echo from prepare ${nextRelease.version}"
        }
    ],
    "publish": [
        "@semantic-release/github",
        {
            "path": "@semantic-release/exec",
            "cmd": "echo from publish ${nextRelease.version}"
        }
    ],
}

let path = require('path')
let cp= require('child_process')
let os = require('os')

let executable = os.platform().startsWith('win') ? 'npm.cmd' : 'npm'

// build frontend
let front_path=path.resolve(__dirname,'frontend')
cp.spawn(executable, ['run', 'build'],{env:process.env, cwd:front_path, stdio:'inherit'})

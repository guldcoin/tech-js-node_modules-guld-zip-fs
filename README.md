# guld-env

Guld environment detection and configuration module.

### Install

```
npm i -g guld-env
```

### Usage

```
// syncronous
console.log(getEnv())

// async
getDist().then(console.log)
getOS().then(console.log)
getRelease().then(console.log)
getCodename().then(console.log)
```

##### Node

```
const { getEnv, getDist, getOS, getRelease, getCodename } = require('./index.js')
```

##### CLI

```
  Usage: guld-env [options] [command]

  Options:

    -V, --version  output the version number
    -h, --help     output usage information

  Commands:

    env            Get the execution environment (always node from CLI)
    os             Get the operating system.
    dist           Get the distro, if linux OS.
    release        Get the distro release, if linux OS.
    codename       Get the distro codename, if linux OS.
    all            Get the os, distro, codename, release, and environment. In that order.

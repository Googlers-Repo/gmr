[MMRL]: https://github.com/DerGoogler/MMRL
[Magisk]: https://github.com/topjohnwu/Magisk
[KernelSU]: https://kernelsu.org

# MMRL Install Tools

Required module if you want to install modules from Explore

<img alt="GitHub all releases" src="https://img.shields.io/github/downloads/Googlers-Repo/mmrl_install_tools/total">

## Included features

- Configuing MMRL's installer
- Logcat logger for MMRL

## Installation

Pick the latest [release](https://github.com/Googlers-Repo/mmrl_install_tools/releases/) and install it via your root manager (e.g. [Magisk][Magisk] or [KernelSU][KernelSU]). After a reboot you can install modules via [MMRL][MMRL].

> You also able to configure the module within [MMRL][MMRL]

# Install scripts

## <a module="xhhttp" href="https://github.com/Magisk-Modules-Alt-Repo/xhhttp">xh</a>

### Magisk
```shell
xh -d "https://github.com/Googlers-Repo/mmrl_install_tools/releases/latest/download/module.zip" -o "/data/local/tmp/mmrl_install_tools.zip" && /system/bin/magisk --install-module "/data/local/tmp/mmrl_install_tools.zip"
```

### KernelSU
```shell
xh -d "https://github.com/Googlers-Repo/mmrl_install_tools/releases/latest/download/module.zip" -o "/data/local/tmp/mmrl_install_tools.zip" && /data/adb/ksu/bin/ksud module install "/data/local/tmp/mmrl_install_tools.zip"
```

## cURL

### Magisk
```shell
curl -L "https://github.com/Googlers-Repo/mmrl_install_tools/releases/latest/download/module.zip" --output "/data/local/tmp/mmrl_install_tools.zip" && /system/bin/magisk --install-module "/data/local/tmp/mmrl_install_tools.zip"
```

### KernelSU
```shell
curl -L "https://github.com/Googlers-Repo/mmrl_install_tools/releases/latest/download/module.zip" --output "/data/local/tmp/mmrl_install_tools.zip" && /data/adb/ksu/bin/ksud module install "/data/local/tmp/mmrl_install_tools.zip"
```

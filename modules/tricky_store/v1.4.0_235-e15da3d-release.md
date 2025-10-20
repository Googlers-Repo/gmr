# 1.4.0

- 支持持久化存储已生成的密钥
- 支持自动解析 AVB key（联发科设备疑似使用了自定义算法，暂不支持）
- 支持自定义认证密钥的解析和导入
- 支持拦截并模拟更多 keystore 操作
- 修复一些证书链生成问题

---

- Support persistent storage of generated keys
- Support automatic parsing of AVB keys (MediaTek devices seem to use a custom algorithm, currently not supported)
- Support parsing and importing of custom attestation keys
- Support intercepting and simulating more keystore operations
- Fix some certificate chain generation issues

# 1.3.0

- 支持 KeyMint 4.0 新增的 moduleHash 字段
- 支持 Android 16
- 修复偶发注入失败的问题
- 将 Play 商店加入默认作用列表
- 修复大量证书链生成问题

---

- Support for the new moduleHash field introduced in KeyMint 4.0
- Compatibility with Android 16
- Fixed occasional injection failures 
- Added Play Store to the default scope list
- Resolved numerous certificate chain generation issues

# 1.2.1

支持自定义安全补丁级别（请参见 README.md）

---

Support customizing security patch level (please refer to README.md)

# 1.2.0

修复注入失败的问题
修复安装失败的问题
修复 cert hack 下报错的问题

---

Fixed the injection failure issue
Fixed the installation failure issue
Fixed the error issue under cert hack

# 1.2.0-RC2

修改叶证书模式同时会修改安全等级与信任根为非软件
修复缺失的 osVersion 字段

---

Leaf hack mode will also change the security level and root of trust to non-software based
Fix missing osVersion field

# 1.2.0-RC1

初步支持 Android 10-11 （感谢 @N-X-T ）
自动模式会检测是否支持硬件加密
修复模块损坏问题
修复证书签名算法选择的问题

---

Add initial support for Android 10-11 (Thanks @N-X-T )
Auto mode will detect if hardware encryption is supported
Fix issue that module may be corrupted
Fix issue with certificate signature algorithm selection

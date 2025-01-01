### Tricky Addon: Update Target List
A **KSU WebUI** to configure tricky store target.txt

*This module is **not** a part of the Tricky Store module. DO NOT report any issues to Tricky Store if encountered.*

GitHub release: [Tricky Addon: Update Target List](https://github.com/KOWX712/Tricky-Addon-Update-Target-List/releases/latest)

Telegram channel: [KOW's Little World](https://t.me/kowchannel)

## Changelog
### v3.0
- Animation improvement: new checkbox animation, new touch ripple animation, and more.
- Adjust save button and prompt position in MMRL.
- Long press on app to select `!` and `?` mode, use this only when the app cannot work without this.
- Display gms in app list.
- Show module version in header.
- Rewrite update method, you can now update module directly in WebUI.

### v2.9
- Preserve `!` and `?` during update target in WebUI.
- Optimized scripts, thanks to @backslashxx.
- Fixed freeze in weak connection.
- Added Spanish, thanks to @Keinta15.
- Removed rescriction on installation but module will still be removed if tricky store is not found after reboot.

### v2.8
- Fixed all KSUWebUIStandalone freeze issue, removed visible option.
- Reduced WebUI loading time.
- Added Japanese. Thanks to @reindex-ot.

### v2.7.1
- Link redirect quick fix

### v2.7
- Abandoned `UpdateTargetList.sh`; No longer automatically update target on boot.  
- Adapted with MMRL, Magisk user can uninstall KSUWebUIStandalone if you have latest MMRL installed, action button will redirect to MMRL if KSUWebUIStandalone not found.
- New update card for invisible module.
- Improved UI.
- Press any position of app card to select/deselct.

### v2.6
- Invisible module, intergrate action button & webui on tricky store card. You can stil use visible option if you found any issue with invisble module. Thanks for idea from @backslashxx.
- To uninstall invisble module, scroll down to the bottom of WebUI and press Uninstall WebUI.
- Add update prompt if found new version in webui, and show module if found an update. (invisible)
- Reduced WebUI loading time
- Added feature to save verifiedBootHash
- New way to detect Xposed module, now can catch all Xposed module apk package name in Deselect Unnecessary option, feedback in [Telegram](https://t.me/kowchannel) or [create issue](https://github.com/KOWX712/Tricky-Addon-Update-Target-List/issues) if missed any.
- **Initial support for multiple languages**
- Language available: **en-US**, **ru-RU**, **tl-PH**, **zh-CN**, **zh-TW**
- Add language or fix translation error? [Read here](https://github.com/KOWX712/Tricky-Addon-Update-Target-List/tree/master/module/webui/locales/A-translate.md).

### v2.6-beta.3
- Check in [release notes](https://github.com/KOWX712/Tricky-Addon-Update-Target-List/releases/tag/v2.6-beta.3).

### v2.6-beta.2
- Check in [release notes](https://github.com/KOWX712/Tricky-Addon-Update-Target-List/releases/tag/v2.6-beta.2).

### v2.6-beta.1
- Check in [release notes](https://github.com/KOWX712/Tricky-Addon-Update-Target-List/releases/tag/v2.6-beta.1).

### v2.5
- Remove kb prompt on installation, moved into WebUI
- Restore to AOSP keybox during uninstallation

### v2.4
- Added aapt binary for app name display

- **KSU WebUI:**
- Added app name display

### v2.3
- Removed curl binary
- Moved boot_hash to /data/adb to prevent overwrite
- Stop TSP-A auto target to prevent overwrite
- Abandoned action button in KernelSU and Apatch
- Magisk action button: open WebUI, automatic download if not installed (optional)

- **KSU WebUI:**
- Option to select app from DenyList (Magisk)

### v2.2
- **KSU WebUI:**
- Added help menu
- Added extra [unnecessary app](https://raw.githubusercontent.com/KOWX712/Tricky-Addon-Update-Target-List/main/more-excldue.json) exclude option
- Added no Internet connection prompt

### v2.1
- Added curl binary to fetch Xposed module package name from LSPosed webside

- **KSU WebUI:**
- Added feature to exclude Xposed module package name
- Fixed abnormal color in dark mode
- Combined save config and update target.txt button
- Fixed some more known bugs

### v2.0
- Added WebUI for configuration

### v1.7
- Fixed update issue (Will start to work in next update)

### v1.6
- Updated something

### v1.5
- Fixed some known issue
- Updated something

### v1.4.1
- Fixed Magisk installation issue

### v1.4
- Migrate ro.boot.vbmeta.digest from system.prop to resetprop
- Fix config list recognize error on some device
- Refactor code

### v1.3.1
- Added Apatch Next package name to exclude list
- Fix automatic update target script not working issue

### v1.3
- Minor improvement in code
- Overwrite protection: won't remove previous setup when updating module

### v1.2
- Initial release
- Automated update target list on every boot

### v1.1
- Add exclution and addition list config, config directory: /data/adb/tricky_store/target_list_config (No release)

### v1.0
- Initial version (No release)

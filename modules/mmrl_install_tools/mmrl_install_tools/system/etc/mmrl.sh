# This API is only for module install scripts

function getconf {
  /system/bin/getprop "$1" "$2" | sed 's/^"\(.*\)"$/\1/'
}

SCOPE="mmrlini_v3"

CURL=$(getconf "persist.$SCOPE.curl" "$MODULES/mmrl_install_tools/system/usr/share/mmrl/bin/curl")
ZIP=$(getconf "persist.$SCOPE.zip" "$MODULES/mmrl_install_tools/system/usr/share/mmrl/bin/zip")
UNZIP=$(getconf "persist.$SCOPE.unzip" "$MODULES/mmrl_install_tools/system/bin/unzip")

EXTRA_CURL_ARGS=$(getconf "persist.$SCOPE.curl.args" " -L")
EXTRA_ZIP_ARGS=$(getconf "persist.$SCOPE.zip.args" " -r")
EXTRA_UNZIP_ARGS=$(getconf "persist.$SCOPE.unzip.args" " -qq")

GREEN="\x1b[32m"
RED="\x1b[31m"
CYAN="\x1b[96m"
YELLOW="\x1b[93m"
UNDERLINE="\x1b[4m"
RESET="\x1b[0m"

echo "$GREEN    __  _____  _______  __ $RESET"
echo "$GREEN   /  |/  /  |/  / __ \/ / $RESET"
echo "$GREEN  / /|_/ / /|_/ / /_/ / /  $RESET"
echo "$GREEN / /  / / /  / / _, _/ /___$RESET"
echo "$GREEN/_/  /_/_/  /_/_/ |_/_____/$RESET"
echo ""

# $ROOTMANAGER - "Magisk", "KernelSU" or "APatch"
# $MSUCLI - Magisk CLI
# $KSUCLI - KernelSU CLI
# $ASUCLI - APatch CLI

install_cli() {
   if [ "$ROOTMANAGER" = "Magisk" ]; then
      exec $MSUCLI --install-module "$1"
   elif [ "$ROOTMANAGER" = "KernelSU" ]; then
      exec $KSUCLI module install "$1"
   elif [ "$ROOTMANAGER" = "APatchSU" ]; then
      exec $ASUCLI module install "$1"
   elif [ "$ROOTMANAGER" = "Unknown" ]; then
      echo "- Unable to find root manager"
      exit 1
   else
      echo "- Install error"
      exit 1
   fi
}
set -e

if [ -z "${STATIC_REMOTE_DIR}" ]; then
  echo "STATIC_REMOTE_DIR variable required"
  exit 1
fi

FILE=$1

SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
REPO_DIR="${SCRIPT_DIR}/.."
STATIC_LOCAL_DIR="${REPO_DIR}/src/static/pages"

ssh tsaryk.com "mkdir -p ${STATIC_REMOTE_DIR}/$(dirname $FILE)"
scp "${STATIC_LOCAL_DIR}/${FILE}" tsaryk.com:"${STATIC_REMOTE_DIR}/${FILE}"

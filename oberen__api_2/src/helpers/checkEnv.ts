import * as _config from "../config";

export default function checkEnv() {
  const config = [_config];

  for (let item in config) {
    if (item === undefined) {
      return false;
    }
  }

  return true;
}

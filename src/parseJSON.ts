import { parseJSON as _parseJSON } from "date-fns";
import { reactify } from "@vueuse/core";

export const parseJSON = reactify(_parseJSON);
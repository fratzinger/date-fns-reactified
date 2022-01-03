import { parseJSON as _parseJSON } from "date-fns";
import { reactify } from "@vueuse/shared";

export const parseJSON = reactify(_parseJSON);
import { endOfMinute as _endOfMinute } from "date-fns";
import { reactify } from "@vueuse/core";

export const endOfMinute = reactify(_endOfMinute);
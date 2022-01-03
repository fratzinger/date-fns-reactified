import { endOfMinute as _endOfMinute } from "date-fns";
import { reactify } from "@vueuse/shared";

export const endOfMinute = reactify(_endOfMinute);
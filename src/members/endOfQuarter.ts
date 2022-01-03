import { endOfQuarter as _endOfQuarter } from "date-fns";
import { reactify } from "@vueuse/core";

export const endOfQuarter = reactify(_endOfQuarter);
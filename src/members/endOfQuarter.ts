import { endOfQuarter as _endOfQuarter } from "date-fns";
import { reactify } from "@vueuse/shared";

export const endOfQuarter = reactify(_endOfQuarter);
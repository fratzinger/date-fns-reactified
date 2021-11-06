import { endOfYear as _endOfYear } from "date-fns";
import { reactify } from "@vueuse/core";

export const endOfYear = reactify(_endOfYear);
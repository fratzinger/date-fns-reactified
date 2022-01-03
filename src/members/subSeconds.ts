import { subSeconds as _subSeconds } from "date-fns";
import { reactify } from "@vueuse/core";

export const subSeconds = reactify(_subSeconds);
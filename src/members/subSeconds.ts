import { subSeconds as _subSeconds } from "date-fns";
import { reactify } from "@vueuse/shared";

export const subSeconds = reactify(_subSeconds);
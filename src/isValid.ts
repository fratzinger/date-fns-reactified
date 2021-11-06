import { isValid as _isValid } from "date-fns";
import { reactify } from "@vueuse/core";

export const isValid = reactify(_isValid);
import { subMinutes as _subMinutes } from "date-fns";
import { reactify } from "@vueuse/core";

export const subMinutes = reactify(_subMinutes);